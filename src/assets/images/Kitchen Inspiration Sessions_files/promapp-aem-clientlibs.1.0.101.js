
var aemTagSearchText = [];
var promappTagSearchText = [];
var firstHit = true;
var aemCall = true;
var PromapCall = true;
var promappOldCount = 0;
var aemOldCount = 0;
var loadMoreCall = false;   
var searchText = "";
var promappTagSearch = false;   
var aemTagSearch = false; 
var searchFrom ="";
var URLtag = "";

var urlParams = new URLSearchParams(window.location.search);
//if((window.location.href.indexOf("search.html") > -1) && (urlParams.has('st'))) {
    $("#search-input-id").val(urlParams.get('st'));
    setTimeout(function(){ 
        $("#search-input-id").val(urlParams.get('st'));
       	URLtag = urlParams.get('tag');
        if (URLtag != null)
			searchCall('URLTag');
        else
        	searchCall('search');
    }, 50);
//}

function openPromapModal(title, link) {
    var modalTitle = title;
    var modalLink = link;
    $('#promapModalLabel').text(modalTitle);
    $('#goToPageButton').attr('href', modalLink);
    $('.modal-body iframe').attr('src', modalLink);
    $('#promapModal').modal('show');
}

function PROMAPP_ajaxCallJson_Call(url,method,requestData, success, fail, always) {
    $.ajax({
        url:  url,
        method: method,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(requestData)
    }).done(success)
    .fail(fail).always(always);
}

function aemTagCall() {
    aemTagSearchText = [];        
    $("input[name=aemTag]:checked").each( function () {
        aemTagSearchText.push($(this).val());
    });
    searchCall('aemTagSearch');
}

function promappTagCall() {
    promappTagSearchText = [];        
    $("input[name=promappTag]:checked").each( function () {
        promappTagSearchText.push($(this).val());
    });
    searchCall('promappTagSearch');
}

function openFilterContainer() {
	$(".multi-facet").addClass("open");
    $("#openFilter").addClass("hideFilterButton");
}

function closeFilterContainer() {
	$(".multi-facet").removeClass("open");
    $("#openFilter").removeClass("hideFilterButton");
}

function formateResponse(_promapResponse) {
    PromapCall = _promapResponse.PromapCall;
    aemCall = _promapResponse.aemCall;
    var aemTagCheck = $("#aemTagCheck").is(':checked');
    var promappTagCheck = $("#promappTagCheck").is(':checked');
    
    if (firstHit == true && (_promapResponse.tagsListPromapp != undefined || _promapResponse.tagsListPromapp != null)) {
        $.each(_promapResponse.tagsListPromapp, function (i, value) {
            var  facetList = "";
            facetList = facetList + ' <li class="facet-item"> <label for="' + value.tagid + '">  <input type="checkbox" name="promappTag" value="'+  value.name +'" onclick="promappTagCall();" class="facet-value-checkbox"> ';
            facetList = facetList +    '<span class="text">'+value.title+ '</span> </label> </li>'; 
            $('.facet-items-promapp').append(facetList);
        });
    }

    if ( _promapResponse.totalResult !=0 && _promapResponse.totalResult != undefined) {
        var searchStatics = "";
        if (( firstHit == true) || ( searchFrom != 'loadmore')) {
			if (searchText.length == 0)
 				searchStatics = '<span><b>Showing all pages</b></span>';
            else if (( _promapResponse.totalMatchesPromapp != 0 ) && (_promapResponse.totalMatchesAEM != 0 ) && (searchText.length > 0)) {
            	 searchStatics = '<span>Results found for "<b>'+searchText+'</b>"</span>';
            } else if ((_promapResponse.totalMatchesPromapp != 0) && (aemTagCheck || aemTagSearchText.length !=0 ) && (promappTagCheck || promappTagSearchText.length !=0 ) && (searchText.length > 0)) {
            	 searchStatics = '<span>Results found for "<b>'+searchText+'</b>"</span>';
            } else if ((_promapResponse.totalMatchesAEM != 0) && (aemTagCheck || aemTagSearchText.length !=0 ) && (promappTagCheck || promappTagSearchText.length !=0 ) && (searchText.length > 0)) {
            	 searchStatics = '<span>Results found for "<b>'+searchText+'</b>"</span>';
            } else if (( _promapResponse.totalMatchesPromapp != 0 ) && (!aemTagCheck || aemTagSearchText.length ==0 ) && (searchText.length > 0)) {
            	 searchStatics = '<span>Results found for "<b>'+searchText+'</b>"</span>';
            } else if (( _promapResponse.totalMatchesAEM != 0 ) && (!promappTagCheck || promappTagSearchText.length ==0 ) && (searchText.length > 0)) {
            	 searchStatics = '<span>Results found for "<b>'+searchText+'</b>"</span>';
            }  else if (_promapResponse.totalMatchesPromapp == 0 ) {
            	searchStatics = emptyMsgAEMPromapp;
            	$('#btnLoadMorePromap').css("visibility","hidden");
            } else if (_promapResponse.totalMatchesAEM == 0 ) {
            	searchStatics = emptyMsgAEMPromapp;
            	$('#btnLoadMorePromap').css("visibility","hidden");
            } 
            
            $('#search-statistics').empty();
            $('#search-statistics').append(searchStatics);
        }

        /*if (aemCall == true && firstHit == true && (_promapResponse.tagsTotalList != undefined || _promapResponse.tagsTotalList != null)) {
            for (var i = 0; i < _promapResponse.tagsTotalList.length; i++) {                         
                $.each(_promapResponse.tagsTotalList[i], function (key, value) {
                    var  facetList = "";
                    facetList = facetList + ' <li class="facet-item"> <label for="' + key + '">  <input type="checkbox" name="aemTag" value="'+ key +'" onclick="aemTagCall();" class="facet-value-checkbox"> ';
                    
                    $.each(value, function (name, count) {
                        facetList = facetList +    '<span class="text">'+name+ '</span></label> </li>'; 
                    });
                    $('.facet-items-aem').append(facetList);
                });
            }
        }*/

        promappOldCount = _promapResponse.promappOldCount;
        aemOldCount = _promapResponse.aemOldCount;

        $.each(_promapResponse.results, function (i, value) {
            var valueDate, valueMonth, contentNote, triggerLogin, pagePath,unAuthpagePath;
            if (value.imagePath == null || value.imagePath == undefined ) {
				value.imagePath = placeholderImagePath;
            }
            if (value.contentDescription == null || value.contentDescription == undefined ) {
				value.contentDescription = "";
            }
            if (value.publishDate != null && value.publishDate != undefined) {
            	valueDate = moment(value.publishDate, 'MMM dd, yyyy').format('MMM');
            	valueMonth = moment(value.publishDate, 'MMM dd, yyyy').format('do');
            }
			if(value.altPath != null && value.altPath != undefined)
				pagePath = 'href ="' + value.altPath + '.html" ';
			else
				pagePath = 'href ="' + value.pagePath + '.html" ';

			if (value.authUnauth != null && value.authUnauth != undefined) {
				contentNote = '<p class= \"u-unauthenticated\"><b>' + unAuthNote + '<b></p>';
				unAuthpagePath = "";
				triggerLogin = "onclick = \"signinFirstHit()\"  ";
			}
            else {
				contentNote = "";
                unAuthpagePath = pagePath;
				triggerLogin = "";
			}
            if (value.linkType == 'aem') {
                //if ((value.pagePath).indexOf("search") == -1) {
                var  resultaem =  '<div class="card">';
				resultaem = resultaem + '<div class="card__image__wrapper"><img src="' + value.imagePath + '" alt="' + value.contentTitle + '" class="card__image__wrapper-top img img-fluid"></div>';
                 /*if (value.publishDate != null && value.publishDate != undefined) {
                    resultaem = resultaem + '<div class="card__content"><div><div class="card__title u-unauthenticated"><span class="date-info">' + valueDate + '&nbsp;' + valueMonth + '</span><a ' + triggerLogin + unAuthpagePath + '><h5>' + value.contentTitle + '</h5></a></div><div class="card__title u-authenticated"><span class="date-info">' + valueDate + '&nbsp;' + valueMonth + '</span><a ' + pagePath + '"><h5>' + value.contentTitle + '</h5></a></div><div class="card__description"><p>' + value.contentDescription + '</p>' + contentNote + '</div></div>' + '<div class="card__bottom u-unauthenticated"><a ' + triggerLogin + unAuthpagePath + ' class="btn btn-lg btn-success">' + articlebuttonLabel + '</a></div><div class="card__bottom u-authenticated"><a ' + pagePath + ' class="btn btn-lg btn-success">' + articlebuttonLabel + '</a></div></div>';
                } else {*/
                    resultaem = resultaem + '<div class="card__content"><div><div class="card__title u-unauthenticated"><a ' + triggerLogin + unAuthpagePath + '"><h5>' + value.contentTitle + '</h5></a></div><div class="card__title u-authenticated"><a ' + pagePath + '"><h5>' + value.contentTitle + '</h5></a></div><div class="card__description"><p>' + value.contentDescription + '</p>' + contentNote + '</div></div>' + '<div class="card__bottom u-unauthenticated"><a ' + triggerLogin + unAuthpagePath + ' class="btn btn-lg btn-success">' + articlebuttonLabel + '</a></div><div class="card__bottom u-authenticated"><a ' + pagePath + ' class="btn btn-lg btn-success">' + articlebuttonLabel + '</a></div></div>';
                //}

                $('.promapp-aem-result').append(resultaem);
            //}
            } else {
                var valuetitle = value.title;
                valuetitle = valuetitle.replace(/\'/g, "");
                var  resultPromapp =  '<div class="row"> <div class="col-md-10 col-xs-10"> <h2> <div class="result-promapp" onClick="openPromapModal(';
                if (value.pagePath != undefined) {
                resultPromapp = resultPromapp +"'"+ valuetitle+"'" +  ', ' + "'"+value.pagePath+"'" +')'+'">'+value.title+'</div></h2></div><div class="col-md-2 col-xs-2"><img src="'+promappImagePath+'" width="40" height="50" class="img-promapp"></div></div>';
                } else {
                resultPromapp = resultPromapp +"'"+ valuetitle+"'" +  ', ' + "'"+value["atom:link"].href+"'" +')'+'">'+value.title+'</div></h2></div><div class="col-md-2 col-xs-2"><img src="'+promappImagePath+'" width="40" height="50" class="img-promapp"></div></div>';
                }
                $('.promapp-aem-result').append(resultPromapp);
            }
            
        });
        
        if(_promapResponse.loadMore == true || _promapResponse.loadMore == "true")  {
            $('#btnLoadMorePromap').css("visibility","visible");
        } else {
            $('#btnLoadMorePromap').css("visibility","hidden");
        }
        $('.search-spinner .fa-spinner').hide();
    }  else {
        $('#search-statistics').empty();
        $('#search-statistics').append("No Search Result Found");
        $('.search-spinner .fa-spinner').hide();
        $('#btnLoadMorePromap').css("visibility","hidden");
    }
}

function clearAll() {
    $('.promapp-aem-result').empty();
    $('#search-statistics').empty();
    $('#search-statistics').append("Loading...");
    $('#btnLoadMorePromap').css("visibility","hidden");
    loadMoreCall = false;
    promappOldCount = 0;
    aemOldCount = 0;
}

function searchIconClickPromappAEM(elementObj){
    var $element = elementObj;
    $($element).closest("form").submit();
}

function headerSearchIconClickPromappAEM(elementObj){
    var $element = elementObj;
    //console.log($($element).closest("div").find("input[name='st']").val());
    if ($($element).closest("div").find("input[name='st']").val().length > 0 )
        $($element).closest("form").submit();
    else
        $(".header-search-container").addClass("open");
}

function closeSearchContainer() {
	$(".header-search-container").removeClass("open");
	$('input[name="st"]').val('');
}

function searchCall(searchFromVal) {

    var _promapResponse = "";  
    searchFrom = searchFromVal;
    $('.search-spinner .fa-spinner').show();
    searchText = $('#search-input-id').val();
    
    if ( searchFrom == 'search' ) {
        clearAll();
        firstHit = true;
        PromapCall = true;
        aemCall = true;
        promappTagSearchText = "";
        aemTagSearchText = "";
        $('.facet-items').empty();
        $('#promappTagCheck').prop("checked", true);
        $('#aemTagCheck').prop("checked", true);

    } else if ( searchFrom == 'loadmore') {
        firstHit = false;
        $('#btnLoadMorePromap').css("visibility","hidden");
    } else if ( searchFrom == 'URLTag') {
        searchFrom = "aemTagSearch"
        clearAll();
        firstHit = true;
        PromapCall = true;
        aemCall = true;
        promappTagSearchText = "";
        aemTagSearchText = URLtag ;
        $('.facet-items').empty();
        $('#promappTagCheck').prop("checked", true);
        $('#aemTagCheck').prop("checked", true);
        getAllPages();
    }
    if ((searchFrom != 'search') && (searchFrom != 'loadmore')) {
        clearAll();
        if (($("#promappTagCheck").is(':checked')) || (promappTagSearchText != '')) {
            $('#promappTagCheck').prop("checked", true);
            PromapCall = true;   
        } else {
            PromapCall = false;   
        }
        if (($("#aemTagCheck").is(':checked')) || (aemTagSearchText != '')) {
        	$('#aemTagCheck').prop("checked", true);
            aemCall = true;   
        } else {
            aemCall = false;   
        }
    }
    if(typeof promappSearchCheck != 'undefined') {
        if (promappSearchCheck != 'true') {
        	PromapCall = false;   
        }
    }
    if(typeof aemSearchCheck != 'undefined') {
        if (aemSearchCheck != 'true') {
        	aemCall = false;   
        }
    }

    var pagePath = window.location.pathname;

    var url = "/bin/global/promappaemlist?";
    if(typeof displayCount != 'undefined')
        url = url + "pageCount="+displayCount;
    if(typeof pageCountPromapp != 'undefined')   
        url = url + "&pageCountPromapp="+pageCountPromapp;
    if(typeof loadMoreCall != 'undefined')    
        url = url + "&loadMoreCall="+loadMoreCall;
    if(typeof PromapCall != 'undefined')
        url = url + "&PromapCall="+PromapCall;
    if(typeof aemCall != 'undefined')
        url = url + "&aemCall="+aemCall;
    if(typeof promappOldCount != 'undefined')
        url = url + "&promappOldCount="+promappOldCount;
    if(typeof aemOldCount != 'undefined')
        url = url + "&aemOldCount="+aemOldCount;
    if(typeof pagePath != 'undefined')
        url = url + "&pagePath="+pagePath;
    if(typeof firstHit != 'undefined')
        url = url + "&firstHit="+firstHit;
    if(typeof searchFrom != 'undefined')
        url = url + "&searchFrom="+searchFrom;
    if(typeof searchText != 'undefined')
        url = url + "&searchText="+searchText;
    if(typeof promappTagSearchText != 'undefined')
        url = url + "&promappTagSearchText="+promappTagSearchText;
    if(typeof aemTagSearchText != 'undefined')
        url = url + "&aemTagSearchText="+aemTagSearchText;
    if(typeof searchPath != 'undefined')
        url = url + "&searchPath="+searchPath;
    if(typeof promappTagPath != 'undefined')
        url = url + "&promappTagPath="+promappTagPath;
    
    PROMAPP_ajaxCallJson_Call(url, 'GET', null, function(data) {
        _promapResponse = JSON.parse(data);  
        formateResponse(_promapResponse);
        if ( searchFrom != 'URLTag' ) {
        	formFacet(_promapResponse);
        }
    });
}

function formFacet(_promapResponse) {
    var checked ;
        if (aemCall == true && firstHit == true && (_promapResponse.tagsTotalList != undefined || _promapResponse.tagsTotalList != null)) {
            for (var i = 0; i < _promapResponse.tagsTotalList.length; i++) {                         
                $.each(_promapResponse.tagsTotalList[i], function (key, value) {
                    if (key == URLtag)
                        checked = "checked";
                    else
						checked = "";
                    var  facetList = "";
                    facetList = facetList + ' <li class="facet-item"> <label for="' + key + '">  <input type="checkbox" ' + checked + ' name="aemTag" value="'+ key +'" onclick="aemTagCall();" class="facet-value-checkbox"> ';
                    
                    $.each(value, function (name, count) {
                        facetList = facetList +    '<span class="text">'+name+ '</span></label> </li>'; 
                    });
                    $('.facet-items-aem').append(facetList);
                });
            }
        }
    //firstHit = false;
}

function getAllPages() {
    console.log("Get all pages");
		searchFrom = 'search';
        firstHit = true;
        PromapCall = true;
        aemCall = true;
        promappTagSearchText = "";
        //aemTagSearchText = "";
        $('#promappTagCheck').prop("checked", true);
        $('#aemTagCheck').prop("checked", true);
        if (promappSearchCheck != 'true') {
    	PromapCall = false;   
    }

    if ((searchFrom != 'search') && (searchFrom != 'loadmore')) {
        clearAll();
        if (($("#promappTagCheck").is(':checked')) || (promappTagSearchText != '')) {
            $('#promappTagCheck').prop("checked", true);
            PromapCall = true;   
        } else {
            PromapCall = false;   
        }
        if (($("#aemTagCheck").is(':checked')) || (aemTagSearchText != '')) {
        	$('#aemTagCheck').prop("checked", true);
            aemCall = true;   
        } else {
            aemCall = false;   
        }
    }
    if (promappSearchCheck != 'true') {
    	PromapCall = false;   
    } 
    if (aemSearchCheck != 'true') {
    	aemCall = false;   
    } 

	var pagePath = window.location.pathname;
    var url = "/bin/global/promappaemlist?";
    if(typeof displayCount != 'undefined')
        url = url + "pageCount="+displayCount;
    if(typeof pageCountPromapp != 'undefined')   
        url = url + "&pageCountPromapp="+pageCountPromapp;
    if(typeof loadMoreCall != 'undefined')     
        url = url + "&loadMoreCall="+loadMoreCall;
    if(typeof PromapCall != 'undefined')
        url = url + "&PromapCall="+PromapCall;
    if(typeof aemCall != 'undefined')
        url = url + "&aemCall="+aemCall;
    if(typeof promappOldCount != 'undefined')
        url = url + "&promappOldCount="+promappOldCount;
    if(typeof aemOldCount != 'undefined')
        url = url + "&aemOldCount="+aemOldCount;
    if(typeof pagePath != 'undefined')
        url = url + "&pagePath="+pagePath;
    if(typeof firstHit != 'undefined')
        url = url + "&firstHit="+firstHit;
    if(typeof searchFrom != 'undefined')
        url = url + "&searchFrom="+searchFrom;
    if(typeof searchText != 'undefined')
        url = url + "&searchText="+searchText;
    if(typeof promappTagSearchText != 'undefined')
        url = url + "&promappTagSearchText="+promappTagSearchText;
    if(typeof aemTagSearchText != 'undefined')
        url = url + "&aemTagSearchText="+aemTagSearchText;
    if(typeof searchPath != 'undefined')
        url = url + "&searchPath="+searchPath;
    if(typeof promappTagPath != 'undefined')
        url = url + "&promappTagPath="+promappTagPath;
    
    PROMAPP_ajaxCallJson_Call(url, 'GET', null, function(data) {
        var _promapAllPages = JSON.parse(data);
        firstHit = true;
        searchFrom = 'URLTag';
        formFacet(_promapAllPages);
    });
}

function entryKeyCheck(event) {
    if (event.charCode == 13) {
        searchCall('search');
    }
}

function searchIconClickPromappAEM(elementObj){
    var $element = elementObj;
    $($element).closest("form").submit();
}
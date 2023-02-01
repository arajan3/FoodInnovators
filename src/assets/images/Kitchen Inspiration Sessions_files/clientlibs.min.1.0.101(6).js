var googleClientId="";
var googleScopes="";
var submit=true;
var disconnect=false;
var isError=false;
function setGoogleClientId(a){googleClientId=a
}function setGoogleAuthScopes(a){googleScopes=a
}var helper=(function(){var a="me";
return{onSignInCallback:function(b){gapi.client.load("plus","v1").then(function(){if(b.access_token){token=b.access_token;
helper.profile(token);
authCheckProgress=true;
localStorage.setItem("contentauth-token",token)
}else{if(b.error){}}})
},disconnect:function(){$.ajax({type:"GET",url:"https://accounts.google.com/o/oauth2/revoke?token="+gapi.auth.getToken().access_token,async:false,contentType:"application/json",dataType:"jsonp",success:function(b){disconnect=false
},error:function(b){console.log(b)
}})
},profile:function(b){if(!submit){return
}gapi.client.plus.people.get({userId:"me"}).then(function(c){var d=c.result;
console.log($("form #usr_mail"));
if($("#loginForm").length>0){$("#loginForm #j_g_first_name").val(d.displayName);
if(d.image){$("#loginForm #j_g_image_url").val(d.image.url)
}if(d.emails&&d.emails.length>0){$("#loginForm #j_g_email").val(d.emails[0].value)
}$("#loginForm #j_g_access_token").val(b);
if(authCheckProgress){authCheckProgress=false;
$("#loginForm").submit()
}}else{if($("form #usr_mail").length>0){$("form #usr_mail").val(d.emails[0].value);
$("form #usr_mail").closest(".group").addClass("focussed")
}}localStorage.setItem("contentauth-token",b);
localStorage.setItem("contentauth-id",d.id);
if(d.emails&&d.emails.length>0){localStorage.setItem("profile-email",d.emails[0].value)
}},function(d){var c=d.result;
$("#profile").empty();
$("#profile").append(c.message)
})
}}
})();
(function(a){localStorage.removeItem("localstorelatitude");
localStorage.removeItem("localstorelongitude");
localStorage.removeItem("localstorestate");
if(typeof submitLoginAutomatically!="undefined"){if(!submitLoginAutomatically){doNotSubmitForFailure()
}}if(getUrlParameter("failedAuth")=="true"){isError=true;
a(".error-container").addClass("has-error");
disconnectUser()
}a("#google-resource-booking-form .date-picker,#google-resource-booking-form select#resources").on("change",function(){loadAvailability(a("#google-resource-booking-form .date-picker"))
});
bindBookingForm()
})(jQuery);
function bindBookingForm(){$('#google-resource-booking-form button[type="submit"]').click(function(b){b.preventDefault();
var a=$(this).closest("form");
a.parsley().validate();
if(a.parsley().isValid()&&checkEventDatePast(a)=="Y"){createBooking($(this))
}else{}})
}function checkEventDatePast(d){var f=$("#date-picker").val();
var c=new Date();
c.setHours(0);
c.setMinutes(0);
c.setSeconds(0);
var a=Date.parse(c),b=Date.parse(f);
var g="N";
if(b<a){d.find(".current-bookings").html("");
d.find(".error-date-picker ul.parsley-errors-list.filled").remove();
var e=$("<ul/>").addClass("parsley-errors-list filled");
var h=$("<li/>").text("Event Date Must be a Future Date.");
e.append(h);
d.find(".error-date-picker").append(e);
g="N"
}else{d.find(".error-date-picker ul.parsley-errors-list.filled").remove();
g="Y"
}return g
}function loadAvailability(h){var b=h.closest("form");
var e=b.find("select#resources option:selected");
var d=(h.val())?h.val():new Date().toString();
if($.trim($("#date-picker").val())!=""){if(checkEventDatePast(b)=="Y"&&e&&e.attr("data-resource-id")){var c=localStorage.getItem("contentauth-token");
var f=localStorage.getItem("contentauth-id");
var g={email:e.attr("data-resource-id"),timeMin:getStartOfDate(h.val()),timeMax:getEndOfDate(h.val()),maxResults:10,id:f,token:c};
var a=b.attr("data-booking-listevents-api-endpoint");
$.ajax({type:"POST",url:a,data:JSON.stringify(g),success:function(k){var j=k.response.items;
console.log(j);
displayEvents(j,b)
},error:function(j){console.log("Error")
}})
}}}function getStartOfDate(a){var a=new Date(a);
a.setHours(0,0,0,0);
return a.toISOString()
}function getEndOfDate(a){var a=new Date(a);
a.setHours(23,59,59,999);
return a.toISOString()
}function displayEvents(n,o){var j=o.find("div.current-bookings");
j.empty();
if(n.length>0){for(i=0;
i<n.length;
i++){var a=n[i];
var k=a.start.dateTime;
if(!k){k=a.start.date
}var b=new Date(k);
var c=prefixLeadingZeroIfRequired(b.getHours())+":"+prefixLeadingZeroIfRequired(b.getMinutes());
k=a.end.dateTime;
if(!k){k=a.end.date
}var e=new Date(k);
var g=prefixLeadingZeroIfRequired(e.getHours())+":"+prefixLeadingZeroIfRequired(e.getMinutes());
var m=$("<div/>").addClass("col-xs-3 event-schedule");
m.attr("start",b);
m.attr("end",e);
var f=$("<i/>").addClass("fa fa-clock-o").attr("aria-hidden","true");
m.append(f);
m.append(c+" - "+g);
var d=$("<div/>").addClass("col-xs-9");
d.text(a.summary);
var h=$("<div/>").addClass("row");
h.append(m);
h.append(d);
j.append(h)
}}else{var l=$("<li/>").text("No Upcoming Events");
j.append(l)
}}function isEventWithinLimits(c,d,b){var a=Math.abs(d.getTime()-c.getTime())/3600000;
if(a<=b&&a>0){return true
}else{return false
}}function isEventClashingWithOthers(c,e,b){var d=b.find("div.current-bookings .row .event-schedule");
var a=false;
d.each(function(){var g=$(this);
var h=new Date(g.attr("start"));
var f=new Date(g.attr("end"));
if(c>=h&&c<f){a=true
}if(e>h&&e<=f){a=true
}});
return a
}function createBooking(f){if(!f){return
}var I="00";
var m="00";
var y="00";
var A="00";
var D=f.closest("form");
var H=D.find("#resources option:selected");
var n=H.attr("data-admin");
n=$.trim(n);
var e=H.attr("data-attendees-max");
var x=H.attr("data-hour-max");
var d=H.attr("data-resource-id");
var b=H.attr("data-bookable-flag");
var g=H.val();
var q=D.find("#member_mail").val();
var F=D.find("#date-picker").val();
var h=new Date(F);
var j=D.find("#event_start_time").val();
var c=D.find("#event_end_time").val();
var k=D.find("#comment").val();
var E=D.find("#event-type").val();
var l=D.find("#event-category").val();
var o=D.find("#usr_mail").val();
if(j.indexOf(":")!=-1){var t=j.split(":");
I=t[0];
m=t[1];
I=prefixLeadingZeroIfRequired(I);
m=prefixLeadingZeroIfRequired(m)
}if(c.indexOf(":")!=-1){var u=c.split(":");
y=u[0];
A=u[1];
A=prefixLeadingZeroIfRequired(A);
y=prefixLeadingZeroIfRequired(y)
}var C=new Date(h.getFullYear(),h.getMonth(),h.getDate(),I,m,0);
var v=new Date(h.getFullYear(),h.getMonth(),h.getDate(),y,A,0);
if(isEventWithinLimits(C,v,x)&&!isEventClashingWithOthers(C,v,D)){var G="Food Innovators - Booking of - "+g;
if(b){G="Request Approval for booking of "+g
}var s=localStorage.getItem("contentauth-token");
var a=localStorage.getItem("contentauth-id");
var J={start:{dateTime:C.toISOString()},token:s,end:{dateTime:v.toISOString()},location:g,summary:G,description:k+"<br>Kitchen Type - "+E+"<br>Event Type - "+l+"<br><br>To delete this booking please decline that your attending and it will be deleted by admin from the system.",email:o,attendees:[],id:a,reminders:{useDefault:true}};
var K=0;
if(b){if(q!=""){if(q.indexOf(",")!=-1){var z=q.split(",");
for(index=0;
index<z.length;
index++){J.attendees[index]={email:z[index].trim()};
K++
}}else{J.attendees[K]={email:q.trim()};
K++
}}}var w=(d.indexOf("@resource.calendar.google.com")!=-1)?true:false;
J.attendees[K++]={email:n};
J.attendees[K++]={email:o};
J.attendees[K++]={email:d,resource:w};
var B=D.attr("data-booking-api-endpoint");
D.find('button[type="submit"]').attr("disabled","disabled");
D.find('button[type="submit"] .fa').toggle();
$.ajax({type:"POST",url:B,data:JSON.stringify(J),success:function(M){D.find('button[type="submit"]').removeAttr("disabled");
D.find('button[type="submit"] .fa').toggle();
$(".calendar-event-resp > h2").remove();
if(typeof M!="undefined"&&typeof M.response!="undefined"&&typeof M.response.status!="undefined"&&M.response.status=="confirmed"){D.slideUp();
var L=(b)?$("<h2/>").text("Thank you for booking the "+J.location+" . Your request has been approved. We look forward to welcoming you in our kitchens."):$("<h2/>").text("Thank you for your request on booking"+J.location+" . Food Innovators will contact you soon to let you know if your request is approved.");
$(".calendar-event-resp").append(L);
$(".calendar-event-resp").addClass("success")
}},error:function(M){D.find('button[type="submit"]').removeAttr("disabled");
D.find('button[type="submit"] .fa').toggle();
$(".calendar-event-resp > h2").remove();
var L=$("<h2/>").text("Error processing your request for booking "+J.location+" Please contact foodinnovators@woolworths.com.au.");
$(".calendar-event-resp").append(L);
$(".calendar-event-resp").addClass("danger")
}})
}else{D.find(".error-start_hrs .error-start_hrs").remove();
D.find(".error-end_time .error-end_time").remove();
D.find(".error-start_hrs ul.parsley-errors-list.filled").remove();
D.find(".error-end_time ul.parsley-errors-list.filled").remove();
var r=$("<ul/>").addClass("parsley-errors-list filled");
var p=$("<li/>").text("Event timings exceeds maximum limit or is clashing with other events.");
r.append(p);
D.find(".error-start_hrs").append(r);
D.find(".error-end_hrs").append(r)
}}function prefixLeadingZeroIfRequired(a){if(a<10){return"0"+a
}else{return a
}}function getFormattedEventDate(b,c,a){return b.getFullYear()+"-"+c+"-"+a+"T"+b.getHours()+":"+b.getMinutes()+":00"+b.getTimezoneOffset()
}function onSignInCallback(b){gapi.client.load("calendar","v3",function(){});
var a=!(getUrlParameter("failedAuth")=="true");
if(helper&&submit&&!disconnect&&b&&a){helper.onSignInCallback(b)
}else{if(disconnect){helper.disconnect()
}else{gapi.auth.authorize({client_id:googleClientId,scope:googleScopes,immediate:true},onSignInCallback)
}}if(!submit){submit=true
}}function getUrlParameter(a){var b=new RegExp("[?&]"+a+"=([^&#]*)").exec(window.location.href);
if(b==null){return null
}else{return b[1]||0
}}function disconnectUser(){disconnect=true
}function doNotSubmitForFailure(){submit=false
};
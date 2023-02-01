(function(e){var b=e(".overlapblackbg, .slideLeft");
var a=e(".wsmenucontent");
var d=function(){e(b).removeClass("menuclose").addClass("menuopen")
};
var c=function(){e(b).removeClass("menuopen").addClass("menuclose")
};
e("#navToggle").click(function(){if(a.hasClass("menuopen")){c()
}else{d()
}});
a.click(function(){if(a.hasClass("menuopen")){c()
}});
e("#navToggle,.overlapblackbg").on("click",function(){e(".wsmenucontainer").toggleClass("mrginleft")
});
e(".wsmenu-list li").has(".wsmenu-submenu, .wsmenu-submenu-sub, .wsmenu-submenu-sub-sub").prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
e(".wsmenu-list li").has(".megamenu").prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
e(".wsmenu-mobile").click(function(){e(".wsmenu-list").slideToggle("slow")
});
e(".wsmenu-click").click(function(){e(this).siblings(".wsmenu-submenu").slideToggle("slow");
e(this).children(".wsmenu-arrow").toggleClass("wsmenu-rotate");
e(this).siblings(".wsmenu-submenu-sub").slideToggle("slow");
e(this).siblings(".wsmenu-submenu-sub-sub").slideToggle("slow");
e(this).siblings(".megamenu").slideToggle("slow")
})
})(jQuery);
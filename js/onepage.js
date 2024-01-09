 
 /*!
 * pagepiling.js 1.5.6
 *
 
 */
!function(n,e,t,o){"use strict";n.fn.pagepiling=function(i){function a(e,t){var o={destination:e,animated:t,activeSection:n(".pp-section.active"),anchorLink:e.data("anchor"),sectionIndex:e.index(".pp-section"),toMove:e,yMovement:function(e){return n(".pp-section.active").index(".pp-section")>e.index(".pp-section")?"up":"down"}(e),leavingSection:n(".pp-section.active").index(".pp-section")+1};if(!o.activeSection.is(e)){void 0===o.animated&&(o.animated=!0),void 0!==o.anchorLink&&function(n,e){g.anchors.length?(location.hash=n,r(location.hash)):r(String(e))}(o.anchorLink,o.sectionIndex),o.destination.addClass("active").siblings().removeClass("active"),o.sectionsToMove=function(e){return"down"===e.yMovement?n(".pp-section").map(function(t){if(t<e.destination.index(".pp-section"))return n(this)}):n(".pp-section").map(function(t){if(t>e.destination.index(".pp-section"))return n(this)})}(o),"down"===o.yMovement?(o.translate3d="vertical"!==g.direction?"translate3d(-100%, 0px, 0px)":"translate3d(0px, -100%, 0px)",o.scrolling="-100%",g.css3||o.sectionsToMove.each(function(e){e!=o.activeSection.index(".pp-section")&&n(this).css(l(o.scrolling))}),o.animateSection=o.activeSection):(o.translate3d="translate3d(0px, 0px, 0px)",o.scrolling="0",o.animateSection=e),n.isFunction(g.onLeave)&&g.onLeave.call(this,o.leavingSection,o.sectionIndex+1,o.yMovement),function(e){g.css3?(d(e.animateSection,e.translate3d,e.animated),e.sectionsToMove.each(function(){d(n(this),e.translate3d,e.animated)}),setTimeout(function(){s(e)},g.scrollingSpeed)):(e.scrollOptions=l(e.scrolling),e.animated?e.animateSection.animate(e.scrollOptions,g.scrollingSpeed,g.easing,function(){c(e),s(e)}):(e.animateSection.css(l(e.scrolling)),setTimeout(function(){c(e),s(e)},400)))}(o),function(e){g.menu&&(n(g.menu).find(".active").removeClass("active"),n(g.menu).find('[data-menuanchor="'+e+'"]').addClass("active"))}(o.anchorLink),function(e,t){g.navigation&&(n("#pp-nav").find(".active").removeClass("active"),e?n("#pp-nav").find('a[href="#'+e+'"]').addClass("active"):n("#pp-nav").find("li").eq(t).find("a").addClass("active"))}(o.anchorLink,o.sectionIndex),v=o.anchorLink;var i=(new Date).getTime();h=i}}function s(e){n.isFunction(g.afterLoad)&&g.afterLoad.call(this,e.anchorLink,e.sectionIndex+1)}function c(e){"up"===e.yMovement&&e.sectionsToMove.each(function(t){n(this).css(l(e.scrolling))})}function l(n){return"vertical"===g.direction?{top:n}:{left:n}}function r(e){e=e.replace("#",""),n("body")[0].className=n("body")[0].className.replace(/\b\s?pp-viewing-[^\s]+\b/g,""),n("body").addClass("pp-viewing-"+e)}function p(){return(new Date).getTime()-h<m+g.scrollingSpeed}function d(n,e,t){n.toggleClass("pp-easing",t),n.css(function(n){return{"-webkit-transform":n,"-moz-transform":n,"-ms-transform":n,transform:n}}(e))}var v,u=n.fn.pagepiling,f=n(this),h=0,m=("ontouchstart"in t||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,600),g=n.extend(!0,{direction:"vertical",menu:null,verticalCentered:!0,sectionsColor:[],anchors:[],scrollingSpeed:700,easing:"easeInQuart",loopBottom:!1,loopTop:!1,css3:!0,navigation:{textColor:"#000",bulletsColor:"#000",position:"right",tooltips:[]},normalScrollElements:null,normalScrollElementTouchThreshold:5,touchSensitivity:5,keyboardScrolling:!0,sectionSelector:".section",animateAnchor:!1,afterLoad:null,onLeave:null,afterRender:null},i);n.extend(n.easing,{easeInQuart:function(n,e,t,o,i){return o*(e/=i)*e*e*e+t}}),u.setScrollingSpeed=function(n){g.scrollingSpeed=n},u.setMouseWheelScrolling=function(n){},u.setAllowScrolling=function(n){n?u.setMouseWheelScrolling(!0):u.setMouseWheelScrolling(!1)},u.setKeyboardScrolling=function(n){g.keyboardScrolling=n},u.moveSectionUp=function(){var e=n(".pp-section.active").prev(".pp-section");!e.length&&g.loopTop&&(e=n(".pp-section").last()),e.length&&a(e)},u.moveSectionDown=function(){var e=n(".pp-section.active").next(".pp-section");!e.length&&g.loopBottom&&(e=n(".pp-section").first()),e.length&&a(e)},u.moveTo=function(t){var o;(o=isNaN(t)?n(e).find('[data-anchor="'+t+'"]'):n(".pp-section").eq(t-1)).length>0&&a(o)},n(g.sectionSelector).each(function(){n(this).addClass("pp-section")}),g.css3&&(g.css3=function(){var n,i=e.createElement("p"),a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var s in e.body.insertBefore(i,null),a)i.style[s]!==o&&(i.style[s]="translate3d(1px,1px,1px)",n=t.getComputedStyle(i).getPropertyValue(a[s]));return e.body.removeChild(i),n!==o&&n.length>0&&"none"!==n}()),n(f).css({overflow:"hidden"}),u.setAllowScrolling(!0),n.isEmptyObject(g.navigation)||function(){n("body").append('<div id="pp-nav"><ul></ul></div>');var e=n("#pp-nav");e.css("color",g.navigation.textColor),e.addClass(g.navigation.position);for(var t=0;t<n(".pp-section").length;t++){var o="";if(g.anchors.length&&(o=g.anchors[t]),"undefined"!==g.navigation.tooltips){var i=g.navigation.tooltips[t];void 0===i&&(i="")}e.find("ul").append('<li data-tooltip="'+i+'"><a href="#'+o+'"><span></span></a></li>')}e.find("span").css("border-color",g.navigation.bulletsColor)}();var S=n(".pp-section").length;n(".pp-section").each(function(e){n(this).data("data-index",e),n(this).css("z-index",S),e||0!==n(".pp-section.active").length||n(this).addClass("active"),void 0!==g.anchors[e]&&n(this).attr("data-anchor",g.anchors[e]),void 0!==g.sectionsColor[e]&&n(this).css("background-color",g.sectionsColor[e]),g.verticalCentered&&!n(this).hasClass("pp-scrollable")&&function(n){n.addClass("pp-table").wrapInner('<div class="pp-tableCell" style="height:100%" />')}(n(this)),S-=1}).promise().done(function(){g.navigation&&(n("#pp-nav").css("margin-top","-"+n("#pp-nav").height()/2+"px"),n("#pp-nav").find("li").eq(n(".pp-section.active").index(".pp-section")).find("a").addClass("active")),n(t).on("load",function(){var o,i;o=t.location.hash.replace("#",""),(i=n(e).find('.pp-section[data-anchor="'+o+'"]')).length>0&&a(i,g.animateAnchor)}),n.isFunction(g.afterRender)&&g.afterRender.call(this)}),n(t).on("hashchange",function(){var o=t.location.hash.replace("#","").split("/")[0];o.length&&o&&o!==v&&a(isNaN(o)?n(e).find('[data-anchor="'+o+'"]'):n(".pp-section").eq(o-1))}),n(e).keydown(function(e){if(g.keyboardScrolling&&!p())switch(e.which){case 38:case 33:u.moveSectionUp();break;case 40:case 34:u.moveSectionDown();break;case 36:u.moveTo(1);break;case 35:u.moveTo(n(".pp-section").length);break;case 37:u.moveSectionUp();break;case 39:u.moveSectionDown();break;default:return}}),g.normalScrollElements&&(n(e).on("mouseenter",g.normalScrollElements,function(){u.setMouseWheelScrolling(!1)}),n(e).on("mouseleave",g.normalScrollElements,function(){u.setMouseWheelScrolling(!0)}));(new Date).getTime();n(e).on("click touchstart","#pp-nav a",function(e){e.preventDefault();var t=n(this).parent().index();a(n(".pp-section").eq(t))}),n(e).on({mouseenter:function(){var e=n(this).data("tooltip");n('<div class="pp-tooltip '+g.navigation.position+'">'+e+"</div>").hide().appendTo(n(this)).fadeIn(200)},mouseleave:function(){n(this).find(".pp-tooltip").fadeOut(200,function(){n(this).remove()})}},"#pp-nav li")}}(jQuery,document,window);
function animload() {
    if ($(".pp-section").hasClass("active")) {
        setTimeout(function () {
            $(".pp-section.active").find(".anim_step").each(function (ac) {
                var bp = $(this);
                setTimeout(function () {
                    TweenMax.to(bp, 0.8, {
                        force3D: true,
                        opacity: "1",
                        x: "0",
                        ease: Power2.easeOut
                    });
                }, 300 * ac);
            });
        }, 900);
        setTimeout(function () {
            TweenMax.to($(".pp-section.active").find(".anim_step2"), 0.8, {
                force3D: true,
                opacity: "0.4",
                y: "0",
                ease: Power2.easeOut
            });
        }, 400);
    }
}
function ppchangecolor() {
    var ppsact = $(".pp-section.active"),
        ptspav = $(".pp-page-title span");
    if (ppsact.hasClass("white-bg")) {
        $(".chc_item , .pparrow-down , .pparrow-up , .pp-page-title").addClass("chngecolor");
    } else {
        $(".chc_item , .pparrow-down , .pparrow-up , .pp-page-title").removeClass("chngecolor");
    }
    var ppdteact = ppsact.data("secname");
    TweenMax.to(ptspav, 0.2, {
        force3D: true,
        x: 20,
        opacity: 0,
        ease: Power2.easeOut,
        onComplete: function () {
            TweenMax.to(ptspav, 0.1, {
                force3D: true,
                x: -20
            });
            ptspav.text(ppdteact);
        }
    });
    TweenMax.to(ptspav, 0.5, {
        force3D: true,
        x: 0,
        delay: 1.2,
        opacity: 1,
        ease: Power2.easeOut
    });
}
var dppt =  eval($(".pp-menu").data("sbtooltipts")),
	dppanc = eval($(".pp-menu").data("sbtanchors"));
$('#pagepiling').pagepiling({
    menu: '.pp-menu',
    scrollingSpeed: 11111111111111110,
    anchors:dppanc,
 
    navigation: {
        'position': 'right',
        'tooltips': dppt
    },
    afterRender: function () {
        $('.pp-menu').addClass('custom');
        ppchangecolor();
        animload();
    },
    afterLoad: function (anchorLink, index) {
        if (index > 1) {
            $('.pp-menu').removeClass('custom');
        } else {
            $('.pp-menu').addClass('custom');
        }
        ppchangecolor();
    },
    onLeave: function (index, nextIndex, direction) {
        TweenMax.to($(".anim_step2"), 0.1, {
            force3D: true,
            opacity: "0",
            y: "-30px",
            ease: Power2.easeOut
        });
        ppchangecolor();
        animload();
        setTimeout(function () {
            TweenMax.to($(".anim_step"), 0.1, {
                force3D: true,
                opacity: "0",
                x: "-30px",
                ease: Expo.easeInOut
            });
        }, 400);
    }
});
    $.fn.pagepiling.setAllowScrolling(true);
    $.fn.pagepiling.setMouseWheelScrolling(true);
$(".change_bg a").on("click", function () {
    var bgt = $(this).data("bgtab");
    $(".menu-bg-wrap").addClass("hideblur");
    setTimeout(function () {
        $(".bg_tabs").css("background-image", "url(" + bgt + ")");

    }, 200);
    setTimeout(function () {
        $(".menu-bg-wrap").removeClass("hideblur");
    }, 400);
});
$("<div class='pparrow-down'><i class='fa-thin fa-angle-down'></i></div><div class='pparrow-up'><i class='fa-thin fa-angle-up'></i></div>").appendTo("#pp-nav");
$(".pparrow-down").on("click", function () {
    $.fn.pagepiling.moveSectionDown();
});
$(".pparrow-up").on("click", function () {
    $.fn.pagepiling.moveSectionUp();
});
$(".mts-3").on("click", function (epp) {
    epp.preventDefault();
    $.fn.pagepiling.moveTo('section2');
});
$(".ppmenu_btn").on("click", function () {
    $(".pp-menu").fadeToggle(500);
});
 
jQuery(function(r){var e=r("body").hasClass("rtl");r(".lava-gallery:not(.style-thumbnail) .slick-slider").slick({adaptiveHeight:!0,infinite:!1,prevArrow:'<div class="slick-prev"><i class="material-icons">arrow_back</i></div>',nextArrow:'<div class="slick-next"><i class="material-icons">arrow_forward</i></div>',rtl:e,fade:!0,cssEase:"ease-out",useTransform:!0}).on("lazyLoaded",function(){r(window).trigger("resize")}),r(".lava-gallery.style-thumbnail").each(function(){var s=r(this).find(".main-slider"),i=r(this).find(".thumb-slider"),o=r(this).hasClass("hb_room_gallery")?130:110;s.slick({asNavFor:i,adaptiveHeight:!0,useTransform:!0,rtl:e,slidesToShow:1,slidesToScroll:1,fade:!0,cssEase:"ease-out",prevArrow:'<div class="slick-prev"><i class="material-icons">arrow_back</i></div>',nextArrow:'<div class="slick-next"><i class="material-icons">arrow_forward</i></div>'}).on("lazyLoaded",function(){r(window).trigger("resize")}),i.slick({asNavFor:s,useTransform:!0,rtl:e,slidesToShow:(i=r(this),s=o,Math.floor(i.width()/s)),slidesToScroll:1,prevArrow:'<div class="slick-prev"><i class="material-icons">arrow_back</i></div>',nextArrow:'<div class="slick-next"><i class="material-icons">arrow_forward</i></div>',adaptiveHeight:!0,arrows:!0,variableWidth:!0,focusOnSelect:!0})}),r(".lava-rooms-slider .slick-slider").each(function(){var s=r(this).data("columns"),i=2,o=3;2==(s=void 0===s?3:parseInt(s))&&(o=2),1==s&&(o=i=1),r(this).slick({adaptiveHeight:!0,useTransform:!0,rtl:e,infinite:!1,prevArrow:'<div class="slick-prev"><i class="material-icons">arrow_back</i></div>',nextArrow:'<div class="slick-next"><i class="material-icons">arrow_forward</i></div>',slidesToShow:s,slidesToScroll:1,responsive:[{breakpoint:1440,settings:{slidesToShow:o,slidesToScroll:1}},{breakpoint:1020,settings:{slidesToShow:i,slidesToScroll:1}},{breakpoint:640,settings:{slidesToShow:1,slidesToScroll:1}}]})}),r(".room-gallery-slider").each(function(){var s=void 0===(s=r(this).data("columns"))?3:parseInt(s);r(this).slick({adaptiveHeight:!0,useTransform:!0,prevArrow:'<div class="slick-prev"><i class="material-icons">arrow_back</i></div>',nextArrow:'<div class="slick-next"><i class="material-icons">arrow_forward</i></div>',infinite:!1,rtl:e,slidesToShow:s,slidesToScroll:1,responsive:[{breakpoint:1440,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:1020,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:640,settings:{slidesToShow:1,slidesToScroll:1}}]})}),r(".hb_room_carousel .slick-slider").slick({infinite:!1,rtl:e,useTransform:!0,slidesToScroll:1,prevArrow:'<div class="slick-prev"><i class="material-icons">arrow_back</i></div>',nextArrow:'<div class="slick-next"><i class="material-icons">arrow_forward</i></div>',fade:!1,responsive:[{breakpoint:1260,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:860,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0}}]}),r(".lava-event-carousel .slick-slider").slick({adaptiveHeight:!0,useTransform:!0,infinite:!1,prevArrow:'<div class="slick-prev"><i class="material-icons">arrow_back</i></div>',nextArrow:'<div class="slick-next"><i class="material-icons">arrow_forward</i></div>',slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1560,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:1020,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:690,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}}]}),r(".lava-post-carousel .slick-slider").slick({adaptiveHeight:!0,useTransform:!0,infinite:!1,prevArrow:'<div class="slick-prev"><i class="material-icons">arrow_back</i></div>',nextArrow:'<div class="slick-next"><i class="material-icons">arrow_forward</i></div>',slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1560,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:1020,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:690,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}}]}),r(".lava-testimonials .slick-slider").each(function(){var s=r(this).data("slick"),s=3<=s.slidesToShow?3:s.slidesToShow,i=2<=s?2:1;r(this).slick({adaptiveHeight:!0,infinite:!1,rtl:e,speed:600,useTransform:!0,slidesToScroll:1,responsive:[{breakpoint:1400,settings:{slidesToShow:s}},{breakpoint:1020,settings:{slidesToShow:i}},{breakpoint:768,settings:{slidesToShow:1}}]})})})
;
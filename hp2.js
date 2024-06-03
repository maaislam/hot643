!function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n="object"==e(t)&&t&&t.Object===Object&&t,o="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,i=(n||o||Function("return this")()).Symbol,c=(i&&i.toStringTag,i&&i.toStringTag,Date.now||function(){return(new Date).getTime()}),r=function(t,n,o){var i={wait:50,multiplier:1.1,timeout:0};o&&(i=function t(n,o){var i=n;return Object.keys(o).forEach(function(n){var c=o[n],r=i[n],s=r&&"object"===e(r)&&!(r instanceof Array);i[n]=s?t(r,c):c}),i}(i,o));for(var r=i,s=r.multiplier,a=r.wait,l=i.timeout?new Date(c()+i.timeout):null,d=[],u=function o(i,r,a){if(l&&l&&c()>l)return!1;var u=function(t){if(!t)return!1;var n={function:function(){return t()},string:function(){return document.querySelector(t)}}[e(t)];return!n||n()}(i);u?(d.push(u),d.length===t.length&&n(d)):setTimeout(function(){o(i,r*s)},a?0:r)},f=0;f<t.length;f+=1){if("string"!=typeof t[f]&&"function"!=typeof t[f])throw"Every item in the poller array should be a function or a string";u(t[f],a,!0)}},s={trackerName:!1,propertyId:!1,analyticsReference:"ga",eventCache:[],sendEvents:!0,setDefaultCategory:function(e){return this.category=e,this},setDefaultAction:function(e){return this.action=e,this},setPropertyId:function(e){this.propertyId=e},setTrackerName:function(e){this.trackerName=e},useLegacyTracker:function(){this.analyticsReference="_gaq"},sendAuto:function(e,t,n){this.send(null,null,t,n,e)},sendNormalised:function(e,t){this.send(null,null,e,t)},send:function(t,n,o,i){var c=this,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,l=i||{},d=o,u=t||this.category,f=n||this.action,w=s;if(null!=w&&(0==w&&(w="Control"),d="Variation: "+w+" - "+o),"object"===e(l)&&l.sendOnce){var g="".concat(u).concat(f).concat(d);if(this.eventCache.indexOf(g)>-1)return!1;this.eventCache.push(g)}a(d);var h=this,k=function(e){if("_gaq"===h.analyticsReference)window._gaq.push(["_trackEvent",u,f,d,null,void 0===l.nonInteraction||l.nonInteraction]);else{var t={nonInteraction:!l.nonInteraction||l.nonInteraction};if(l.opts)for(var n in l.opts)t[n]=l.opts[n];window[h.analyticsReference]("".concat(e,".send"),"event",u,f,d,t)}};h.trackerName?1==this.sendEvents&&k(h.trackerName):r([function(){try{var e=window[h.analyticsReference].getAll();if(e&&e.length){if(!h.propertyId)return h.trackerName=e[0].get("name"),!0;for(var t=0;t<e.length;t+=1){var n=e[t];if(n.get("trackingId")===h.propertyId)return h.trackerName=n.get("name"),!0}}}catch(e){}}],function(){1==c.sendEvents&&k(h.trackerName)},{wait:150})}},a=function(e){localStorage.getItem("ucdebug")&&window.console&&"function"==typeof window.console.log&&console.log(e)},l="HC-NEW-HOMEPAGE",d="1",u="HotelChocolat",f=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="Test ID: "+l+" Variation: "+d+" Label: "+e;0==w.initiate?s.sendNormalised(n,{sendOnce:t}):w.send(e)},w={initiate:!1,methods:["ga4"],tracker:!1,property:!1,uaRef:"ga",send:function(e){var t=this;this.methods.includes("ga4")&&r([function(){return"complete"===document.readyState}],function(){void 0!==window.gtag?window.gtag("event","experimentation",{experiment_id:"".concat(l,"-").concat(d),experiment_label:e,send_to:t.property||"default"}):(window.dataLayer=window.dataLayer||[],void 0===window.customGtag&&(window.customGtag=function(){window.dataLayer.push(arguments)},window.customGtag("js",new Date),window.customGtag("config",t.property||"default")),window.customGtag("event","experimentation",{experiment_id:"".concat(l,"-").concat(d),experiment_label:e,send_to:t.property||"default"}))}),this.methods.includes("datalayer")&&r([function(){return!!window.dataLayer}],function(){window.dataLayer.push({event:"experimentation",experiment_id:"".concat(l,"-").concat(d),experiment_label:e})}),this.methods.includes("ua")&&r([function(){return!!window[t.uaRef]}],function(){var n=t.tracker||window[t.uaRef].getAll()[0].get("name");window[t.uaRef]("".concat(n,".send"),"event","experimentation","".concat(l,"-").concat(d),e,{nonInteraction:!0})})}},g=function(){document.documentElement.classList.add("HOT-643"),r([".HCN-heroblock"],function(){document.querySelector(".HCN-heroblock .HCN-button").addEventListener("click",function(){f("Click - hero block button clicked",!0)})}),window.jQuery(".HCN-category-carousel-block--contents").slick({dots:!1,infinite:!1,speed:300,slidesToShow:6,slidesToScroll:2,swipeToSlide:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:2}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:2.5,slidesToScroll:2}}]});var e,t=$(".HCN-category-carousel-block--contents"),n=$(".progress-bar-category"),o=100/(t.find(".slick-slide").length-(window.innerWidth<1024&&window.innerWidth>768?4:window.innerWidth<768&&window.innerWidth>480?3:window.innerWidth<480?2:6)+1);n.css("background-size",o+"% 100%").attr("aria-valuenow",o),t.on("beforeChange",function(e,t,i,c){0==c?n.css("background-size",o+"% 100%").attr("aria-valuenow",o):n.css("background-size",o*(c+1)+"% 100%").attr("aria-valuenow",o*(c+1))}),document.querySelector(".HCN-category-carousel-block .slick_btn__item--next").addEventListener("click",function(){window.jQuery(".HCN-category-carousel-block--contents").slick("slickNext")}),document.querySelector(".HCN-category-carousel-block .slick_btn__item--prev").addEventListener("click",function(){window.jQuery(".HCN-category-carousel-block--contents").slick("slickPrev")}),document.body.addEventListener("click",function(e){(e.target.closest(".HCN-category-carousel-block .HCN-item")||e.target.classList.contains(".HCN-category-carousel-block .HCN-item"))&&f("Click - product ".concat(e.target.closest(".HCN-item").href," clicked"),!0)});var i=new Date("2024-04-16").getTime();r([".HCN-newinblock-container"],function(){document.querySelectorAll(".HCN-newinblock-container").forEach(function(e){e.classList.add("HOT-643__trendingCarousel")}),window.jQuery(".HCN-product-carousel").slick({dots:!1,speed:300,infinite:!1,slidesToShow:6,slidesToScroll:1,swipeToSlide:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1.35,slidesToScroll:1}}]});var e,t=$(".HCN-product-carousel"),n=$(".progress-bar-newin"),o=t.find(".slick-slide").length;e=window.innerWidth<1024&&window.innerWidth>768?3:window.innerWidth<768&&window.innerWidth>480?2:window.innerWidth<480?1:6,n.css("background-size",100/o*e+"% 100%").attr("aria-valuenow",100/o*e),t.on("beforeChange",function(t,i,c,r){var s=100/o*r;n.css("background-size",100/o*e+s+"% 100%").attr("aria-valuenow",100/o*e+s)}),document.querySelectorAll(".HCN-newinblock-container").forEach(function(e){e.querySelector(".slick_btn__item--next").addEventListener("click",function(){window.jQuery(".HCN-product-carousel").slick("slickNext")}),e.querySelector(".slick_btn__item--prev").addEventListener("click",function(){window.jQuery(".HCN-product-carousel").slick("slickPrev")}),setTimeout(function(){var t=e.querySelector(".HCN-product-carousel .slick-track"),n=e.querySelector(".HOT-643__promotedItem"),o=t.offsetHeight-10;n.style.height="".concat(o,"px")},1e3)}),document.body.addEventListener("click",function(e){(e.target.closest(".HCN-item")||e.target.classList.contains(".HCN-item"))&&f("Click - product ".concat(e.target.closest(".HCN-item").href," clicked"),!0)})}),r([".HCN-goodchocolate-container"],function(){window.jQuery(".HCN-goodchocolate-product-carousel").slick({dots:!1,infinite:!0,initialSlide:0,slidesToShow:5,slidesToScroll:1,swipeToSlide:!0,arrows:!1,responsive:[{breakpoint:1024,settings:{infinite:!1,slidesToShow:3.2,slidesToScroll:1}},{breakpoint:768,settings:{infinite:!1,slidesToShow:2.2,slidesToScroll:1}},{breakpoint:480,settings:{infinite:!1,slidesToShow:1.5,slidesToScroll:1}}]});var e=$(".HCN-goodchocolate-product-carousel"),t=$(".progress-bar-goodchocolat"),n=100/e.find(".slick-slide:not(.slick-cloned)").length;t.css("background-size",n+"% 100%").attr("aria-valuenow",n),e.on("beforeChange",function(e,o,i,c){var r=n*(c+1);t.css("background-size",r+"% 100%").attr("aria-valuenow",r)}),document.querySelector(".HCN-goodchocolate-container .slick_btn__item--next").addEventListener("click",function(){window.jQuery(".HCN-goodchocolate-product-carousel").slick("slickNext")}),document.querySelector(".HCN-goodchocolate-container .slick_btn__item--prev").addEventListener("click",function(){window.jQuery(".HCN-goodchocolate-product-carousel").slick("slickPrev")}),document.body.addEventListener("click",function(e){(e.target.closest(".HCN-goodchocolate-container .HCN-item")||e.target.classList.contains(".HCN-goodchocolate-container .HCN-item"))&&f("Click - product ".concat(e.target.closest(".HCN-item").href," clicked"),!0)})}),r([".HCN-discovermatchblock"],function(){document.querySelector(".HCN-discovermatchblock").style="display: block; padding-top: 24px",document.querySelector(".HCN-discovermatchblock .HCN-discovermatchblock--inner .discover-thumbnail").style.height="190px",document.querySelector(".HCN-discovermatchblock .HCN-button").addEventListener("click",function(){f("Click - discover yours button clicked",!0)})}),r([".HCN-memberbenefitblock"],function(){document.querySelector(".HCN-memberbenefitblock .HCN-button").addEventListener("click",function(){f("Click - VIP.ME find out more button clicked",!0)})}),r([".HCN-ethicalbusiness-container a img"],function(){window.jQuery(".HCN-ethicalbusiness-product-carousel").slick({dots:!1,infinite:!0,initialSlide:0,slidesToShow:3,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:768,settings:{infinite:!1,slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1}}]});var e=$(".HCN-ethicalbusiness-product-carousel"),t=$(".progress-bar-ethicalbusiness"),n=100/e.find(".slick-slide:not(.slick-cloned)").length;t.css("background-size",n+"% 100%").attr("aria-valuenow",n),e.on("beforeChange",function(e,o,i,c){var r=n*(c+1);t.css("background-size",r+"% 100%").attr("aria-valuenow",r)}),document.querySelector(".HCN-ethicalbusiness-container .slick_btn__item--next").addEventListener("click",function(){window.jQuery(".HCN-ethicalbusiness-product-carousel").slick("slickNext")}),document.querySelector(".HCN-ethicalbusiness-container .slick_btn__item--prev").addEventListener("click",function(){window.jQuery(".HCN-ethicalbusiness-product-carousel").slick("slickPrev")}),document.body.addEventListener("click",function(e){(e.target.closest(".HCN-ethicalbusiness-container .HCN-item")||e.target.classList.contains(".HCN-ethicalbusiness-container .HCN-item")?f("Click - product ".concat(e.target.closest(".HCN-item").href," clicked"),!0):e.target.closest(".HCN-ethicalbusiness-container .HCN-button")&&f("Click - our ethical business find out more button clicked",!0),e.target.closest(".HOT-643__readMore")&&document.querySelector("nav.stuckMenu"))&&e.target.closest(".HOT-643__categoryHeader").classList.add("HOT-643__expanded")})}),r(["nav.stuckMenu"],function(){if(document.querySelector("nav.stuckMenu")){var e=document.querySelector(".HCN-button.HCN-ethical_btn"),t=document.querySelector(".HCN-ethicalbusiness-progress-bar-container"),n="<div class='HOT-643__ethicalFindOutMoreBtn'>\n        ".concat(e.outerHTML,"\n      </div>");t.insertAdjacentHTML("afterend",n),window.jQuery(".HCN-category-carousel-block--contents").slick("destroy"),document.querySelector(".HCN-category-carousel-block--contents").classList.add("HOT-643__categoryCarousel")}}),r([".HCN-sale-banner"],function(){var t=document.querySelector(".HCN-sale-banner #timer");e=setInterval(function(){t.innerHTML=function(e){var t=(new Date).getTime(),n=i-t;if(n<=0)return clearInterval(e),document.querySelector(".shop-now").style.display="inline",document.getElementById("countdown").style.display="none","";var o=Math.floor(n/864e5),c=Math.floor(n%864e5/36e5),r=Math.floor(n%36e5/6e4),s=Math.floor(n%6e4/1e3);return document.querySelector(".shop-now").style.display="none",document.getElementById("countdown").style.display="block","".concat(o,"d ").concat(c,"h ").concat(r,"m ").concat(s,"s")}(e)},1e3)})},h=function(){s.setDefaultCategory("Experimentation"),s.setDefaultAction(u+" - "+l),s.sendEvents=!0,f("Conditions Met"),g()};/MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent)||r(["body"],function(){h()})}();

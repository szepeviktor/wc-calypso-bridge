(window.webpackJsonp_wc_calypso_bridge=window.webpackJsonp_wc_calypso_bridge||[]).push([[1],{27:function(e,t,r){},28:function(e,t,r){}}]),function(e){function t(t){for(var c,a,l=t[0],i=t[1],s=t[2],u=0,d=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);for(m&&m(t);d.length;)d.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],c=!0,l=1;l<r.length;l++){var i=r[l];0!==n[i]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var c={},n={0:0},o=[];function a(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=c,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(r,c,function(t){return e[t]}.bind(null,c));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp_wc_calypso_bridge=window.webpackJsonp_wc_calypso_bridge||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var m=i;o.push([30,1]),r()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wc.experimental},function(e,t){e.exports=window.wc.components},function(e,t,r){var c=r(22),n=r(23),o=r(24),a=r(26);e.exports=function(e,t){return c(e)||n(e,t)||o(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=window.wc.data},function(e,t){e.exports=window.React},function(e,t){e.exports=window.wc.tracks},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=window.wp.hooks},function(e,t){e.exports=window.regeneratorRuntime},function(e,t,r){var c;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var c=arguments[t];if(c){var o=typeof c;if("string"===o||"number"===o)e.push(c);else if(Array.isArray(c)){if(c.length){var a=n.apply(null,c);a&&e.push(a)}}else if("object"===o){if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]")){e.push(c.toString());continue}for(var l in c)r.call(c,l)&&c[l]&&e.push(l)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(c=function(){return n}.apply(t,[]))||(e.exports=c)}()},function(e,t){function r(t){return e.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var c=r(20);e.exports=function(e,t,r){return(t=c(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.size,r=void 0===t?24:t,c=e.onClick,l=(e.icon,e.className),i=function(e,t){if(null==e)return{};var r,c,n=function(e,t){if(null==e)return{};var r,c,n={},o=Object.keys(e);for(c=0;c<o.length;c++)r=o[c],0<=t.indexOf(r)||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)r=o[c],0<=t.indexOf(r)||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,o),s=["gridicon","gridicons-notice-outline",l,!!function(e){return 0==e%18}(r)&&"needs-offset",!1,!1].filter(Boolean).join(" ");return n.default.createElement("svg",a({className:s,height:r,width:r,onClick:c},i,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),n.default.createElement("g",null,n.default.createElement("path",{d:"M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-2-2h2l.5-6h-3l.5 6z"})))};var c,n=(c=r(7))&&c.__esModule?c:{default:c},o=["size","onClick","icon","className"];function a(){return(a=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var c in t=arguments[r])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)}},function(e,t){e.exports=window.wp.plugins},function(e,t){function r(e,t,r,c,n,o,a){try{var l=e[o](a),i=l.value}catch(e){return void r(e)}l.done?t(i):Promise.resolve(i).then(c,n)}e.exports=function(e){return function(){var t=this,c=arguments;return new Promise((function(n,o){var a=e.apply(t,c);function l(e){r(a,n,o,l,i,"next",e)}function i(e){r(a,n,o,l,i,"throw",e)}l(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=window.wc.wcSettings},function(e,t){e.exports=window.wp.compose},function(e,t,r){var c=r(13).default,n=r(21);e.exports=function(e){var t=n(e,"string");return"symbol"===c(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var c=r(13).default;e.exports=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var c,n,_x,o,a=[],_n=!0,l=!1;try{if(_x=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;_n=!1}else for(;!(_n=(c=_x.call(r)).done)&&(a.push(c.value),a.length!==t);_n=!0);}catch(e){l=!0,n=e}finally{try{if(!_n&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(l)throw n}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var c=r(25);e.exports=function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,c=new Array(t);r<t;r++)c[r]=e[r];return c},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},,,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var c=r(14),n=r.n(c),o=r(0),a=r(10),l=r(2),i=r(3),s=r(4),m=r(1);r(7),r(15);var u=r(8);const d=async(e,t)=>{const r=wp.data.select("wc/admin/plugins").getActivePlugins(),c=wp.data.select("wc/admin/plugins").getInstalledPlugins(),n=wp.data.select("wc/admin/plugins").isJetpackConnected();Object(u.recordEvent)("task_view",{task_name:e,variant:t,wcs_installed:c.includes("woocommerce-services"),wcs_active:r.includes("woocommerce-services"),jetpack_installed:c.includes("jetpack"),jetpack_active:r.includes("jetpack"),jetpack_connected:n})};let p;const f=({id:e,variant:t,...r})=>(Object(o.useEffect)(()=>{"products"===e&&(p=t)},[e,t]),Object(o.createElement)(l.Fill,{name:"woocommerce_onboarding_task_"+e,...r})),w=(e,t)=>{t>20?d(e,"experiment_timed_out"):p?d(e,p):setTimeout(()=>w(e,t+1),200)};f.Slot=({id:e,fillProps:t})=>(Object(o.useEffect)(()=>{"products"===e?w(e,0):d(e)},[e]),Object(o.createElement)(l.Slot,{name:"woocommerce_onboarding_task_"+e,fillProps:t}));var b=r(16),_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=function(e){return function(){try{return e.apply(void 0,arguments)}catch(e){return console.warn("Error encountered when attempting to use localStorage: ",e.message),null}}},c={set:r((function(t){window.localStorage.setItem(e,JSON.stringify(t))})),get:r((function(){var r=JSON.parse(window.localStorage.getItem(e));return"boolean"==typeof r||r?r:t})),reset:function(){c.set(t)}};return c}("wc_nav_root_url_referrer",null),g=r(17),O=r.n(g),y=r(5),h=r.n(y),j=r(11),v=r.n(j),x=r(12),E=r.n(x),k=r(9),C=r(18),S=r(6);function N(e){return(""+e).replace(/\\/g,"\\\\").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\u00A0/g,"\\u00A0").replace(/&/g,"\\x26").replace(/'/g,"\\x27").replace(/"/g,"\\x22").replace(/</g,"\\x3C").replace(/>/g,"\\x3E")}var M,P,B,T=function(){return Object(o.createElement)("svg",{width:"631",height:"73",viewBox:"0 0 631 73",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(o.createElement)("rect",{width:"3.88561",height:"12.2119",rx:"1.94281",transform:"matrix(-0.825943 0.563754 0.563755 0.825942 491.547 48.5938)",fill:"#64CA43"}),Object(o.createElement)("rect",{width:"3.05264",height:"9.59401",rx:"1.52632",transform:"matrix(-0.672177 0.740391 0.740391 0.672176 505.47 13.5)",fill:"#FF2D55"}),Object(o.createElement)("rect",{width:"3.64276",height:"11.4487",rx:"1.82138",transform:"matrix(-0.6382 -0.769871 -0.769872 0.638198 479.295 24.9492)",fill:"#117AC9"}),Object(o.createElement)("rect",{width:"3.88561",height:"12.2119",rx:"1.9428",transform:"matrix(-0.404372 -0.914595 -0.914595 0.404371 258.44 14.6914)",fill:"#FF8085"}),Object(o.createElement)("rect",{width:"5.34271",height:"16.7914",rx:"2.67136",transform:"matrix(0.39264 0.919692 0.919692 -0.392642 415.619 50.6055)",fill:"#FF8085"}),Object(o.createElement)("circle",{r:"3.43422",transform:"matrix(-0.949193 -0.314694 -0.314694 0.949193 521.194 60.5423)",fill:"#F0B849"}),Object(o.createElement)("ellipse",{rx:"2.28948",ry:"2.28948",transform:"matrix(-0.949193 -0.314695 -0.314693 0.949194 537.493 43.9995)",fill:"#BF5AF2"}),Object(o.createElement)("ellipse",{rx:"1.52632",ry:"1.52632",transform:"matrix(-0.949194 -0.314692 -0.314695 0.949193 460.839 63.3083)",fill:"#BF5AF2"}),Object(o.createElement)("ellipse",{rx:"2.28948",ry:"2.28948",transform:"matrix(-0.949194 -0.314692 -0.314695 0.949193 248.213 54.0972)",fill:"#09B585"}),Object(o.createElement)("rect",{x:"401.773",y:"17.2188",width:"5.34271",height:"16.7914",rx:"2.67136",transform:"rotate(-51.7958 401.773 17.2188)",fill:"#984A9C"}),Object(o.createElement)("rect",{width:"3.88561",height:"12.2119",rx:"1.9428",transform:"matrix(0.618465 -0.785812 0.78581 0.618467 114.561 34.7422)",fill:"#64CA43"}),Object(o.createElement)("rect",{width:"3.64276",height:"11.4487",rx:"1.82138",transform:"matrix(-0.988881 -0.148711 0.148714 -0.98888 355.102 27.8633)",fill:"#E7C037"}),Object(o.createElement)("rect",{width:"3.00682",height:"9.45",rx:"1.50341",transform:"matrix(0.226971 0.973902 -0.973902 0.226968 299.704 51)",fill:"#E7C037"}),Object(o.createElement)("rect",{width:"3.88561",height:"12.2119",rx:"1.9428",transform:"matrix(0.78581 0.618468 -0.618465 0.785812 356.896 56.8789)",fill:"#3361CC"}),Object(o.createElement)("circle",{cx:"178.027",cy:"45.6921",r:"3.43422",transform:"rotate(-1.79578 178.027 45.6921)",fill:"#F0B849"}),Object(o.createElement)("circle",{cx:"147.36",cy:"27.115",r:"2.28948",transform:"rotate(-1.79576 147.36 27.115)",fill:"#BF5AF2"}),Object(o.createElement)("circle",{cx:"394.609",cy:"60.7668",r:"1.52632",transform:"rotate(-1.79574 394.609 60.7668)",fill:"#F0C930"}),Object(o.createElement)("circle",{cx:"444.811",cy:"28.5441",r:"1.52632",transform:"rotate(-1.79574 444.811 28.5441)",fill:"#F0C930"}),Object(o.createElement)("ellipse",{cx:"324.748",cy:"47.3684",rx:"1.52632",ry:"1.52632",transform:"rotate(-1.79578 324.748 47.3684)",fill:"#3361CC"}),Object(o.createElement)("circle",{cx:"378.369",cy:"39.9331",r:"1.9079",transform:"rotate(-1.79577 378.369 39.9331)",fill:"#37E688"}),Object(o.createElement)("rect",{width:"3.88561",height:"12.2119",rx:"1.9428",transform:"matrix(0.336735 -0.941599 0.941599 0.336737 196.184 60.75)",fill:"#64CA43"}),Object(o.createElement)("rect",{x:"218.752",y:"25.1289",width:"3.88561",height:"12.2119",rx:"1.9428",transform:"rotate(5.81869 218.752 25.1289)",fill:"#3361CC"}),Object(o.createElement)("ellipse",{rx:"3.43422",ry:"3.43422",transform:"matrix(0.827262 -0.561816 0.561811 0.827266 108.957 67.7749)",fill:"#F0B849"}),Object(o.createElement)("circle",{cx:"283.319",cy:"33.1663",r:"2.28948",transform:"rotate(-34.1813 283.319 33.1663)",fill:"#BF5AF2"}),Object(o.createElement)("circle",{r:"1.52632",transform:"matrix(0.827266 -0.56181 0.561818 0.827261 151.754 65.9755)",fill:"#3361CC"}),Object(o.createElement)("ellipse",{rx:"1.9079",ry:"1.9079",transform:"matrix(0.827265 -0.561812 0.561815 0.827263 90.0872 48.3033)",fill:"#37E688"}),Object(o.createElement)("ellipse",{rx:"1.9079",ry:"1.9079",transform:"matrix(0.827265 -0.561812 0.561815 0.827263 115.477 15.651)",fill:"#F0C930"}),Object(o.createElement)("ellipse",{cx:"318.867",cy:"21.3343",rx:"2.28948",ry:"2.28948",transform:"rotate(-34.1813 318.867 21.3343)",fill:"#09B585"}),Object(o.createElement)("ellipse",{rx:"2.28948",ry:"2.28948",transform:"matrix(0.827267 -0.561809 0.561819 0.82726 187.664 15.4281)",fill:"#FF3B30"}))},A=function(){return Object(o.createElement)("svg",{width:"20",height:"14",viewBox:"0 0 20 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(o.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.41669 4.08333V1.75H17.5834V4.08333H2.41669ZM2.41669 7.58333V12.25H17.5834V7.58333H2.41669ZM0.666687 1.16667C0.666687 0.522335 1.18902 0 1.83335 0H18.1667C18.811 0 19.3334 0.522334 19.3334 1.16667V12.8333C19.3334 13.4777 18.811 14 18.1667 14H1.83335C1.18902 14 0.666687 13.4777 0.666687 12.8333V1.16667Z",fill:"#757575"}))},F=function(){return Object(o.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"#757575","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Object(o.createElement)("circle",{cx:"12",cy:"12",r:"10"}),Object(o.createElement)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),Object(o.createElement)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"}))},H=function(){return Object(o.createElement)("svg",{width:"22",height:"20",viewBox:"0 0 22 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(o.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.83333 2.41406H19.1667C19.4888 2.41406 19.75 2.67523 19.75 2.9974V4.7474C19.75 5.06956 19.4888 5.33073 19.1667 5.33073H18.5833H3.41667H2.83333C2.51117 5.33073 2.25 5.06956 2.25 4.7474V2.99739C2.25 2.67523 2.51117 2.41406 2.83333 2.41406ZM1.66667 6.76857C0.969232 6.36513 0.5 5.61106 0.5 4.7474V2.99739C0.5 1.70873 1.54467 0.664062 2.83333 0.664062H19.1667C20.4553 0.664062 21.5 1.70873 21.5 2.9974V4.7474C21.5 5.61106 21.0308 6.36513 20.3333 6.76857V7.08073V16.9974C20.3333 18.2861 19.2887 19.3307 18 19.3307H4C2.71133 19.3307 1.66667 18.2861 1.66667 16.9974V7.08073V6.76857ZM3.41667 7.08073V16.9974C3.41667 17.3196 3.67783 17.5807 4 17.5807H18C18.3222 17.5807 18.5833 17.3196 18.5833 16.9974V7.08073H3.41667Z",fill:"#757575"}))},V=function(){return Object(o.createElement)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(o.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 5.71298C8 4.77158 8.86442 3.95703 10 3.95703C11.1356 3.95703 12 4.77158 12 5.71298V8.33203H8V5.71298ZM6.66667 8.33203V5.71298C6.66667 4.02446 8.19007 2.70703 10 2.70703C11.8099 2.70703 13.3333 4.02446 13.3333 5.71298V8.33203H14.1667C14.6269 8.33203 15 8.70511 15 9.16536V15.832C15 16.2923 14.6269 16.6654 14.1667 16.6654H5.83333C5.3731 16.6654 5 16.2923 5 15.832V9.16536C5 8.70511 5.3731 8.33203 5.83333 8.33203H6.66667Z",fill:"#A7AAAD"}))},L=function(){return Object(o.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Object(o.createElement)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),Object(o.createElement)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}))},R=(r(27),function(){return Object(o.createElement)("div",{className:"wpcom-wc-admin-loader"},Object(o.createElement)("svg",{className:"wpcom-site__logo",height:"72",width:"72",viewBox:"0 0 72 72"},Object(o.createElement)("path",{d:"M36,0C16.1,0,0,16.1,0,36c0,19.9,16.1,36,36,36c19.9,0,36-16.2,36-36C72,16.1,55.8,0,36,0z M3.6,36 c0-4.7,1-9.1,2.8-13.2l15.4,42.3C11.1,59.9,3.6,48.8,3.6,36z M36,68.4c-3.2,0-6.2-0.5-9.1-1.3l9.7-28.2l9.9,27.3 c0.1,0.2,0.1,0.3,0.2,0.4C43.4,67.7,39.8,68.4,36,68.4z M40.5,20.8c1.9-0.1,3.7-0.3,3.7-0.3c1.7-0.2,1.5-2.8-0.2-2.7 c0,0-5.2,0.4-8.6,0.4c-3.2,0-8.5-0.4-8.5-0.4c-1.7-0.1-2,2.6-0.2,2.7c0,0,1.7,0.2,3.4,0.3l5,13.8L28,55.9L16.2,20.8 c2-0.1,3.7-0.3,3.7-0.3c1.7-0.2,1.5-2.8-0.2-2.7c0,0-5.2,0.4-8.6,0.4c-0.6,0-1.3,0-2.1,0C14.7,9.4,24.7,3.6,36,3.6 c8.4,0,16.1,3.2,21.9,8.5c-0.1,0-0.3,0-0.4,0c-3.2,0-5.4,2.8-5.4,5.7c0,2.7,1.5,4.9,3.2,7.6c1.2,2.2,2.7,4.9,2.7,8.9 c0,2.8-0.8,6.3-2.5,10.5l-3.2,10.8L40.5,20.8z M52.3,64l9.9-28.6c1.8-4.6,2.5-8.3,2.5-11.6c0-1.2-0.1-2.3-0.2-3.3 c2.5,4.6,4,9.9,4,15.5C68.4,47.9,61.9,58.4,52.3,64z"})))}),I=function(e){var t=e.contentToCopy,r=Object(o.useState)(!1),c=h()(r,2),n=c[0],a=c[1],l=E()("copy-to-clipboard__feedback",{"copy-to-clipboard__feedback--active":n});return Object(o.createElement)("div",{className:"copy-to-clipboard",onClick:function(){navigator.clipboard.writeText(t),a(!0),setTimeout((function(){a(!1)}),1e3)}},Object(o.createElement)(L,null),Object(o.createElement)("div",{className:l},Object(m.__)("Copied","wc-calypso-bridge")))},q=function(e){var t=e.label,r=e.loadingLabel,c=e.successCallback,n=void 0===c?function(){}:c,a=Object(o.useState)(!1),i=h()(a,2),s=i[0],u=i[1],d=Object(o.useState)(""),p=h()(d,2),f=p[0],w=p[1],b=function(e,t,r){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=new window.XMLHttpRequest;o.open(e,t,!0),o.setRequestHeader("X-Requested-With","XMLHttpRequest"),r&&o.setRequestHeader("Content-Type",r),o.withCredentials=!0,n&&(o.onreadystatechange=function(){n(o)}),o.send(c)},_=function(){var e=O()(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=2;break}return e.abrupt("return");case 2:u(!0),w(""),b("POST",window.ajaxurl,"application/x-www-form-urlencoded; charset=UTF-8","action=launch_store",(function(e){try{if(e.readyState===window.XMLHttpRequest.DONE)if(200===e.status&&e.responseText)n();else{var t=JSON.parse(e.responseText);w(N(t.data[0].message))}}catch(e){}u(!1)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r||(r=Object(m.__)("Launching your store","wc-calypso-bridge"));var g=E()("woocommerce-launch-store__button",{"woocommerce-launch-store__button--loading":s}),y=s?r:t;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(l.Button,{isPrimary:!0,className:g,onClick:_},s&&Object(o.createElement)(l.Spinner,null),y||Object(m.__)("Launch your store","wc-calypso-bridge")),f&&Object(o.createElement)("p",{className:"woocommerce-launch-store__button__error"},f))},D=function(){var e=N(window.wcCalypsoBridge.siteSlug),t=N(window.wcCalypsoBridge.homeUrl);return Object(o.createElement)(l.Card,{className:"woocommerce-task-card woocommerce-task-card__congratulations"},Object(o.createElement)(l.CardBody,null,Object(o.createElement)("div",{className:"woocommerce-task-card__congratulations__confetti"},Object(o.createElement)(T,null)),Object(o.createElement)("div",{className:"woocommerce-task-card__congratulations__text"},Object(o.createElement)(i.Text,{variant:"title.large",as:"h2",className:"woocommerce-task-card__title"},Object(m.__)("Woo! You did it!","wc-calypso-bridge")),Object(o.createElement)(i.Text,{as:"span"},Object(m.__)("Congratulations on launching your WooCommerce store. Take a moment to celebrate and share the news!","wc-calypso-bridge"))),Object(o.createElement)("div",{className:"woocommerce-task-card__congratulations__address-bar"},Object(o.createElement)(V,null),Object(o.createElement)("span",null,t),Object(o.createElement)("div",{className:"woocommerce-task-card__congratulations__address-bar__actions"},Object(o.createElement)(I,{contentToCopy:t}))),Object(o.createElement)("div",{className:"woocommerce-task-card__congratulations__links"},Object(o.createElement)(l.Button,{isPrimary:!0,onClick:function(){window.location=t}},Object(m.__)("View your store","wc-calypso-bridge"))),Object(o.createElement)("div",{className:"woocommerce-task-card__congratulations__text woocommerce-task-card__congratulations__text--footer"},Object(o.createElement)(i.Text,{as:"span"},Object(o.createInterpolateElement)(Object(m.__)("Changed your mind? You can make your store private again by updating your <a>Privacy</a> settings.","wc-calypso-bridge"),{a:Object(o.createElement)("a",{href:"https://wordpress.com/settings/general/"+e+"#site-privacy-settings"})})))))},z=function(e){var t=e.launchHandler,r=N(window.wcCalypsoBridge.siteSlug);return Object(o.createElement)(l.Card,{className:"woocommerce-task-card woocommerce-task-card__ready-to-launch"},Object(o.createElement)(l.CardBody,null,Object(o.createElement)(i.Text,{variant:"title.large",as:"h2",className:"woocommerce-task-card__title"},Object(m.__)("Ready to launch your store?","wc-calypso-bridge")),Object(o.createElement)(i.Text,{as:"span"},Object(m.__)("It's time to celebrate – you're ready to launch your store! Woo!","wc-calypso-bridge")),Object(o.createElement)("div",{className:"woocommerce-task-card__ready-to-launch__links"},Object(o.createElement)(q,{successCallback:t}))),Object(o.createElement)(l.CardFooter,null,Object(o.createElement)(i.Text,{as:"span"},Object(o.createInterpolateElement)(Object(m.__)("You can always revert this under <a>Settings</a>.","wc-calypso-bridge"),{a:Object(o.createElement)("a",{href:"https://wordpress.com/settings/general/"+r+"#site-privacy-settings"})}))))},G=function(e){var t=e.tasks,r=e.launchHandler,c=N(window.wcCalypsoBridge.siteSlug),n=(N(window.wcCalypsoBridge.homeUrl),t.map((function(e){var t=e.id,r=e.title,c=e.content,n=e.actionUrl,a=e.actionLabel,l=A,u=r,d=c,p=a;switch(t){case"payments":l=A,u=Object(m.__)("Get paid","wc-calypso-bridge"),d=Object(m.__)("Give your customers an easy and convenient way to pay! Set up one (or more!) of our fast and secure online or in person payment methods.","wc-calypso-bridge"),p=Object(m.__)("Get paid","wc-calypso-bridge");break;case"products":l=H,u=Object(m.__)("List your products","wc-calypso-bridge"),d=Object(m.__)("Start selling by adding products or services to your store. Create your products manually, or import them from an existing store.","wc-calypso-bridge"),p=Object(m.__)("List products","wc-calypso-bridge");break;case"add_domain":l=F,d=Object(m.__)("Choose an address for your new website or transfer a domain you already own.","wc-calypso-bridge"),p=Object(m.__)("Add a domain","wc-calypso-bridge")}var f="woocommerce-task-card__pending-tasks__task woocommerce-task-card__pending-tasks__task-"+t;return Object(o.createElement)("div",{className:f,key:t},Object(o.createElement)("div",{className:"woocommerce-task-card__pending-tasks__task__content"},Object(o.createElement)("div",{className:"woocommerce-task-card__pending-tasks__task__icon"},Object(o.createElement)(l,null)),Object(o.createElement)("div",{className:"woocommerce-task-card__pending-tasks__task__text"},Object(o.createElement)(i.Text,{variant:"title.large",as:"h3"},u),Object(o.createElement)(i.Text,{as:"span"},d))),Object(o.createElement)("div",{className:"woocommerce-task-card__pending-tasks__task__link"},n&&Object(o.createElement)(s.Link,{href:n,className:"components-button is-secondary",type:-1!==n.indexOf("page=wc-admin")?"wc-admin":"wp-admin"},p),!n&&Object(o.createElement)(s.Link,{className:"components-button is-secondary",href:Object(C.getAdminLink)("admin.php?page=wc-admin&task=".concat(t))},p)))})));return Object(o.createElement)(l.Card,{className:"woocommerce-task-card woocommerce-task-card__pending-tasks"},Object(o.createElement)(l.CardHeader,null,Object(o.createElement)(i.Text,{variant:"title.large",as:"h2",className:"woocommerce-task-card__title"},Object(m.__)("Before you launch","wc-calypso-bridge")),Object(o.createElement)(i.Text,{as:"span"},Object(m.__)("A few things to check before launching your store","wc-calypso-bridge"))),Object(o.createElement)(l.CardBody,null,n),Object(o.createElement)(l.CardFooter,null,Object(o.createElement)("div",{className:"woocommerce-task-card__pending-tasks__links"},Object(o.createElement)(q,{label:Object(m.__)("Launch anyway","wc-calypso-bridge"),successCallback:r})),Object(o.createElement)(i.Text,{as:"span"},Object(o.createInterpolateElement)(Object(m.__)("You can always revert this under <a>Settings</a>.","wc-calypso-bridge"),{a:Object(o.createElement)("a",{href:"https://wordpress.com/settings/general/"+c+"#site-privacy-settings"})}))))},J=function(e){var t=e.onComplete,r=e.query;if(r.status&&"success"===r.status)return Object(o.createElement)("div",{className:"woocommerce-launch-store"},Object(o.createElement)(D,null));var c=Object(k.useSelect)((function(e){return{isResolving:!e(S.ONBOARDING_STORE_NAME).hasFinishedResolution("getTaskLists"),taskLists:e(S.ONBOARDING_STORE_NAME).getTaskLists()}})),n=c.isResolving,a=c.taskLists;if(n)return Object(o.createElement)(R,null);var l=a.filter((function(e){return"setup"===e.id})).pop(),i=["payments","products","add_domain"],s=l.tasks.filter((function(e){return!0===e.canView&&!1===e.isComplete&&i.includes(e.id)})),m=s.length,u=l.tasks.filter((function(e){return!0===e.canView&&!1===e.isComplete})).length,d=function(){u?t({redirectPath:"admin.php?page=wc-admin&task=launch_site&status=success"}):t()};return Object(o.createElement)("div",{className:"woocommerce-launch-store"},!m&&Object(o.createElement)(z,{launchHandler:d}),m&&Object(o.createElement)(G,{tasks:s,launchHandler:d}))},W=r(19),Z=(r(28),function(e){var t=e.closeHandler;Object(o.useEffect)((function(){Object(u.recordEvent)("ecommerce_welcome_modal_open")}),[]);var r=N(window.wcCalypsoBridge.homeUrl+window.wcCalypsoBridge.assetPath+"assets/");return Object(o.createElement)(l.Guide,{onFinish:t,className:"ecommerce__welcome-modal",finishButtonText:Object(m.__)("Get started","wc-calypso-bridge"),pages:[{image:Object(o.createElement)("img",{src:r+"images/welcome-modal-illustration-2.png"}),content:Object(o.createElement)("div",{className:"ecommerce__welcome-modal__page-content"},Object(o.createElement)("h2",{className:"ecommerce__welcome-modal__page-content__header"},Object(m.__)("Meet your new Home","wc-calypso-bridge")),Object(o.createElement)("p",{className:"ecommerce__welcome-modal__page-content__body"},Object(m.__)("Get tips and insights on your store’s performance every time you jump back into your WordPress.com dashboard.","wc-calypso-bridge")))},{image:Object(o.createElement)("img",{src:r+"images/welcome-modal-illustration-1.png"}),content:Object(o.createElement)("div",{className:"ecommerce__welcome-modal__page-content"},Object(o.createElement)("h2",{className:"ecommerce__welcome-modal__page-content__header"},Object(m.__)("Move faster with our new navigation","wc-calypso-bridge")),Object(o.createElement)("p",{className:"ecommerce__welcome-modal__page-content__body"},Object(o.createInterpolateElement)(Object(m.__)("Getting things done with WooCommerce just got faster. <a>Learn more</a> about our new navigation — or go ahead and explore on your own.","wc-calypso-bridge"),{a:Object(o.createElement)("a",{href:"https://wordpress.com/support/navigating-the-ecommerce-plan/"})})))}]})}),U=Object(W.compose)(Object(k.withSelect)((function(e){var t=e(S.OPTIONS_STORE_NAME),r=t.getOption,c=t.hasFinishedResolution;return{isDismissed:"yes"===r("woocommerce_ecommerce_welcome_modal_dismissed"),isResolving:!c("getOption",["woocommerce_ecommerce_welcome_modal_dismissed"])||void 0===r("woocommerce_ecommerce_welcome_modal_dismissed")}})),Object(k.withDispatch)((function(e){return{updateOptions:e(S.OPTIONS_STORE_NAME).updateOptions}})))((function(e){var t=e.isDismissed,r=e.isResolving,c=e.updateOptions,n=Object(o.useState)(!0),a=h()(n,2),l=a[0],i=a[1];return t||r?null:l?Object(o.createElement)(Z,{closeHandler:function(){i(!1),c({woocommerce_ecommerce_welcome_modal_dismissed:"yes"}),Object(u.recordEvent)("ecommerce_welcome_modal_close")}}):null}));function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}if(r(29),P=(M=window.wcCalypsoBridge).isWooPage,B=M.homeUrl,0===document.referrer.indexOf("https://wordpress.com")?_.set("calypso"):P||_.set("wcadmin"),"calypso"===_.get()&&Object(a.addFilter)("woocommerce_navigation_root_back_url","wc-calypso-bridge",(function(){return function(e){var t=e.replace(/.*?:\/\//i,"").replace("/","::");return"https://wordpress.com/home/".concat(t)}(B)})),window.wcCalypsoBridge.isEcommercePlan&&(Object(b.registerPlugin)("wc-calypso-bridge",{scope:"woocommerce-tasks",render:function(){return Object(o.createElement)(f,{id:"launch_site"},(function(e){var t=e.onComplete,r=e.query,c=e.task;return Object(o.createElement)(J,{onComplete:t,query:r,task:c})}))}}),Object(a.addFilter)("woocommerce_admin_pages_list","wc-calypso-bridge",(function(e){return(e=e.map((function(e){return"/"===e.path?Y(Y({},e),{},{wpOpenMenu:"menu-dashboard"}):e}))).map((function(e){return"/customers"===e.path?Y(Y({},e),{},{wpOpenMenu:""}):e}))})),window.wcCalypsoBridge.showEcommerceNavigationModal&&window.wcCalypsoBridge.isWooPage)){var $=document.getElementById("wpbody-content"),K=$.querySelector(".wrap.woocommerce")||document.querySelector("#wpbody-content > .woocommerce")||$.querySelector(".wrap"),Q=document.createElement("div");Object(o.render)(Object(o.createElement)(U,null),$.insertBefore(Q,K))}}]);
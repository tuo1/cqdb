(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4184:function(e,t){var i;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)){if(i.length){var o=classNames.apply(null,i);o&&e.push(o)}}else if("object"===r){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){e.push(i.toString());continue}for(var s in i)n.call(i,s)&&i[s]&&e.push(s)}}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):void 0!==(i=(function(){return classNames}).apply(t,[]))&&(e.exports=i)}()},6840:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return i(9460)}])},3271:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return p}});let n=i(8754),r=i(1757),o=r._(i(7294)),s=n._(i(3935)),a=n._(i(9201)),l=i(3914),c=i(5494),d=i(869);i(1905);let u=i(1823),f=n._(i(4545)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function handleLoading(e,t,i,n,r,o){let s=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===s)return;e["data-loaded-src"]=s;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&r(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,r=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function getDynamicProps(e){let[t,i]=o.version.split("."),n=parseInt(t,10),r=parseInt(i,10);return n>18||18===n&&r>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,o.forwardRef)((e,t)=>{let{src:i,srcSet:n,sizes:r,height:s,width:a,decoding:l,className:c,style:d,fetchPriority:u,placeholder:f,loading:m,unoptimized:g,fill:p,onLoadRef:h,onLoadingCompleteRef:_,setBlurComplete:v,setShowAltText:w,onLoad:x,onError:b,...y}=e;return o.default.createElement("img",{...y,...getDynamicProps(u),loading:m,width:a,height:s,decoding:l,"data-nimg":p?"fill":"1",className:c,style:d,sizes:r,srcSet:n,src:i,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(b&&(e.src=e.src),e.complete&&handleLoading(e,f,h,_,v,g))},[i,f,h,_,v,b,g,t]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,f,h,_,v,g)},onError:e=>{w(!0),"empty"!==f&&v(!0),b&&b(e)}})});function ImagePreload(e){let{isAppRouter:t,imgAttributes:i}=e,n={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...getDynamicProps(i.fetchPriority)};return t&&s.default.preload?(s.default.preload(i.src,n),null):o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+i.src+i.srcSet+i.sizes,rel:"preload",href:i.srcSet?void 0:i.src,...n}))}let p=(0,o.forwardRef)((e,t)=>{let i=(0,o.useContext)(u.RouterContext),n=(0,o.useContext)(d.ImageConfigContext),r=(0,o.useMemo)(()=>{let e=m||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[n]),{onLoad:s,onLoadingComplete:a}=e,p=(0,o.useRef)(s);(0,o.useEffect)(()=>{p.current=s},[s]);let h=(0,o.useRef)(a);(0,o.useEffect)(()=>{h.current=a},[a]);let[_,v]=(0,o.useState)(!1),[w,x]=(0,o.useState)(!1),{props:b,meta:y}=(0,l.getImgProps)(e,{defaultLoader:f.default,imgConf:r,blurComplete:_,showAltText:w});return o.default.createElement(o.default.Fragment,null,o.default.createElement(g,{...b,unoptimized:y.unoptimized,placeholder:y.placeholder,fill:y.fill,onLoadRef:p,onLoadingCompleteRef:h,setBlurComplete:v,setShowAltText:x,ref:t}),y.priority?o.default.createElement(ImagePreload,{isAppRouter:!i,imgAttributes:b}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3914:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),i(1905);let n=i(2393),r=i(5494);function isStaticRequire(e){return void 0!==e.default}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getImgProps(e,t){var i;let o,s,a,{src:l,sizes:c,unoptimized:d=!1,priority:u=!1,loading:f,className:m,quality:g,width:p,height:h,fill:_=!1,style:v,onLoad:w,onLoadingComplete:x,placeholder:b="empty",blurDataURL:y,fetchPriority:j,layout:S,objectFit:C,objectPosition:P,lazyBoundary:N,lazyRoot:E,...I}=e,{imgConf:z,showAltText:k,blurComplete:R,defaultLoader:O}=t,L=z||r.imageConfigDefault;if("allSizes"in L)o=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);o={...L,allSizes:e,deviceSizes:t}}let A=I.loader||O;delete I.loader,delete I.srcSet;let D="__next_img_default"in A;if(D){if("custom"===o.loader)throw Error('Image with src "'+l+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=A;A=t=>{let{config:i,...n}=t;return e(n)}}if(S){"fill"===S&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!c&&(c=t)}let M="",W=getInt(p),q=getInt(h);if("object"==typeof(i=l)&&(isStaticRequire(i)||void 0!==i.src)){let e=isStaticRequire(l)?l.default:l;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,a=e.blurHeight,y=y||e.blurDataURL,M=e.src,!_){if(W||q){if(W&&!q){let t=W/e.width;q=Math.round(e.height*t)}else if(!W&&q){let t=q/e.height;W=Math.round(e.width*t)}}else W=e.width,q=e.height}}let B=!u&&("lazy"===f||void 0===f);(!(l="string"==typeof l?l:M)||l.startsWith("data:")||l.startsWith("blob:"))&&(d=!0,B=!1),o.unoptimized&&(d=!0),D&&l.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(d=!0),u&&(j="high");let F=getInt(g),G=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:P}:{},k?{}:{color:"transparent"},v),T=R||"empty"===b?null:"blur"===b?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:W,heightInt:q,blurWidth:s,blurHeight:a,blurDataURL:y||"",objectFit:G.objectFit})+'")':'url("'+b+'")',J=T?{backgroundSize:G.objectFit||"cover",backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:T}:{},U=function(e){let{config:t,src:i,unoptimized:n,width:r,quality:o,sizes:s,loader:a}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,i){let{deviceSizes:n,allSizes:r}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(i);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:o,kind:"x"}}(t,r,s),d=l.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:l.map((e,n)=>a({config:t,src:i,quality:o,width:e})+" "+("w"===c?e:n+1)+c).join(", "),src:a({config:t,src:i,quality:o,width:l[d]})}}({config:o,src:l,unoptimized:d,width:W,quality:F,sizes:c,loader:A}),V={...I,loading:B?"lazy":f,fetchPriority:j,width:W,height:q,decoding:"async",className:m,style:{...G,...J},sizes:U.sizes,srcSet:U.srcSet,src:U.src},Q={unoptimized:d,priority:u,placeholder:b,fill:_};return{props:V,meta:Q}}},2393:function(e,t){"use strict";function getImageBlurSvg(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:r,blurDataURL:o,objectFit:s}=e,a=n?40*n:t,l=r?40*r:i,c=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},645:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return l}});let n=i(8754),r=i(3914),o=i(1905),s=i(3271),a=n._(i(4545)),unstable_getImgProps=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,r.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}},l=s.Image},4545:function(e,t){"use strict";function defaultLoader(e){let{config:t,src:i,width:n,quality:r}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+n+"&q="+(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),defaultLoader.__next_img_default=!0;let i=defaultLoader},9460:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return App}});var n=i(5893);i(415);var r=i(9008),o=i.n(r),s=i(5460),a=i.n(s);let l=[{title:"Product",itemList:[{icon:"",des:"Features",href:"/feature"}]},{title:"Resources",itemList:[{icon:"",des:"Documentation",href:""},{icon:"",des:"Release notes",href:""},{icon:"",des:"Videos",href:""}]},{title:"Jion our community",itemList:[{icon:"/img/footer.png",des:"Slack",href:""}]},{title:"Contact us",itemList:[{icon:"",des:"Email : contact@bintools.cn",href:"contact@bintools.cn"}]}];var c=i(5675),d=i.n(c),u=i(1163),layout_footer=()=>{let e=(0,u.useRouter)(),goto=t=>{"contact@bintools.cn"==t?parent.location.href="mailto:contact@bintools.cn":t&&e.push(t)};return(0,n.jsx)("div",{className:a().contain,children:(0,n.jsx)("div",{className:a().top,children:(0,n.jsx)("div",{className:a().main,children:l.map((e,t)=>(0,n.jsxs)("div",{className:a().item,children:[(0,n.jsx)("div",{className:a().title,children:e.title}),e.itemList.map((e,t)=>(0,n.jsxs)("div",{className:a().desc,onClick:()=>{goto(e.href)},children:[e.icon&&(0,n.jsx)("div",{className:a().img,children:(0,n.jsx)(d(),{src:e.icon,width:20,height:20,alt:"footer_logo"})}),e.des]},t))]},t))})})})},f=i(1969),m=i.n(f),header=()=>{let e=(0,u.useRouter)();return(0,n.jsx)("div",{className:m().contain,children:(0,n.jsxs)("div",{className:m().main,children:[(0,n.jsxs)("div",{className:m().logo,onClick:()=>{e.push("/")},children:[(0,n.jsx)(d(),{src:"/img/cq_logo.png",width:36,height:36,alt:"logo"}),(0,n.jsx)("div",{className:m().text,children:(0,n.jsx)(d(),{src:"/img/cq_text.png",width:118,height:20,alt:"logo"})})]}),(0,n.jsx)("div",{className:m().menu,onClick:()=>{e.push("/")},children:"What's new"}),(0,n.jsx)("div",{className:m().menu,onClick:()=>{e.push("/feature")},children:"Features"}),(0,n.jsx)("div",{className:m().menu,onClick:()=>{location.href="/doc/Whitepaper"},children:"Documentation"}),(0,n.jsx)("div",{className:m().menu,onClick:()=>{e.push("/community")},children:"Community"}),(0,n.jsxs)("div",{className:m().down,onClick:()=>{e.push("/down")},children:[(0,n.jsx)("div",{className:m().down_blue}),"Download"]}),(0,n.jsx)("div",{className:m().doc})]})})},g=i(4184),p=i.n(g);let Layout=e=>{let{className:t,children:i}=e;return(0,n.jsxs)("div",{className:p()("min-h-screen overflow-hidden",t),children:[(0,n.jsx)(header,{}),(0,n.jsx)("main",{children:i}),(0,n.jsx)(layout_footer,{})]})};function App(e){let{Component:t,pageProps:i}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("title",{children:"CloudQuery"}),(0,n.jsx)("meta",{name:"keywords",content:"cq"}),(0,n.jsx)("meta",{name:"description",content:"An all-in-one database operation and control cloud platform"})]}),(0,n.jsx)(Layout,{children:(0,n.jsx)(t,{...i})})]})}},415:function(){},5460:function(e){e.exports={contain:"footer_contain__WjJzG",top:"footer_top__qR5ph",main:"footer_main__I3sn_",item:"footer_item__UjBSw",title:"footer_title__3SCz4",desc:"footer_desc__IeZfj",img:"footer_img__XHztA",bottom:"footer_bottom___3god"}},1969:function(e){e.exports={contain:"header_contain__waTJW",main:"header_main__TAqQW",logo:"header_logo__zKimJ",text:"header_text__trEjy",menu:"header_menu__x5ARZ",down:"header_down__px7DS",down_blue:"header_down_blue__6C_fp",doc:"header_doc__SIQTC"}},9008:function(e,t,i){e.exports=i(9201)},5675:function(e,t,i){e.exports=i(645)},1163:function(e,t,i){e.exports=i(9974)}},function(e){var __webpack_exec__=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return __webpack_exec__(6840),__webpack_exec__(9974)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[230],{7307:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"}},7638:function(e,t,n){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;let a=(i=n(6994))&&i.__esModule?i:{default:i};t.default=a,e.exports=a},6994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});var i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=_getRequireWildcardCache(t);if(n&&n.has(e))return n.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(i,r,o):i[r]=e[r]}return i.default=e,n&&n.set(e,i),i}(n(7294)),a=_interop_require_default(n(7307)),r=_interop_require_default(n(2074));function _interop_require_default(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_getRequireWildcardCache=function(e){return e?n:t})(e)}var o=i.forwardRef(function(e,t){var n,o;return i.createElement(r.default,(n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){var i;i=n[t],t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i})}return e}({},e),o=o={ref:t,icon:a.default},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n.push.apply(n,i)}return n})(Object(o)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}),n))})},2741:function(e,t,n){"use strict";var i=n(4836).default,a=n(5263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(7294)),o=i(n(7638)),s=i(n(4184)),l=i(n(3510)),c=i(n(5598)),d=i(n(8475)),u=i(n(3683)),m=n(7419);n(3594);var p=n(1929),h=i(n(5693)),f=i(n(1602)),v=i(n(643));let g=r.forwardRef((e,t)=>{let{getPrefixCls:n,direction:i,collapse:a}=r.useContext(p.ConfigContext),{prefixCls:f,className:g,rootClassName:b,style:x,bordered:y=!0,ghost:_,size:j,expandIconPosition:w="start",children:C,expandIcon:k}=e,N=(0,h.default)(e=>{var t;return null!==(t=null!=j?j:e)&&void 0!==t?t:"middle"}),$=n("collapse",f),S=n(),[O,P]=(0,v.default)($),I=r.useMemo(()=>"left"===w?"start":"right"===w?"end":w,[w]),E=(0,s.default)(`${$}-icon-position-${I}`,{[`${$}-borderless`]:!y,[`${$}-rtl`]:"rtl"===i,[`${$}-ghost`]:!!_,[`${$}-${N}`]:"middle"!==N},null==a?void 0:a.className,g,b,P),M=Object.assign(Object.assign({},(0,u.default)(S)),{motionAppear:!1,leavedClassName:`${$}-content-hidden`}),A=r.useMemo(()=>C?(0,c.default)(C).map((e,t)=>{var n,i;if(null===(n=e.props)||void 0===n?void 0:n.disabled){let n=null!==(i=e.key)&&void 0!==i?i:String(t),{disabled:a,collapsible:r}=e.props,o=Object.assign(Object.assign({},(0,d.default)(e.props,["disabled"])),{key:n,collapsible:null!=r?r:a?"disabled":void 0});return(0,m.cloneElement)(e,o)}return e}):null,[C]);return O(r.createElement(l.default,Object.assign({ref:t,openMotion:M},(0,d.default)(e,["rootClassName"]),{expandIcon:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=k?k(e):r.createElement(o.default,{rotate:e.isActive?90:void 0});return(0,m.cloneElement)(t,()=>({className:(0,s.default)(t.props.className,`${$}-arrow`)}))},prefixCls:$,className:E,style:Object.assign(Object.assign({},null==a?void 0:a.style),x)}),A))});t.default=Object.assign(g,{Panel:f.default})},1602:function(e,t,n){"use strict";var i=n(4836).default,a=n(5263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(7294)),o=i(n(4184)),s=i(n(3510));n(3594);var l=n(1929);let c=r.forwardRef((e,t)=>{let{getPrefixCls:n}=r.useContext(l.ConfigContext),{prefixCls:i,className:a,showArrow:c=!0}=e,d=n("collapse",i),u=(0,o.default)({[`${d}-no-arrow`]:!c},a);return r.createElement(s.default.Panel,Object.assign({ref:t},e,{prefixCls:d,className:u}))});t.default=c},8469:function(e,t,n){"use strict";var i=n(4836).default;t.Z=void 0;var a=i(n(2741));t.Z=a.default},643:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.genBaseStyle=t.default=void 0;var i=n(8078),a=n(2836),r=n(3184);let genBaseStyle=e=>{let{componentCls:t,contentBg:n,padding:a,headerBg:r,headerPadding:o,collapseHeaderPaddingSM:s,collapseHeaderPaddingLG:l,collapsePanelBorderRadius:c,lineWidth:d,lineType:u,colorBorder:m,colorText:p,colorTextHeading:h,colorTextDisabled:f,fontSize:v,fontSizeLG:g,lineHeight:b,marginSM:x,paddingSM:y,paddingLG:_,paddingXS:j,motionDurationSlow:w,fontSizeIcon:C,contentPadding:k}=e,N=`${d}px ${u} ${m}`;return{[t]:Object.assign(Object.assign({},(0,i.resetComponent)(e)),{backgroundColor:r,border:N,borderBottom:0,borderRadius:`${c}px`,"&-rtl":{direction:"rtl"},[`& > ${t}-item`]:{borderBottom:N,"&:last-child":{[`
            &,
            & > ${t}-header`]:{borderRadius:`0 0 ${c}px ${c}px`}},[`> ${t}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:o,color:h,lineHeight:b,cursor:"pointer",transition:`all ${w}, visibility 0s`,[`> ${t}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${t}-expand-icon`]:{height:v*b,display:"flex",alignItems:"center",paddingInlineEnd:x},[`${t}-arrow`]:Object.assign(Object.assign({},(0,i.resetIcon)()),{fontSize:C,svg:{transition:`transform ${w}`}}),[`${t}-header-text`]:{marginInlineEnd:"auto"}},[`${t}-header-collapsible-only`]:{cursor:"default",[`${t}-header-text`]:{flex:"none",cursor:"pointer"}},[`${t}-icon-collapsible-only`]:{cursor:"default",[`${t}-expand-icon`]:{cursor:"pointer"}}},[`${t}-content`]:{color:p,backgroundColor:n,borderTop:N,[`& > ${t}-content-box`]:{padding:k},"&-hidden":{display:"none"}},"&-small":{[`> ${t}-item`]:{[`> ${t}-header`]:{padding:s,paddingInlineStart:j,[`> ${t}-expand-icon`]:{marginInlineStart:y-j}},[`> ${t}-content > ${t}-content-box`]:{padding:y}}},"&-large":{[`> ${t}-item`]:{fontSize:g,[`> ${t}-header`]:{padding:l,paddingInlineStart:a,[`> ${t}-expand-icon`]:{height:g*b,marginInlineStart:_-a}},[`> ${t}-content > ${t}-content-box`]:{padding:_}}},[`${t}-item:last-child`]:{[`> ${t}-content`]:{borderRadius:`0 0 ${c}px ${c}px`}},[`& ${t}-item-disabled > ${t}-header`]:{[`
          &,
          & > .arrow
        `]:{color:f,cursor:"not-allowed"}},[`&${t}-icon-position-end`]:{[`& > ${t}-item`]:{[`> ${t}-header`]:{[`${t}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:x}}}}})}};t.genBaseStyle=genBaseStyle;let genArrowStyle=e=>{let{componentCls:t}=e,n=`> ${t}-item > ${t}-header ${t}-arrow svg`;return{[`${t}-rtl`]:{[n]:{transform:"rotate(180deg)"}}}},genBorderlessStyle=e=>{let{componentCls:t,headerBg:n,paddingXXS:i,colorBorder:a}=e;return{[`${t}-borderless`]:{backgroundColor:n,border:0,[`> ${t}-item`]:{borderBottom:`1px solid ${a}`},[`
        > ${t}-item:last-child,
        > ${t}-item:last-child ${t}-header
      `]:{borderRadius:0},[`> ${t}-item:last-child`]:{borderBottom:0},[`> ${t}-item > ${t}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${t}-item > ${t}-content > ${t}-content-box`]:{paddingTop:i}}}},genGhostStyle=e=>{let{componentCls:t,paddingSM:n}=e;return{[`${t}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${t}-item`]:{borderBottom:0,[`> ${t}-content`]:{backgroundColor:"transparent",border:0,[`> ${t}-content-box`]:{paddingBlock:n}}}}}};t.default=(0,r.genComponentStyleHook)("Collapse",e=>{let t=(0,r.mergeToken)(e,{collapseHeaderPaddingSM:`${e.paddingXS}px ${e.paddingSM}px`,collapseHeaderPaddingLG:`${e.padding}px ${e.paddingLG}px`,collapsePanelBorderRadius:e.borderRadiusLG});return[genBaseStyle(t),genBorderlessStyle(t),genGhostStyle(t),genArrowStyle(t),(0,a.genCollapseMotion)(t)]},e=>({headerPadding:`${e.paddingSM}px ${e.padding}px`,headerBg:e.colorFillAlter,contentPadding:`${e.padding}px 16px`,contentBg:e.colorBgContainer}))},183:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/feature",function(){return n(5012)}])},5795:function(e,t,n){"use strict";n.d(t,{Do:function(){return r},_i:function(){return a},zL:function(){return i}});let i=[{img:"/img/feature_1.png",title:"Unified",title2:"Personnel Access Entry",desc:"With a secure client that works with their only real identity to avoid problems like account leakage, and data leakage caused by multiple clients connecting to the database directly."},{img:"/img/feature_2.png",title:"Various ",title2:"Data Sources Support",desc:"Covering more than 20 data sources such like Oracle / MySQL / PostgreSQL / HIVE / Vertica / Impala."},{img:"/img/feature_3.png",title:"Efficient",title2:" Data Operations",desc:"CloudQuery provides native terminals, smart code completion, code inspections, on-the-fly error highlighting, file saving, import and export, and other functions. The operation mode is the same as any decent IDE, saving you time by making the process of writing SQL code and other data operation more efficient."},{img:"/img/feature_4.png",title:"Fine-grained",title2:" Permission Management",desc:"Minimum sufficient permission is granted to users , and all authorized actions are transparent to security managers. Managers can control users access to and operations on data in various ways, such as the time, object, behavior, frequency, and quantity of operations."},{img:"/img/feature_5.png",title:"",title2:"Data Desensitization",desc:"Classification and level management of data, which differentiates how sensitive data is displayed based on user level and data level without affecting normal data access while protecting privacy and confidential data. "},{img:"/img/feature_6.png",title:"",title2:"Accurate Audit Analysis",desc:"The platform monitors user behavior and records it comprehensively and accurately. The data operation track can be searched and traced."}],a=[{title:"Free Community Edition",desc:"We offer the community edition, which users can download and use for free."},{title:"Flexible deployment",desc:" Support deployment on cloud servers, physical servers, and virtual machines. Deployment does not require any changes to the database or server configurations."},{title:"Database management all-in-one",desc:"All your data operations and database management can be done through a single platform."},{title:"High-level security",desc:"Support complex authorization mechanisms and provide 100% accurate audit analysis capabilities. Can achieve single sign-on, multi-factor identity authentication."}],r=[{no_active:"/img/facebook.svg",active:"/img/facebook_hover.svg"},{no_active:"/img/twitter.svg",active:"/img/twitter_hover.svg"},{no_active:"/img/youtube.svg",active:"/img/youtube_hover.svg"},{no_active:"/img/slack_nomal.svg",active:"/img/slack_hover.svg"}]},5113:function(e,t,n){"use strict";var i=n(5893),a=n(6603),r=n.n(a),o=n(5675),s=n.n(o),l=n(7294),c=n(1187),d=n(5795);t.Z=()=>{let e=(0,l.useRef)(null),[t,n]=(0,l.useState)(999),mailsome1=()=>{var t,n;/^\w+([\.\-]\w+)*\@\w+([\.\-]\w+)*\.\w+$/.test(null==e?void 0:null===(t=e.current)||void 0===t?void 0:t.value)?parent.location.href="mailto:"+(null==e?void 0:null===(n=e.current)||void 0===n?void 0:n.value):c.ZP.error("The mailbox is malformed")};return(0,i.jsx)("div",{className:r().contain,children:(0,i.jsxs)("div",{className:r().main,children:[(0,i.jsxs)("div",{className:r().left,children:[(0,i.jsx)("div",{className:r().title,children:"Join the CloudQuery Slack Community!"}),(0,i.jsx)("div",{className:r().des,children:"Share notes, ask questions, and stay informed on feature releases, product roadmap, support, and cloud offerings!"}),(0,i.jsxs)("div",{className:r().email,children:[(0,i.jsx)("input",{ref:e,className:r().input,placeholder:"Enter your email"}),(0,i.jsx)("div",{className:r().btn,onClick:()=>{mailsome1()},children:"Submit"})]})]}),(0,i.jsxs)("div",{className:r().right,children:[(0,i.jsx)("div",{className:r().right_title,children:"Follow Us"}),(0,i.jsx)("div",{className:r().right_logo,children:d.Do.map((e,a)=>(0,i.jsx)("div",{children:(0,i.jsx)(s(),{src:t===a?e.active:e.no_active,alt:"production",className:r().img,width:32,height:32,onMouseMove:()=>{n(a)},onMouseLeave:()=>{n(999)}})},a))})]})]})})}},5012:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return feature}});var i=n(5893),a=n(6343),r=n.n(a),o=n(5675),s=n.n(o),l=n(1163),banner=()=>{let e=(0,l.useRouter)();return(0,i.jsxs)("div",{className:r().contain,children:[(0,i.jsxs)("div",{className:r().title,children:[(0,i.jsx)(s(),{src:"/img/cq_logo.png",width:63,height:68,alt:"cq"}),"CloudQuery"]}),(0,i.jsx)("div",{className:r().btn,onClick:()=>{e.push("/down")},children:"DOWNLOAD V2.5.0"})]})},c=n(9914),d=n.n(c);let u=["Data Manipulation","Audit Analysis","Permission Management","Data Protection","Dynamic Desensitization"];var m=n(7294),p=n(8469),h=n(5113),feature_show=()=>{let[e,t]=(0,m.useState)("1"),[n,a]=(0,m.useState)("1"),[r,o]=(0,m.useState)("1"),[l,c]=(0,m.useState)("1"),[f,v]=(0,m.useState)("1"),[g,b]=(0,m.useState)(0),x=[{key:"1",label:"Data source menu management",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:d().title,children:"Data Source Menu Edit"}),(0,i.jsx)("div",{children:"\xb7Support editing and management of groups, connections, databases and tables"}),(0,i.jsx)("div",{className:d().title,children:"SQL file dump"}),(0,i.jsx)("div",{children:"\xb7One click to generate database structure and table structure, which can be exported to SQL format files, and can be used to quickly create or build new environments"})]})},{key:"2",label:"Built in data source terminal",children:(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:"CloudQuery synchronization supports database terminal connection. When the editor cannot meet the requirements, terminal connection can be used for database related operations, covering all database commands"})})},{key:"3",label:"Interface Editor",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:d().title,children:"Editor"}),(0,i.jsx)("div",{children:"\xb7SQL statement intelligent prompt, keyword highlighting, dialect and features to meet the needs of daily editing"}),(0,i.jsx)("div",{className:d().title,children:"SQL statement collection"}),(0,i.jsx)("div",{children:"\xb7Support SQL statement collection. execution statements, aliases, usage times in collection management,statements or aliases"}),(0,i.jsx)("div",{className:d().title,children:"Personal Folders"}),(0,i.jsx)("div",{children:"\xb7By uploading local files to personal folders, you can easily import and edit complex SQL statements"})]})},{key:"4",label:"Result Set Management",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:d().title,children:"Rollover loading of result set"}),(0,i.jsx)("div",{children:"\xb7The result set data display adopts infinite rolling loading to improve query efficiency and reduce server pressure"}),(0,i.jsx)("div",{className:d().title,children:"\xb7Result Set Large Fields "}),(0,i.jsx)("div",{children:"\xb7The result set cell view supports the secondary display, editing, copying, and downloading of binary type fields"}),(0,i.jsx)("div",{className:d().title,children:" Data export"}),(0,i.jsx)("div",{children:"\xb7The result set data export supports EXCEL, CSV, TXT and PDF formats"})]})}],y=[{key:"1",label:"Audit screen",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:d().title,children:"The audit screen displays the statement execution status and active user ranking, so as to grasp the data operation status in real time"}),(0,i.jsxs)("div",{children:["\xb7Check the execution of statements in different time ranges: today, seven days, all ",(0,i.jsx)("br",{})," \xb7Display the total number of statement executions, the number of error statements and the number of users",(0,i.jsx)("br",{}),"\xb7The execution proportion of different types of statements",(0,i.jsx)("br",{})," ","\xb7Ranking of users' execution times today"]})]})},{key:"2",label:"Audit details",children:(0,i.jsx)("div",{children:(0,i.jsxs)("div",{children:["\xb7The details of each executed statement are recorded in the audit details, including the executing user, host, data source type (version), statement details, statement type, execution result, execution time and time consumption ",(0,i.jsx)("br",{}),"\xb7Audit details can be filtered and queried through condition filtering ",(0,i.jsx)("br",{}),"\xb7The statement details can be copied to achieve quick editing of historical statements",(0,i.jsx)("br",{})," \xb7Support the audit export function, which can export the detailed audit data to Excel format for subsequent data analysis, so as to facilitate tracing the source and improve the security of data assets"]})})},{key:"3",label:"Individually deployed",children:(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:"Starting from v1.3.0, CloudQuery supports the independent deployment of audit plug-ins to other servers to reduce the pressure on a single server"})})}],_=[{key:"1",label:"Operation authority",children:(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:"Users can be assigned connection access and operation permissions, which can be detailed to a table, view, function group, and stored procedure in a specific database. Users can also be authorized to perform specified operations, such as view, DML, DDL, and so on. Permission constraints on specified database elements are supported"})})},{key:"2",label:"Permission Set Management",children:(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:"Administrators can grant or revoke user permissions efficiently and conveniently by setting permission sets"})})}],j=[{key:"1",label:"Data Protection",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:d().title,children:"Combined with comprehensive data security policy, encryption and decryption technology and mandatory access control, to prevent confidential information leakage and theft, the data protection measures taken in the event include:"}),(0,i.jsxs)("div",{children:["\xb7Result set watermark addition ",(0,i.jsx)("br",{})," \xb7Anti duplication of result set data",(0,i.jsx)("br",{})," \xb7Set export permission ",(0,i.jsx)("br",{})," \xb7Data filtering, etc"]})]})}],w=[{key:"1",label:"Dynamic Desensitization",children:(0,i.jsx)("div",{children:(0,i.jsxs)("div",{children:["\xb7Built in multiple desensitization algorithms, flexibly set desensitization rules for sensitive fields",(0,i.jsx)("br",{})," \xb7Intelligent self defined scanning rules to automatically discover database sensitive fields",(0,i.jsx)("br",{})," \xb7Desensitization of dynamic result set, no omission, no leakage"]})})}];return(0,i.jsxs)("div",{className:d().contain,children:[(0,i.jsx)("div",{className:d().top,children:u.map((e,t)=>(0,i.jsx)("div",{className:g===t?"".concat(d().top_item," ").concat(d().top_active):d().top_item,onClick:()=>{var e;b(t),null===(e=document.getElementById("bottom_".concat(t+1)))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},children:e},t))}),(0,i.jsxs)("div",{className:d().bottom,children:[(0,i.jsxs)("div",{className:"".concat(d().bottom_item),id:"bottom_1",children:[(0,i.jsx)("div",{className:"".concat(d().item_left,"  ").concat(d().otherContain),children:(0,i.jsx)(p.Z,{accordion:!0,items:x,activeKey:e,onChange:e=>{t(String(e))}})}),(0,i.jsx)("div",{className:d().item_right,children:(0,i.jsx)(s(),{src:"/img/feature_bg_1.png",width:660,height:416,alt:"feature"})})]}),(0,i.jsxs)("div",{className:"".concat(d().bottom_item),id:"bottom_2",children:[(0,i.jsx)("div",{className:"".concat(d().item_left,"  ").concat(d().whiteContain),children:(0,i.jsx)(p.Z,{accordion:!0,items:y,activeKey:n,onChange:e=>{a(String(e))}})}),(0,i.jsx)("div",{className:d().item_right,children:(0,i.jsx)(s(),{src:"/img/feature_bg_2.png",width:660,height:416,alt:"feature"})})]}),(0,i.jsxs)("div",{className:"".concat(d().bottom_item),id:"bottom_3",children:[(0,i.jsx)("div",{className:"".concat(d().item_left,"  ").concat(d().otherContain),children:(0,i.jsx)(p.Z,{accordion:!0,items:_,activeKey:r,onChange:e=>{o(String(e))}})}),(0,i.jsx)("div",{className:d().item_right,children:(0,i.jsx)(s(),{src:"/img/feature_bg_3.png",width:660,height:416,alt:"feature"})})]}),(0,i.jsxs)("div",{className:"".concat(d().bottom_item),id:"bottom_4",children:[(0,i.jsx)("div",{className:"".concat(d().item_left,"  ").concat(d().whiteContain),children:(0,i.jsx)(p.Z,{accordion:!0,items:j,activeKey:l,onChange:e=>{c(String(e))}})}),(0,i.jsx)("div",{className:d().item_right,children:(0,i.jsx)(s(),{src:"/img/feature_bg_4.png",width:660,height:416,alt:"feature"})})]}),(0,i.jsxs)("div",{className:"".concat(d().bottom_item),id:"bottom_5",children:[(0,i.jsx)("div",{className:"".concat(d().item_left,"  ").concat(d().otherContain),children:(0,i.jsx)(p.Z,{accordion:!0,items:w,activeKey:f,onChange:e=>{v(String(e))}})}),(0,i.jsx)("div",{className:d().item_right,children:(0,i.jsx)(s(),{src:"/img/feature_bg_5.png",width:660,height:416,alt:"feature"})})]})]}),(0,i.jsx)(h.Z,{})]})},feature=()=>(0,i.jsxs)("div",{children:[(0,i.jsx)(banner,{}),(0,i.jsx)(feature_show,{})]})},6343:function(e){e.exports={contain:"banner_contain__bQCoT",title:"banner_title__4nYLv",btn:"banner_btn__zQtWp"}},9914:function(e){e.exports={contain:"show_contain__Ye1se",top:"show_top__Md1iu",title:"show_title__Fk6r8",desc:"show_desc__NjrTJ",top_item:"show_top_item__N_rzq",top_active:"show_top_active__ns107",bottom_item:"show_bottom_item__y5h21",bottom_item_main:"show_bottom_item_main__F_1Sx",item_left:"show_item_left__7EBxT",item_right:"show_item_right__WGtQL",whiteContain:"show_whiteContain___mC4d",otherContain:"show_otherContain__vNHH7"}},6603:function(e){e.exports={contain:"email_contain__fCwc6",main:"email_main__bQJAE",title:"email_title__GXz24",des:"email_des__4McUd",email:"email_email__btz_N",input:"email_input__GdjJV",btn:"email_btn__hcade",right:"email_right__Mt_eE",right_title:"email_right_title__nIpex",right_logo:"email_right_logo__FGnSs",img:"email_img__PQvtI"}},3510:function(e,t,n){"use strict";n.r(t),n.d(t,{Panel:function(){return w},default:function(){return j}});var i=n(7685),a=n(4902),r=n(1002),o=n(4184),s=n.n(o),l=n(1770),c=n(334),d=n(7294),u=n(7462),m=n(91),p=n(344),h=n(4942),f=n(2225),v=n(5105),g=d.forwardRef(function(e,t){var n,a=e.prefixCls,r=e.forceRender,o=e.className,l=e.style,c=e.children,u=e.isActive,m=e.role,p=d.useState(u||r),f=(0,i.Z)(p,2),v=f[0],g=f[1];return(d.useEffect(function(){(r||u)&&g(!0)},[r,u]),v)?d.createElement("div",{ref:t,className:s()("".concat(a,"-content"),(n={},(0,h.Z)(n,"".concat(a,"-content-active"),u),(0,h.Z)(n,"".concat(a,"-content-inactive"),!u),n),o),style:l,role:m},d.createElement("div",{className:"".concat(a,"-content-box")},c)):null});g.displayName="PanelContent";var b=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],x=d.forwardRef(function(e,t){var n,i,a=e.showArrow,r=void 0===a||a,o=e.headerClass,l=e.isActive,c=e.onItemClick,p=e.forceRender,x=e.className,y=e.prefixCls,_=e.collapsible,j=e.accordion,w=e.panelKey,C=e.extra,k=e.header,N=e.expandIcon,$=e.openMotion,S=e.destroyInactivePanel,O=e.children,P=(0,m.Z)(e,b),I="disabled"===_,E="header"===_,M="icon"===_,A=null!=C&&"boolean"!=typeof C,handleItemClick=function(){null==c||c(w)},D="function"==typeof N?N(e):d.createElement("i",{className:"arrow"});D&&(D=d.createElement("div",{className:"".concat(y,"-expand-icon"),onClick:["header","icon"].includes(_)?handleItemClick:void 0},D));var Z=s()((n={},(0,h.Z)(n,"".concat(y,"-item"),!0),(0,h.Z)(n,"".concat(y,"-item-active"),l),(0,h.Z)(n,"".concat(y,"-item-disabled"),I),n),x),R={className:s()(o,(i={},(0,h.Z)(i,"".concat(y,"-header"),!0),(0,h.Z)(i,"".concat(y,"-header-collapsible-only"),E),(0,h.Z)(i,"".concat(y,"-icon-collapsible-only"),M),i)),"aria-expanded":l,"aria-disabled":I,onKeyDown:function(e){("Enter"===e.key||e.keyCode===v.Z.ENTER||e.which===v.Z.ENTER)&&handleItemClick()}};return E||M||(R.onClick=handleItemClick,R.role=j?"tab":"button",R.tabIndex=I?-1:0),d.createElement("div",(0,u.Z)({},P,{ref:t,className:Z}),d.createElement("div",R,r&&D,d.createElement("span",{className:"".concat(y,"-header-text"),onClick:"header"===_?handleItemClick:void 0},k),A&&d.createElement("div",{className:"".concat(y,"-extra")},C)),d.createElement(f.default,(0,u.Z)({visible:l,leavedClassName:"".concat(y,"-content-hidden")},$,{forceRender:p,removeOnLeave:S}),function(e,t){var n=e.className,i=e.style;return d.createElement(g,{ref:t,prefixCls:y,className:n,style:i,isActive:l,forceRender:p,role:j?"tabpanel":void 0},O)}))}),y=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],convertItemsToNodes=function(e,t){var n=t.prefixCls,i=t.accordion,a=t.collapsible,r=t.destroyInactivePanel,o=t.onItemClick,s=t.activeKey,l=t.openMotion,c=t.expandIcon;return e.map(function(e,t){var p=e.children,h=e.label,f=e.key,v=e.collapsible,g=e.onItemClick,b=e.destroyInactivePanel,_=(0,m.Z)(e,y),j=String(null!=f?f:t),w=null!=v?v:a,C=!1;return C=i?s[0]===j:s.indexOf(j)>-1,d.createElement(x,(0,u.Z)({},_,{prefixCls:n,key:j,panelKey:j,isActive:C,accordion:i,openMotion:l,expandIcon:c,header:h,collapsible:w,onItemClick:function(e){"disabled"!==w&&(o(e),null==g||g(e))},destroyInactivePanel:null!=b?b:r}),p)})},getNewChild=function(e,t,n){if(!e)return null;var i=n.prefixCls,a=n.accordion,r=n.collapsible,o=n.destroyInactivePanel,s=n.onItemClick,l=n.activeKey,c=n.openMotion,u=n.expandIcon,m=e.key||String(t),p=e.props,h=p.header,f=p.headerClass,v=p.destroyInactivePanel,g=p.collapsible,b=p.onItemClick,x=!1;x=a?l[0]===m:l.indexOf(m)>-1;var y=null!=g?g:r,_={key:m,panelKey:m,header:h,headerClass:f,isActive:x,prefixCls:i,destroyInactivePanel:null!=v?v:o,openMotion:c,accordion:a,children:e.props.children,onItemClick:function(e){"disabled"!==y&&(s(e),null==b||b(e))},expandIcon:u,collapsible:y};return"string"==typeof e.type?e:(Object.keys(_).forEach(function(e){void 0===_[e]&&delete _[e]}),d.cloneElement(e,_))};function getActiveKeysArray(e){var t=e;if(!Array.isArray(t)){var n=(0,r.Z)(t);t="number"===n||"string"===n?[t]:[]}return t.map(function(e){return String(e)})}var _=Object.assign(d.forwardRef(function(e,t){var n,r=e.prefixCls,o=void 0===r?"rc-collapse":r,u=e.destroyInactivePanel,m=e.style,h=e.accordion,f=e.className,v=e.children,g=e.collapsible,b=e.openMotion,x=e.expandIcon,y=e.activeKey,_=e.defaultActiveKey,j=e.onChange,w=e.items,C=s()(o,f),k=(0,l.Z)([],{value:y,onChange:function(e){return null==j?void 0:j(e)},defaultValue:_,postState:getActiveKeysArray}),N=(0,i.Z)(k,2),$=N[0],S=N[1];(0,c.ZP)(!v,"`children` will be removed in next major version. Please use `items` instead.");var O=(n={prefixCls:o,accordion:h,openMotion:b,expandIcon:x,collapsible:g,destroyInactivePanel:void 0!==u&&u,onItemClick:function(e){return S(function(){return h?$[0]===e?[]:[e]:$.indexOf(e)>-1?$.filter(function(t){return t!==e}):[].concat((0,a.Z)($),[e])})},activeKey:$},Array.isArray(w)?convertItemsToNodes(w,n):(0,p.Z)(v).map(function(e,t){return getNewChild(e,t,n)}));return d.createElement("div",{ref:t,className:C,style:m,role:h?"tablist":void 0},O)}),{Panel:x}),j=_,w=_.Panel}},function(e){e.O(0,[187,566,774,888,179],function(){return e(e.s=183)}),_N_E=e.O()}]);
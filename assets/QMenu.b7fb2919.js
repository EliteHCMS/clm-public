var ie=Object.defineProperty,ce=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var K=(e,a,o)=>a in e?ie(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,l=(e,a)=>{for(var o in a||(a={}))fe.call(a,o)&&K(e,o,a[o]);if(H)for(var o of H(a))de.call(a,o)&&K(e,o,a[o]);return e},b=(e,a)=>ce(e,re(a));import{bF as ve,bN as ge,bG as he,c8 as me,bO as ke,r as Q,c,bH as Pe,c9 as Te,bP as Ce,ca as be,bR as ye,cb as Se,w as W,cc as Oe,cd as j,ce as qe,cf as Be,cg as Fe,ch as Ee,ci as xe,cj as we,h as U,bU as Me,bm as Re,aK as Ae,g as De,ck as He,c0 as Ke}from"./index.6c674a19.js";import{u as Qe,v as _,a as We,b as je,c as Ue,p as G,d as _e,r as I,s as Ge}from"./position-engine.703db134.js";var $e=ve({name:"QMenu",inheritAttrs:!1,props:b(l(l(l(l({},Qe),ge),he),me),{persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:_},self:{type:String,validator:_},offset:{type:Array,validator:We},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}}),emits:[...ke,"click","escape-key"],setup(e,{slots:a,emit:o,attrs:g}){let r=null,v,f,h;const y=De(),{proxy:m}=y,{$q:n}=m,s=Q(null),u=Q(!1),L=c(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),N=Pe(e,n),{registerTick:$,removeTick:S}=Te(),{registerTimeout:O,removeTimeout:q}=Ce(),{transition:z,transitionStyle:J}=be(e,u),{localScrollTarget:B,changeScrollEvent:V,unconfigureScrollTarget:X}=je(e,A),{anchorEl:i,canShow:Y}=Ue({showing:u}),{hide:F}=ye({showing:u,canShow:Y,handleShow:oe,handleHide:ae,hideOnRouteChange:L,processOnMount:!0}),{showPortal:E,hidePortal:x,renderPortal:Z}=Se(y,s,se),k={anchorEl:i,innerRef:s,onClickOutside(t){if(e.persistent!==!0&&u.value===!0)return F(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&Ke(t),!0}},w=c(()=>G(e.anchor||(e.cover===!0?"center middle":"bottom start"),n.lang.rtl)),p=c(()=>e.cover===!0?w.value:G(e.self||"top start",n.lang.rtl)),ee=c(()=>(e.square===!0?" q-menu--square":"")+(N.value===!0?" q-menu--dark q-dark":"")),te=c(()=>e.autoClose===!0?{onClick:ne}:{}),M=c(()=>u.value===!0&&e.persistent!==!0);W(M,t=>{t===!0?(Oe(T),_e(k)):(j(T),I(k))});function P(){He(()=>{let t=s.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function oe(t){if(S(),q(),r=e.noRefocus===!1?document.activeElement:null,qe(D),E(),A(),v=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const C=Be(t);if(C.left!==void 0){const{top:ue,left:le}=i.value.getBoundingClientRect();v={left:C.left-le,top:C.top-ue}}}f===void 0&&(f=W(()=>n.screen.width+"|"+n.screen.height+"|"+e.self+"|"+e.anchor+"|"+n.lang.rtl,d)),e.noFocus!==!0&&document.activeElement.blur(),$(()=>{d(),e.noFocus!==!0&&P()}),O(()=>{n.platform.is.ios===!0&&(h=e.autoClose,s.value.click()),d(),E(!0),o("show",t)},e.transitionDuration)}function ae(t){S(),q(),x(),R(!0),r!==null&&(t===void 0||t.qClickOutside!==!0)&&(r.focus(),r=null),O(()=>{x(!0),o("hide",t)},e.transitionDuration)}function R(t){v=void 0,f!==void 0&&(f(),f=void 0),(t===!0||u.value===!0)&&(Fe(D),X(),I(k),j(T)),t!==!0&&(r=null)}function A(){(i.value!==null||e.scrollTarget!==void 0)&&(B.value=Ee(i.value,e.scrollTarget),V(B.value,d))}function ne(t){h!==!0?(xe(m,t),o("click",t)):h=!1}function D(t){M.value===!0&&e.noFocus!==!0&&we(s.value,t.target)!==!0&&P()}function T(t){o("escape-key"),F(t)}function d(){const t=s.value;t===null||i.value===null||Ge({el:t,offset:e.offset,anchorEl:i.value,anchorOrigin:w.value,selfOrigin:p.value,absoluteOffset:v,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function se(){return U(Re,{name:z.value,appear:!0},()=>u.value===!0?U("div",l(b(l({},g),{ref:s,tabindex:-1,class:["q-menu q-position-engine scroll"+ee.value,g.class],style:[g.style,J.value]}),te.value),Me(a.default)):null)}return Ae(R),Object.assign(m,{focus:P,updatePosition:d}),Z}});export{$e as Q};

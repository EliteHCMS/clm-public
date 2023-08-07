import{l as Q,_ as C,A as o,aq as r,br as a,bP as h,d as t,bQ as w,ar as p,ax as A,ac as b,G as D,bR as H,b5 as m,bS as Z,B as _,F as R,b4 as z,H as $,r as y,bT as x,bU as ee,bV as te,w as I,bW as q,D as k,bt as ae}from"./index.62f4c3c5.js";import{Q as oe,a as O}from"./QHeader.e2b1832d.js";import{Q as ne}from"./QMenu.83b714c5.js";import{Q as P}from"./QToolbar.2ba9ed78.js";import{Q as se}from"./QImg.ea2b2721.js";import{Q as B}from"./QList.11a66c2b.js";import{Q as K}from"./QSelect.63d295fd.js";import{Q as re,a as ie}from"./QDrawer.37d6033e.js";import{Q as le,a as ue}from"./QLayout.791bb68a.js";import{C as me}from"./ClosePopup.c949d571.js";import{Q as pe}from"./QBadge.5fca7b14.js";import{M as de,Q as ce}from"./MenuSubLink.5cdf26c9.js";import{u as fe}from"./use-quasar.4c4dbdcf.js";import{u as ve}from"./i18n.3f666946.js";import{u as ge,b as ye,q as N}from"./app.ae0068fa.js";import{_ as ke}from"./KioskLogin.30744b67.js";import{_ as be}from"./languageSelector.903f624f.js";import{_ as _e}from"./version.2b118917.js";import{h as j}from"./HelpDeskTicket.9bfb805b.js";import"./QResizeObserver.c2864a65.js";import"./position-engine.9f816e9b.js";import"./selection.3494d29b.js";import"./QChip.9ae5b419.js";import"./rtl.b51694b1.js";import"./TouchPan.40d206a0.js";import"./touch.70a9dd44.js";import"./QSlideTransition.4bb6ee97.js";import"./_commonjsHelpers.a26ce4be.js";import"./dayjs.b3414925.js";import"./localForage.f977d509.js";import"./api.646f206c.js";import"./index.04bc0a32.js";import"./vee-validate.esm.bd7c3d30.js";import"./array.5117e02c.js";import"./QTooltip.9c964233.js";import"./QFile.bcd026de.js";import"./QForm.617a9252.js";const he=Q({name:"MenuLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},to:{type:Object,default:()=>({path:"",exact:!0})},icon:{type:String,default:""},mini:{type:Boolean,default:!1},subMenu:{type:Array,default:null},count:{type:Number,default:null}}});function Me(e,i,v,l,g,d){return o(),r(H,{to:e.to,class:D(["rounded-borders bg-white",{"q-ma-sm":!e.mini,"q-ma-xs":e.mini}]),"active-class":e.mini?"brand-active-menu text-white":"brand-active-menu text-white q-py-md",exact:""},{default:a(()=>[e.icon?(o(),r(h,{key:0,avatar:""},{default:a(()=>[t(w,{name:e.icon},null,8,["name"])]),_:1})):p("",!0),t(h,null,{default:a(()=>[t(K,null,{default:a(()=>[A(b(e.title),1)]),_:1})]),_:1}),e.count?(o(),r(h,{key:1,side:"",top:""},{default:a(()=>[t(pe,{color:"primary",label:e.count},null,8,["label"])]),_:1})):p("",!0)]),_:1},8,["to","class","active-class"])}var Se=C(he,[["render",Me]]);const qe=Q({name:"MenuExpanded",components:{MenuSubLink:de},props:{title:{type:String,required:!0},caption:{type:String,default:""},to:{type:Object,default:()=>({path:"",exact:!0})},icon:{type:String,default:""},mini:{type:Boolean,default:!1},subMenu:{type:Array,default:null}}});function we(e,i,v,l,g,d){const c=m("MenuSubLink");return o(),r(ce,{icon:e.icon,label:e.title,class:D(["rounded-borders bg-white",{"q-ma-sm":!e.mini,"q-ma-xs":e.mini}]),"active-class":"brand-active-menu text-white",exact:""},{default:a(()=>[t(Z),t(h,null,{default:a(()=>[t(B,null,{default:a(()=>[(o(!0),_(R,null,z(e.subMenu,u=>(o(),r(c,$({key:u},u,{mini:e.mini}),null,16,["mini"]))),128))]),_:1})]),_:1})]),_:1},8,["icon","label","class"])}var $e=C(qe,[["render",we]]);const Qe=Q({name:"MenuNav",components:{MenuLink:Se,MenuExpanded:$e},props:{title:{type:String,required:!0},caption:{type:String,default:""},to:{type:Object,default:()=>({path:"",exact:!0})},icon:{type:String,default:""},mini:{type:Boolean,default:!1},subMenu:{type:Array,default:null}}});function Ce(e,i,v,l,g,d){const c=m("MenuLink"),u=m("MenuExpanded");return o(),_("div",null,[!e.subMenu&&e.to?(o(),r(c,$({key:0},{...e.$props,...e.$attrs},{mini:e.mini}),null,16,["mini"])):e.subMenu&&e.subMenu.length>0?(o(),r(u,$({key:1},{...e.$props,...e.$attrs},{mini:e.mini}),null,16,["mini"])):p("",!0)])}var Le=C(Qe,[["render",Ce]]);const Te=Q({name:"MainLayout",components:{MenuNav:Le,kioskLogin:ke,languageSelector:be,version:_e,helpDeskTicket:j},setup(){const e=fe(),{locale:i}=ve(),v=y(!1),l=y(!1),g=y(!1),d=y(!1),c=y(!1),u=x(),f=ee(),M=ge(),S=ye(),{toolbarTitle:L}=S,{getUserType:T}=M,{onKiosk:n,activeMenu:F,pageType:G,startPageEnabled:V,kioskActive:W,homeButtonEnabled:J}=te(S),X=y(!1),U=async s=>{await N.checkKioskStatus(s)||(c.value=!0)};if(n.value&&U(!0),f.query&&f.query.office_id){const s=Object.assign({},f.query);delete s.office_id,delete s.qr,u.replace({query:s})}I(W,s=>{!s&&n.value&&U()}),I(()=>f.query,async()=>{if(n.value&&U(!1),f.query.office_id){const s=Object.assign({},f.query);delete s.office_id,s.qr&&(N.checkInUser(),delete s.qr),u.replace({query:s})}});const E=async()=>{n.value&&(i.value="en-US"),M.logout().then(()=>{V.value&&n.value?u.replace({name:"start"}):u.replace({name:"login"})})},Y=()=>{E()};return{tab:y("mails"),userStore:M,leftDrawerOpen:v,rightDrawerOpen:g,miniState:l,miniHover:d,kioskPrompt:c,onIdle:Y,onKiosk:n,activeMenu:F,homeButtonEnabled:J,miniMouseOver(){l.value===!0&&(d.value=!1)},miniMouseOut(){l.value===!0&&(d.value=!0)},toggleLeftDrawer(){e.screen.gt.sm?(l.value=!l.value,l.value===!0&&(d.value=!0)):v.value=!v.value},toggleRightDrawer(){g.value=!g.value},drawerClick(s){l.value&&(l.value=!1,s.stopPropagation())},logout:E,toolbarTitle:L,pageType:G,startPageEnabled:V,helpDeskTicket:j,addTicket:X,getUserType:T}}}),Ue={key:0,class:"q-mr-sm q-ml-sm",src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo-white.png",alt:"BrandSafway Logo",height:"25"},Be={key:0},De={key:1},Ve={class:"q-gutter-sm row items-center no-wrap"},Ee={class:"row no-wrap q-pa-md"},Ie={class:"column items-center"},Oe={class:"text-subtitle1 q-mt-md q-mb-xs"};function Pe(e,i,v,l,g,d){const c=m("languageSelector"),u=m("MenuNav"),f=m("router-view"),M=m("kioskLogin"),S=m("v-idle"),L=m("version"),T=m("helpDeskTicket");return o(),r(ue,{view:"hHh lpR fFf"},{default:a(()=>[t(oe,{elevated:""},{default:a(()=>[t(P,{style:{height:"62px"}},{default:a(()=>[t(q,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),e.$q.screen.gt.sm?(o(),_("img",Ue)):p("",!0),t(O,null,{default:a(()=>[e.$q.screen.lt.sm?(o(),_("span",Be)):(o(),_("span",De,b(e.toolbarTitle),1))]),_:1}),k("div",Ve,[t(c,{dense:"",borderless:"",class:"lang-white"}),t(q,{flat:"",dense:"",color:"white"},{default:a(()=>[k("div",null,b(e.userStore.getUser[35])+" "+b(e.userStore.getUser[37]),1),t(w,{right:"",size:"2.2em",name:"account_circle"}),t(ne,null,{default:a(()=>[k("div",Ee,[k("div",Ie,[t(w,{right:"",size:"72px",name:"account_circle",class:"q-mr-md"}),k("div",Oe,b(e.userStore.getUser[35])+" "+b(e.userStore.getUser[37]),1),ae(t(q,{color:"primary",label:e.$t("logout"),push:"",size:"sm",onClick:e.logout},null,8,["label","onClick"]),[[me]])])])]),_:1})]),_:1})])]),_:1})]),_:1}),t(re,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":i[1]||(i[1]=n=>e.leftDrawerOpen=n),side:"left","show-if-above":"",bordered:"",mini:e.miniState&&e.miniHover,onMouseover:e.miniMouseOver,onMouseout:e.miniMouseOut,onClickCapture:e.drawerClick,class:"text-primary bg-white"},{default:a(()=>[t(ie,{class:"fit"},{default:a(()=>[e.$q.screen.lt.sm?(o(),r(P,{key:0,style:{height:"64px"}},{default:a(()=>[t(O,{class:"items-center"},{default:a(()=>[t(se,{src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo.svg",style:{"max-width":"245px"},fit:"center",class:"q-ml-md"})]),_:1})]),_:1})):p("",!0),t(B,{class:"q-mt-sm"},{default:a(()=>[(o(!0),_(R,null,z(e.activeMenu,n=>(o(),r(u,$({key:n.title},n,{mini:e.miniState}),null,16,["mini"]))),128))]),_:1}),e.getUserType==="Project User"||e.getUserType==="QuickBase User"?(o(),r(B,{key:1,class:"q-mt-sm"},{default:a(()=>[k("div",null,[t(H,{class:D(["rounded-borders bg-white",{"q-ma-sm":!e.miniState,"q-ma-xs":e.miniState}]),clickable:"",onClick:i[0]||(i[0]=n=>e.addTicket=!0)},{default:a(()=>[t(h,{avatar:""},{default:a(()=>[t(w,{name:"fa-solid fa-circle-info"})]),_:1}),t(h,null,{default:a(()=>[t(K,null,{default:a(()=>[A("Request Support")]),_:1})]),_:1})]),_:1},8,["class"])])]),_:1})):p("",!0)]),_:1})]),_:1},8,["modelValue","mini","onMouseover","onMouseout","onClickCapture"]),t(le,null,{default:a(()=>[t(f)]),_:1}),e.onKiosk?(o(),r(M,{key:0,modelValue:e.kioskPrompt,"onUpdate:modelValue":i[2]||(i[2]=n=>e.kioskPrompt=n)},null,8,["modelValue"])):p("",!0),e.onKiosk?(o(),r(S,{key:1,onIdle:e.onIdle,duration:300,style:{display:"none"}},null,8,["onIdle"])):p("",!0),e.onKiosk&&e.startPageEnabled&&e.homeButtonEnabled?(o(),r(q,{key:2,icon:"o_home",onClick:e.onIdle,class:"z-max home-button-main",size:"xl",ripple:!0},null,8,["onClick"])):p("",!0),t(L),t(T,{modelValue:e.addTicket,"onUpdate:modelValue":i[3]||(i[3]=n=>e.addTicket=n)},null,8,["modelValue"])]),_:1})}var St=C(Te,[["render",Pe]]);export{St as default};

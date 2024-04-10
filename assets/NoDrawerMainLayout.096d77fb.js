import{Q as P,a as R}from"./QHeader.e6a88b71.js";import{_ as z,l as E,b7 as _,B as g,as as H,bt as i,r as n,bV as I,bW as V,bX as j,w as Q,d as s,C as h,at as K,ae as c,E as m,bY as y,bS as C,bv as $}from"./index.1bdfb1af.js";import{Q as A}from"./QMenu.92ffa49f.js";import{Q as F}from"./QToolbar.7de023f9.js";import{Q as W,a as X}from"./QLayout.b34bded4.js";import{C as T}from"./ClosePopup.edec0437.js";import{u as Y}from"./use-quasar.04742e8f.js";import{u as G}from"./i18n.8bfbf2a5.js";import{u as J,b as Z,q as D}from"./app.b866ce7a.js";import{_ as x}from"./languageSelector.2f16c0e4.js";import{_ as ee}from"./version.f0d3b635.js";import"./QResizeObserver.e82f054c.js";import"./position-engine.f90a4f55.js";import"./selection.424f2d7d.js";import"./_commonjsHelpers.a26ce4be.js";import"./dayjs.d9609b5e.js";import"./localForage.34b90606.js";import"./index.04bc0a32.js";import"./QSelect.bc92d132.js";import"./QChip.4ce28263.js";import"./rtl.b51694b1.js";import"./QList.756f4e56.js";const te=E({name:"MainLayout",components:{languageSelector:x,version:ee},setup(){const t=Y(),{locale:b}=G(),p=n(!1),o=n(!1),f=n(!1),u=n(!1),d=n(!1),r=I(),a=V(),k=J(),q=Z(),{toolbarTitle:M}=q,{onKiosk:l,activeMenu:B,pageType:U,startPageEnabled:w,kioskActive:L}=j(q),v=async e=>{await D.checkKioskStatus(e)||(d.value=!0)};if(l.value&&v(!0),a.query&&a.query.office_id){const e=Object.assign({},a.query);delete e.office_id,delete e.qr,r.replace({query:e})}Q(L,e=>{!e&&l.value&&v()}),Q(()=>a.query,async()=>{if(l.value&&v(!1),a.query.office_id){const e=Object.assign({},a.query);delete e.office_id,e.qr&&(D.checkInUser(),delete e.qr),r.replace({query:e})}});const S=async()=>{l.value&&(b.value="en-US"),k.logout().then(()=>{w.value&&l.value?r.replace({name:"start"}):r.replace({name:"login"})})},O=()=>{S()},N=async()=>{r.push({name:"settings"})};return{tab:n("mails"),userStore:k,leftDrawerOpen:p,rightDrawerOpen:f,miniState:o,miniHover:u,kioskPrompt:d,onIdle:O,onKiosk:l,activeMenu:B,miniMouseOver(){o.value===!0&&(u.value=!1)},miniMouseOut(){o.value===!0&&(u.value=!0)},toggleLeftDrawer(){t.screen.gt.sm?(o.value=!o.value,o.value===!0&&(u.value=!0)):p.value=!p.value},toggleRightDrawer(){f.value=!f.value},drawerClick(e){o.value&&(o.value=!1,e.stopPropagation())},logout:S,toolbarTitle:M,pageType:U,startPageEnabled:w,goToSettings:N}}}),se={key:0,class:"q-mr-sm q-ml-sm",src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo-white.png",alt:"BrandSafway Logo",height:"25"},oe={key:0},ae={key:1},re={class:"q-gutter-sm row items-center no-wrap"},ie={class:"row no-wrap q-pa-md"},le={class:"column items-center"},ne={class:"text-subtitle1 q-mt-md q-mb-xs"};function ue(t,b,p,o,f,u){const d=_("languageSelector"),r=_("router-view"),a=_("version");return g(),H(W,{view:"hHh lpR fFf"},{default:i(()=>[s(R,{class:"print-hide",elevated:""},{default:i(()=>[s(F,{style:{height:"62px"}},{default:i(()=>[t.$q.screen.gt.sm?(g(),h("img",se)):K("",!0),s(P,null,{default:i(()=>[t.$q.screen.lt.sm?(g(),h("span",oe)):(g(),h("span",ae,c(t.toolbarTitle),1))]),_:1}),m("div",re,[s(d,{dense:"",borderless:"",class:"lang-white"}),s(y,{flat:"",dense:"",color:"white"},{default:i(()=>[m("div",null,c(t.userStore.getUser[35])+" "+c(t.userStore.getUser[37]),1),s(C,{right:"",size:"2.2em",name:"account_circle"}),s(A,null,{default:i(()=>[m("div",ie,[m("div",le,[s(C,{right:"",size:"72px",name:"account_circle",class:"q-mr-md"}),m("div",ne,c(t.userStore.getUser[35])+" "+c(t.userStore.getUser[37]),1),$(s(y,{color:"primary",label:t.$t("settings"),push:"",size:"sm",class:"q-mb-xs",onClick:t.goToSettings},null,8,["label","onClick"]),[[T]]),$(s(y,{color:"primary",label:t.$t("logout"),push:"",size:"sm",onClick:t.logout},null,8,["label","onClick"]),[[T]])])])]),_:1})]),_:1})])]),_:1})]),_:1}),s(X,null,{default:i(()=>[s(r)]),_:1}),s(a)]),_:1})}var Le=z(te,[["render",ue]]);export{Le as default};

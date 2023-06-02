import{Q as V}from"./QSpace.bdccd3c8.js";import{bV as O,r as i,w as E,aT as M,c as _,A as w,B as h,d as t,br as l,cE as R,D as r,G as j,a8 as c,ac as u,cH as U,cF as W,bQ as F,bW as x,ax as D}from"./index.4017ca31.js";import{Q as P}from"./QTooltip.1e7f358f.js";import{Q as $}from"./QTd.a5677bd1.js";import{u as G}from"./use-quasar.5edd4060.js";import{e as H}from"./export-file.dc78ba05.js";import{I as J,b as K}from"./quickbase.4804bb81.js";import{dayjs as X}from"./dayjs.01a1f0cd.js";import{_ as Z}from"./hiringTabs.fe0b7ac9.js";import{_ as ee}from"./officeSelector.67dda656.js";import{_ as te}from"./aTable.d62af6a4.js";import"./position-engine.9b406c07.js";import"./selection.238bfdbe.js";import"./_commonjsHelpers.a26ce4be.js";import"./index.04bc0a32.js";import"./localForage.8295c071.js";import"./api.a5c07642.js";import"./i18n.c0a86e49.js";import"./QBadge.ce8a835b.js";import"./QRouteTab.8feae228.js";import"./QTabs.e985372c.js";import"./QResizeObserver.1fc8b5d0.js";import"./rtl.b51694b1.js";import"./QSelect.f649ca34.js";import"./QChip.4797ac30.js";import"./QMenu.f2054918.js";import"./QTable.cf3c1214.js";import"./QList.5e1c5b15.js";import"./QMarkupTable.73ed5d05.js";import"./use-fullscreen.61aac10e.js";const ae={class:"q-pa-md"},oe={class:"row items-center"},le={class:"col-12 col-md-5 q-px-sm"},se={class:"col-12 col-md-3 q-px-sm"},ne={class:"col-12 col-md-5 q-px-sm"},ie={key:0},re={key:1},ze={__name:"index",setup(ce){const d=G(),y=J(),{openWindow:B}=K(),{fetchPending:N,fetchAllPending:I}=y,{getPending:q,getSelectedOffice:n,getLoadingState:k}=O(y),m=i(n.value?n.value[8]:null),p=i("Pending"),Q=i("pending"),v=i(""),C=i({sortBy:"1",descending:!1,rowsPerPage:150}),b=a=>{m.value?N({selectedId:m.value,refresh:a}):I({can:"read",refresh:a})};b(!0),E(n,()=>{m.value=n.value?n.value[8]:null,b()});const L=i(new Date),A=setInterval(()=>{L.value=new Date},1e3);M(()=>{clearInterval(A)});const Y=_(()=>["startTimestamp","name","phoneNumber","project","jobNumber","classification","action",...n.value?[]:["office"]]),g=_(()=>[{name:"startTimestamp",align:"left",label:"Time",field:"70",sortable:!1},{name:"name",align:"left",label:"Name",field:"25",sortable:!1},{name:"phoneNumber",align:"center",label:"Phone Number",field:"14",sortable:!1},{name:"project",align:"center",label:"Project",field:"184",sortable:!1},{name:"jobNumber",align:"center",label:"Job #",field:"63",sortable:!1},{name:"classification",align:"center",label:"Classification",field:"45",sortable:!1},{name:"office",align:"center",label:"Office",field:"61",sortable:!1},{name:"action",align:"center",label:"",sortable:!1}]),f=_(()=>q.value(m.value).filter(a=>!0).sort((a,s)=>C.value.descending?a[1].isBefore(s[1]):a[1].isAfter(s[1]))),S=(a,s,e)=>{let o=s!==void 0?s(a,e):a;return o=o==null?"":String(o),o=o.split('"').join('""'),`"${o}"`},z=a=>{B(null,{url:`https://elitehcms.quickbase.com/db/bpzpy6n3x?a=dbpage&pageID=2&ee=${a[16]}`,name:"View Profile"})},T=()=>{const a=[g.value.map(e=>S(e.label))].concat(f.value.map(e=>g.value.map(o=>S(typeof o.field=="function"?o.field(e):e[o.field===void 0?o.name:o.field],o.format,e)).join(","))).join(`\r
`);H(`${p.value} ${X().format("MM.DD.YYYY")}.csv`,a,"text/csv")!==!0&&d.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})};return(a,s)=>(w(),h("div",ae,[t(Z),t(U,{flat:"",class:"q-pt-none"},{default:l(()=>[t(R,null,{default:l(()=>[r("div",oe,[r("div",le,[r("div",{class:j(["text-dark",c(d).screen.lt.md?"text-body1":"text-h5"])},u(p.value),3)]),t(V),r("div",se,[t(ee,{styleSelection:!0})])])]),_:1})]),_:1}),t(te,{rows:f.value,columns:g.value,pagination:C.value,filter:v.value,title:p.value,separator:"vertical","row-key":"3",loading:c(k)(Q.value),"visible-columns":Y.value,downloadButton:!0,onDownload:T},{top:l(()=>[r("div",ne,[t(W,{dense:c(d).screen.lt.md,modelValue:v.value,"onUpdate:modelValue":s[0]||(s[0]=e=>v.value=e),label:"Search...",clearable:""},{prepend:l(()=>[t(F,{name:"search"})]),_:1},8,["dense","modelValue"])]),t(V),r("div",{class:j(["text-dark text-caption text-italic",c(d).screen.lt.md?"offset-xs-5":""])},"(Total: "+u(f.value.length)+")",3),t(x,{flat:"",round:"",color:"primary",icon:"download",disable:f.value.length<1,onClick:T},{default:l(()=>[t(P,{class:"bg-accent text-black shadow-4",offset:[10,10]},{default:l(()=>[D(" Download ")]),_:1})]),_:1},8,["disable"]),t(x,{flat:"",round:"",color:"primary",icon:"refresh",onClick:s[1]||(s[1]=e=>b(!0)),loading:c(k)(Q.value)},{default:l(()=>[t(P,{class:"bg-accent text-black shadow-4",offset:[10,10]},{default:l(()=>[D(" Refresh ")]),_:1})]),_:1},8,["loading"])]),"body-cell-startTimestamp":l(e=>[t($,{props:e},{default:l(()=>[a.$dayjs(e.value).isValid()?(w(),h("div",ie,u(e.value.format("L LT")),1)):(w(),h("div",re,u(e.row[1].format("L LT")),1))]),_:2},1032,["props"])]),"body-cell-action":l(e=>[t($,{props:e},{default:l(()=>[t(x,{color:"primary",label:"View Profile",onClick:o=>z(e.row),size:".75rem"},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","filter","title","loading","visible-columns"])]))}};export{ze as default};

import{c4 as P,c1 as y,r as s,w as R,aK as $,c as w,z as q,A as O,d as o,bh as i,c2 as k,C as j,cx as N,a6 as c,bX as Y,c3 as A,c6 as z}from"./index.6c674a19.js";import{Q as M}from"./QSpace.d6e66ed5.js";import{Q as T}from"./QTd.47fad94d.js";import{u as U}from"./use-quasar.4e60ec94.js";import{e as E}from"./export-file.6b95af49.js";import{R as G}from"./quickbase.c9a9fc75.js";import{dayjs as K}from"./dayjs.69e964e9.js";import{_ as L}from"./officeHeader.adb1411e.js";import{_ as X}from"./aTable.c1971c23.js";import"./_commonjsHelpers.dfee5925.js";import"./localForage.7e70884e.js";import"./index.7dbe61ef.js";import"./i18n.8e2a8376.js";import"./api.51f82bf2.js";import"./QSelect.fdd46d88.js";import"./QChip.6c6d3173.js";import"./QMenu.b7fb2919.js";import"./position-engine.703db134.js";import"./selection.7761caf6.js";import"./rtl.a367ced8.js";import"./QTable.5a1eb1d4.js";import"./QList.76fc6ce7.js";import"./QMarkupTable.9a5d9dcd.js";import"./use-fullscreen.f7d9f446.js";const F={class:"q-pa-md"},H={class:"row items-center"},J={class:"col-12 col-md-5 q-px-sm"},xe={__name:"index",setup(W){const d=U(),h=P(),p=G(),{fetchProjects:f,fetchAllProjects:v}=p,{getProjects:Q,getSelectedOffice:n,getLoadingState:x}=y(p),r=s(n.value?n.value[8]:null),_=s("Projects"),C=s("projects"),m=s(""),D=s({sortBy:"13",descending:!1,rowsPerPage:150});r.value?f({selectedId:r.value}):v({can:"read"}),R(n,()=>{r.value=n.value?n.value[8]:null,r.value?f({selectedId:r.value}):v({can:"read"})});const S=s(new Date),V=setInterval(()=>{S.value=new Date},1e3);$(()=>{clearInterval(V)});const u=w(()=>[{name:"id",align:"left",label:"ID",field:"3",sortable:!1},{name:"name",align:"left",label:"Name",field:"298",sortable:!0},{name:"office",align:"center",label:"Office",field:"76",sortable:!1},{name:"avgDRO",align:"center",label:"AVG DRO",field:"208",sortable:!0},{name:"openRequests",align:"center",label:"Open Request",field:"31",sortable:!0},{name:"action",align:"center",label:"",sortable:!1}]),g=w(()=>Q.value(r.value).filter(a=>!0).sort((a,l)=>a[298].localeCompare(l[298]))),B=a=>{h.push({name:"project",params:{id:a[3]}})},b=(a,l,t)=>{let e=l!==void 0?l(a,t):a;return e=e==null?"":String(e),e=e.split('"').join('""'),`"${e}"`},I=()=>{const a=[u.value.map(t=>b(t.label))].concat(g.value.map(t=>u.value.map(e=>b(typeof e.field=="function"?e.field(t):t[e.field===void 0?e.name:e.field],e.format,t)).join(","))).join(`\r
`);E(`${_.value} ${K().format("MM.DD.YYYY")}.csv`,a,"text/csv")!==!0&&d.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})};return(a,l)=>(q(),O("div",F,[o(L),o(A,{flat:"",class:"q-pt-none"},{default:i(()=>[o(k,null,{default:i(()=>[j("div",H,[j("div",J,[o(N,{dense:c(d).screen.lt.md,modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=t=>m.value=t),label:"Search...",clearable:""},{prepend:i(()=>[o(Y,{name:"search"})]),_:1},8,["dense","modelValue"])]),o(M)])]),_:1})]),_:1}),o(X,{rows:c(g),columns:c(u),pagination:D.value,filter:m.value,title:_.value,separator:"vertical","row-key":"3",loading:c(x)(C.value),downloadButton:!0,onDownload:I},{"body-cell-action":i(t=>[o(T,{props:t},{default:i(()=>[o(z,{color:"primary",label:"View Project",onClick:e=>B(t.row),size:".75rem"},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","filter","title","loading"])]))}};export{xe as default};

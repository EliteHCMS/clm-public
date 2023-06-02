import{_ as j,l as I,r as P,bV as $,c as q,w as k,b5 as D,A as Q,aq as C,br as m,D as h,d as l,cE as w,bW as x,cH as A}from"./index.4017ca31.js";import{a as E}from"./QTable.cf3c1214.js";import{Q as B}from"./QPage.de97fdf1.js";import{I as N,u as V,q as g}from"./quickbase.4804bb81.js";import{a as _}from"./useQuerySaver.d29ff9ee.js";import{u as X}from"./dataStore.05f4029a.js";import{_ as F}from"./projectSelector.0821c424.js";import"./QList.5e1c5b15.js";import"./QMarkupTable.73ed5d05.js";import"./QSelect.f649ca34.js";import"./QChip.4797ac30.js";import"./QMenu.f2054918.js";import"./position-engine.9b406c07.js";import"./selection.238bfdbe.js";import"./rtl.b51694b1.js";import"./use-fullscreen.61aac10e.js";import"./_commonjsHelpers.a26ce4be.js";import"./dayjs.01a1f0cd.js";import"./index.04bc0a32.js";import"./localForage.8295c071.js";import"./api.a5c07642.js";import"./i18n.c0a86e49.js";const R=I({name:"Inventory",components:{projectSelector:F},setup(){const i=P(0),{getInventory:r,setInventory:d}=X(),{getSelectedProject:a}=$(N()),{userProjects:f}=V(),y=[{name:0,label:"Code",align:"left",field:t=>t[11],format:t=>`${t}`,sortable:!0},{name:1,label:"Description",align:"left",field:t=>t[16],format:t=>`${t}`,sortable:!0,required:!0},{name:2,label:"Base Quantity",align:"right",field:t=>t[6],format:t=>t,sortable:!0},{name:3,label:"In Stock",align:"right",field:t=>t[7],format:t=>t,sortable:!0},{name:4,label:"In Utilization",align:"right",field:t=>t[22],format:t=>t,sortable:!0}],u=q(()=>{const t=a.value&&r(a.value[3])?r(a.value[3]).items:r();return t?Array.isArray(t)?t.sort((e,o)=>e[11]>o[11]?1:-1):Object.values(t).map(n=>n.items?n.items:[]).flat(1).sort((n,v)=>n[11]>v[11]?1:-1):[]}),c=async t=>{const{data:e}=await g.fetchFromProjectsApp({fields:[_({type:"inventoryItems",query:`{'8'.EX.'${t}'}`})]});return{items:e}},b=async t=>{const{data:e}=await g.fetchFromProjectsApp({fields:[_({type:"inventoryLogs",query:`{'6'.EX.'${t}'}AND{'14'.EX.true}`})]}),o=e[0];if(o){const{items:n}=await c(o[3]);return o.items=n,o}else return{[t]:{items:[]}}},p=async t=>{if(a.value){if(!r(a.value[3])||t){const e=await b(a.value[3]);d({id:a.value[3],data:e})}}else{const e=[];f().forEach(s=>{if(!r(s[9])||t){const S=b(s[9]);e.push(S)}}),(await Promise.allSettled(e)).map(s=>s.value).forEach(s=>{s&&d({id:s[6],data:s})})}};return p(),k(a,()=>{p(),console.log(u.value)}),{tab:i,rows:u,columns:y,loadData:p}}}),T={class:"q-pa-md"},U={class:"row items-center"};function z(i,r,d,a,f,y){const u=D("projectSelector");return Q(),C(B,{style:{"max-width":"100vw"}},{default:m(()=>[h("div",T,[l(A,{flat:""},{default:m(()=>[l(w,null,{default:m(()=>[h("div",U,[l(u,{style:{width:"250px"},dense:""})])]),_:1}),l(w,null,{default:m(()=>[l(E,{title:"Yard Inventory","title-class":"text-h5 text-primary",columns:i.columns,rows:i.rows?i.rows:[],"row-key":c=>c?c[3]:0,class:"q-pa-sm",pagination:{rowsPerPage:25},"table-header-class":"bg-dark text-white","no-data-label":"No Inventory",dense:""},{"top-right":m(()=>[l(x,{color:"secondary",flat:"","icon-right":"refresh",label:"Refresh",onClick:r[0]||(r[0]=c=>i.loadData(!0))})]),_:1},8,["columns","rows","row-key"])]),_:1})]),_:1})])]),_:1})}var dt=j(R,[["render",z]]);export{dt as default};

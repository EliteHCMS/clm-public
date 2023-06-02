import{l as M,bU as Q,r as h,bV as k,c,w as I,_ as N,b5 as $,A as g,B as b,d as r,br as y,cE as B,D as p,ar as P,cF as S,cH as U}from"./index.4017ca31.js";import{a as H}from"./QSelect.f649ca34.js";import{u as X}from"./use-quasar.5edd4060.js";import{u as z}from"./dataStore.05f4029a.js";import{u as L}from"./dataStore.0038134c.js";import{I as O,q as T}from"./quickbase.4804bb81.js";import{dayjs as C}from"./dayjs.01a1f0cd.js";import{u as G}from"./useQuerySaver.d29ff9ee.js";import{R as J}from"./rosterTable.f7c5b8c2.js";import{_ as K}from"./projectSelector.0821c424.js";const W=M({props:{},components:{RosterTable:J,projectSelector:K},setup(a){const o=X(),f=Q(),A=O(),v=h(""),d=h(null),n=h(null),{getSelectedProject:u}=k(A),{getAssignments:s,fetchAllAssignments:_,fetchAssignments:j}=z(),{getManpowerData:V,setRosters:F}=L(),l=c(()=>f.params.id?f.params.id:null),m=c(()=>u.value?u.value[3]:null),w=c(()=>{let e;return l.value?e=(V({dataset:"rosters",id:l.value})||[]).sort((i,q)=>i[1].$d<q[1].$d?1:-1):e=s(m.value).sort((t,i)=>t[1].$d<i[1].$d?1:-1),e.filter(t=>!t[112]&&t.latest&&t[102]==="Active")}),R=c(()=>{let e=[];return w.value.forEach(t=>{t[75].toLowerCase().includes(v.value.toLowerCase())&&e.push(t)}),e=d.value?e.filter(t=>C(t[1].$d).tz("America/Chicago").format("MM/DD/YYYY")===C(d.value).tz("America/Chicago").format("MM/DD/YYYY")):e,e=n.value?e.filter(t=>t[68]===n.value):e,e.sort((t,i)=>t.employee[22]>i.employee[22]?1:-1)}),E=c(()=>[...new Map(w.value.map(e=>[e[68],e[68]])).values()]),D=async e=>{o.loading.show(),l.value?(e||!V({dataset:"rosters",id:l.value}))&&await Y():m.value?await j({projectId:m.value,refresh:e}):await _({refresh:e}),o.loading.hide()},Y=async()=>{const e=`{'74'.EX.'${l.value}'}AND{'21'.EX.'In Process'}AND{'102'.EX.'Active'}`,{data:t}=await T.fetchFromHiringApp({fields:[G({type:"assignments",query:e})]});F({id:l.value,data:t})};return I(m,()=>{D()}),D(),{allAssignments:w,search:v,startDateFilter:d,craftFilter:n,craftOptions:E,rows:R,loadData:D}}}),Z={class:"row items-center"},x={key:0,class:"col-12 col-md-3"},ee={class:"col-12 col-md-3 q-px-sm"},te={class:"col-12 col-md-3 q-px-sm"},ae={class:"col-12 col-md-3 q-px-sm"};function oe(a,o,f,A,v,d){const n=$("projectSelector"),u=$("roster-table");return g(),b("div",null,[r(U,{flat:""},{default:y(()=>[r(B,null,{default:y(()=>[p("div",Z,[a.$route.params.id?P("",!0):(g(),b("div",x,[r(n,{dense:""})])),p("div",ee,[r(S,{dense:"",modelValue:a.search,"onUpdate:modelValue":o[0]||(o[0]=s=>a.search=s),label:"Search"},null,8,["modelValue"])]),p("div",te,[r(S,{dense:"",modelValue:a.startDateFilter,"onUpdate:modelValue":o[1]||(o[1]=s=>a.startDateFilter=s),label:"Arrival Date",type:"date","stack-label":""},null,8,["modelValue"])]),p("div",ae,[r(H,{dense:"",label:"Craft","transition-show":"flip-up","transition-hide":"flip-down",modelValue:a.craftFilter,"onUpdate:modelValue":o[2]||(o[2]=s=>a.craftFilter=s),options:a.craftOptions,"use-chips":""},null,8,["modelValue","options"])])])]),_:1})]),_:1}),r(u,{rows:a.rows,onRefreshData:o[3]||(o[3]=s=>a.loadData(!0)),title:"Active Roster"},null,8,["rows"])])}var fe=N(W,[["render",oe]]);export{fe as E};

import{Q as q}from"./QSpace.2f5e484e.js";import{bV as ne,r as c,w as se,aT as ue,c as y,A as f,B as p,d as e,br as l,cT as C,D as s,G as H,a8 as b,ac as i,cS as D,bR as w,ab as de,aH as ie,bP as r,dl as re,cU as ce,bQ as fe,bW as z,ax as u,bS as me,ar as m,aq as B}from"./index.62f4c3c5.js";import{a as S,Q as d}from"./QSelect.63d295fd.js";import{Q as K}from"./QTooltip.9c964233.js";import{Q as ve}from"./QList.11a66c2b.js";import{Q as I}from"./QTd.2f40c658.js";import{u as _e}from"./use-quasar.4c4dbdcf.js";import{e as pe}from"./export-file.dc78ba05.js";import{I as be,q as X}from"./app.ae0068fa.js";import{_ as we}from"./officeSelector.b5ac6de3.js";import{_ as ge}from"./aTable.8a7a4213.js";import{dayjs as N}from"./dayjs.b3414925.js";import"./QChip.9ae5b419.js";import"./QMenu.83b714c5.js";import"./position-engine.9f816e9b.js";import"./selection.3494d29b.js";import"./rtl.b51694b1.js";import"./_commonjsHelpers.a26ce4be.js";import"./localForage.f977d509.js";import"./api.646f206c.js";import"./index.04bc0a32.js";import"./i18n.3f666946.js";import"./QTable.6d9270ae.js";import"./QMarkupTable.40e44e8b.js";import"./use-fullscreen.40a7c3de.js";const he={class:"q-pa-md"},ke={class:"row items-center"},xe={class:"col-12 col-md-6 q-px-sm"},ye=s("div",{class:"col-12 col-md-4 q-px-sm"},null,-1),Ce={class:"row items-center"},Se={class:"col-12 col-md-3 q-px-sm"},Ie={class:"col-12 col-md-3 q-px-sm"},Te={class:"col-12 col-md-3 q-px-sm"},Qe={class:"col-12 col-md-5 q-px-sm"},Ve={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},Ae=s("br",null,null,-1),qe=s("br",null,null,-1),De=s("br",null,null,-1),Be={key:0},Ne={key:0},Ue=s("br",null,null,-1),Re=s("br",null,null,-1),Oe={key:0},Pe={key:0},$e={key:1},ml={__name:"index",setup(Le){const g=_e(),U=be(),{fetchSelfCheckIns:E,fetchAllSelfCheckIns:G}=U,{getSelfCheckIns:F,getSelectedOffice:h,getLoadingState:R}=ne(U),x=c(h.value?h.value[8]:null),T=c("Self Check-Ins"),O=c("selfCheckIns"),Q=c(""),P=c({sortBy:"13",descending:!1,rowsPerPage:150}),V=t=>{x.value?E({selectedId:x.value,refresh:t}):G({can:"read",refresh:t})};V(!0),se(h,()=>{x.value=h.value?h.value[8]:null,V()});const $=c(new Date),J=setInterval(()=>{$.value=new Date},1e3);ue(()=>{clearInterval(J)});const v=c("Waiting"),Z=c(["Waiting","Called"]),ee=c(["Waiting","Called","All"]),k=c([]),L=c([{label:"Kiosk",value:"Kiosk"},{label:"In Process",value:"In Process"},{label:"Deployment",value:"Deployment"},{label:"No Task Assigned",value:""}]),A=y(()=>[{name:"index",align:"left",label:"#",sortable:!1},{name:"timeCheckIn",align:"left",label:"Time Checked-In",field:"13",sortable:!1},{name:"name",align:"left",label:"Name",field:"17",sortable:!1},{name:"phoneNumber",align:"center",label:"Phone Number",field:"6",sortable:!1},{name:"reason",align:"center",label:"Reason",field:"10",sortable:!1},{name:"status",align:"center",label:"Status",field:"15",sortable:!1},{name:"task",align:"center",label:"Task",field:"27",sortable:!1},...v.value==="Called"||v.value==="All"?[{name:"timeCheckedOut",align:"center",label:"Time Checked Out",field:"14",sortable:!1}]:[]]),_=y(()=>F.value(x.value).filter(t=>{let o=!0,a=!0;return v.value&&(v.value==="All"?o=!0:o=t[15]===v.value,o||(a=!1)),k.value&&k.value.length!==0&&(o=k.value.some(n=>t[27]===n.value),o||(a=!1)),a}).sort((t,o)=>P.value.descending?t[13].isBefore(o[13]):t[13].isAfter(o[13]))),W=y(()=>_.value.map(t=>N($.value).to(t[13]))),M=y(()=>_.value.map(t=>t[14]?N(t[13]).to(t[14],!0):"N/A")),le=async(t,o)=>{const a=t==="Called"?Date():"";await X.upsertRecordsXML({to:"br26nivmr",data:[{3:{value:o.row[3]},14:{value:a},15:{value:t}}],fieldsToReturn:[3,15]}),o.row[15]=t},ae=async(t,o)=>{await X.upsertRecordsXML({to:"br26nivmr",data:[{3:{value:o.row[3]},27:{value:t.value}}],fieldsToReturn:[3,27]}),o.row[27]=t.value},Y=(t,o,a)=>{let n=o!==void 0?o(t,a):t;return n=n==null?"":String(n),n=n.split('"').join('""'),`"${n}"`},j=()=>{const t=[A.value.map(a=>Y(a.label))].concat(_.value.map(a=>A.value.map(n=>Y(typeof n.field=="function"?n.field(a):a[n.field===void 0?n.name:n.field],n.format,a)).join(","))).join(`\r
`);pe(`${T.value} ${N().format("MM.DD.YYYY")}.csv`,t,"text/csv")!==!0&&g.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})};return(t,o)=>(f(),p("div",he,[e(D,{flat:"",class:"q-pt-none"},{default:l(()=>[e(C,null,{default:l(()=>[s("div",ke,[s("div",xe,[s("div",{class:H(["text-dark",b(g).screen.lt.md?"text-body1":"text-h5"])},i(T.value),3)]),e(q),ye])]),_:1})]),_:1}),e(D,{flat:""},{default:l(()=>[e(C,null,{default:l(()=>[s("div",Ce,[s("div",Se,[e(S,{label:"Select Status",modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=a=>v.value=a),options:ee.value},null,8,["modelValue","options"])]),s("div",Ie,[e(S,{label:"Select Task",modelValue:k.value,"onUpdate:modelValue":o[1]||(o[1]=a=>k.value=a),options:L.value,multiple:"","use-chips":"",clearable:""},{option:l(({itemProps:a,opt:n,selected:te,toggleOption:oe})=>[e(w,de(ie(a)),{default:l(()=>[e(r,null,{default:l(()=>[e(d,{innerHTML:n.label},null,8,["innerHTML"])]),_:2},1024),e(r,{side:""},{default:l(()=>[e(re,{"model-value":te,"onUpdate:modelValue":We=>oe(n)},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options"])]),e(q),s("div",Te,[e(we,{can:"read",styleSelection:!0})])])]),_:1})]),_:1}),e(ge,{rows:_.value,columns:A.value,pagination:P.value,filter:Q.value,title:T.value,separator:"vertical","row-key":"3",grid:!b(g).screen.gt.sm,loading:b(R)(O.value),downloadButton:!0,onDownload:j},{top:l(()=>[s("div",Qe,[e(ce,{dense:b(g).screen.lt.md,modelValue:Q.value,"onUpdate:modelValue":o[2]||(o[2]=a=>Q.value=a),label:"Search...",clearable:""},{prepend:l(()=>[e(fe,{name:"search"})]),_:1},8,["dense","modelValue"])]),e(q),s("div",{class:H(["text-dark text-caption text-italic",b(g).screen.lt.md?"offset-xs-5":""])},"(Total: "+i(_.value.length)+")",3),e(z,{flat:"",round:"",color:"primary",icon:"download",disable:_.value.length<1,onClick:j},{default:l(()=>[e(K,{class:"bg-accent text-black shadow-4",offset:[10,10]},{default:l(()=>[u(" Download ")]),_:1})]),_:1},8,["disable"]),e(z,{flat:"",round:"",color:"primary",icon:"refresh",onClick:o[3]||(o[3]=a=>V(!0)),loading:b(R)(O.value)},{default:l(()=>[e(K,{class:"bg-accent text-black shadow-4",offset:[10,10]},{default:l(()=>[u(" Refresh ")]),_:1})]),_:1},8,["loading"])]),item:l(a=>[s("div",Ve,[e(D,null,{default:l(()=>[e(C,{class:"text-center"},{default:l(()=>[s("strong",null,i(a.row[17]),1),Ae,s("span",null,i(a.row[15]),1)]),_:2},1024),e(me),e(C,{class:"flex flex-center"},{default:l(()=>[e(ve,{dense:""},{default:l(()=>[e(w,null,{default:l(()=>[e(r,null,{default:l(()=>[e(d,null,{default:l(()=>[u("Time Checked-In")]),_:1}),qe,e(d,null,{default:l(()=>[u("\xA0")]),_:1})]),_:1}),e(r,{side:""},{default:l(()=>[e(d,{caption:""},{default:l(()=>[u(i(a.row[13].format("h:mm:ss A")),1)]),_:2},1024),De,e(d,{caption:""},{default:l(()=>[u(i(W.value[a.rowIndex]),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(w,null,{default:l(()=>[e(r,null,{default:l(()=>[e(d,null,{default:l(()=>[u("Phone Number")]),_:1})]),_:1}),e(r,{side:""},{default:l(()=>[e(d,{caption:""},{default:l(()=>[u(i(a.row[20]),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(w,null,{default:l(()=>[e(r,null,{default:l(()=>[e(d,null,{default:l(()=>[u("Reason")]),_:1}),a.row[10]==="Applying"?(f(),p("br",Be)):m("",!0),a.row[10]==="Applying"?(f(),B(d,{key:1},{default:l(()=>[u("\xA0")]),_:1})):m("",!0)]),_:2},1024),e(r,{side:""},{default:l(()=>[e(d,{caption:""},{default:l(()=>[u(i(a.row[10]),1)]),_:2},1024),a.row[10]==="Applying"?(f(),p("br",Ne)):m("",!0),a.row[10]==="Applying"?(f(),B(d,{key:1,caption:""},{default:l(()=>[u(i(a.row[11]),1)]),_:2},1024)):m("",!0)]),_:2},1024)]),_:2},1024),e(w,null,{default:l(()=>[e(r,null,{default:l(()=>[e(d,null,{default:l(()=>[u("Task")]),_:1})]),_:1}),e(r,{side:""},{default:l(()=>[e(d,{caption:""},{default:l(()=>[u(i(a.row[20]),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),a.row[15]==="Called"?(f(),B(w,{key:0},{default:l(()=>[e(r,null,{default:l(()=>[e(d,null,{default:l(()=>[u("Time Checked-Out")]),_:1}),Ue,e(d,null,{default:l(()=>[u("\xA0")]),_:1})]),_:1}),e(r,{side:""},{default:l(()=>[e(d,{caption:""},{default:l(()=>[u(i(a.row[14].format("h:mm:ss A")),1)]),_:2},1024),Re,e(d,{caption:""},{default:l(()=>[u("Wait: "+i(M.value[a.rowIndex]),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)):m("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)])]),"body-cell-timeCheckIn":l(a=>[e(I,{props:a},{default:l(()=>[s("div",null,i(a.value.format("h:mm:ss A")),1),a.row[15]==="Waiting"?(f(),p("div",Oe,i(W.value[a.rowIndex]),1)):m("",!0)]),_:2},1032,["props"])]),"body-cell-status":l(a=>[e(I,{props:a},{default:l(()=>[e(S,{dense:"",filled:"","model-value":a.value,"onUpdate:modelValue":n=>le(n,a),options:Z.value},null,8,["model-value","onUpdate:modelValue","options"])]),_:2},1032,["props"])]),"body-cell-task":l(a=>[e(I,{props:a},{default:l(()=>[e(S,{dense:"",filled:"","model-value":a.value,"onUpdate:modelValue":n=>ae(n,a),options:L.value},null,8,["model-value","onUpdate:modelValue","options"])]),_:2},1032,["props"])]),"body-cell-timeCheckedOut":l(a=>[e(I,{props:a},{default:l(()=>[a.row[15]==="Called"?(f(),p("div",Pe,i(a.value)+" ",1)):m("",!0),a.row[15]==="Called"?(f(),p("div",$e," Wait: "+i(M.value[a.rowIndex]),1)):m("",!0)]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","filter","title","grid","loading"])]))}};export{ml as default};

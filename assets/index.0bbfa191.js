import{l as B,r as Y,c as y,_ as L,A as c,aq as h,br as n,d as a,cT as v,D as e,ac as o,bS as R,bW as j,ax as U,ar as k,B as w,F as J,b4 as K,cS as I,w as te,bt as de,bR as ce,bP as H,bQ as re,dc as me,bT as ue,cV as pe,bO as ke,bU as Re,b5 as Q,y as Ce}from"./index.2bf5f3d5.js";import{Q as Se}from"./QPage.eed23df8.js";import{u as oe}from"./use-quasar.900ac942.js";import{u as W}from"./useQuerySaver.d29ff9ee.js";import{u as F,q as V}from"./app.c06ae7e4.js";import{dayjs as A}from"./dayjs.67bcdf99.js";import{s as Ae,f as Te,r as Ye,t as se,a as Ie}from"./submitRelease.23ac0c98.js";import{a as le,b as Ee,u as Ne}from"./checkTermStatus.90a7d234.js";import{u as z}from"./dataStore.ccd157ed.js";import{Q as _e}from"./QTooltip.6e254bc4.js";import{Q as ve}from"./QInnerLoading.1c063683.js";import{o as ye,d as he}from"./helpers.b89cc21c.js";import{a as ne}from"./syncEmployeeWithWorkday.226fa5e0.js";import{d as G}from"./decode.3998c82c.js";import{Q as O}from"./QRating.16d5056e.js";import{Q as Me}from"./QFile.1b4cb1ac.js";import{Q as fe}from"./QList.1e2f5ca3.js";import{Q as Pe}from"./QImg.fb1e034f.js";import{a as Le}from"./QSelect.35e2e745.js";import{Q as Qe}from"./QForm.8b79410e.js";import{a as je,u as Be}from"./vee-validate.esm.365d338d.js";import{a as ie}from"./array.59f93f43.js";import"./_commonjsHelpers.a26ce4be.js";import"./localForage.fc877897.js";import"./api.c01eef32.js";import"./index.04bc0a32.js";import"./i18n.43e58d72.js";import"./dataStore.eb3c3ed9.js";import"./workdayAPI.2e6c13ed.js";import"./position-engine.ed83372a.js";import"./selection.d9f9c811.js";import"./workday.5fbacc1f.js";import"./QChip.4a8cc4f1.js";import"./QMenu.f5054ee4.js";import"./rtl.b51694b1.js";const Ve=B({props:{employee:Object,assignment:Object,release:Object},setup(s){const{getUserType:d}=F(),{updateViewedReleases:p,getReleases:t}=z(),f=Y(!0),b=Y(!0),i=y(()=>t(s.release[3])),r=y(()=>i.value&&i.value.employee?i.value.employee:null),D=y(()=>i.value&&i.value.assignment?i.value.assignment:null),C=y(()=>{if(!r.value||!r.value.workday)return[];{const{personalData:m}=r.value.workday;if(m){const{customIds:T}=m.identificationData?m.identificationData:{customIds:[]};return T}else return[]}}),u=async()=>{if(r.value){const{sync:m}=await ne({clm:r.value});p({id:s.release[3],dataset:"employee",nested:!0,subset:"workday",data:m}),f.value=!1}else{const{data:m}=await V.fetchFromHiringApp({fields:[W({type:"employee",id:s.release[25]})]});if(m[207]===!1){const{sync:T}=await ne({clm:m});await p({id:s.release[3],dataset:"employee",data:m}),p({id:s.release[3],dataset:"employee",nested:!0,subset:"workday",data:T})}else await p({id:s.release[3],dataset:"employee",data:m});f.value=!1}if(D.value)b.value=!1;else{const{data:m}=await V.fetchFromHiringApp({fields:[W({type:"rawAssignments",id:s.release[28]})]});p({id:s.release[3],dataset:"assignment",data:m}),b.value=!1}},E=m=>{if(!!m)return m[145].$d?A(m[145].$d).format("MM/DD/YYYY"):null},$=({id:m,idType:T})=>T.includes("J&amp;E")?`${m.slice(1,4)} / ${m.slice(-5)}`:m;return u(),{dayjs:A,openWindow:ye,getUserType:d,employeeData:r,assignmentData:D,eeLoading:f,assignLoading:b,getArrivalDate:E,employeeCustomIds:C,decodeHTML:G,processCustomID:$}}}),Ue=e("div",{class:"text-primary text-h6 text-bold"},"Employee Information",-1),Fe={class:"row q-py-sm"},ze={class:"col-12 col-sm-3"},Oe=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Name")],-1),He={class:"text-body2 q-pl-md"},We={class:"col-12 col-sm-3"},Je=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Last 4 Digits of SS#")],-1),Ke={class:"text-body2 q-pl-md"},Ge={class:"col-12 col-sm-3"},Xe=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Phone")],-1),Ze={class:"text-body2 q-pl-md"},es={class:"row q-py-sm"},ss={class:"col-12 col-sm-3"},ts={class:"text-body2"},os=e("span",{class:"text-bold q-mr-md"},"Workday Employee ID",-1),as={class:"text-body2 q-pl-md"},ls={class:"text-body2"},ns={class:"text-bold q-mr-md"},is={class:"text-body2 q-pl-md"},ds={class:"row q-py-sm"},cs={class:"col-12 col-sm-3"},rs=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Arrival Date")],-1),ms={class:"text-body2 q-pl-md"},us={class:"col-12 col-sm-3"},ps=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Last Hire Date")],-1),_s={class:"text-body2 q-pl-md"},vs={class:"col-12 col-sm-3"},ys=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Last Day Worked")],-1),hs={class:"text-body2 q-pl-md"},fs={class:"col-12 col-sm-3"},bs=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Effective Date")],-1),$s={class:"text-body2 q-pl-md"},qs={class:"row q-py-sm"},gs={class:"col-12 col-sm-4"},ws=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Job Site/ Location")],-1),Ds={class:"text-body2 q-pl-md"},xs={class:"col-12 col-sm-4"},ks=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Job Title")],-1),Rs={class:"text-body2 q-pl-md"},Cs={class:"col-12 col-sm-4"},Ss=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Pay Rate")],-1),As={class:"text-body2 q-pl-md"};function Ts(s,d,p,t,f,b){return c(),h(I,null,{default:n(()=>[a(v,{class:"text-center q-py-sm"},{default:n(()=>[Ue]),_:1}),!s.eeLoading&&!s.assignLoading?(c(),h(v,{key:0,class:"q-py-none"},{default:n(()=>[e("div",Fe,[e("div",ze,[Oe,e("div",He,[e("span",null,o(s.employeeData[22])+", "+o(s.employeeData[20]),1)])]),e("div",We,[Je,e("div",Ke,[e("span",null,o(s.employeeData[188].substring(s.employeeData[188].length-4)),1)])]),e("div",Ge,[Xe,e("div",Ze,[e("span",null,o(s.employeeData[25]),1)])])]),a(R),e("div",es,[e("div",ss,[e("div",ts,[os,s.getUserType==="QuickBase User"&&s.employeeData[378]?(c(),h(j,{key:0,dense:"",size:"sm",flat:"",icon:"open_in_new",color:"info",onClick:d[0]||(d[0]=i=>s.openWindow({url:s.employeeData[451]}))},{default:n(()=>[a(_e,null,{default:n(()=>[U("Open in Workday")]),_:1})]),_:1})):k("",!0)]),e("div",as,[e("span",null,o(s.employeeData[378]),1)])]),(c(!0),w(J,null,K(s.employeeCustomIds,(i,r)=>(c(),w("div",{key:r,class:"col-12 col-sm-3"},[e("div",ls,[e("span",ns,o(s.decodeHTML(i.idType)),1)]),e("div",is,[e("span",null,o(s.processCustomID(i)),1)])]))),128))]),a(R),e("div",ds,[e("div",cs,[rs,e("div",ms,[e("span",null,o(s.getArrivalDate(s.assignmentData)||"N/A"),1)])]),e("div",us,[ps,e("div",_s,[e("span",null,o(s.dayjs(s.employeeData[397].$d).format("MM/DD/YYYY")),1)])]),e("div",vs,[ys,e("div",hs,[e("span",null,o(s.dayjs(s.release[123].$d).format("MM/DD/YYYY")),1)])]),e("div",fs,[bs,e("div",$s,[e("span",null,o(s.dayjs(s.release[36].$d).format("MM/DD/YYYY")),1)])])]),a(R),e("div",qs,[e("div",gs,[ws,e("div",Ds,[e("span",null,o(s.release[57]),1)])]),e("div",xs,[ks,e("div",Rs,[e("span",null,o(s.assignmentData[20]),1)])]),e("div",Cs,[Ss,e("div",As,[e("span",null,o(s.assignmentData[116]?`$ ${s.assignmentData[116].toFixed(2)}`:"N/A"),1)])])])]),_:1})):(c(),h(v,{key:1,class:"q-my-lg"},{default:n(()=>[a(ve,{color:"primary",showing:""})]),_:1}))]),_:1})}var Ys=L(Ve,[["render",Ts]]);const Is=B({props:{data:Object},setup(s){return{evaluation:y(()=>s.data),convertScore:t=>({1:"Strongly Disagreed",2:"Disagreed",3:"Neutral",4:"Agreed",5:"Strongly Agreed",0:"Did Not Know"})[t]}}}),Es=e("div",{class:"text-primary text-h6 text-bold"},"Employee Performance Evaluation",-1),Ns={class:"row q-py-sm"},Ms={class:"col-12 col-sm-6 col-md-3"},Ps=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Has good attendance")],-1),Ls={class:"text-body2 q-pl-md"},Qs={class:"q-mr-md"},js={class:"col-12 col-sm-6 col-md-3"},Bs=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Has a good attitude")],-1),Vs={class:"text-body2 q-pl-md"},Us={class:"q-mr-md"},Fs={class:"col-12 col-sm-6 col-md-3"},zs=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Can do their job")],-1),Os={class:"text-body2 q-pl-md"},Hs={class:"q-mr-md"},Ws={class:"col-12 col-sm-6 col-md-3"},Js=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Can be promoted in the future")],-1),Ks={class:"text-body2 q-pl-md"},Gs={class:"q-mr-md"};function Xs(s,d,p,t,f,b){return c(),h(I,null,{default:n(()=>[a(v,{class:"text-center q-py-sm"},{default:n(()=>[Es]),_:1}),a(v,{class:"q-py-none"},{default:n(()=>[e("div",Ns,[e("div",Ms,[Ps,e("div",Ls,[e("span",Qs,o(s.convertScore(s.evaluation.attendance)),1),a(O,{modelValue:s.evaluation.attendance,"onUpdate:modelValue":d[0]||(d[0]=i=>s.evaluation.attendance=i),max:"5",size:"sm",color:"accent",icon:"star_border","icon-selected":"star","icon-half":"star_half","no-dimming":"",readonly:""},null,8,["modelValue"])])]),e("div",js,[Bs,e("div",Vs,[e("span",Us,o(s.convertScore(s.evaluation.attitude)),1),a(O,{modelValue:s.evaluation.attitude,"onUpdate:modelValue":d[1]||(d[1]=i=>s.evaluation.attitude=i),max:"5",size:"sm",color:"accent",icon:"star_border","icon-selected":"star","icon-half":"star_half","no-dimming":"",readonly:""},null,8,["modelValue"])])]),e("div",Fs,[zs,e("div",Os,[e("span",Hs,o(s.convertScore(s.evaluation.capable)),1),a(O,{modelValue:s.evaluation.capable,"onUpdate:modelValue":d[2]||(d[2]=i=>s.evaluation.capable=i),max:"5",size:"sm",color:"accent",icon:"star_border","icon-selected":"star","icon-half":"star_half","no-dimming":"",readonly:""},null,8,["modelValue"])])]),e("div",Ws,[Js,e("div",Ks,[e("span",Gs,o(s.convertScore(s.evaluation.promotion)),1),a(O,{modelValue:s.evaluation.promotion,"onUpdate:modelValue":d[3]||(d[3]=i=>s.evaluation.promotion=i),max:"5",size:"sm",color:"accent",icon:"star_border","icon-selected":"star","icon-half":"star_half","no-dimming":"",readonly:""},null,8,["modelValue"])])])])]),_:1})]),_:1})}var Zs=L(Is,[["render",Xs]]);const et=B({props:{release:Object,employee:Object},setup(s){const d=oe(),{userData:p,getUserType:t}=F(),{getReleases:f,updateReleaseAttachments:b}=z(),i=Y(s.release[70]),r=Y(null),D=Y(null),C=Y([]),u=Y(!1),E=y(()=>f(s.release[3])&&f(s.release[3]).employee?f(s.release[3]).employee:null),$=y(()=>E.value&&!s.release[72]&&A.duration(A(s.release[36].$d).diff(A(s.employee[397].$d))).asDays()<30?"Yes":"No"),m=()=>{D.value.$el.click()};te(r,g=>{g&&T()});const T=async()=>{const g=p;if(g.access&&delete g.access,g.permissions&&delete g.permissions,r.value)for await(const x of r.value){const M={6:{value:await S(x),filename:x.name},7:{value:x.name}};C.value.push(M),r.value=null}if(C.value.length>0)try{u.value=!0;const{docs:x}=await Ae({release:s.release,attachments:C.value,user:g}),M=x.map(P=>P[12]);await b({id:s.release[3],data:M}),i.value=[...i.value,...M],r.value=null,C.value=[],d.notify({type:"positive",message:`Successfully added ${x.length} attachment(s)!`}),u.value=!1}catch(x){console.log(x),u.value=!1,r.value=null,C.value=[],d.notify({type:"negative",message:"Error adding attachment!"})}},S=g=>new Promise((x,M)=>{const P=new FileReader;P.readAsDataURL(g),P.onload=()=>x(P.result.replace(/^data:.+;base64,/,"")),P.onerror=X=>M(X)});return{deductNeeded:$,downloadFile:he,decodeHTML:G,fileAttachment:r,fileInput:D,openFileInput:m,currentAttachments:i,savingAttachments:u}}}),st=e("div",{class:"text-primary text-h6 text-bold"},"Release Information",-1),tt={class:"row"},ot={class:"col-12 col-sm-9"},at={class:"row q-py-sm"},lt={class:"col-12 col-sm-6 col-md-6"},nt={class:"text-body2"},it=e("span",{class:"text-bold q-mr-md"},"Return Company Equipment and/or PPE",-1),dt={class:"col-12 col-sm-6 col-md-6"},ct={class:"text-body2"},rt=e("span",{class:"text-bold q-mr-md"},"Payroll Deduction Needed",-1),mt={class:"row q-py-sm"},ut={class:"col-12"},pt={class:"text-body2"},_t=e("span",{class:"text-bold q-mr-md"},"Reason",-1),vt={class:"row q-py-sm"},yt={class:"col-12"},ht={class:"text-body2"},ft=e("span",{class:"text-bold q-mr-md"},"Recommendation for Rehire / Reassignment",-1),bt={class:"row q-py-sm"},$t={class:"col-12"},qt=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Comments")],-1),gt={class:"text-body2 text-italic q-pl-md"},wt={class:"col-12 col-sm-3 q-pl-sm"},Dt={class:"text-body2 text-bold text-center q-mb-sm"},xt={key:1,class:"text-body2 text-italic text-center"},kt=e("span",null,"No Supporting Documents",-1),Rt=[kt];function Ct(s,d,p,t,f,b){return c(),h(I,null,{default:n(()=>[a(v,{class:"text-center q-py-sm"},{default:n(()=>[st]),_:1}),a(v,{class:"q-py-none"},{default:n(()=>[e("div",tt,[e("div",ot,[e("div",at,[e("div",lt,[e("div",nt,[it,e("span",null,o(s.release[72]?"Yes":"No"),1)])]),e("div",dt,[e("div",ct,[rt,e("span",null,o(s.deductNeeded),1)])])]),a(R),e("div",mt,[e("div",ut,[e("div",pt,[_t,e("span",null,o(s.release[31])+" - "+o(s.release[32]),1)])])]),a(R),e("div",vt,[e("div",yt,[e("div",ht,[ft,e("span",null,o(s.release[12]),1)])])]),a(R),e("div",bt,[e("div",$t,[qt,e("div",gt,[e("span",null,o(s.release[60]===""?"No Comments":s.decodeHTML(s.release[60])),1)])])])]),e("div",wt,[e("div",Dt,[U("Supporting Documents "),s.$can("manage","releases")?(c(),h(j,{key:0,color:"accent",round:"",flat:"",class:"cursor-pointer",icon:"add",size:"md",onClick:s.openFileInput,disable:s.savingAttachments},null,8,["onClick","disable"])):k("",!0)]),a(ve,{showing:s.savingAttachments,color:"primary",label:"Saving...","label-class":"text-primary"},null,8,["showing"]),a(Me,{ref:"fileInput",style:{display:"none"},dense:"","bottom-slots":"",modelValue:s.fileAttachment,"onUpdate:modelValue":d[0]||(d[0]=i=>s.fileAttachment=i),multiple:"",append:"",label:""},null,8,["modelValue"]),s.currentAttachments.length>0?(c(),h(fe,{key:0},{default:n(()=>[(c(!0),w(J,null,K(s.currentAttachments,(i,r)=>de((c(),h(ce,{key:r,clickable:"",class:"text-body2",onClick:D=>s.downloadFile({tableId:"bsstsai5d",recordId:i[3],fieldId:6,versionNumber:1,name:i[7]})},{default:n(()=>[a(H,null,{default:n(()=>[U(o(r+1)+". "+o(i[7]),1)]),_:2},1024),a(H,{avatar:""},{default:n(()=>[a(re,{color:"info",name:"file_download"})]),_:1})]),_:2},1032,["onClick"])),[[me]])),128))]),_:1})):(c(),w("div",xt,Rt))])])]),_:1})]),_:1})}var St=L(et,[["render",Ct]]);const At=B({props:{employee:Object,assignment:Object,release:Object},setup(s){const{getUserType:d}=F(),{updateViewedReleases:p,getReleases:t}=z(),f=Y(!0),b=Y(!0),i=y(()=>t(s.release[3])),r=y(()=>i.value&&i.value.employee?i.value.employee:null),D=y(()=>i.value&&i.value.assignment?i.value.assignment:null),C=y(()=>{if(!r.value||!r.value.workday)return[];{const{personalData:$}=r.value.workday;if($){const{customIds:m}=$.identificationData?$.identificationData:{customIds:[]};return m}else return[]}});return{dayjs:A,openWindow:ye,getUserType:d,employeeData:r,assignmentData:D,eeLoading:f,assignLoading:b,getArrivalDate:$=>$[145].$d?A($[145].$d).format("MM/DD/YYYY"):null,employeeCustomIds:C,processCustomID:({id:$,idType:m})=>m.includes("J&amp;E")?`${$.slice(1,4)} / ${$.slice(-5)}`:$,decodeHTML:G}}}),Tt=e("div",{class:"text-body1 text-bold"},"Employee Information",-1),Yt={class:"row q-py-sm"},It={class:"col-3"},Et=e("div",{class:"text-caption"},[e("span",{class:"text-bold q-mr-md"},"Name")],-1),Nt={class:"text-caption q-pl-md"},Mt={class:"col-3"},Pt=e("div",{class:"text-caption"},[e("span",{class:"text-bold q-mr-md"},"Last 4 Digits of SS#")],-1),Lt={class:"text-caption q-pl-md"},Qt={class:"col-3"},jt=e("div",{class:"text-caption"},[e("span",{class:"text-bold q-mr-md"},"Phone")],-1),Bt={class:"text-caption q-pl-md"},Vt={class:"row q-py-sm"},Ut={class:"col-3"},Ft={class:"text-caption"},zt=e("span",{class:"text-bold q-mr-md"},"Workday Employee ID",-1),Ot={class:"text-caption q-pl-md"},Ht={class:"text-caption"},Wt={class:"text-bold q-mr-md"},Jt={class:"text-caption q-pl-md"},Kt={class:"row q-py-sm"},Gt={class:"col-3"},Xt=e("div",{class:"text-caption"},[e("span",{class:"text-bold q-mr-md"},"Arrival Date")],-1),Zt={class:"text-caption q-pl-md"},eo={class:"col-3"},so=e("div",{class:"text-caption"},[e("span",{class:"text-bold q-mr-md"},"Last Hire Date")],-1),to={class:"text-caption q-pl-md"},oo={class:"col-3"},ao=e("div",{class:"text-caption"},[e("span",{class:"text-bold q-mr-md"},"Last Day Worked")],-1),lo={class:"text-caption q-pl-md"},no={class:"col-3"},io=e("div",{class:"text-caption"},[e("span",{class:"text-bold q-mr-md"},"Effective Date")],-1),co={class:"text-caption q-pl-md"},ro={class:"row q-py-sm"},mo={class:"col-4"},uo=e("div",{class:"text-caption"},[e("span",{class:"text-bold q-mr-md"},"Job Site/ Location")],-1),po={class:"text-caption q-pl-md"},_o={class:"col-4"},vo=e("div",{class:"text-caption"},[e("span",{class:"text-bold q-mr-md"},"Job Title")],-1),yo={class:"text-caption q-pl-md"},ho={class:"col-2"},fo=e("div",{class:"text-caption"},[e("span",{class:"text-bold q-mr-md"},"Pay Rate")],-1),bo={class:"text-caption q-pl-md"};function $o(s,d,p,t,f,b){return c(),h(I,{flat:""},{default:n(()=>[a(v,{class:"q-pa-none"},{default:n(()=>[a(Pe,{src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo.svg",alt:"BrandSafway Logo",fit:"scale-down"})]),_:1}),a(v,{class:"q-py-sm"},{default:n(()=>[Tt]),_:1}),a(v,{class:"q-py-none"},{default:n(()=>[e("div",Yt,[e("div",It,[Et,e("div",Nt,[e("span",null,o(s.employeeData[22])+", "+o(s.employeeData[20]),1)])]),e("div",Mt,[Pt,e("div",Lt,[e("span",null,o(s.employeeData[188].substring(s.employeeData[188].length-4)),1)])]),e("div",Qt,[jt,e("div",Bt,[e("span",null,o(s.employeeData[25]),1)])])]),a(R),e("div",Vt,[e("div",Ut,[e("div",Ft,[zt,s.getUserType==="QuickBase User"?(c(),h(j,{key:0,dense:"",size:"sm",flat:"",icon:"open_in_new",color:"info",onClick:d[0]||(d[0]=i=>s.openWindow({url:s.employeeData[451]}))},{default:n(()=>[a(_e,null,{default:n(()=>[U("Open in Workday")]),_:1})]),_:1})):k("",!0)]),e("div",Ot,[e("span",null,o(s.employeeData[378]),1)])]),(c(!0),w(J,null,K(s.employeeCustomIds,(i,r)=>(c(),w("div",{key:r,class:"col-3"},[e("div",Ht,[e("span",Wt,o(s.decodeHTML(i.idType)),1)]),e("div",Jt,[e("span",null,o(s.processCustomID(i)),1)])]))),128))]),a(R),e("div",Kt,[e("div",Gt,[Xt,e("div",Zt,[e("span",null,o(s.getArrivalDate(s.assignmentData)||"N/A"),1)])]),e("div",eo,[so,e("div",to,[e("span",null,o(s.dayjs(s.employeeData[397].$d).format("MM/DD/YYYY")),1)])]),e("div",oo,[ao,e("div",lo,[e("span",null,o(s.dayjs(s.release[123].$d).format("MM/DD/YYYY")),1)])]),e("div",no,[io,e("div",co,[e("span",null,o(s.dayjs(s.release[36].$d).format("MM/DD/YYYY")),1)])])]),a(R),e("div",ro,[e("div",mo,[uo,e("div",po,[e("span",null,o(s.release[57]),1)])]),e("div",_o,[vo,e("div",yo,[e("span",null,o(s.assignmentData[20]),1)])]),e("div",ho,[fo,e("div",bo,[e("span",null,o(s.assignmentData[116]?`$ ${s.assignmentData[116].toFixed(2)}`:"N/A"),1)])])])]),_:1})]),_:1})}var qo=L(At,[["render",$o]]);const go=B({props:{data:Object},setup(s){return{evaluation:y(()=>s.data),convertScore:t=>({1:"Strongly Disagreed",2:"Disagreed",3:"Neutral",4:"Agreed",5:"Strongly Agreed",0:"Did Not Know"})[t]}}}),wo=e("div",{class:"text-body1 text-bold"},"Employee Performance Evaluation",-1),Do={class:"row q-py-sm"},xo={class:"col-3"},ko=e("div",{class:"text-caption"},[e("span",{class:"text-bold q-mr-md"},"Has good attendance")],-1),Ro={class:"text-caption q-pl-md"},Co={class:"q-mr-md"},So={class:"col-3"},Ao=e("div",{class:"text-caption"},[e("span",{class:"text-bold q-mr-md"},"Has a good attitude")],-1),To={class:"text-caption q-pl-md"},Yo={class:"q-mr-md"},Io={class:"col-3"},Eo=e("div",{class:"text-caption"},[e("span",{class:"text-bold q-mr-md"},"Can do their job")],-1),No={class:"text-caption q-pl-md"},Mo={class:"q-mr-md"},Po={class:"col-3"},Lo=e("div",{class:"text-caption"},[e("span",{class:"text-bold q-mr-md"},"Can be promoted in the future")],-1),Qo={class:"text-caption q-pl-md"},jo={class:"q-mr-md"};function Bo(s,d,p,t,f,b){return c(),h(I,{flat:"",class:"q-my-none q-py-none"},{default:n(()=>[a(v,{class:"q-py-sm"},{default:n(()=>[wo]),_:1}),a(v,{class:"q-py-none"},{default:n(()=>[e("div",Do,[e("div",xo,[ko,e("div",Ro,[e("span",Co,o(s.evaluation.attendance)+" / 5 - "+o(s.convertScore(s.evaluation.attendance)),1)])]),e("div",So,[Ao,e("div",To,[e("span",Yo,o(s.evaluation.attitude)+" / 5 - "+o(s.convertScore(s.evaluation.attitude)),1)])]),e("div",Io,[Eo,e("div",No,[e("span",Mo,o(s.evaluation.capable)+" / 5 - "+o(s.convertScore(s.evaluation.capable)),1)])]),e("div",Po,[Lo,e("div",Qo,[e("span",jo,o(s.evaluation.promotion)+" / 5 - "+o(s.convertScore(s.evaluation.promotion)),1)])])])]),_:1})]),_:1})}var Vo=L(go,[["render",Bo]]);const Uo=B({props:{release:Object,employee:Object},setup(s){const{getReleases:d}=z(),p=y(()=>d(s.release[3])&&d(s.release[3]).employee?d(s.release[3]).employee:null);return{deductNeeded:y(()=>p.value&&!s.release[72]&&A.duration(A(s.release[36].$d).diff(A(s.employee[397].$d))).asDays()<30?"Yes":"No"),downloadFile:he,decodeHTML:G}}}),Fo=e("div",{class:"text-body1 text-bold"},"Release Information",-1),zo={class:"row"},Oo={class:"col-9"},Ho={class:"row q-py-sm"},Wo={class:"col-6"},Jo={class:"text-caption"},Ko=e("span",{class:"text-bold q-mr-md"},"Return Company Equipment and/or PPE",-1),Go={class:"col-6"},Xo={class:"text-caption"},Zo=e("span",{class:"text-bold q-mr-md"},"Payroll Deduction Needed",-1),ea={class:"row q-py-sm"},sa={class:"col-12"},ta={class:"text-caption"},oa=e("span",{class:"text-bold q-mr-md"},"Reason",-1),aa={class:"row q-py-sm"},la={class:"col-12"},na={class:"text-caption"},ia=e("span",{class:"text-bold q-mr-md"},"Recommendation for Rehire / Reassignment",-1),da={class:"row q-py-sm"},ca={class:"col-12"},ra=e("div",{class:"text-caption"},[e("span",{class:"text-bold q-mr-md"},"Comments")],-1),ma={class:"text-caption text-italic q-pl-md"},ua={class:"col-3 q-pl-sm"},pa=e("div",{class:"text-caption text-bold text-center q-mb-sm"},"Supporting Documents",-1),_a={key:1,class:"text-caption text-italic text-center"},va=e("span",null,"No Supporting Documents",-1),ya=[va];function ha(s,d,p,t,f,b){return c(),h(I,{flat:""},{default:n(()=>[a(v,{class:"q-py-sm"},{default:n(()=>[Fo]),_:1}),a(v,{class:"q-py-none"},{default:n(()=>[e("div",zo,[e("div",Oo,[e("div",Ho,[e("div",Wo,[e("div",Jo,[Ko,e("span",null,o(s.release[72]?"Yes":"No"),1)])]),e("div",Go,[e("div",Xo,[Zo,e("span",null,o(s.deductNeeded),1)])])]),a(R),e("div",ea,[e("div",sa,[e("div",ta,[oa,e("span",null,o(s.release[32]),1)])])]),a(R),e("div",aa,[e("div",la,[e("div",na,[ia,e("span",null,o(s.release[12]),1)])])]),a(R),e("div",da,[e("div",ca,[ra,e("div",ma,[e("span",null,o(s.release[60]===""?"No Comments":s.decodeHTML(s.release[60])),1)])])])]),e("div",ua,[pa,s.release[70].length>0?(c(),h(fe,{key:0},{default:n(()=>[(c(!0),w(J,null,K(s.release[70],(i,r)=>de((c(),h(ce,{key:r,clickable:"",class:"text-caption",onClick:D=>s.downloadFile({tableId:"bsstsai5d",recordId:i[3],fieldId:6,versionNumber:1,name:i[7]})},{default:n(()=>[a(H,null,{default:n(()=>[U(o(r+1)+". "+o(i[7]),1)]),_:2},1024),a(H,{avatar:""},{default:n(()=>[a(re,{color:"info",name:"file_download"})]),_:1})]),_:2},1032,["onClick"])),[[me]])),128))]),_:1})):(c(),w("div",_a,ya))])])]),_:1})]),_:1})}var fa=L(Uo,[["render",ha]]);const ba=B({emits:["releaseReviewed"],props:{release:Object},setup(s,{emit:d}){const p=oe(),t=ue(),{getUserType:f}=F(),b=Y(!1),i=y(()=>(f==="Project User","How would you like to proceed with this employee?")),r=y(()=>f==="Project User"?[{label:"Rescind Release (Add Back to Roster)",value:"Rescind"}]:[{label:"Reassign this Employee",value:"Reassign"},{label:"Terminate this Employee",value:"Terminate"},{label:"Rescind Release (Add Back to Roster)",value:"Rescind"}]),D=ie({selection:ie().required("Required field if taking action on this release.").label("Disposition").nullable()}),{meta:C,errors:u,handleSubmit:E,handleReset:$}=je({validationSchema:D}),{value:m}=Be("selection");te(m,S=>{S?b.value=!0:b.value=!1});const T=E(async S=>{p.dialog({title:"Confirm",message:`Are you sure you want to ${S.selection.value} this ${S.selection.value==="Rescind"?"release":"employee"}?`,cancel:!0,persistent:!0}).onOk(async()=>{try{if(p.loading.show(),S.selection.value==="Reassign"||S.selection.value==="Terminate"){const{release:g,employee:x}=await Te({release:s.release,disp:S.selection});d("releaseReviewed",{release:g,employee:x}),window.postMessage("reloadDepartures"),$()}else if(S.selection.value==="Rescind"){const{release:g,employee:x}=await Ye({release:s.release,disp:S.selection});d("releaseReviewed",{release:g,employee:x}),t.replace({name:"employees",query:{refresh:!0}}),$()}}catch(g){console.log(g),p.loading.hide(),p.notify({type:"negative",message:"Cannot update release."})}})});return{formErrors:u,formMeta:C,submit:T,selection:m,options:r,question:i,visibleButton:b}}}),$a={class:"text-body2 text-weight-bold"},qa={class:"text-caption"};function ga(s,d,p,t,f,b){return c(),w("div",null,[a(Qe,{onSubmit:ke(s.submit,["prevent"])},{default:n(()=>[a(I,null,{default:n(()=>[a(v,{class:"q-pb-xs"},{default:n(()=>[e("div",$a,o(s.question),1),a(Le,{class:"q-mb-sm",dense:"","transition-show":"flip-up","transition-hide":"flip-down",modelValue:s.selection,"onUpdate:modelValue":d[0]||(d[0]=i=>s.selection=i),options:s.options,"bottom-slots":"",clearable:"",error:!!s.formErrors.selection},{error:n(()=>[e("div",qa,o(s.formErrors.selection),1)]),_:1},8,["modelValue","options","error"])]),_:1}),s.visibleButton?(c(),h(pe,{key:0,class:"q-pt-xs",align:"right"},{default:n(()=>[a(j,{color:"primary",label:"Submit",type:"submit"})]),_:1})):k("",!0)]),_:1})]),_:1},8,["onSubmit"])])}var wa=L(ba,[["render",ga]]);const Da={name:"View Release",directives:{},components:{EmployeeInformation:Ys,Evaluation:Zs,DepartureInformation:St,PrintDepartureInformation:fa,PrintEmployeeInformation:qo,PrintEvaluation:Vo,ReviewForm:wa},setup(){const s=Y(!1),d=Y(!1),p=oe(),t=Re();ue();const{capitalize:f}=Ce,{getUserType:b,userData:i}=F(),{getReleases:r,setReleases:D,updateViewedReleases:C}=z(),u=y(()=>r(t.params.release)),E=y(()=>u.value&&u.value.employee?u.value.employee:null),$=y(()=>u.value&&u.value.assignment?u.value.assignment:null),m=y(()=>u.value[59]&&u.value[59][0]?u.value[59][0]:null),T=y(()=>{const{data:l}=m.value?m.value:{data:null};return l}),S=y(()=>u.value?u.value[38]:null),g=y(()=>m.value&&m.value[44]?m.value[44]:null),x=y(()=>u.value?u.value[75]:null),M=y(()=>u.value?u.value[76]:null),P=l=>l&&l[1]&&l[1].$d?A(l[1].$d).format("MM/DD/YYYY"):null,X=async()=>{const l=await le({release:u.value});let _={referenceId:"N/A",logDescription:"N/A",logEffectiveMoment:"N/A",logEntryMoment:"N/A",eventType:"N/A",organizationReferenceID:"N/A",positionID:"N/A",employeeID:l[50],logType:"N/A"},q=u.value[36].$d;if(l.lastTerm&&(_=l.lastTerm),l.termEntryDate&&(q=l.termEntryDate.$d),E.value[397].isSameOrAfter(u.value[36])&&(!l.terminated||!l.lastTerm)){const{data:ee}=await se({release:l,entryMoment:q,workdayData:_});N({data:ee,notify:!0})}else if(!l.terminated||!l.lastTerm)p.dialog({title:"Alert",message:"Please complete the termination in Workday first."});else{const{data:ee}=await se({release:l,entryMoment:q,workdayData:_});N({data:ee,notify:!0})}},be=({release:l,employee:_})=>{if(l[43]==="Reassign"){const q=`https://elitehcms.quickbase.com/db/bs7qsu6wh?a=dbpage&pageID=6&ee=${_[3]}`;window.location.href=q}else N({data:l,notify:!0,employee:_})},$e=()=>{window.close()},qe=async()=>{if(!r(t.params.release)){p.loading.show();const{data:l}=await V.fetchFromHiringApp({fields:[W({type:"releases",query:"",id:t.params.release})]});D({id:l[3],data:l}),p.loading.hide(),b==="QuickBase User"&&ge({data:l})}},ge=async({data:l})=>{if(l[87]==="Active"&&l[95]&&l[42]!=="Complete"){const{reassigned:_,timestamp:q}=await Ee({release:l});_&&De({release:l,timestamp:q})}else if(l[73]==="Processed"){if(l.workdayTerm)return;const{release:_}=await Z({release:l});N({data:_})}else if(l[79]!=="Complete"&&l[36].$d&&!A().isBefore(A(l[36].$d))){const{completed:_}=await we({release:l}),{release:q}=await Z({release:_});q.terminated?ae({release:q}):N({data:q})}else{const{release:_}=await Z({release:l});_.terminated?ae({release:_}):N({data:_})}},Z=async({release:l})=>{if(l[87]!=="Terminated")return l.terminated=!1,{release:l};{const _=await le({release:l});if(_.terminated&&_.lastTerm)if(_[73]==="Processed"){const{data:q}=await V.upsertRecordsXML({to:"bp3ga39ut",data:[{3:{value:_[3]},106:{value:JSON.stringify(_.lastTerm)}}],fieldsToReturn:[80],formatObject:80});return{release:q[0][80]}}else return{release:_};else return{release:_}}},we=async({release:l})=>{await Ie({id:l[28]});const{data:_}=await V.fetchFromHiringApp({fields:[W({type:"releases",query:"",id:l[3]})]});return{completed:_}},ae=async({release:l})=>{p.dialog({title:"Confirm",message:"It looks like this termination has already been processed in Workday. Would you like to update this employee in CEM now?",persistent:!0,cancel:!0}).onOk(async()=>{const{data:_}=await se({release:l,entryMoment:l.termEntryDate.$d,workdayData:l.lastTerm});N({data:_,notify:!0})}).onCancel(()=>{N({data:l})})},De=async({release:l,timestamp:_})=>{p.dialog({title:"Confirm",message:"It looks like this employee has been reassigned. Would you like to update this release in CEM now?",persistent:!0,cancel:!0}).onOk(async()=>{const q=await Ne({release:l,disposition:"Reassign",ts:_,updatedBy:i});N({data:q,notify:!0})}).onCancel(()=>{N({data:l})})},N=({data:l,notify:_,employee:q})=>{p.loading.isActive&&p.loading.hide(),u.value.employee?l.employee=u.value.employee:q&&(l.employee=q),u.value.assignment&&(l.assignment=u.value.assignment),D({id:l[3],data:l}),_&&p.notify({type:"positive",message:"Employee updated in CEM"})},xe=()=>{s.value=!0};return te(s,(l,_)=>{s.value&&setTimeout(()=>{print(),setTimeout(()=>{s.value=!1},500)},200)}),qe(),{release:u,employee:E,assignment:$,evaluation:T,evaluator:g,reviewer:x,processor:M,getSubmittedDate:P,getUserType:b,fab:d,dayjs:A,submitter:S,capitalize:f,showPrint:s,printPage:xe,releaseReviewed:be,completeTermination:X,closeWindow:$e}}},xa={class:"q-px-sm q-pb-xl"},ka={class:"row q-py-sm"},Ra={class:"col-12 col-sm-3"},Ca=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Submitted By")],-1),Sa={class:"text-body2 q-pl-md"},Aa={class:"col-12 col-sm-3"},Ta=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Evaluated By")],-1),Ya={class:"text-body2 q-pl-md"},Ia={key:0},Ea={key:1},Na={key:0,class:"col-12 col-sm-3"},Ma=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Reviewed By")],-1),Pa={class:"text-body2 q-pl-md"},La={key:1,class:"col-3"},Qa=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Processed By")],-1),ja={class:"text-body2 q-pl-md"},Ba=e("div",{class:"text-primary text-h6 text-bold"},"Termination Workday Data",-1),Va={class:"row q-py-sm"},Ua={class:"col-12 col-sm-3"},Fa=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Entry Date")],-1),za={class:"text-body2 q-pl-md"},Oa={class:"col-12 col-sm-3"},Ha=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Effective Date")],-1),Wa={class:"text-body2 q-pl-md"},Ja={class:"row"},Ka={class:"col-12 col-md-6"},Ga={class:"row q-py-sm"},Xa={class:"col-3"},Za=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Submitted By")],-1),el={class:"text-body2 q-pl-md"},sl={class:"col-3"},tl=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Submitted Date")],-1),ol={class:"text-body2 q-pl-md"},al={class:"col-3"},ll=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Evaluated By")],-1),nl={class:"text-body2 q-pl-md"},il={key:0},dl={key:1},cl={key:0,class:"col-3"},rl=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Reviewed By")],-1),ml={class:"text-body2 q-pl-md"},ul={key:1,class:"col-3"},pl=e("div",{class:"text-body2"},[e("span",{class:"text-bold q-mr-md"},"Processed By")],-1),_l={class:"text-body2 q-pl-md"};function vl(s,d,p,t,f,b){const i=Q("employee-information"),r=Q("evaluation"),D=Q("departure-information"),C=Q("review-form"),u=Q("print-employee-information"),E=Q("print-evaluation"),$=Q("print-departure-information");return c(),h(Se,{style:{"max-width":"100vw"}},{default:n(()=>[e("div",xa,[t.release&&!t.showPrint?(c(),h(I,{key:0,flat:"",class:"text-dark"},{default:n(()=>[s.$route.name==="view-release"?(c(),h(pe,{key:0,class:"q-pb-xs print-hide",align:"right"},{default:n(()=>[t.release[42]==="Reviewed"&&t.release[43]==="Terminate"&&t.getUserType==="QuickBase User"?(c(),h(j,{key:0,icon:"done",label:"Termination Processed",color:"positive",onClick:t.completeTermination},null,8,["onClick"])):k("",!0),a(j,{icon:"print",label:"Print",color:"info",onClick:t.printPage},null,8,["onClick"]),a(j,{icon:"close",label:"Close",color:"dark",onClick:d[0]||(d[0]=m=>t.getUserType==="QuickBase User"?t.closeWindow():s.$router.replace({name:"employees",query:{refresh:!0}}))})]),_:1})):k("",!0),a(v,{class:"q-py-xs"},{default:n(()=>[a(i,{assignment:t.assignment,employee:t.employee,release:t.release},null,8,["assignment","employee","release"])]),_:1}),t.evaluation?(c(),h(v,{key:1,class:"q-py-xs"},{default:n(()=>[a(r,{data:t.evaluation},null,8,["data"])]),_:1})):k("",!0),a(v,{class:"q-py-xs"},{default:n(()=>[a(D,{employee:t.employee,release:t.release},null,8,["employee","release"])]),_:1}),a(v,{class:"q-py-xs"},{default:n(()=>[a(I,null,{default:n(()=>[a(v,{class:"q-py-none"},{default:n(()=>[e("div",ka,[e("div",Ra,[Ca,e("div",Sa,[e("span",null,o(t.submitter[37])+", "+o(t.submitter[35])+" - "+o(t.submitter[6]),1)])]),e("div",Aa,[Ta,e("div",Ya,[t.evaluator?(c(),w("span",Ia,o(t.capitalize(t.evaluator[22].toLowerCase()))+", "+o(t.capitalize(t.evaluator[20].toLowerCase())),1)):(c(),w("span",Ea,"Not Specified"))])]),t.reviewer?(c(),w("div",Na,[Ma,e("div",Pa,[e("span",null,o(t.capitalize(t.reviewer[37].toLowerCase()))+", "+o(t.capitalize(t.reviewer[35].toLowerCase())),1)])])):k("",!0),t.processor?(c(),w("div",La,[Qa,e("div",ja,[e("span",null,o(t.capitalize(t.processor[37].toLowerCase()))+", "+o(t.capitalize(t.processor[35].toLowerCase())),1)])])):k("",!0)])]),_:1})]),_:1})]),_:1}),t.release.workdayTerm?(c(),h(v,{key:2,class:"q-py-xs"},{default:n(()=>[a(I,null,{default:n(()=>[a(v,{class:"text-center q-py-sm"},{default:n(()=>[Ba]),_:1}),a(v,{class:"q-py-none"},{default:n(()=>[e("div",Va,[e("div",Ua,[Fa,e("div",za,[e("span",null,o(s.$dayjs(t.release.workdayTerm.logEntryMoment).format("MM/DD/YYYY hh:mm:ss a z")),1)])]),e("div",Oa,[Ha,e("div",Wa,[e("span",null,o(s.$dayjs(t.release.workdayTerm.logEffectiveMoment).format("MM/DD/YYYY hh:mm:ss a z")),1)])])])]),_:1})]),_:1})]),_:1})):k("",!0),t.release[42]==="Pending"&&s.$can("manage","releases")?(c(),h(v,{key:3,class:"q-py-sm"},{default:n(()=>[e("div",Ja,[e("div",Ka,[a(C,{release:t.release,onReleaseReviewed:t.releaseReviewed},null,8,["release","onReleaseReviewed"])])])]),_:1})):k("",!0)]),_:1})):k("",!0),t.release&&t.showPrint?(c(),h(I,{key:1,id:"printArea",flat:"",class:"text-body2"},{default:n(()=>[a(v,{class:"q-py-xs"},{default:n(()=>[a(u,{assignment:t.assignment,employee:t.employee,release:t.release},null,8,["assignment","employee","release"])]),_:1}),a(R),t.evaluation?(c(),h(v,{key:0,class:"q-py-xs"},{default:n(()=>[a(E,{data:t.evaluation},null,8,["data"])]),_:1})):k("",!0),a(R),a(v,{class:"q-py-xs"},{default:n(()=>[a($,{employee:t.employee,release:t.release},null,8,["employee","release"])]),_:1}),a(R),a(v,{class:"q-pb-sm"},{default:n(()=>[a(I,{flat:""},{default:n(()=>[a(v,{class:"q-py-none"},{default:n(()=>[e("div",Ga,[e("div",Xa,[Za,e("div",el,[e("span",null,o(t.submitter[37])+", "+o(t.submitter[35]),1)])]),e("div",sl,[tl,e("div",ol,[e("span",null,o(t.getSubmittedDate(t.release)||""),1)])]),e("div",al,[ll,e("div",nl,[t.evaluator?(c(),w("span",il,o(t.capitalize(t.evaluator[22].toLowerCase()))+", "+o(t.capitalize(t.evaluator[20].toLowerCase())),1)):(c(),w("span",dl,"Not Specified"))])]),t.reviewer?(c(),w("div",cl,[rl,e("div",ml,[e("span",null,o(t.capitalize(t.reviewer[37].toLowerCase()))+", "+o(t.capitalize(t.reviewer[35].toLowerCase())),1)])])):k("",!0),t.processor?(c(),w("div",ul,[pl,e("div",_l,[e("span",null,o(t.capitalize(t.processor[37].toLowerCase()))+", "+o(t.capitalize(t.processor[35].toLowerCase())),1)])])):k("",!0)])]),_:1})]),_:1})]),_:1})]),_:1})):k("",!0)])]),_:1})}var Xl=L(Da,[["render",vl]]);export{Xl as default};

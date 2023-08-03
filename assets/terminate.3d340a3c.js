import{l as qe,r as g,bU as re,bT as de,c as F,w as X,_ as we,A as y,B as q,d as l,br as i,cS as J,cT as Z,D as o,ac as E,bR as H,bP as T,ax as N,cU as le,bW as W,F as oe,b4 as Ae,bS as se,ar as ue,dA as d,cV as Se,bO as Ue,aq as ne}from"./index.dbae30bb.js";import{Q as De}from"./QPage.c94e329b.js";import{u as me}from"./use-quasar.4af20f9f.js";import{u as Q}from"./useQuerySaver.d29ff9ee.js";import{q as R}from"./app.ec713cf3.js";import{u as pe}from"./dataStore.debf7de5.js";import{a as M,Q as Ce}from"./QSelect.5872e32d.js";import{Q as Ee}from"./QFile.ba8a2e60.js";import{Q as Re}from"./QList.be5fb962.js";import{Q as ke}from"./QForm.5b858bcd.js";import{a as $e,u as c}from"./vee-validate.esm.318aeadf.js";import{a as Y,b as Ne,c as ie,e as K}from"./array.22f670ac.js";import{dayjs as _}from"./dayjs.c8159a49.js";import{s as Qe}from"./submitRelease.8a329b19.js";import{u as Fe}from"./dataStore.57ce49f9.js";import"./_commonjsHelpers.a26ce4be.js";import"./localForage.d59848b7.js";import"./api.0b402b2c.js";import"./index.04bc0a32.js";import"./i18n.3b5a80ec.js";import"./QChip.1fd9b058.js";import"./QMenu.fa26a79f.js";import"./position-engine.4c646f66.js";import"./selection.6f966ca8.js";import"./rtl.b51694b1.js";const Ie=qe({emits:["releaseSubmitted"],props:{record:Object,employee:Object},setup(e,{emit:a}){const w=g(!1),A=g(!1),b=g(null),V=g(!1),t=g([]),p=me(),S=re(),z=de(),{getTermReasons:h,setTermReasons:j}=pe(),{getAssignments:O,fetchAssignments:P}=Fe(),L=F(()=>Y({selection:Y().required().nullable().label("Reason"),effective:Ne().required().label("Last Day On Site"),category:ie().nullable(),attendance:K().required().label("Attendance"),capability:K().required().label("Capability"),attitude:K().required().label("Attitude"),promotable:K().required().label("Promotability"),comments:ie().nullable().label("Comments"),equipment:Y().required().nullable().label("Equipment Returned"),supervisor:Y().nullable().label("Supervisor")})),{errors:u,handleSubmit:U,handleReset:I}=$e({validationSchema:L,initialValues:{}}),{value:D}=c("selection"),{value:C}=c("effective"),{value:n}=c("category"),{value:r}=c("attachments"),{value:v}=c("capability"),{value:k}=c("attendance"),{value:x}=c("attitude"),{value:ee}=c("promotable"),{value:ve}=c("comments"),{value:te}=c("equipment"),{value:ce}=c("supervisor"),B=F(()=>{const s=h();return n.value?s.filter(m=>m[6]===n.value).sort((m,f)=>m[12]>f[12]?1:-1):s.sort((m,f)=>m[12]>f[12]?1:-1)});S.query&&S.query.reason==="no-show"&&(n.value="Voluntary",B.value.length>0&&(V.value=!0,D.value=B.value.find(s=>s[3]===6)),C.value=_().format("YYYY-MM-DD"),te.value={value:!0,label:"None Issued"},v.value="0",k.value="0",x.value="0",ee.value="0"),X(B,(s,m)=>{S.query&&S.query.reason==="no-show"&&V.value===!1&&(V.value=!0,D.value=B.value.find(f=>f[3]===6))}),X(n,(s,m)=>{D.value=null});const be=U(async s=>{if(A.value&&t.value.length===0)p.dialog({title:"Alert",message:"Supporting documents are required for this reason!"});else{const m={capability:s.capability,attendance:s.attendance,attitude:s.attitude,promotable:s.promotable,comments:s.comments?s.comments.replace(/(\r\n|\n|\r)/gm," "):null};p.dialog({title:"Confirm",message:"Are you sure you want to release this employee?",cancel:!0,persistent:!0}).onOk(async()=>{try{w.value=!0;const{release:f,employee:$,assignment:G}=await Qe({employee:e.employee,assignment:e.record,values:s,effectiveNow:!ae.value,attachments:t.value,ratings:m,supervisor:s.supervisor});a("releaseSubmitted",{release:f,employee:$,assignment:G,effectiveNow:!ae.value}),I()}catch{w.value=!1,p.notify({type:"negative",message:"Cannot submit release."})}})}}),fe=()=>{p.dialog({title:"Confirm",message:"Are you sure you want to cancel?",cancel:!0,persistent:!0}).onOk(()=>{I(),z.go(-1)})};X(D,(s,m)=>{s&&s[19]?(A.value=!0,r.value=!0):(r.value=!1,A.value=!1)});const ye=F(()=>{const s=h();return[...new Map(s.map(m=>[m[6],m[6]])).values()]}),ae=F(()=>C.value&&C.value!==""?_().isBefore(_(C.value)):!1),ge=s=>new Promise((m,f)=>{const $=new FileReader;$.readAsDataURL(s),$.onload=()=>m($.result.replace(/^data:.+;base64,/,"")),$.onerror=G=>f(G)}),Ve=()=>{b.value&&b.value.forEach(async s=>{const m={6:{value:await ge(s),filename:s.name},7:{value:s.name}};t.value.push(m),b.value=null}),console.log(t.value)},he=s=>{console.log(t.value[s]),t.value.splice(s,1)};return(async()=>{if(h().length===0){const{data:s}=await R.fetchFromHiringApp({fields:[Q({type:"termReasons",query:"{'11'.EX.'true'}"})]});j({reasons:s})}P({projectId:e.record[74]})})(),{props:e,options:B,primaryReasons:ye,category:n,selection:D,effective:C,attachments:r,capability:v,attendance:k,attitude:x,promotable:ee,comments:ve,equipment:te,supervisor:ce,attachmentsRequired:A,fileAttachment:b,attachedFiles:t,submit:be,formErrors:u,handleReset:I,cancelRelease:fe,showFiles:Ve,deleteFile:he,getAssignments:O,disableSubmit:w}}}),Be={class:"row"},Te={class:"col-12 col-md-4 q-px-sm"},je=o("div",{class:"text-caption"},"Is this release voluntary or involuntary?",-1),Oe={class:"text-caption"},Pe={class:"col-12 col-md-4 q-pl-xs q-pr-sm"},Le=o("div",{class:"text-caption"},"What is the reason for this release?",-1),He={class:"text-caption"},We={class:"row"},Me={class:"col-12 col-md-4 q-pl-xs q-pr-sm"},Ye=o("div",{class:"text-caption"},"When is the employee's last day on site?",-1),Ke={class:"text-caption"},Xe={class:"col-12 col-md-4 q-pl-xs q-pr-sm"},ze=o("div",{class:"text-caption"},"Has all Company Equipment been returned?",-1),Ge={class:"text-caption"},_e={class:"row items-top justify-between q-mt-sm"},Je={class:"col-4 q-pl-xs q-pr-sm"},Ze={key:0,class:"text-body2 text-negative text-italic"},xe={key:0},et={key:1},tt={key:1,class:"text-body2 text-dark text-italic"},at=o("span",null,"**Supporting documents are optional for this reason.",-1),lt=[at],ot={key:0,class:"col-6 q-pl-xs q-pr-sm"},st=o("div",{class:"text-body1 text-info q-mb-sm"},"Attached Documents",-1),nt={class:"row q-my-md"},it={class:"col-12"},rt=o("div",{class:"q-pa-sm"},[o("div",{class:"text-h6 text-bold"},"CAAP Rating"),o("div",{class:"text-body1 text-dark text-italic"},"Capability, Attendance, Attitude, and Promotability"),o("div",{class:"text-body2 text-accent q-mt-sm"},"Select how much you agree with each of the following statements.")],-1),dt={class:"q-pb-sm"},ut=o("div",{class:"text-body2 text-info text-bold q-mb-sm"},"This employee is capable of performing their assigned job.",-1),mt={class:"q-pb-sm"},pt=o("div",{class:"text-body2 text-info text-bold q-mb-sm"},"This employee regularly shows up to work on time.",-1),vt={class:"q-pb-sm"},ct=o("div",{class:"text-body2 text-info text-bold q-mb-sm"},"This employee has a good attitude.",-1),bt={class:"q-pb-sm"},ft=o("div",{class:"text-body2 text-info text-bold q-mb-sm"},"I am confident that this employee can be promoted in the future.",-1),yt={class:"row q-mt-md"},gt={class:"col-12 col-md-5"},Vt=o("div",{class:"text-body2 text-weight-bold text-info"},[N(" Who conducted this evaluation? "),o("span",{class:"text-italic text-weight-light text-dark"},"(recommended)")],-1),ht={class:"text-caption"},qt={class:"row q-py-sm"},wt={class:"col-12"};function At(e,a,w,A,b,V){return y(),q("div",null,[l(ke,{onSubmit:Ue(e.submit,["prevent"])},{default:i(()=>[l(J,null,{default:i(()=>[l(Z,null,{default:i(()=>[o("div",Be,[o("div",Te,[je,l(M,{dense:"","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.category,"onUpdate:modelValue":a[0]||(a[0]=t=>e.category=t),options:e.primaryReasons},{error:i(()=>[o("div",Oe,E(e.formErrors.selection),1)]),"no-option":i(()=>[l(H,null,{default:i(()=>[l(T,{class:"text-grey"},{default:i(()=>[N(" No Options Available ")]),_:1})]),_:1})]),_:1},8,["modelValue","options"])]),o("div",Pe,[Le,l(M,{dense:"","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.selection,"onUpdate:modelValue":a[1]||(a[1]=t=>e.selection=t),options:e.options,"option-label":"12","display-value":`${e.selection?e.selection[12]:""}`,"bottom-slots":"",error:!!e.formErrors.selection,disable:!e.category},{error:i(()=>[o("div",He,E(e.formErrors.selection),1)]),"no-option":i(()=>[l(H,null,{default:i(()=>[l(T,{class:"text-grey"},{default:i(()=>[N(" No Options Available ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","display-value","error","disable"])])]),o("div",We,[o("div",Me,[Ye,l(le,{dense:"",type:"date",modelValue:e.effective,"onUpdate:modelValue":a[2]||(a[2]=t=>e.effective=t),error:!!e.formErrors.effective,"bottom-slots":""},{error:i(()=>[o("div",Ke,E(e.formErrors.effective),1)]),_:1},8,["modelValue","error"])]),o("div",Xe,[ze,l(M,{dense:"","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.equipment,"onUpdate:modelValue":a[3]||(a[3]=t=>e.equipment=t),options:[{value:!0,label:"Yes"},{value:!1,label:"No"},{value:!0,label:"None Issued"}],"bottom-slots":"",error:!!e.formErrors.equipment},{error:i(()=>[o("div",Ge,E(e.formErrors.equipment),1)]),_:1},8,["modelValue","error"])])]),o("div",_e,[o("div",Je,[l(Ee,{dense:"","bottom-slots":"",modelValue:e.fileAttachment,"onUpdate:modelValue":a[4]||(a[4]=t=>e.fileAttachment=t),multiple:"",append:"",label:"Attach Supporting Documents"},{after:i(()=>[l(W,{dense:"",color:"info",round:"",flat:"",icon:"cloud_upload",onClick:e.showFiles},null,8,["onClick"])]),_:1},8,["modelValue"]),e.attachmentsRequired?(y(),q("div",Ze,[N("!! "),e.selection[12].toLowerCase().includes("attendance")?(y(),q("span",xe,"Supporting attendance records must be attached.")):(y(),q("span",et,"Supporting documents are required for this reason."))])):(y(),q("div",tt,lt))]),e.attachedFiles.length>0?(y(),q("div",ot,[st,l(Re,{dense:""},{default:i(()=>[(y(!0),q(oe,null,Ae(e.attachedFiles,(t,p)=>(y(),q(oe,{key:t},[l(H,null,{default:i(()=>[l(T,null,{default:i(()=>[l(Ce,null,{default:i(()=>[N(E(p+1)+". "+E(t[6].filename),1)]),_:2},1024)]),_:2},1024),l(T,{side:""},{default:i(()=>[l(W,{color:"accent",round:"",flat:"",class:"cursor-pointer",icon:"delete",size:"md",onClick:S=>e.deleteFile(p)},null,8,["onClick"])]),_:2},1024)]),_:2},1024),l(se)],64))),128))]),_:1})])):ue("",!0)])]),_:1})]),_:1}),l(se),o("div",nt,[o("div",it,[rt,l(J,null,{default:i(()=>[l(Z,null,{default:i(()=>[o("div",null,[o("div",dt,[ut,l(d,{name:"capability",modelValue:e.capability,"onUpdate:modelValue":a[5]||(a[5]=t=>e.capability=t),val:"1",label:"Strongly Disagree"},null,8,["modelValue"]),l(d,{name:"capability",modelValue:e.capability,"onUpdate:modelValue":a[6]||(a[6]=t=>e.capability=t),val:"2",label:"Disagree"},null,8,["modelValue"]),l(d,{name:"capability",modelValue:e.capability,"onUpdate:modelValue":a[7]||(a[7]=t=>e.capability=t),val:"3",label:"Neutral"},null,8,["modelValue"]),l(d,{name:"capability",modelValue:e.capability,"onUpdate:modelValue":a[8]||(a[8]=t=>e.capability=t),val:"4",label:"Agree"},null,8,["modelValue"]),l(d,{name:"capability",modelValue:e.capability,"onUpdate:modelValue":a[9]||(a[9]=t=>e.capability=t),val:"5",label:"Strongly Agree"},null,8,["modelValue"]),l(d,{name:"capability",modelValue:e.capability,"onUpdate:modelValue":a[10]||(a[10]=t=>e.capability=t),val:"0",label:"I Do Not Know"},null,8,["modelValue"])]),o("div",mt,[pt,l(d,{name:"attendance",modelValue:e.attendance,"onUpdate:modelValue":a[11]||(a[11]=t=>e.attendance=t),val:"1",label:"Strongly Disagree"},null,8,["modelValue"]),l(d,{name:"attendance",modelValue:e.attendance,"onUpdate:modelValue":a[12]||(a[12]=t=>e.attendance=t),val:"2",label:"Disagree"},null,8,["modelValue"]),l(d,{name:"attendance",modelValue:e.attendance,"onUpdate:modelValue":a[13]||(a[13]=t=>e.attendance=t),val:"3",label:"Neutral"},null,8,["modelValue"]),l(d,{name:"attendance",modelValue:e.attendance,"onUpdate:modelValue":a[14]||(a[14]=t=>e.attendance=t),val:"4",label:"Agree"},null,8,["modelValue"]),l(d,{name:"attendance",modelValue:e.attendance,"onUpdate:modelValue":a[15]||(a[15]=t=>e.attendance=t),val:"5",label:"Strongly Agree"},null,8,["modelValue"]),l(d,{name:"attendance",modelValue:e.attendance,"onUpdate:modelValue":a[16]||(a[16]=t=>e.attendance=t),val:"0",label:"I Do Not Know"},null,8,["modelValue"])]),o("div",vt,[ct,l(d,{name:"attitude",modelValue:e.attitude,"onUpdate:modelValue":a[17]||(a[17]=t=>e.attitude=t),val:"1",label:"Strongly Disagree"},null,8,["modelValue"]),l(d,{name:"attitude",modelValue:e.attitude,"onUpdate:modelValue":a[18]||(a[18]=t=>e.attitude=t),val:"2",label:"Disagree"},null,8,["modelValue"]),l(d,{name:"attitude",modelValue:e.attitude,"onUpdate:modelValue":a[19]||(a[19]=t=>e.attitude=t),val:"3",label:"Neutral"},null,8,["modelValue"]),l(d,{name:"attitude",modelValue:e.attitude,"onUpdate:modelValue":a[20]||(a[20]=t=>e.attitude=t),val:"4",label:"Agree"},null,8,["modelValue"]),l(d,{name:"attitude",modelValue:e.attitude,"onUpdate:modelValue":a[21]||(a[21]=t=>e.attitude=t),val:"5",label:"Strongly Agree"},null,8,["modelValue"]),l(d,{name:"attitude",modelValue:e.attitude,"onUpdate:modelValue":a[22]||(a[22]=t=>e.attitude=t),val:"0",label:"I Do Not Know"},null,8,["modelValue"])]),o("div",bt,[ft,l(d,{name:"promotable",modelValue:e.promotable,"onUpdate:modelValue":a[23]||(a[23]=t=>e.promotable=t),val:"1",label:"Strongly Disagree"},null,8,["modelValue"]),l(d,{name:"promotable",modelValue:e.promotable,"onUpdate:modelValue":a[24]||(a[24]=t=>e.promotable=t),val:"2",label:"Disagree"},null,8,["modelValue"]),l(d,{name:"promotable",modelValue:e.promotable,"onUpdate:modelValue":a[25]||(a[25]=t=>e.promotable=t),val:"3",label:"Neutral"},null,8,["modelValue"]),l(d,{name:"promotable",modelValue:e.promotable,"onUpdate:modelValue":a[26]||(a[26]=t=>e.promotable=t),val:"4",label:"Agree"},null,8,["modelValue"]),l(d,{name:"promotable",modelValue:e.promotable,"onUpdate:modelValue":a[27]||(a[27]=t=>e.promotable=t),val:"5",label:"Strongly Agree"},null,8,["modelValue"]),l(d,{name:"promotable",modelValue:e.promotable,"onUpdate:modelValue":a[28]||(a[28]=t=>e.promotable=t),val:"0",label:"I Do Not Know"},null,8,["modelValue"])])]),o("div",yt,[o("div",gt,[Vt,l(M,{dense:"",clearable:"","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.supervisor,"onUpdate:modelValue":a[29]||(a[29]=t=>e.supervisor=t),options:e.getAssignments(e.props.record[74]).length>0?e.getAssignments(e.props.record[74]).filter(t=>t[3]!==e.props.record[3]).sort((t,p)=>t[75]>p[75]?1:-1):[],"option-label":t=>`${t[75]} - ${t[104]}`,"display-value":`${e.supervisor?e.supervisor[75]:""}`,"bottom-slots":"",error:!!e.formErrors.supervisor,hint:"Ex: Employee's Supervisor"},{error:i(()=>[o("div",ht,E(e.formErrors.supervisor),1)]),"no-option":i(()=>[l(H,null,{default:i(()=>[l(T,{class:"text-grey"},{default:i(()=>[N(" No Options Available ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","option-label","display-value","error"])])])]),_:1})]),_:1})])]),o("div",qt,[o("div",wt,[l(le,{filled:"",type:"textarea",modelValue:e.comments,"onUpdate:modelValue":a[30]||(a[30]=t=>e.comments=t),label:"Comments"},null,8,["modelValue"])])]),l(Se,{align:"right"},{default:i(()=>[l(W,{disable:e.disableSubmit,color:"info",label:"Submit",type:"submit"},null,8,["disable"]),l(W,{color:"secondary",label:"Cancel",onClick:e.cancelRelease},null,8,["onClick"])]),_:1})]),_:1},8,["onSubmit"])])}var St=we(Ie,[["render",At]]);const Ut={class:"q-pa-sm"},Dt={class:"row"},Ct={class:"col-12"},Et=o("div",{class:"text-h6 text-weight-bold q-mb-md"},"Please complete the following to submit this release.",-1),ta={__name:"terminate",setup(e){g(0);const a=re(),w=de(),A=me(),b=g("employee"),V=g(null),t=g(null),p=g(0);b.value=a.query.reason==="no-show"?"arrivals":"employee",b.value==="no-show"&&(V.value=a.query.aid,t.value=a.query.did);const{getEmployee:S,getAssignmentsByEmployee:z,setAssignmentsByEmployee:h,setEmployees:j,setReleases:O,setReleasesByAssignment:P,setReleasesByEmployee:L}=pe(),u=F(()=>S(a.params.id)),U=F(()=>u.value?z(a.params.id):null),I=async()=>{if(!U.value&&u.value[577]&&u.value[577]>0){const{data:n}=await R.fetchFromHiringApp({fields:[Q({type:"assignments",query:"",id:u.value[577]})]});h({id:u.value[3],data:n})}else if(u.value[577]&&u.value[577]>0)await R.fetchFromHiringApp({fields:[Q({type:"assignments",query:"",id:u.value[577]})]});else if(!U.value&&V.value&&V.value>0){const{data:n}=await R.fetchFromHiringApp({fields:[Q({type:"assignments",query:"",id:V.value})]});h({id:u.value[3],data:n})}else if(!U.value&&u.value[608]&&u.value[608]>0){const{data:n}=await R.fetchFromHiringApp({fields:[Q({type:"assignments",query:"",id:u.value[608]})]});h({id:u.value[3],data:n})}else{const n=Q({type:"assignments",query:"",id:u.value[577]});n[8]={value:`{3.EX.${a.query.aid}}`};const{data:r}=await R.fetchFromHiringApp({fields:[n]});h({id:u.value[3],data:r})}};X(u,(n,r)=>{n&&p.value===0&&(I(),p.value++)});const D=async({employee:n,release:r,assignment:v,effectiveNow:k})=>{b.value==="arrivals"&&a.query.did&&await C(a.query.did,r),A.notify({type:"positive",message:"Release successfully submitted."}),k?(n[581]=r[3],O({id:r[3],data:r}),j({id:n[3],data:n}),h({id:n[3],assignment:v}),P({id:v[3],data:r}),L({id:n[3],data:r})):(n[581]=r[3],j({id:n[3],data:n}),O({id:r[3],data:r}),P({id:v[3],data:r}),L({id:n[3],data:r})),b.value==="arrivals"?w.replace({name:"arrivals"}):w.replace({name:"view-ee-release",params:{id:n[3],release:r[3]}})};async function C(n,r){try{let v=7;r[33]==="Terminate_Employee_Voluntary_Never_Started_Working"?v=7:(r[33]==="Terminate_Employee_Involuntary_Lack_of_Work_End_of_Contract_Project"||r[33]==="Terminate_Employee_Involuntary_Project_Cancelled_Before_Employee_Started")&&(v=8);const{data:k}=await R.upsertRecordsXML({to:"bp3gaymc3",data:[{3:{value:n},20:{value:"DNC"},61:{value:v},63:{value:r[33]},74:{value:new Date}}],fieldsToReturn:[204],formatObject:204});return k[0][204]}catch(v){throw{message:"Cannot edit deployment",error:v}}}return(n,r)=>(y(),ne(De,{style:{"max-width":"100vw"}},{default:i(()=>[o("div",Ut,[o("div",Dt,[o("div",Ct,[l(J,{flat:""},{default:i(()=>[U.value?(y(),ne(Z,{key:0},{default:i(()=>[Et,l(St,{record:U.value,employee:u.value,onReleaseSubmitted:D},null,8,["record","employee"])]),_:1})):ue("",!0)]),_:1})])])])]),_:1}))}};export{ta as default};

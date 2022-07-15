import{Q as Ue}from"./QPage.ace75f1f.js";import{Q as G,a as fe,b as K,c as ce}from"./QTabPanels.79c11c7b.js";import{Q as Je}from"./QToolbar.734b6770.js";import{u as ie}from"./use-quasar.cb012e6c.js";import{k as L,c as T,_ as O,v as d,x as b,z as l,d as t,be as s,c0 as B,b$ as F,a7 as u,cz as J,bY as Pe,cA as oe,c3 as V,bB as te,b_ as ae,r as h,w as Ee,aV as I,aj as k,F as x,aU as ee,ak as D,cB as De,B as S,ao as je,d4 as Ae,bU as Z,aq as ve,bg as we,bz as qe,d5 as Ve}from"./index.3c80f5fb.js";import{Q as Ne}from"./QMarkupTable.3abe2fc7.js";import{a as H}from"./QSelect.2a814c97.js";import{Q as se}from"./QForm.f05e74f3.js";import{Q as Te}from"./QSplitter.75214b05.js";import{a as Y,e as Fe,b as de,u as j,c as Q,d as Qe}from"./array.fa00643d.js";import{b as X,q as M,u as Me,f as ye,m as ne}from"./quickbase.4c931772.js";import{Q as Re}from"./QSpace.ddf241a7.js";import{Q as ge}from"./QTable.b14a30f6.js";import{p as Ie}from"./VueTelInput.58b0d3b1.js";import{Q as Le}from"./QBadge.7fb9c0c1.js";import{Q as Ce}from"./QSlideTransition.5f7e6a37.js";import{dayjs as ke}from"./dayjs.0468f2f9.js";import"./QResizeObserver.2ec5fc13.js";import"./rtl.65b79c69.js";import"./use-panel.2555ab7a.js";import"./touch.d8ab472d.js";import"./selection.d27b6a7e.js";import"./QMenu.49561d16.js";import"./position-engine.7a967a85.js";import"./TouchPan.db3fc598.js";import"./_commonjsHelpers.dfee5925.js";import"./localForage.0ab76d9a.js";import"./index.7dbe61ef.js";import"./i18n.bcf53bbf.js";import"./api.3f683c47.js";import"./QList.2bb5e4d0.js";import"./use-fullscreen.e450fa22.js";const Oe=L({props:{job:Object,craft:Object},setup(e,o){const i=ie(),{udpateProjectCrafts:p}=X(),m=T(()=>e.craft.options.jobs.find(c=>c[3]===e.job[13]).aliases),f=T(()=>Y({alias:Y().required().label("Custom Job Title"),fixedRate:Fe().moreThan(7.25,"Fixed rate must be greater than minimum wage.").lessThan(1e3).label("Fixed Rate").nullable()})),{meta:n,errors:a,handleSubmit:r,handleReset:$}=de({validationSchema:f,initialValues:{alias:{3:e.job[9],7:e.job[18]},fixedRate:e.job.fixedRate>0?e.job.fixedRate:null}}),{value:E}=j("alias"),{value:A}=j("fixedRate"),P=r(async g=>{console.log(g),i.loading.show();const c={3:{value:e.job[3]},20:{value:e.craft[3]}};E.value!=={3:e.job[9],7:e.job[18]}&&Object.assign(c,{9:{value:g.alias[3]}}),A.value!==e.job.fixedRate&&Object.assign(c,{155:{value:g.fixedRate}});try{const{data:y}=await M.upsertRecordsXML({to:"bpzpx5m7x",data:[c],fieldsToReturn:[153],formatObject:153});y.length>0&&(p({craft:y[0][153]}),$(),i.loading.hide(),i.notify({type:"positive",message:"New job added!"}),o.emit("closeEditJob"))}catch{i.notify({type:"negative",message:"Something went wrong"})}});async function R(g,c){i.dialog({title:"Confirm",message:`Confirm you want to add "${g}" as a new alias.`,cancel:!0,persistent:!0}).onOk(async()=>{try{const{data:y}=await M.upsertRecordsXML({to:"bpzpi5rjh",data:[{6:{value:e.job[13]},7:{value:g},11:{value:"No"}}],fieldsToReturn:[25],formatObject:25});console.log(y),y.length>0&&(E.value=y[0][25],c(y[0][25]))}catch{i.notify({type:"negative",message:"Something went wrong"})}}).onCancel(()=>{c()})}return{formMeta:n,formErrors:a,submit:P,alias:E,fixedRate:A,aliasOptions:m,submitAlias:R}}}),ze={class:"text-body1 text-white"},Ye={class:"text-caption"},Be={class:"text-caption"};function Xe(e,o,i,p,m,f){return d(),b("div",null,[l("div",null,[t(se,{onSubmit:te(e.submit,["prevent"])},{default:s(()=>[t(B,null,{default:s(()=>[t(F,{class:"bg-dark"},{default:s(()=>[l("div",ze,"Edit "+u(e.craft[10])+" "+u(e.job[18]),1)]),_:1}),t(F,null,{default:s(()=>[t(H,{class:"q-mb-sm",dense:"",label:"Select Custom Job Title (Alias)","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.alias,"onUpdate:modelValue":o[0]||(o[0]=n=>e.alias=n),options:e.aliasOptions,"option-label":"7","display-value":`${e.alias?e.alias[7]:""}`,"bottom-slots":"",error:!!e.formErrors.alias,onNewValue:e.submitAlias,"use-input":""},{error:s(()=>[l("div",Ye,u(e.formErrors.alias),1)]),_:1},8,["modelValue","options","display-value","error","onNewValue"]),t(J,{step:"any",prefix:"$",type:"number",dense:"",label:"Fixed Rate",modelValue:e.fixedRate,"onUpdate:modelValue":o[1]||(o[1]=n=>e.fixedRate=n),error:!!e.formErrors.fixedRate,"bottom-slots":""},{error:s(()=>[l("div",Be,u(e.formErrors.fixedRate),1)]),_:1},8,["modelValue","error"])]),_:1}),t(Pe),t(oe,{class:"bg-accent",align:"right"},{default:s(()=>[t(V,{size:e.$q.screen.lt.md?"sm":"",color:"secondary",label:"Cancel",onClick:o[2]||(o[2]=n=>e.$emit("closeEditJob"))},null,8,["size"]),t(V,{type:"submit",size:e.$q.screen.lt.md?"sm":"",color:"primary",label:"Save"},null,8,["size"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])])])}var We=O(Oe,[["render",Xe]]);const He=[{name:0,label:"Job Title",align:"left",field:e=>e[18],format:e=>`${e}`,sortable:!0,required:!0},{name:1,label:"Avg. Rate",align:"right",field:e=>e.avgRate,format:e=>`$ ${e.toFixed(2)}`,sortable:!0},{name:3,label:"Times Requested",align:"right",field:e=>e.timesRequested,format:e=>`${e}`,sortable:!0},{name:4,label:"Quantity Requested",align:"right",field:e=>e.qtyRequested,format:e=>`${e}`,sortable:!0}],Ge=L({components:{EditJobDialog:We},setup(){const e=ie(),{projectCrafts:o,active:i}=ae(X()),{udpateProjectCrafts:p}=X(),m=h(o.value[0][3]),f=h(!1),n=h(!1),a=h(null),r=h(null);Ee(i,(N,C)=>{m.value=N.crafts.sort((w,be)=>w.order>be.order?1:-1)[0][3]});const $=T(()=>{const N=o.value.find(C=>C[3]===m.value).classifications;return N!==void 0?N.sort((C,w)=>C.order>w.order||C.order===w.order&&C.fixedRate>w.fixedRate?-1:1):[]}),E=Y({job:Y().required("Job is required."),alias:Y().required("Alias is required.").nullable()}),{meta:A,errors:P,handleSubmit:R,handleReset:g}=de({validationSchema:E}),{value:c}=j("job"),{value:y}=j("alias"),_=R(async N=>{const C=o.value.find(w=>w[9]===N.job[13]);if(C===void 0)e.notify({type:"negative",message:"Something went wrong"});else try{const{data:w}=await M.upsertRecordsXML({to:"bpzpx5m7x",data:[{9:{value:N.alias[3]},13:{value:N.job[3]},20:{value:C[3]}}],fieldsToReturn:[153],formatObject:153});w.length>0&&(p({craft:w[0][153]}),g(),f.value=!1,e.notify({type:"positive",message:"New job added!"}))}catch{e.notify({type:"negative",message:"Something went wrong"})}});async function W(N,C){e.dialog({title:"Confirm",message:`Confirm you want to add "${N}" as a new alias.`,cancel:!0,persistent:!0}).onOk(async()=>{try{const{data:w}=await M.upsertRecordsXML({to:"bpzpi5rjh",data:[{6:{value:c.value[3]},7:{value:N},11:{value:"No"}}],fieldsToReturn:[25],formatObject:25});console.log(w),w.length>0&&(y.value=w[0][25],C(w[0][25]))}catch{e.notify({type:"negative",message:"Something went wrong"})}}).onCancel(()=>{C()})}function q(){f.value=!1,g()}function U({craft:N,job:C}){a.value=N,r.value=C,n.value=!0,console.log(N),console.log(C)}function le(){a.value=null,r.value=null,n.value=!1}return{projectCrafts:o,tab:m,columns:He,initialPagination:{rowsPerPage:100},splitValue:h(20),showAddJob:f,showEditJob:n,formMeta:A,formErrors:P,job:c,alias:y,submitJob:_,submitAlias:W,cancelAddJob:q,editJob:U,rows:$,editJobCraft:a,editJobJob:r,closeEditJob:le}}}),Ke={key:0},Ze={key:0,class:"q-mb-sm"},_e=l("thead",{class:"bg-dark text-white"},[l("tr",null,[l("th",{class:"text-left"},"Job Title"),l("th",{class:"text-right"},"Fixed Rate"),l("th",{class:"text-right"},"Times Requested"),l("th",{class:"text-right"},"Qty Requested"),l("th")])],-1),xe={class:"text-left"},eo={class:"text-right"},oo={class:"text-right"},to={class:"text-right"},ao={class:"text-right"},so={key:1},lo={class:"row justify-between"},ro={class:"col-5"},no={class:"text-caption"},io={class:"col-6"},mo={class:"text-caption"},uo={key:1},po={key:0},fo={class:"q-mb-sm"},co=l("thead",{class:"bg-dark text-white"},[l("tr",null,[l("th",{class:"text-left"},"Job Title"),l("th",{class:"text-right"},"Fixed Rate"),l("th",{class:"text-right"},"Avg. Rate"),l("th",{class:"text-right"},"Times Requested"),l("th",{class:"text-right"},"Quantity"),l("th")])],-1),bo={class:"text-left"},go={class:"text-right"},vo={class:"text-right"},yo={class:"text-right"},ho={class:"text-right"},$o={class:"text-right"},wo={key:1},qo={class:"text-caption"},Vo={class:"text-caption"};function No(e,o,i,p,m,f){const n=I("edit-job-dialog");return d(),b("div",null,[e.$q.screen.gt.sm?(d(),k(Te,{key:0,modelValue:e.splitValue,"onUpdate:modelValue":o[5]||(o[5]=a=>e.splitValue=a)},{before:s(()=>[t(fe,{modelValue:e.tab,"onUpdate:modelValue":o[0]||(o[0]=a=>e.tab=a),vertical:e.$q.screen.gt.md,align:"left","indicator-color":"accent","active-bg-color":"dark","active-color":"white"},{default:s(()=>[(d(!0),b(x,null,ee(e.projectCrafts,a=>(d(),k(G,{key:a[3],name:a[3],label:a[10]},null,8,["name","label"]))),128))]),_:1},8,["modelValue","vertical"])]),after:s(()=>[t(ce,{modelValue:e.tab,"onUpdate:modelValue":o[4]||(o[4]=a=>e.tab=a),animated:"",vertical:e.$q.screen.gt.md},{default:s(()=>[(d(!0),b(x,null,ee(e.projectCrafts,a=>(d(),k(K,{key:a[3],name:a[3],class:"q-pt-none"},{default:s(()=>[e.showAddJob?(d(),b("div",so,[t(se,{onSubmit:te(e.submitJob,["prevent"])},{default:s(()=>[t(B,{flat:""},{default:s(()=>[t(F,null,{default:s(()=>[l("div",lo,[l("div",ro,[t(H,{class:"q-mb-sm",dense:"",label:"Select Default Job","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.job,"onUpdate:modelValue":o[2]||(o[2]=r=>e.job=r),options:a.options.jobs,"option-label":"9","display-value":`${e.job?e.job[9]:""}`,"bottom-slots":"",error:!!e.formErrors.job},{error:s(()=>[l("div",no,u(e.formErrors.job),1)]),_:2},1032,["modelValue","options","display-value","error"])]),l("div",io,[t(H,{disable:!e.job,class:"q-mb-sm",dense:"",label:"Select Custom Job Title (Alias)","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.alias,"onUpdate:modelValue":o[3]||(o[3]=r=>e.alias=r),options:e.job?e.job.aliases:[],"option-label":"7","display-value":`${e.alias?e.alias[7]:""}`,"bottom-slots":"",error:!!e.formErrors.alias,onNewValue:e.submitAlias,"use-input":""},{error:s(()=>[l("div",mo,u(e.formErrors.alias),1)]),_:1},8,["disable","modelValue","options","display-value","error","onNewValue"])])])]),_:2},1024),t(oe,{align:"right"},{default:s(()=>[t(V,{color:"secondary",label:"Cancel",onClick:e.cancelAddJob},null,8,["onClick"]),t(V,{color:"primary",label:"Submit Job",type:"submit"})]),_:1})]),_:2},1024)]),_:2},1032,["onSubmit"])])):(d(),b("div",Ke,[e.$can("create","jobs")?(d(),b("div",Ze,[t(V,{color:"primary",label:"Add Another Job",onClick:o[1]||(o[1]=r=>e.showAddJob=!0)})])):D("",!0),t(Ne,null,{default:s(()=>[_e,l("tbody",null,[(d(!0),b(x,null,ee(e.rows,r=>(d(),b("tr",{key:r[3]},[l("td",xe,u(r[18]),1),l("td",eo,u(r.fixedRate>0?`$ ${r.fixedRate.toFixed(2)}`:"Edit to Add"),1),l("td",oo,u(r.timesRequested),1),l("td",to,u(r.qtyRequested),1),l("td",ao,[e.$can("manage","jobs")?(d(),k(V,{key:0,size:"sm",label:"edit",color:"primary",onClick:$=>e.editJob({craft:a,job:r})},null,8,["onClick"])):D("",!0)])]))),128))])]),_:2},1024)]))]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue","vertical"])]),_:1},8,["modelValue"])):(d(),b("div",uo,[t(fe,{modelValue:e.tab,"onUpdate:modelValue":o[6]||(o[6]=a=>e.tab=a),align:"left",class:"shadow-2","indicator-color":"accent"},{default:s(()=>[(d(!0),b(x,null,ee(e.projectCrafts,a=>(d(),k(G,{key:a[3],name:a[3],label:a.abbr},null,8,["name","label"]))),128))]),_:1},8,["modelValue"]),t(ce,{modelValue:e.tab,"onUpdate:modelValue":o[10]||(o[10]=a=>e.tab=a),animated:""},{default:s(()=>[(d(!0),b(x,null,ee(e.projectCrafts,a=>(d(),k(K,{key:a[3],name:a[3]},{default:s(()=>[e.showAddJob?(d(),b("div",wo,[t(se,{onSubmit:te(e.submitJob,["prevent"])},{default:s(()=>[t(B,{flat:""},{default:s(()=>[t(F,null,{default:s(()=>[t(H,{class:"q-mb-sm",dense:"",label:"Select Default Job","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.job,"onUpdate:modelValue":o[8]||(o[8]=r=>e.job=r),options:a.options.jobs,"option-label":"9","display-value":`${e.job?e.job[9]:""}`,"bottom-slots":"",error:!!e.formErrors.job},{error:s(()=>[l("div",qo,u(e.formErrors.job),1)]),_:2},1032,["modelValue","options","display-value","error"]),t(H,{disabled:!e.job,class:"q-mb-sm",dense:"",label:"Select Custom Job Title (Alias)","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.alias,"onUpdate:modelValue":o[9]||(o[9]=r=>e.alias=r),options:e.job?e.job.aliases:[],"option-label":"7","display-value":`${e.alias?e.alias[7]:""}`,"bottom-slots":"",error:!!e.formErrors.alias,onNewValue:e.submitAlias,"use-input":""},{error:s(()=>[l("div",Vo,u(e.formErrors.alias),1)]),_:1},8,["disabled","modelValue","options","display-value","error","onNewValue"])]),_:2},1024),t(oe,{align:"right"},{default:s(()=>[t(V,{color:"secondary",label:"Cancel",onClick:e.cancelAddJob},null,8,["onClick"]),t(V,{color:"primary",label:"Submit Job",type:"submit"})]),_:1})]),_:2},1024)]),_:2},1032,["onSubmit"])])):(d(),b("div",po,[l("div",fo,[t(V,{color:"primary",label:"Add Another Job",onClick:o[7]||(o[7]=r=>e.showAddJob=!0)})]),t(Ne,null,{default:s(()=>[co,l("tbody",null,[(d(!0),b(x,null,ee(e.rows,r=>(d(),b("tr",{key:r[3]},[l("td",bo,u(r[18]),1),l("td",go,u(r.fixedRate>0?`$ ${r.fixedRate.toFixed(2)}`:"N/A"),1),l("td",vo,"$ "+u(r.avgRate.toFixed(2)),1),l("td",yo,u(r.timesRequested),1),l("td",ho,u(r.qtyRequested),1),l("td",$o,[t(V,{size:"sm",label:"edit",color:"primary",onClick:$=>e.editJob(r)},null,8,["onClick"])])]))),128))])]),_:1})]))]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])])),t(De,{modelValue:e.showEditJob,"onUpdate:modelValue":o[11]||(o[11]=a=>e.showEditJob=a),persistent:""},{default:s(()=>[t(n,{craft:e.editJobCraft,job:e.editJobJob,onCloseEditJob:e.closeEditJob},null,8,["craft","job","onCloseEditJob"])]),_:1},8,["modelValue"])])}var Co=O(Ge,[["render",No]]);const ko=L({components:{phoneNumberInput:Ie},setup(e,o){const i=ie(),p=h(10),m=h(null),{active:f}=ae(X()),{userPermissions:n,getUser:a}=ae(Me()),{addUser:r}=X(),$=T(()=>{const v=n.value.find(z=>z[7]==="create"&&z[16]==="users");return v!==void 0?v.roles:[]}),E=T(()=>{const v=new RegExp("^[0-9]{"+p.value+"}","g");return Y({firstName:Q().required().label("First Name"),lastName:Q().required().label("Last Name"),email:Q().email().required().label("Email"),phoneNumber:Q().matches(v,{excludeEmptyString:!0,message:"Valid Phone Number Required!"}).required().label("Phone Number"),role:Y().required().nullable().label("Role"),workdayId:Q().required().label("Workday ID")})}),{meta:A,errors:P,handleSubmit:R,handleReset:g}=de({validationSchema:E}),{value:c}=j("firstName"),{value:y}=j("lastName"),{value:_}=j("email"),{value:W}=j("phoneNumber"),{value:q}=j("role"),{value:U}=j("workdayId"),le=R(async v=>{console.log(v);const z={userType:"Project User",phoneNumber:`+${m.value?m.value.dialCode:"1"}${v.phoneNumber}`,email:v.email};if(f.value.users.filter(re=>re[6]===z.email||re[8]===z.phoneNumber).length>0)i.dialog({title:"Alert",message:"Your project already has a user with that phone or email."}).onOk(()=>{o.emit("userAdded")});else{const re=await M.checkIfUserExist(z);if(re){const{data:me}=await M.upsertRecordsXML({to:"br598isx6",data:[{6:{value:re[3]},7:{value:"Project"},9:{value:f.value[3]}}],fieldsToReturn:[28],formatObject:28});me.length>0&&(r({user:me[0][28]}),i.notify({type:"positive",message:"User successfully added"}),o.emit("userAdded"))}else{const me=_.value.match(/^([^@]*)@/)[1],Se=Object.assign({phoneNumber:W.value},m.value),{data:$e}=await M.upsertRecordsXML({to:"br4pxrbs6",data:[{6:{value:v.email},7:{value:"temp"},8:{value:`+${m.value?m.value.dialCode:"1"}${v.phoneNumber}`},9:{value:JSON.stringify(Se)},10:{value:"Active"},11:{value:v.role[3]},17:{value:!0},23:{value:a.value[3]},24:{value:a.value[3]},25:{value:new Date},26:{value:new Date},32:{value:"Project User"},33:{value:me},35:{value:c.value},37:{value:y.value},49:{value:!0},50:{value:!0},70:{value:v.workdayId}}],fieldsToReturn:[3,96],formatObject:96});if($e[0]!==void 0){const ue=await M.upsertRecordsXML({to:"br598isx6",data:[{6:{value:$e[0][3]},7:{value:"Project"},9:{value:f.value[3]}}],fieldsToReturn:[28],formatObject:28});ue.data[0]!==void 0&&(r({user:ue.data[0][28]}),console.log(ue.data[0][28]),i.dialog({title:"Confirm",message:"User successfully added. Would you like to send them an invite?",cancel:!0,persistent:!0}).onOk(async()=>{(await M.upsertRecordsXML({to:"br4pxrbs6",data:[{3:{value:ue.data[0][28][3]},93:{value:new Date}}],fieldsToReturn:[3]})).data[0]!==void 0&&(i.notify({type:"positive",message:"User successfully added"}),i.notify({type:"positive",message:"User invite submitted"}),o.emit("userAdded"))}).onCancel(()=>{i.notify({type:"positive",message:"User successfully added"}),o.emit("userAdded")}))}}}g()}),N=T(()=>{const v=[];return f.value.users.forEach(z=>{console.log(z),v.push(z[9].phoneNumber)}),v});Ee(W,v=>{N.value.includes(v)&&i.notify({type:"negative",message:"Phone Number is already in use!",timeout:1e4,position:i.screen.lt.md?"top":"center"})});const C=v=>{m.value=v},w=v=>{p.value=v};function be(){g(),o.emit("userCanceled")}return console.log(n.value,N.value),{updateCountry:C,updatePhoneMaxLength:w,firstName:c,lastName:y,email:_,phoneNumber:W,role:q,workdayId:U,formMeta:A,formErrors:P,submitUser:le,active:f,roleOptions:$,cancel:be}}}),Eo=l("div",{class:"text-primary text-h6 q-mb-sm"},"Add a New User",-1),jo={class:"row justify-between"},Ao={class:"row justify-between"},Ro={class:"text-caption"},So={class:"text-caption"};function Uo(e,o,i,p,m,f){const n=I("phone-number-input");return d(),b("div",null,[t(B,null,{default:s(()=>[t(se,{onSubmit:te(e.submitUser,["prevent"])},{default:s(()=>[t(F,null,{default:s(()=>[Eo,l("div",jo,[l("div",{class:S(["col-12 col-md-4",e.$q.screen.lt.md?"q-pt-sm":"q-pr-sm"])},[t(J,{dense:"",outlined:"",label:"First Name",modelValue:e.firstName,"onUpdate:modelValue":o[0]||(o[0]=a=>e.firstName=a),error:!!e.formErrors.firstName},null,8,["modelValue","error"])],2),l("div",{class:S(["col-12 col-md-4",e.$q.screen.lt.md?"q-pt-sm":"q-pr-sm"])},[t(J,{dense:"",outlined:"",label:"Last Name",modelValue:e.lastName,"onUpdate:modelValue":o[1]||(o[1]=a=>e.lastName=a),error:!!e.formErrors.lastName},null,8,["modelValue","error"])],2),l("div",{class:S(["col-12 col-md-4",e.$q.screen.lt.md?"q-pt-sm":"q-pr-sm"])},[t(J,{dense:"",outlined:"",label:"Workday ID",modelValue:e.workdayId,"onUpdate:modelValue":o[2]||(o[2]=a=>e.workdayId=a),error:!!e.formErrors.workdayId},null,8,["modelValue","error"])],2)]),l("div",Ao,[l("div",{class:S(["col-12 col-md-4",e.$q.screen.lt.md?"q-pt-sm":"q-pr-sm"])},[t(n,{name:"phoneNumber",class:"col-xs-12 col-sm-12",outlined:"",modelValue:e.phoneNumber,"onUpdate:modelValue":o[3]||(o[3]=a=>e.phoneNumber=a),label:"Phone Number",tabindex:"3",onMaxLengthChanged:e.updatePhoneMaxLength,error:!!e.formErrors.phoneNumber,"error-message":e.formErrors.phoneNumber,onCountryChanged:e.updateCountry,dense:""},null,8,["modelValue","onMaxLengthChanged","error","error-message","onCountryChanged"])],2),l("div",{class:S(["col-12 col-md-4",e.$q.screen.lt.md?"q-pt-sm":"q-pr-sm"])},[t(J,{dense:"",outlined:"",label:"Email","bottom-slots":"",modelValue:e.email,"onUpdate:modelValue":o[4]||(o[4]=a=>e.email=a),error:!!e.formErrors.email},{error:s(()=>[l("div",Ro,u(e.formErrors.email),1)]),_:1},8,["modelValue","error"])],2),l("div",{class:S(["col-12 col-md-4",e.$q.screen.lt.md?"q-pt-sm":"q-pr-sm"])},[t(H,{dense:"",outlined:"",label:"Role","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.role,"onUpdate:modelValue":o[5]||(o[5]=a=>e.role=a),options:e.roleOptions,"option-label":"6","display-value":`${e.role?e.role[6]:""}`,"bottom-slots":"",error:!!e.formErrors.role},{error:s(()=>[l("div",So,u(e.formErrors.role),1)]),_:1},8,["modelValue","options","display-value","error"])],2)])]),_:1}),t(oe,{align:"right"},{default:s(()=>[t(V,{color:"secondary",onClick:e.cancel,label:"Cancel"},null,8,["onClick"]),t(V,{color:"primary",type:"submit",label:"Submit"})]),_:1})]),_:1},8,["onSubmit"])]),_:1})])}var Jo=O(ko,[["render",Uo]]);const Po=[{name:0,label:"Date Created",align:"left",field:e=>e[1],format:e=>`${ye.formatDate(e.$d,"MM/DD/YYYY")}`,sortable:!0},{name:1,label:"Name",align:"left",field:e=>e[35],format:(e,o)=>`${e} ${o[37]}`,sortable:!0},{name:2,label:"Role",align:"left",field:e=>e[44],format:e=>`${e}`,sortable:!0},{name:3,label:"Email",align:"left",field:e=>e[6],format:e=>`${e}`,sortable:!0},{name:4,label:"Last Access",align:"left",field:e=>e.lastLogin,format:(e,o)=>`${o.registered?e.date:"Never"}`,sortable:!0}],Do=L({components:{CreateUser:Jo},setup(){const{usersForProject:e}=ae(X()),o=h(!1);function i(){o.value=!1}function p(m){console.log(m)}return{usersForProject:e,columns:Po,initialPagination:{rowsPerPage:100},showAddUser:o,userAdded:i,sendInvite:p}}}),To={key:1};function Fo(e,o,i,p,m,f){const n=I("create-user");return d(),b("div",null,[e.showAddUser?(d(),b("div",To,[t(n,{onUserAdded:e.userAdded,onUserCanceled:o[1]||(o[1]=a=>e.showAddUser=!1)},null,8,["onUserAdded"])])):(d(),k(ge,{key:0,rows:e.usersForProject.sort((a,r)=>a[44]>r[44]?-1:1),columns:e.columns,"hide-pagination":!0,"row-key":"name",pagination:e.initialPagination,"table-header-class":"bg-dark text-white"},je({_:2},[e.$can("create","users")?{name:"top",fn:s(()=>[t(V,{color:"primary",label:"Add Another User",onClick:o[0]||(o[0]=a=>e.showAddUser=!0)}),t(Re)])}:void 0]),1032,["rows","columns","pagination"]))])}var Qo=O(Do,[["render",Fo]]);const Mo=L({setup(e,o){const i=h(10),p=h(null),{capitalize:m}=Ae,{updateNewEmployee:f}=ne(),n=T(()=>{const c=new RegExp("^[0-9]{"+i.value+"}","g");return Y({firstName:Q().required().label("First Name"),lastName:Q().required().label("Last Name"),phoneNumber:Q().matches(c,{excludeEmptyString:!0,message:"Valid Phone Number Required!"}).required().label("Phone Number")})}),{meta:a,errors:r,handleSubmit:$,handleReset:E}=de({validationSchema:n}),{value:A}=j("firstName"),{value:P}=j("lastName"),{value:R}=j("phoneNumber"),g=$(async c=>{const y={20:m(c.firstName.trim().toLowerCase()),22:m(c.lastName.trim().toLowerCase()),25:c.phoneNumber};f({info:y}),o.emit("complete",1),E()});return{country:p,firstName:A,lastName:P,phoneNumber:R,formMeta:a,formErrors:r,submit:g,cancel(){E(),o.emit("cancel")}}}}),Io={class:"row justify-between"},Lo={class:"text-caption"},Oo={class:"text-caption"},zo={class:"text-caption"};function Yo(e,o,i,p,m,f){return d(),b("div",null,[t(se,{onSubmit:te(e.submit,["prevent"])},{default:s(()=>[t(B,{flat:"",class:"q-pl-md q-mt-sm"},{default:s(()=>[t(F,{class:"q-px-none q-pb-none"},{default:s(()=>[l("div",Io,[l("div",{class:S(["col-12 col-md-4",e.$q.screen.lt.md?"q-pt-sm":"q-pr-sm"])},[t(J,{dense:"",label:"First Name",modelValue:e.firstName,"onUpdate:modelValue":o[0]||(o[0]=n=>e.firstName=n),error:!!e.formErrors.firstName,"bottom-slots":""},{error:s(()=>[l("div",Lo,u(e.formErrors.firstName),1)]),_:1},8,["modelValue","error"])],2),l("div",{class:S(["col-12 col-md-4",e.$q.screen.lt.md?"q-pt-sm":"q-pr-sm"])},[t(J,{dense:"",label:"Last Name",modelValue:e.lastName,"onUpdate:modelValue":o[1]||(o[1]=n=>e.lastName=n),error:!!e.formErrors.lastName,"bottom-slots":""},{error:s(()=>[l("div",Oo,u(e.formErrors.lastName),1)]),_:1},8,["modelValue","error"])],2),l("div",{class:S(["col-12 col-md-4",e.$q.screen.lt.md?"q-pt-sm":"q-pr-sm"])},[t(J,{dense:"",label:"Phone Number",modelValue:e.phoneNumber,"onUpdate:modelValue":o[2]||(o[2]=n=>e.phoneNumber=n),error:!!e.formErrors.phoneNumber,"bottom-slots":""},{error:s(()=>[l("div",zo,u(e.formErrors.phoneNumber),1)]),_:1},8,["modelValue","error"])],2)])]),_:1}),t(oe,{align:"right"},{default:s(()=>[t(V,{color:"secondary",label:"Cancel",onClick:e.cancel},null,8,["onClick"]),t(V,{color:"primary",label:"Submit",type:"submit"})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])}var Bo=O(Mo,[["render",Yo]]);const Xo=L({setup(e,o){const i=h(!0),{updateNewEmployee:p}=ne(),m=T(()=>Y({ssn:Q().matches(/^[0-9]{9}/g,{excludeEmptyString:!0,message:"9 Digits required."}).nullable().required().label("Social Security Number"),ssnConfirmation:Q().oneOf([Qe("ssn"),null],"Social Security Number must match").required().nullable().label("Confirm Social Security Number")})),{meta:f,errors:n,handleSubmit:a,handleReset:r}=de({validationSchema:m}),{value:$}=j("ssn"),{value:E}=j("ssnConfirmation"),A=a(async R=>{console.log(R);const g=await P();if(g)p({info:g}),o.emit("complete",2),r();else{const c={109:R.ssn};p({info:c}),o.emit("complete",2),r()}}),P=async()=>{const g=[{8:{value:`{'188'.EX.'${$.value}'}AND{'509'.EX.'false'}`},7:{value:"Employees"},9:{value:12}}],{data:c}=await M.fetchFromHiringApp({fields:g});return c[0]?c[0]:null};return{ssn:$,ssnConfirmation:E,formMeta:f,formErrors:n,submit:A,isPwd:i,cancel(){r(),o.emit("cancel")}}}}),Wo={class:"row"},Ho={class:"col-12 col-md-5"},Go={class:"text-caption"},Ko={class:"text-caption"};function Zo(e,o,i,p,m,f){return d(),b("div",null,[t(se,{onSubmit:te(e.submit,["prevent"])},{default:s(()=>[t(B,{flat:"",class:"q-pl-md q-mt-sm"},{default:s(()=>[t(F,{class:"q-px-none q-pb-none"},{default:s(()=>[l("div",Wo,[l("div",Ho,[t(J,{dense:"",label:"Enter Social Security Number",mask:"#########",modelValue:e.ssn,"onUpdate:modelValue":o[0]||(o[0]=n=>e.ssn=n),maxlength:"9",type:"password",error:!!e.formErrors.ssn,"bottom-slots":""},{error:s(()=>[l("div",Go,u(e.formErrors.ssn),1)]),prepend:s(()=>[t(Z,{name:"lock"})]),_:1},8,["modelValue","error"]),t(J,{dense:"",label:"Confirm Social Security Number",mask:"#########",modelValue:e.ssnConfirmation,"onUpdate:modelValue":o[2]||(o[2]=n=>e.ssnConfirmation=n),maxlength:"9",type:e.isPwd?"password":"text",error:!!e.formErrors.ssnConfirmation,"bottom-slots":""},{error:s(()=>[l("div",Ko,u(e.formErrors.ssnConfirmation),1)]),prepend:s(()=>[t(Z,{name:"lock"})]),append:s(()=>[t(Z,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:o[1]||(o[1]=n=>e.isPwd=!e.isPwd)},null,8,["name"])]),_:1},8,["modelValue","type","error"])])])]),_:1}),t(oe,{align:"right"},{default:s(()=>[t(V,{color:"secondary",label:"Cancel",onClick:e.cancel},null,8,["onClick"]),t(V,{color:"primary",label:"Submit",type:"submit"})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])}var _o=O(Xo,[["render",Zo]]);const xo=L({components:{Personal:Bo,EnterSsn:_o},setup(){const e=h(0),{getNewEmployee:o}=ne();return{step:e,personalComplete(i){e.value=i},ssnComplete(i){e.value=i,console.log(o)}}}}),et=ve(" Employee Personal Information "),ot=ve(" Identification ");function tt(e,o,i,p,m,f){const n=I("personal"),a=I("enter-ssn");return d(),b("div",null,[t(B,null,{default:s(()=>[t(F,null,{default:s(()=>[l("div",{class:S(["text-primary",e.$q.screen.gt.sm?"text-h6":"text-body1"])},"Add a New Employee",2),l("div",{class:S(["text-dark text-italic",e.$q.screen.gt.sm?"text-body2":"text-caption"])},"Follow these steps to add a new employee.",2)]),_:1}),t(F,null,{default:s(()=>[l("div",{class:S([e.$q.screen.gt.sm?"text-body1":"text-body2",e.step===0?"text-info":e.step>0?"text-positive":"text-secondary"])},[e.$q.screen.gt.sm?(d(),k(Z,{key:0,size:"md",color:e.step===0?"info":e.step>0?"positive":"secondary",name:"account_circle"},null,8,["color"])):D("",!0),et],2),e.step===0?(d(),k(n,{key:0,onComplete:e.personalComplete,onCancel:o[0]||(o[0]=r=>e.$emit("cancelAddEmployee"))},null,8,["onComplete"])):D("",!0)]),_:1}),t(F,null,{default:s(()=>[l("div",{class:S([e.$q.screen.gt.sm?"text-body1":"text-body2",e.step===1?"text-info":e.step>1?"text-positive":"text-secondary"])},[e.$q.screen.gt.sm?(d(),k(Z,{key:0,size:"md",color:e.step===1?"info":e.step>1?"positive":"secondary",name:"admin_panel_settings"},null,8,["color"])):D("",!0),ot],2),e.step===1?(d(),k(a,{key:0,onComplete:e.ssnComplete,onCancel:o[1]||(o[1]=r=>e.step=0)},null,8,["onComplete"])):D("",!0)]),_:1})]),_:1})])}var at=O(xo,[["render",tt]]);const{capitalize:pe}=Ae,he=e=>{const o=e[20]!==""?pe(e[20]):"",i=e[22]!==""?pe(e[22]):"",p=e[21]!==""?` ${pe(e[21])}`:"",m=e[23]!==""?` ${pe(e[23])}`:"";return`${i}${m}, ${o}${p}`},st=[{name:1,label:"Name",align:"left",field:e=>e.employee[22],format:(e,o)=>`${he(o.employee)}`,sortable:!0},{name:7,label:"Workday ID",align:"left",field:e=>e.employee[378],format:e=>`${e}`,sortable:!0,sortOrder:"ad"},{name:2,label:"Payroll ID",align:"left",field:e=>e.employee[213],format:e=>e===""?"not available":e,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e.map.fullJob,format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:5,label:"Job #",align:"left",field:e=>e.map.jobNumber,format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:6,label:"Arrival Date",align:"left",field:e=>e.map.start,format:e=>`${e?ye.formatDate(e,"MM/DD/YYYY"):"TBD"}`,sortable:!0}],lt=[{name:1,label:"Name",align:"left",field:e=>e.employee[22],format:(e,o)=>`${he(o.employee)}`,sortable:!0},{name:7,label:"Workday ID",align:"left",field:e=>e.employee[378],format:e=>`${e}`,sortable:!0,sortOrder:"ad"},{name:2,label:"Payroll ID",align:"left",field:e=>e.employee[213],format:e=>e===""?"not available":e,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e.map.fullJob,format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:5,label:"Job #",align:"left",field:e=>e.map.jobNumber,format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:6,label:"Arrival Date",align:"left",field:e=>e.map.start,format:e=>`${e?ye.formatDate(e,"MM/DD/YYYY"):"TBD"}`,sortable:!0}],rt=L({name:"Table",components:{AddNewEmployee:at},setup(){const e=ie(),o=ne(),i=X(),{assignmentsForProject:p,getFlaggedAssignments:m}=ae(o),f=p,{active:n}=ae(X()),{getAssignments:a,flagAssignment:r}=ne(),$=h(""),E=h(null),A=h(null),P=h(0),R=h(!1),g=h(!1);a();const c=T(()=>{let q=[];return f.value.forEach(U=>{U[75].toLowerCase().includes($.value.toLowerCase())&&q.push(U)}),q=E.value?q.filter(U=>ke(U[1].$d).tz("America/Chicago").format("MM/DD/YYYY")===ke(E.value).tz("America/Chicago").format("MM/DD/YYYY")):q,q=A.value?q.filter(U=>U[68]===A.value):q,q.sort((U,le)=>U.employee[24]>le.employee[24]?1:-1)}),y=T(()=>e.screen.lt.md?100:25),_=T(()=>[...new Map(p.value.map(q=>[q[68],q[68]])).values()]);async function W(q){r({record:q.rows[0],status:q.added})}return{columns:st,mobileColumns:lt,rows:c,initialPagination:{rowsPerPage:y},separator:"vertical",projectStore:i,active:n,search:$,startDateFilter:E,craftOptions:_,craftFilter:A,assignmentsForProject:p,tab:P,showEmployee:R,formatName:he,updateAssignment:W,getFlaggedAssignments:m,showAddEmployee:g}}}),nt={class:"q-px-sm"},it={class:"row items-center"},dt={class:"col-12 col-md-4 q-px-sm"},mt={class:"col-12 col-md-4 q-px-sm"},ut={class:"col-12 col-md-4 q-px-sm"},pt={class:"text-primary text-italic"},ft={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"},ct={class:"text-dark text-caption text-italic"},bt={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"};function gt(e,o,i,p,m,f){const n=I("add-new-employee");return d(),b("div",nt,[l("div",null,[t(Ce,null,{default:s(()=>[we(l("div",null,[t(fe,{modelValue:e.tab,"onUpdate:modelValue":o[0]||(o[0]=a=>e.tab=a),"bg-color":"none","indicator-color":"accent",align:"left",dense:""},{default:s(()=>[t(G,{name:0,label:e.$q.screen.gt.xs?"All Employees":"Employees"},null,8,["label"]),t(G,{name:1,label:"Flagged to Remove"},{default:s(()=>[e.getFlaggedAssignments.length>0?(d(),k(Le,{key:0,color:"accent",floating:"",transparent:""},{default:s(()=>[ve(u(e.getFlaggedAssignments.length),1)]),_:1})):D("",!0)]),_:1})]),_:1},8,["modelValue"]),t(ce,{modelValue:e.tab,"onUpdate:modelValue":o[5]||(o[5]=a=>e.tab=a),animated:""},{default:s(()=>[t(K,{class:"q-px-xs",name:0},{default:s(()=>[t(B,{flat:""},{default:s(()=>[t(F,{class:"q-pt-none"},{default:s(()=>[l("div",it,[l("div",dt,[t(J,{dense:e.$q.screen.lt.md,modelValue:e.search,"onUpdate:modelValue":o[1]||(o[1]=a=>e.search=a),label:"Search"},null,8,["dense","modelValue"])]),l("div",mt,[t(J,{dense:e.$q.screen.lt.md,modelValue:e.startDateFilter,"onUpdate:modelValue":o[2]||(o[2]=a=>e.startDateFilter=a),label:"Arrival Date",type:"date","stack-label":""},null,8,["dense","modelValue"])]),l("div",ut,[t(H,{dense:e.$q.screen.lt.md,label:"Craft","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.craftFilter,"onUpdate:modelValue":o[3]||(o[3]=a=>e.craftFilter=a),options:e.craftOptions,"use-chips":""},null,8,["dense","modelValue","options"])])])]),_:1})]),_:1}),t(ge,{"title-class":e.$q.screen.gt.sm?"text-primary text-h6":"text-primary text-body1",title:e.$q.screen.lt.sm?"Employees":`Employees for ${e.active[20]}`,columns:e.$q.screen.lt.md?e.mobileColumns:e.columns,rows:e.rows,"row-key":"3",class:"q-pa-sm",pagination:e.initialPagination,separator:"vertical","table-header-class":"bg-dark text-white","no-data-label":`There are no employees for ${e.active[20]}`,grid:e.$q.screen.lt.sm,selection:"multiple",selected:e.getFlaggedAssignments,onSelection:e.updateAssignment},je({"top-right":s(()=>[l("div",pt,u(e.assignmentsForProject.length)+" total employees / "+u(e.getFlaggedAssignments.length)+" flagged to remove",1)]),"header-selection":s(a=>[t(Ve,{disable:"",modelValue:a.selected,"onUpdate:modelValue":r=>a.selected=r},null,8,["modelValue","onUpdate:modelValue"])]),"body-selection":s(a=>[t(Ve,{modelValue:a.selected,"onUpdate:modelValue":r=>a.selected=r},null,8,["modelValue","onUpdate:modelValue"])]),"no-data":s(({message:a})=>[l("div",ft,[t(Z,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),l("span",null,u(a),1)])]),_:2},[e.$can("manage","employees")?{name:"top-left",fn:s(()=>[t(V,{color:"primary",label:"Add Another Employee",onClick:o[4]||(o[4]=a=>e.showAddEmployee=!0)}),t(Re)])}:void 0]),1032,["title-class","title","columns","rows","pagination","no-data-label","grid","selected","onSelection"])]),_:1}),t(K,{class:"q-px-xs",name:1},{default:s(()=>[t(ge,{"title-class":e.$q.screen.gt.sm?"text-primary text-h6":"text-primary text-body1",title:e.$q.screen.lt.sm?"Flagged to Remove":`Flagged to Remove from ${e.active[20]}`,columns:e.$q.screen.lt.md?e.mobileColumns:e.columns,rows:e.getFlaggedAssignments,"row-key":"3",class:"q-pa-sm",pagination:e.initialPagination,separator:"vertical","table-header-class":"bg-dark text-white","no-data-label":`There are no employees to remove from ${e.active[20]}`,grid:e.$q.screen.lt.sm},{"top-right":s(()=>[l("div",ct,"(Total: "+u(e.getFlaggedAssignments.length)+" to remove)",1)]),"no-data":s(({message:a})=>[l("div",bt,[t(Z,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),l("span",null,u(a),1)])]),_:1},8,["title-class","title","columns","rows","pagination","no-data-label","grid"])]),_:1})]),_:1},8,["modelValue"])],512),[[qe,!e.showAddEmployee]])]),_:1}),t(Ce,null,{default:s(()=>[we(l("div",null,[t(n,{onCancelAddEmployee:o[6]||(o[6]=a=>e.showAddEmployee=!1)})],512),[[qe,e.showAddEmployee]])]),_:1})])])}var vt=O(rt,[["render",gt],["__scopeId","data-v-2455dcf5"]]);const yt=L({name:"Projects",components:{JobsTab:Co,UsersTab:Qo,EmployeesTab:vt},setup(){return ie(),{tab:h(0)}}}),ht={class:"q-px-sm"};function $t(e,o,i,p,m,f){const n=I("jobs-tab"),a=I("users-tab"),r=I("employees-tab");return d(),b("div",ht,[t(Je,{class:"bg-info text-white shadow-2 rounded-borders"},{default:s(()=>[t(fe,{modelValue:e.tab,"onUpdate:modelValue":o[0]||(o[0]=$=>e.tab=$),"bg-color":"none","indicator-color":"accent",align:"justify",dense:""},{default:s(()=>[t(G,{name:0,label:e.$q.screen.gt.xs?"Available Jobs":"Jobs"},null,8,["label"]),e.$can("read","users")?(d(),k(G,{key:0,name:1,label:"Users"})):D("",!0),e.$can("manage","employees")?(d(),k(G,{key:1,name:2,label:"Employees"})):D("",!0)]),_:1},8,["modelValue"])]),_:1}),t(ce,{modelValue:e.tab,"onUpdate:modelValue":o[1]||(o[1]=$=>e.tab=$),animated:""},{default:s(()=>[t(K,{class:"q-px-xs",name:0},{default:s(()=>[t(n)]),_:1}),e.$can("read","users")?(d(),k(K,{key:0,class:"q-px-xs",name:1},{default:s(()=>[t(a)]),_:1})):D("",!0),e.$can("manage","employees")?(d(),k(K,{key:1,class:"q-px-xs",name:2},{default:s(()=>[t(r)]),_:1})):D("",!0)]),_:1},8,["modelValue"])])}var wt=O(yt,[["render",$t]]);const qt=L({name:"PageIndex",components:{ProjectTabs:wt},setup(){return{}}});function Vt(e,o,i,p,m,f){const n=I("project-tabs");return d(),k(Ue,{style:{"max-width":"100vw"}},{default:s(()=>[t(n)]),_:1})}var sa=O(qt,[["render",Vt]]);export{sa as default};

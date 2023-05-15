import{Q as ne,b as ie,a as de}from"./QTabPanels.b9bb1f68.js";import{Q as ue}from"./QTabs.fe960265.js";import{l as O,r as h,c as T,_ as X,A as s,B as N,D as p,d as o,bi as l,cz as M,cw as D,ab as k,bO as j,ao as S,an as y,cx as te,bK as ce,cy as z,bF as _,cA as x,bM as le,aZ as B,F as I,aY as Y,au as U}from"./index.b924195f.js";import{Q as fe}from"./QPage.2847b5f7.js";import{u as L}from"./use-quasar.b47a00b3.js";import{q as V}from"./quickbase.ba4c97f5.js";import"./dayjs.db01f29f.js";import{b as H,a as W}from"./useQuerySaver.ae1b8d62.js";import{u as re}from"./dataStore.a037e9aa.js";import{Q as me}from"./QInnerLoading.b28cb108.js";import{Q as K,a as be}from"./QTable.f1231a22.js";import{Q as oe}from"./QTr.4d8784a5.js";import{Q as Z}from"./QTd.5477ad13.js";import{a as G}from"./QSelect.4bb61d02.js";import{Q as ee}from"./QForm.4f9bb515.js";import{a as ae,u as F}from"./vee-validate.esm.873b912d.js";import{a as P,e as pe,c as ve}from"./array.2e615be9.js";import"./use-panel.8bee501f.js";import"./touch.9d375472.js";import"./selection.92f3c7fa.js";import"./QResizeObserver.0b0c25b6.js";import"./rtl.d0f7624c.js";import"./_commonjsHelpers.a26ce4be.js";import"./index.7dbe61ef.js";import"./localForage.2a99fead.js";import"./api.7991594d.js";import"./i18n.41d907b6.js";import"./QList.7108ca09.js";import"./QMarkupTable.cca982ef.js";import"./use-fullscreen.58353ef7.js";import"./QChip.a6d4ea6e.js";import"./QMenu.c4074360.js";import"./position-engine.d8e3a79c.js";const we=O({props:{job:Object,craft:Object},setup(e,{emit:a}){const n=L(),u=h(!1),c=h(""),d=h(null),r=h([]),i=h([]),t=T(()=>P({alias:P().required().label("Custom Job Title"),fixedRate:pe().moreThan(7.25,"Fixed rate must be greater than minimum wage.").lessThan(1e3).label("Fixed Rate").nullable()})),{meta:m,errors:E,handleSubmit:q,handleReset:$}=ae({validationSchema:t,initialValues:{fixedRate:e.job.fixedRate>0?e.job.fixedRate:null}}),{value:f}=F("alias"),{value:b}=F("fixedRate"),A=q(async w=>{n.loading.show();const J={3:{value:e.job[3]}};f.value!=={3:e.job[9],7:e.job[18]}&&Object.assign(J,{9:{value:w.alias[3]}}),b.value&&b.value!==e.job.fixedRate&&Object.assign(J,{155:{value:w.fixedRate}});try{const{data:Q}=await V.upsertRecordsXML({to:"bpzpx5m7x",data:[J],fieldsToReturn:[153],formatObject:153});Q.length>0&&($(),n.loading.hide(),a("editJobComplete",{craft:Q[0][153]}))}catch{n.notify({type:"negative",message:"Something went wrong"})}}),g=async()=>{console.log(c.value),console.log(i.value);const w=i.value.find(Q=>Q[7].toLowerCase()===c.value.toLowerCase());console.log(w),await ve().required().isValid(c.value)?w?d.value="Custom Job Title already exists!":d.value=null:d.value="Custom Job Title is required!"},C=()=>{u.value=!1,c.value="",d.value=null},v=(w,J)=>{if(!w||w===""){J(()=>{r.value=i.value});return}J(()=>{const Q=w.toLowerCase();r.value=i.value.filter(se=>se[7].toLowerCase().indexOf(Q)>-1)})};return(async()=>{const{data:w}=await V.fetchFromStructureApp({fields:[H({type:"jobAliases",query:`{'6'.EX.'${e.job[13]}'}AND{'15'.XEX.'Yes'}`})]});console.log(w),i.value=w,r.value=i.value,f.value={3:e.job[9],7:e.job[18]}})(),{formMeta:m,formErrors:E,submit:A,alias:f,fixedRate:b,addNew:u,closeAddNew:C,newCategory:c,newCatError:d,filterOptions:v,validateNewCategory:g,options:r,rawOptions:i}}}),ye={class:"text-body1 text-white"},ge={class:"text-caption"},Ce={key:0,class:"text-center bg-info"},he={class:"text-center bg-info"},$e={class:"text-caption"},je={class:"text-caption"};function Ae(e,a,n,u,c,d){return s(),N("div",null,[p("div",null,[o(ee,{onSubmit:_(e.submit,["prevent"])},{default:l(()=>[o(M,{style:{width:"400px"}},{default:l(()=>[o(D,{class:"bg-dark"},{default:l(()=>[p("div",ye,"Edit "+k(e.job[21])+" "+k(e.job[18]),1)]),_:1}),o(D,null,{default:l(()=>[o(G,{class:"q-mb-sm",dense:"",label:"Select Custom Job Title (Alias)","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.alias,"onUpdate:modelValue":a[2]||(a[2]=r=>e.alias=r),options:e.options,"option-label":"7","display-value":`${e.alias?e.alias[7]:""}`,"bottom-slots":"",error:!!e.formErrors.alias},{error:l(()=>[p("div",ge,k(e.formErrors.alias),1)]),"after-options":l(()=>[e.options.length>0?(s(),N("div",Ce,[o(j,{flat:"",color:"white",label:"Add a New Custom Job Title",onClick:a[0]||(a[0]=r=>e.addNew=!0)})])):S("",!0)]),"no-option":l(()=>[p("div",he,[o(j,{flat:"",color:"white",label:"Add a New Custom Job Title",onClick:a[1]||(a[1]=r=>e.addNew=!0)})])]),_:1},8,["modelValue","options","display-value","error"]),e.$can("manage","rates")?(s(),y(te,{key:0,step:"any",prefix:"$",type:"number",dense:"",label:"Fixed Rate",modelValue:e.fixedRate,"onUpdate:modelValue":a[3]||(a[3]=r=>e.fixedRate=r),error:!!e.formErrors.fixedRate,"bottom-slots":""},{error:l(()=>[p("div",$e,k(e.formErrors.fixedRate),1)]),_:1},8,["modelValue","error"])):S("",!0)]),_:1}),o(ce),o(z,{class:"bg-accent",align:"right"},{default:l(()=>[o(j,{size:e.$q.screen.lt.md?"sm":"",color:"secondary",label:"Cancel",onClick:a[4]||(a[4]=r=>e.$emit("closeEditJob"))},null,8,["size"]),o(j,{type:"submit",size:e.$q.screen.lt.md?"sm":"",color:"primary",label:"Save"},null,8,["size"])]),_:1})]),_:1})]),_:1},8,["onSubmit"]),o(x,{modelValue:e.addNew,"onUpdate:modelValue":a[6]||(a[6]=r=>e.addNew=r)},{default:l(()=>[o(M,null,{default:l(()=>[o(D,null,{default:l(()=>[o(te,{style:{width:"250px"},dense:"",label:"Custom Job Title",modelValue:e.newCategory,"onUpdate:modelValue":a[5]||(a[5]=r=>e.newCategory=r),error:!!e.newCatError,"bottom-slots":""},{error:l(()=>[p("div",je,k(e.newCatError),1)]),_:1},8,["modelValue","error"])]),_:1}),o(z,{align:"right"},{default:l(()=>[o(j,{color:"secondary",label:"Cancel",onClick:e.closeAddNew},null,8,["onClick"]),o(j,{color:"primary",label:"Submit",type:"submit",onClick:e.validateNewCategory},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])])}var Je=X(we,[["render",Ae]]);const Se=O({props:{craft:Object},setup(e,a){const n=L(),u=P({job:P().required("Job is required."),alias:P().required("Alias is required.").nullable()}),{meta:c,errors:d,handleSubmit:r,handleReset:i}=ae({validationSchema:u}),{value:t}=F("job"),{value:m}=F("alias"),E=r(async f=>{try{const{data:b}=await V.upsertRecordsXML({to:"bpzpx5m7x",data:[{9:{value:f.alias[3]},13:{value:f.job[3]},20:{value:e.craft[3]}}],fieldsToReturn:[153],formatObject:153});b.length>0&&(a.emit("newJobAdded",{craft:b[0][153]}),i())}catch{n.notify({type:"negative",message:"Something went wrong"})}});async function q(f,b){n.dialog({title:"Confirm",message:`Confirm you want to add "${f}" as a new alias.`,cancel:!0,persistent:!0}).onOk(async()=>{try{const{data:A}=await V.upsertRecordsXML({to:"bpzpi5rjh",data:[{6:{value:t.value[3]},7:{value:f},11:{value:"No"}}],fieldsToReturn:[25],formatObject:25});A.length>0&&(m.value=A[0][25],b(A[0][25]))}catch{n.notify({type:"negative",message:"Something went wrong"})}}).onCancel(()=>{b()})}function $(){a.emit("cancelAddJob"),i()}return{formErrors:d,formMeta:c,submitJob:E,submitAlias:q,cancelAddJob:$,job:t,alias:m,props:e}}}),ke={class:"row justify-between"},Ve={class:"col-5"},Ee={class:"text-caption"},qe={class:"col-6"},Re={class:"text-caption"};function Ne(e,a,n,u,c,d){return s(),N("div",null,[o(ee,{onSubmit:_(e.submitJob,["prevent"])},{default:l(()=>[o(M,{flat:""},{default:l(()=>[o(D,null,{default:l(()=>[p("div",ke,[p("div",Ve,[o(G,{class:"q-mb-sm",dense:"",label:"Select Default Job","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.job,"onUpdate:modelValue":a[0]||(a[0]=r=>e.job=r),options:e.props.craft.options.jobs,"option-label":"9","display-value":`${e.job?e.job[9]:""}`,"bottom-slots":"",error:!!e.formErrors.job},{error:l(()=>[p("div",Ee,k(e.formErrors.job),1)]),_:1},8,["modelValue","options","display-value","error"])]),p("div",qe,[o(G,{disable:!e.job,class:"q-mb-sm",dense:"",label:"Select Custom Job Title (Alias)","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.alias,"onUpdate:modelValue":a[1]||(a[1]=r=>e.alias=r),options:e.job?e.job.aliases:[],"option-label":"7","display-value":`${e.alias?e.alias[7]:""}`,"bottom-slots":"",error:!!e.formErrors.alias,onNewValue:e.submitAlias,"use-input":""},{error:l(()=>[p("div",Re,k(e.formErrors.alias),1)]),_:1},8,["disable","modelValue","options","display-value","error","onNewValue"])])])]),_:1}),o(z,{align:"right"},{default:l(()=>[o(j,{color:"secondary",label:"Cancel",onClick:e.cancelAddJob},null,8,["onClick"]),o(j,{color:"primary",label:"Submit Job",type:"submit"})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])}var Qe=X(Se,[["render",Ne]]);const Te=[{name:0,label:"Default Classification",align:"left",field:e=>e[17],format:e=>`${e}`,sortable:!0,required:!0},{name:1,label:"Vanity Job Title (Alias)",align:"left",field:e=>e[18],format:e=>`${e}`,sortable:!0}],Pe=O({props:{category:Object,projectData:Object},components:{EditJobDialog:Je,AddNewJob:Qe},setup(e){const a=L(),n=le(),u=h(!1),c=h(!1),d=h(null),r=h(null),i=h(!1),{getViewedProjects:t,updateViewedProjects:m,upsertProjectCraft:E}=re(),q=T(()=>t(n.params.id)),$=T(()=>(e.category.classifications?e.category.classifications:[]).sort((R,w)=>R.order>w.order?-1:1)),f=async v=>{if(u.value=!0,q.value&&(v||!q.value[e.category.key]||q.value[e.category.key].length===0)){const{data:R}=await V.fetchFromProjectsApp({fields:[W({type:e.category.key,query:e.category.query})]});console.log(R),m({id:n.params.id,dataset:e.category.key,data:R})}u.value=!1};function b(v,R){d.value=v,r.value=R,c.value=!0}function A(){c.value=!1,d.value=null,r.value=null}function g({craft:v}){E({craft:v}),c.value=!1,d.value=null,r.value=null,a.notify({type:"positive",message:"Job successfully updated!"})}function C({craft:v}){E({craft:v}),i.value=!1,a.notify({type:"positive",message:"New job added!"})}return{props:e,loading:u,loadData:f,rows:$,initialPagination:h({rowsPerPage:100}),columns:Te,showEditJob:c,showAddJob:i,editJobCraft:d,editJobJob:r,editJob:b,editJobComplete:g,newJobAddComplete:C,closeEditJob:A}}}),De={key:1};function Fe(e,a,n,u,c,d){const r=B("add-new-job"),i=B("edit-job-dialog");return s(),N("div",null,[e.showAddJob?S("",!0):(s(),y(be,{key:0,flat:"",dense:"",columns:e.$q.screen.lt.md?e.columns.filter(t=>t.required):e.columns,rows:e.rows,"row-key":t=>t[3],"table-header-class":"bg-dark text-white",class:"sticky-header-table","hide-pagination":"",pagination:e.initialPagination,"onUpdate:pagination":a[1]||(a[1]=t=>e.initialPagination=t),"rows-per-page-options":[0],loading:e.loading},{"top-left":l(()=>[e.$can("manage","projects")?(s(),y(j,{key:0,icon:"add",color:"accent",label:`Add a new ${e.category[10]} Job`,onClick:a[0]||(a[0]=t=>e.showAddJob=!0)},null,8,["label"])):S("",!0)]),loading:l(()=>[o(me,{showing:e.loading,label:"Loading...","label-class":"text-info"},null,8,["showing"])]),header:l(t=>[o(oe,{class:"bg-dark text-white",props:t},{default:l(()=>[(s(!0),N(I,null,Y(t.cols,m=>(s(),y(K,{class:"text-left",key:m.name},{default:l(()=>[U(k(m.label),1)]),_:2},1024))),128)),e.$can("read","rates")?(s(),y(K,{key:0,class:"text-left"},{default:l(()=>[U("Rate")]),_:1})):S("",!0),o(K,{"auto-width":""})]),_:2},1032,["props"])]),body:l(t=>[o(oe,{props:t},{default:l(()=>[(s(!0),N(I,null,Y(t.cols,m=>(s(),y(Z,{key:m.name,props:t},{default:l(()=>[U(k(m.value),1)]),_:2},1032,["props"]))),128)),e.$can("read","rates")?(s(),y(Z,{key:0,class:"text-left"},{default:l(()=>[U(k(t.row.hasFixedRate?`$ ${t.row.fixedRate.toFixed(2)}`:"N/A"),1)]),_:2},1024)):S("",!0),o(Z,{"auto-width":""},{default:l(()=>[e.$can("manage","projects")?(s(),y(j,{key:0,size:"sm",label:"edit",color:"primary",onClick:m=>e.editJob(e.category,t.row)},null,8,["onClick"])):S("",!0)]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["columns","rows","row-key","pagination","loading"])),e.showAddJob?(s(),N("div",De,[o(r,{craft:e.category,onCancelAddJob:a[2]||(a[2]=t=>e.showAddJob=!1),onNewJobAdded:e.newJobAddComplete},null,8,["craft","onNewJobAdded"])])):S("",!0),o(x,{modelValue:e.showEditJob,"onUpdate:modelValue":a[3]||(a[3]=t=>e.showEditJob=t),persistent:""},{default:l(()=>[o(i,{craft:e.editJobCraft,job:e.editJobJob,onCloseEditJob:e.closeEditJob,onEditJobComplete:e.editJobComplete},null,8,["craft","job","onCloseEditJob","onEditJobComplete"])]),_:1},8,["modelValue"])])}var Oe=X(Pe,[["render",Fe]]);const Xe=O({emits:["cancelAddCraft","newCraftAdded"],props:{crafts:Array,project:Number},setup(e,{emit:a}){const n=L(),u=h([]),c=T(()=>{const g=new Set(e.crafts.map(v=>v[9]));return u.value.filter(v=>!g.has(v[3]))}),d=P({craftSelection:P().required("Craft is required.")}),{meta:r,errors:i,handleSubmit:t,handleReset:m}=ae({validationSchema:d}),{value:E}=F("craftSelection"),q=t(async g=>{n.loading.show();try{const C=await f(g.craftSelection[3]),v=await $(C),R=[];v.forEach(J=>{const Q={9:{value:J[93]},13:{value:J[3]},20:{value:C[3]}};R.push(Q)});const{data:w}=await V.upsertRecordsXML({to:"bpzpx5m7x",data:R,fieldsToReturn:[141],formatObject:141});w.forEach(J=>{C.classifications.push(J[141])}),n.loading.hide(),a("newCraftAdded",{craft:C})}catch{n.notify({type:"negative",message:"Something went wrong"})}}),$=async g=>{const{data:C}=await V.fetchFromStructureApp({fields:[H({type:"availableJobs",query:`{'13'.EX.'${g[9]}'}AND{'71'.XEX.'Pending'}`})]});return C},f=async g=>{try{const{data:C}=await V.upsertRecordsXML({to:"bp5g8rym8",data:[{6:{value:"Active"},7:{value:e.project},9:{value:g}}],fieldsToReturn:[120],formatObject:120});return C[0][120]}catch{n.notify({type:"negative",message:"Something went wrong"})}},b=async()=>{n.loading.show();const{data:g}=await V.fetchFromStructureApp({fields:[H({type:"availableCrafts",query:"{'16'.EX.'Yes'}"})]});u.value=g,n.loading.hide()};function A(){a("cancelAddCraft")}return b(),{formErrors:i,formMeta:r,submit:q,cancelAdd:A,props:e,craftSelection:E,availableCrafts:c}}}),Le={class:"text-caption"},Ue=p("div",{class:"text-primary text-body1"},"This project already has all available crafts. Click cancel below to return.",-1);function Me(e,a,n,u,c,d){return s(),N("div",null,[o(ee,{onSubmit:_(e.submit,["prevent"])},{default:l(()=>[o(M,{style:{width:"500px"}},{default:l(()=>[e.availableCrafts.length>0?(s(),y(D,{key:0},{default:l(()=>[o(G,{class:"q-mb-sm",dense:"",label:"Select the Craft","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.craftSelection,"onUpdate:modelValue":a[0]||(a[0]=r=>e.craftSelection=r),options:e.availableCrafts||[],"option-label":"6","display-value":`${e.craftSelection?e.craftSelection[6]:""}`,"bottom-slots":"",error:!!e.formErrors.craftSelection},{error:l(()=>[p("div",Le,k(e.formErrors.craftSelection),1)]),_:1},8,["modelValue","options","display-value","error"])]),_:1})):(s(),y(D,{key:1},{default:l(()=>[Ue]),_:1})),o(z,{align:"right"},{default:l(()=>[o(j,{color:"secondary",label:"Cancel",onClick:e.cancelAdd},null,8,["onClick"]),e.availableCrafts.length>0?(s(),y(j,{key:0,color:"primary",label:"Submit",type:"submit"})):S("",!0)]),_:1})]),_:1})]),_:1},8,["onSubmit"])])}var ze=X(Xe,[["render",Me]]);const Be=O({components:{CraftPanel:Oe,AddNewCraft:ze},setup(){const e=L(),a=h(null),n=h(!1),u=le(),{getViewedProjects:c,updateViewedProjects:d,setViewedProjects:r}=re(),i=T(()=>u.params.id?u.params.id:null),t=T(()=>c(i.value)),m=T(()=>(t.value&&t.value.crafts?t.value.crafts:[]).sort((f,b)=>f.order>b.order?1:-1));function E({craft:$}){d({id:i.value,dataset:"crafts",data:[$],push:!0}),n.value=!1,a.value=$[3],e.notify({type:"positive",message:"New craft added!"})}return(async $=>{if(e.loading.show(),!t.value){const{data:f}=await V.fetchFromProjectsApp({fields:[W({type:"projects",id:u.params.id})]});r({id:u.params.id,data:f})}if(i.value&&($||m.value.length===0)){const{data:f}=await V.fetchFromProjectsApp({fields:[W({type:"projectCrafts",query:`{'7'.EX.'${i.value}'}`})]});d({id:i.value,dataset:"crafts",data:f});const b=f.sort((A,g)=>A.order>g.order?1:-1)[0];a.value=b[3]}else a.value=m.value[0][3];e.loading.hide()})(),{tab:a,project:t,crafts:m,splitterModel:h(20),showAddCraft:n,newCraftAddComplete:E}}}),Ie={class:"q-pa-sm"},Ye={class:"row items-center"},Ge={class:"col-10 q-pr-sm"},Ke={class:"col-2 text-center"};function Ze(e,a,n,u,c,d){const r=B("craft-panel"),i=B("add-new-craft");return s(),y(fe,{style:{"max-width":"100vw"}},{default:l(()=>[p("div",Ie,[p("div",null,[p("div",Ye,[p("div",Ge,[o(ue,{class:"q-py-xs bg-info text-white shadow-2 rounded-borders",dense:"",modelValue:e.tab,"onUpdate:modelValue":a[0]||(a[0]=t=>e.tab=t),"indicator-color":"accent","outside-arrows":"","mobile-arrows":"","inline-label":""},{default:l(()=>[(s(!0),N(I,null,Y(e.crafts,t=>(s(),y(ne,{key:t[3],name:t[3],label:t[10]},null,8,["name","label"]))),128))]),_:1},8,["modelValue"])]),p("div",Ke,[e.$can("manage","projects")?(s(),y(j,{key:0,color:"accent",label:"Add another Craft",onClick:a[1]||(a[1]=t=>e.showAddCraft=!0)})):S("",!0)])]),o(de,{modelValue:e.tab,"onUpdate:modelValue":a[2]||(a[2]=t=>e.tab=t),animated:""},{default:l(()=>[(s(!0),N(I,null,Y(e.crafts,t=>(s(),y(ie,{key:t[3],name:t[3],class:"q-px-xs"},{default:l(()=>[o(r,{category:t,projectData:e.project},null,8,["category","projectData"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]),o(x,{modelValue:e.showAddCraft,"onUpdate:modelValue":a[4]||(a[4]=t=>e.showAddCraft=t),persistent:""},{default:l(()=>[e.showAddCraft?(s(),y(i,{key:0,crafts:e.crafts,project:e.project[3]||null,onCancelAddCraft:a[3]||(a[3]=t=>e.showAddCraft=!1),onNewCraftAdded:e.newCraftAddComplete},null,8,["crafts","project","onNewCraftAdded"])):S("",!0)]),_:1},8,["modelValue"])])]),_:1})}var Ea=X(Be,[["render",Ze]]);export{Ea as default};

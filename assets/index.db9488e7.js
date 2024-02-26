import{l as re,bV as R,c as _,_ as ne,A as d,aq as V,br as n,B as U,D as o,bO as qe,d as l,E as ze,ac as a,bW as C,ar as m,r as N,w as Ne,cU as F,bS as ae,bQ as Fe,b5 as pe,cS as be,cT as le,G as E,ax as se,F as Ie,b4 as Oe,bT as De,ck as Me}from"./index.b2bb37ff.js";import{Q as Te}from"./QPage.c325cf21.js";import{Q as Ve,a as je}from"./QStep.f7327d3c.js";import{b as Be,k as $e,f as Ye,m as Ce,e as we,h as ke,d as He,g as Le}from"./app.1209c2a0.js";import{a as J}from"./QSelect.9304e058.js";import{Q as ge}from"./QStepperNavigation.1b0ef92c.js";import{u as Se}from"./i18n.70e0affb.js";import{a as Ee,u as h}from"./vee-validate.esm.4e40834c.js";import{a as M,c as g}from"./array.59f93f43.js";import{s as Je}from"./states.03e3d448.js";import{u as Pe}from"./use-quasar.fd3f760b.js";import{Q as We}from"./QForm.79b8283c.js";import{Q as Ue}from"./QTooltip.0dff630d.js";import"./use-panel.9740bc0c.js";import"./touch.3df10340.js";import"./selection.9c1f8110.js";import"./QSlideTransition.d698f2f1.js";import"./_commonjsHelpers.a26ce4be.js";import"./dayjs.a5065333.js";import"./localForage.9e5c99f3.js";import"./api.0244d746.js";import"./index.04bc0a32.js";import"./QChip.3cfecf87.js";import"./QMenu.76204602.js";import"./position-engine.76ef9168.js";import"./rtl.b51694b1.js";const Ze=re({props:{title:String,step:Number,name:Number},setup(){const{checkedIn:e,onKiosk:s}=R(Be()),q=$e(),{hiringCenterAvailable:c}=R(Ye()),{updateProfile:k}=q,{profile:p}=R(q),t=Ce(),{evergreenJobOptions:f}=R(t),{t:r}=Se(),Q=_(()=>e.value?M({selection:M().required(`${r("pleaseSelectAJob")}`).nullable()}):!1),{meta:Y,errors:W,handleSubmit:Z,isSubmitting:G}=Ee({validationSchema:Q,initialValues:{selection:p.value[19].value?{value:p.value[19].value,label:p.value[19].label}:null}}),{value:H}=h("selection"),D=Z(w=>{const x={19:{value:w.selection.value,label:w.selection.label},40:{value:w.selection[13],label:w.selection[12]}};k({next:1,values:x})});return{checkedIn:e,onKiosk:s,selection:H,formMeta:Y,formErrors:W,isSubmitting:G,submitUpdate:D,evergreenJobOptions:f,hiringCenterAvailable:c}}}),Ge={key:0},Ke={class:"text-caption"};function Xe(e,s,q,c,k,p){return d(),V(Ve,{name:e.name,title:e.title,done:e.step>0},{default:n(()=>[e.checkedIn||e.onKiosk||!e.onKiosk&&e.hiringCenterAvailable?(d(),U("div",Ge,[o("form",{onSubmit:s[1]||(s[1]=qe((...t)=>e.submitUpdate&&e.submitUpdate(...t),["prevent"]))},[l(J,{autofocus:"",label:e.$t("selectAJob"),modelValue:e.selection,"onUpdate:modelValue":s[0]||(s[0]=t=>e.selection=t),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",options:e.evergreenJobOptions,style:ze(e.$q.screen.gt.md?"width: 50%":"width: 100%"),error:!!e.formErrors.selection,"bottom-slots":"",dense:""},{error:n(()=>[o("div",Ke,a(e.formErrors.selection),1)]),_:1},8,["label","modelValue","options","style","error"]),l(ge,{class:"text-right"},{default:n(()=>[l(C,{type:"submit",color:"info",label:e.$t("continue")},null,8,["label"])]),_:1})],32)])):m("",!0)]),_:1},8,["name","title","done"])}var _e=ne(Ze,[["render",Xe]]);const xe=["Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador","Northwest Territories","Nova Scotia","Nunavut","Ontario","Prince Edward Island","Quebec","Saskatchewan","Yukon Territory"],et=re({props:{title:String,step:Number,name:Number},components:{},setup(){const{employee:e}=R(we()),s=[{label:"Call",value:1},{label:"Text",value:2},{label:"Email",value:3},{label:"Call, Text, or Email",value:4},{label:"Do Not Contact Me",value:5}],q=[{label:"United States",value:"United States"},{label:"Canada",value:"Canada"}],c=N(!1),k=N(!1),p=N(null),t=N([]),f=N(""),r=N(null),Q=$e(),{onJobBoard:Y}=R(Q),W=M({first:g().required("First name is required!").matches(/^[aA-zZ\s]+$/,{excludeEmptyString:!0,message:"Only letters are allowed for this field!"}),middle:g().matches(/^[aA-zZ\s]+$/,{excludeEmptyString:!0,message:"Only letters are allowed for this field!"}).nullable().notRequired(),last:g().required("Last name is required!").matches(/^[aA-zZ\s]+$/,{excludeEmptyString:!0,message:"Only letters are allowed for this field!"}),suffix:g().nullable().notRequired(),street1:g().required(),street2:g().nullable().notRequired(),city:g().required(),state:g().required(),postal:g().required(),addressCountry:M().required("Country is required!").typeError("Country is a required field"),contact:M().nullable().notRequired()}),{meta:Z,errors:G,handleSubmit:H,isSubmitting:D}=Ee({validationSchema:W,initialValues:{first:e.value[20]?e.value[20]:"",middle:e.value[21]?e.value[21]:"",last:e.value[22]?e.value[22]:"",suffix:e.value[23]?e.value[23]:"",contact:e.value[57]?{value:e.value[57],label:e.value[58]}:null,street1:e.value[41]?e.value[41]:"",street2:e.value[42]?e.value[42]:"",city:e.value[43]?e.value[43]:"",state:e.value[44]?e.value[44]:"",postal:e.value[45]?e.value[45]:"",addressCountry:e.value[46]?{value:e.value[46],label:e.value[46]}:null}}),{value:w,meta:x}=h("first"),{value:K,meta:ie}=h("middle"),{value:ee,meta:de}=h("last"),{value:O}=h("suffix"),{value:ue}=h("contact"),{value:P}=h("street1"),{value:I}=h("street2"),{value:A}=h("city"),{value:u}=h("state"),{value:y}=h("postal"),{value:v}=h("addressCountry"),X=_(()=>{const i=`${w.value} ${ee.value} ${O.value}`;return ke.formatName(i)}),te=_(()=>`${P.value}${I.value===""?"":` ${I.value}`}, ${A.value}, ${u.value}, ${y.value}, ${v.value.value}`);function L(){const i={next:2};Q.updateProfile(i)}function fe(){c.value=!0}const oe=H(async i=>{const j={23:i.first,24:i.middle,25:i.last,26:i.suffix,27:e.value[27],28:e.value[26],46:i.contact,32:i.street1,33:i.street2,34:i.city,35:i.state,36:i.postal,37:i.addressCountry.value},B={next:2,values:j};c.value=!1;const ce=await Q.updateProfile(B);console.log(ce)});function he(){const i={next:0};Q.updateProfile(i)}const T=i=>{p.value=i};Ne(f,i=>{i&&i!==""&&i.length>3?ye(i):t.value=[]});const ye=async i=>{await fetch(`https://a.tiles.mapbox.com/geocoding/v5/mapbox.places/${i}.json?access_token=pk.eyJ1IjoicXVpY2tiYXNlb3BzIiwiYSI6ImNqNnpueGpzaDAzMmEyeG15bjQ4NXBldWYifQ.WyIwRcqCXdj-zo62Ro_UnQ`,{credentials:"omit",headers:{Accept:"*/*","Accept-Language":"en-US,en;q=0.5","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"cross-site"},referrer:"https://elitehcms.quickbase.com/",method:"GET",mode:"cors"}).then(j=>j.json()).then(j=>{t.value=j.features})};return{submitUpdate:oe,isSubmitting:D,save:L,back:he,updateCountry:T,first:w,middle:K,last:ee,suffix:O,contact:ue,street1:P,street2:I,city:A,state:u,postal:y,addressCountry:v,hasPersonalInfo:k,showEdit:c,firstMeta:x,middleMeta:ie,lastMeta:de,formMeta:Z,formErrors:G,options:s,countries:q,fullName:X,fullAddress:te,employee:e,showEditFunction:fe,onJobBoard:Y,states:Je,provinces:xe,fetchPlaces:ye,addressOptions:t,addressSearch:f,filterFn:(i,j,B)=>{j(()=>{f.value=i.toLowerCase()},ce=>{i!==""&&ce.options.length>0&&(ce.setOptionIndex(-1),ce.moveOptionSelection(1,!0))})},setAddress:i=>{if(i){P.value=`${i.address} ${i.text}`,I.value="",A.value=i.context.find(B=>B.id.startsWith("place.")).text,y.value=i.context.find(B=>B.id.startsWith("postcode.")).text,u.value=i.context.find(B=>B.id.startsWith("region.")).text;const j=i.context.find(B=>B.id.startsWith("country.")).text;v.value={label:j,value:j},f.value=null,r.value.focus()}},streetRef:r}}}),tt={class:"row justify-between"},ot={class:"col-12 col-md-5"},lt={class:"text-caption"},st={class:"text-caption"},at={class:"text-caption"},rt={class:"text-caption"},nt={class:"text-caption"},it={class:"col-12 col-md-6"},dt={class:"row"},ut={class:"text-caption"},ct={class:"text-caption"};function mt(e,s,q,c,k,p){return d(),U("form",{onSubmit:s[13]||(s[13]=qe((...t)=>e.submitUpdate&&e.submitUpdate(...t),["prevent"]))},[o("div",tt,[o("div",ot,[l(F,{dense:"",modelValue:e.first,"onUpdate:modelValue":s[0]||(s[0]=t=>e.first=t),label:`${e.$t("firstName")} *`,error:!!e.formErrors.first,"bottom-slots":""},{error:n(()=>[o("div",lt,a(e.formErrors.first),1)]),_:1},8,["modelValue","label","error"]),l(F,{dense:"",modelValue:e.middle,"onUpdate:modelValue":s[1]||(s[1]=t=>e.middle=t),label:e.$t("middleName"),error:!!e.formErrors.middle,"bottom-slots":""},{error:n(()=>[o("div",st,a(e.formErrors.middle),1)]),_:1},8,["modelValue","label","error"]),l(F,{dense:"",modelValue:e.last,"onUpdate:modelValue":s[2]||(s[2]=t=>e.last=t),label:`${e.$t("lastName")} *`,error:!!e.formErrors.last,"bottom-slots":""},{error:n(()=>[o("div",at,a(e.formErrors.last),1)]),_:1},8,["modelValue","label","error"]),l(F,{dense:"",modelValue:e.suffix,"onUpdate:modelValue":s[3]||(s[3]=t=>e.suffix=t),label:e.$t("suffix"),error:!!e.formErrors.suffix,"bottom-slots":""},{error:n(()=>[o("div",rt,a(e.formErrors.suffix),1)]),_:1},8,["modelValue","label","error"]),l(J,{dense:"",modelValue:e.contact,"onUpdate:modelValue":s[4]||(s[4]=t=>e.contact=t),label:e.$t("preferredContactMethod"),options:e.options,error:!!e.formErrors.contact,"bottom-slots":""},{error:n(()=>[o("div",nt,a(e.formErrors.contact),1)]),_:1},8,["modelValue","label","options","error"])]),e.$q.screen.gt.sm?(d(),V(ae,{key:0,vertical:""})):m("",!0),o("div",it,[l(J,{dense:"",modelValue:e.addressSearch,"onUpdate:modelValue":[s[5]||(s[5]=t=>e.addressSearch=t),e.setAddress],"use-input":"","hide-selected":"","fill-input":"","input-debounce":"300",label:`${e.$t("searchAddress")}`,options:e.addressOptions,onFilter:e.filterFn,"option-label":"place_name","option-value":"id","bottom-slots":"","hide-dropdown-icon":""},{append:n(()=>[l(Fe,{name:"search"})]),_:1},8,["modelValue","label","options","onFilter","onUpdate:modelValue"]),l(F,{ref:"streetRef",dense:"",modelValue:e.street1,"onUpdate:modelValue":s[6]||(s[6]=t=>e.street1=t),label:`${e.$t("streetAddress1")} *`,error:!!e.formErrors.street1,"bottom-slots":""},null,8,["modelValue","label","error"]),l(F,{dense:"",modelValue:e.street2,"onUpdate:modelValue":s[7]||(s[7]=t=>e.street2=t),label:e.$t("streetAddress2"),error:!!e.formErrors.street2,"bottom-slots":""},null,8,["modelValue","label","error"]),l(F,{dense:"",modelValue:e.city,"onUpdate:modelValue":s[8]||(s[8]=t=>e.city=t),label:`${e.$t("city")} *`,error:!!e.formErrors.city,"bottom-slots":""},null,8,["modelValue","label","error"]),o("div",dt,[l(J,{class:"col-12 col-md-8",dense:"",modelValue:e.state,"onUpdate:modelValue":s[9]||(s[9]=t=>e.state=t),label:`${e.$t("stateRegion")} *`,options:e.addressCountry?e.addressCountry.value==="United States"?e.states:e.provinces:e.states,error:!!e.formErrors.state,"bottom-slots":""},{error:n(()=>[o("div",ut,a(e.formErrors.state),1)]),_:1},8,["modelValue","label","options","error"]),l(F,{class:"col-12 col-md-4",dense:"",modelValue:e.postal,"onUpdate:modelValue":s[10]||(s[10]=t=>e.postal=t),label:`${e.$t("zipCode")} *`,error:!!e.formErrors.postal,"bottom-slots":""},null,8,["modelValue","label","error"])]),l(J,{dense:"",modelValue:e.addressCountry,"onUpdate:modelValue":s[11]||(s[11]=t=>e.addressCountry=t),label:`${e.$t("country")} *`,options:e.countries,error:!!e.formErrors.addressCountry,"bottom-slots":""},{error:n(()=>[o("div",ct,a(e.formErrors.addressCountry),1)]),_:1},8,["modelValue","label","options","error"])])]),l(ge,{class:"text-right"},{default:n(()=>[e.onJobBoard?m("",!0):(d(),V(C,{key:0,onClick:s[12]||(s[12]=t=>e.$emit("back")),color:"secondary",label:e.$t("back"),class:"q-mr-sm"},null,8,["label"])),l(C,{type:"submit",color:"info",label:e.$t("continue")},null,8,["label"])]),_:1})],32)}var pt=ne(et,[["render",mt]]);const ft=/^[0-9]{10}/g,vt=re({props:{title:String,step:Number,name:Number},components:{editPersonalInfo:pt},setup(){const{employee:e}=R(we()),s=[{label:"Call",value:0},{label:"Text",value:1},{label:"Email",value:2}],q=[{label:"United States",value:"United States"},{label:"Canada",value:"Canada"}],c=N(!0),k=N(!1),p=N(null),t=$e(),{onJobBoard:f,personalInfoNeeded:r}=R(t),Q=M({first:g().required("First name is required!").matches(/^[aA-zZ\s]+$/,{excludeEmptyString:!0,message:"Only letters are allowed for this field!"}),middle:g().matches(/^[aA-zZ\s]+$/,{excludeEmptyString:!0,message:"Only letters are allowed for this field!"}).nullable().notRequired(),last:g().required("Last name is required!").matches(/^[aA-zZ\s]+$/,{excludeEmptyString:!0,message:"Only letters are allowed for this field!"}),suffix:g().nullable().notRequired(),email:g().required("Email is required!").email("You must provide a valid email!"),phone:g().matches(ft,{message:"Valid Phone Number Required!"}).required("Phone number is required!"),street1:g().required(),street2:g().nullable().notRequired(),city:g().required(),state:g().required(),postal:g().required(),addressCountry:M().required(),contact:M().nullable().notRequired()}),{meta:Y,errors:W,handleSubmit:Z,isSubmitting:G}=Ee({validationSchema:Q,initialValues:{first:e.value[20]?e.value[20]:"",middle:e.value[21]?e.value[21]:"",last:e.value[22]?e.value[22]:"",suffix:e.value[23]?e.value[23]:"",phone:e.value[27]?e.value[27]:"",email:e.value[26]?e.value[26]:"",contact:e.value[57]?{value:e.value[57],label:e.value[58]}:null,street1:e.value[41]?e.value[41]:"",street2:e.value[42]?e.value[42]:"",city:e.value[43]?e.value[43]:"",state:e.value[44]?e.value[44]:"",postal:e.value[45]?e.value[45]:"",addressCountry:e.value[46]?{value:e.value[46],label:e.value[46]}:null}}),{value:H,meta:D}=h("first"),{value:w,meta:x}=h("middle"),{value:K,meta:ie}=h("last"),{value:ee}=h("suffix"),{value:de}=h("email"),{value:O}=h("phone"),{value:ue}=h("contact"),{value:P}=h("street1"),{value:I}=h("street2"),{value:A}=h("city"),{value:u}=h("state"),{value:y}=h("postal"),{value:v}=h("addressCountry"),X=_(()=>{const b=`${H.value} ${K.value} ${ee.value}`;return ke.formatName(b)}),te=_(()=>`${P.value}${I.value===""?"":` ${I.value}`}, ${A.value}, ${u.value}, ${y.value}, ${v.value.value}`),L=_(()=>{let b="";return O.value.length===11?b=O.value.substring(1):b=O.value,ke.formatPhone(b)});async function fe(){const b={23:e.value[20],24:e.value[21],25:e.value[22],26:e.value[23],27:e.value[27],28:e.value[26],46:e.value[57],32:e.value[41],33:e.value[42],34:e.value[43],35:e.value[44],36:e.value[45],37:e.value[46]},ve={next:2,values:b};t.updateProfile(ve)}function oe(){c.value=!0}const he=Z(b=>{const ve={23:b.first,24:b.middle,25:b.last,26:b.suffix,27:b.phone,28:b.email,46:b.contact,32:b.street1,33:b.street2,34:b.city,35:b.state,36:b.postal,37:b.addressCountry.name},i={next:2,values:ve};c.value=!1,t.updateProfile(i)});function T(){c.value=!1;const b={next:0};t.updateProfile(b)}return{submitUpdate:he,isSubmitting:G,save:fe,back:T,updateCountry:b=>{p.value=b},first:H,middle:w,last:K,suffix:ee,email:de,phone:O,contact:ue,street1:P,street2:I,city:A,state:u,postal:y,addressCountry:v,hasPersonalInfo:k,showEdit:c,firstMeta:D,middleMeta:x,lastMeta:ie,formMeta:Y,formErrors:W,options:s,countries:q,fullName:X,fullAddress:te,formatPhone:L,employee:e,showEditFunction:oe,onJobBoard:f,personalInfoNeeded:r}}}),bt={key:1},$t={class:"col-12 col-md-3 q-py-sm"},ht={class:"text-primary"},yt={class:"text-dark q-pl-sm"},qt={class:"col-12 col-md-6 q-py-sm"},gt={class:"text-primary"},kt={class:"text-dark q-pl-sm"},Vt={class:"col-12 col-md-3 q-py-sm"},Ct={class:"text-primary"},wt={class:"text-dark q-pl-sm"};function Et(e,s,q,c,k,p){const t=pe("edit-personal-info");return d(),V(Ve,{name:e.name,title:e.title,done:e.step>1},{default:n(()=>[e.showEdit||e.personalInfoNeeded?(d(),V(t,{key:0,onBack:e.back},null,8,["onBack"])):m("",!0),!e.showEdit&&!e.personalInfoNeeded?(d(),U("div",bt,[l(be,null,{default:n(()=>[l(le,null,{default:n(()=>[o("div",{class:E(["text-dark",e.$q.screen.gt.sm?"text-h6":"text-body2"])},[se(a(e.$q.screen.gt.sm?`${e.$t("personalInfo")}`:`${e.$t("personal")}`)+" ",1),l(C,{class:"q-ml-sm",round:"",size:e.$q.screen.gt.sm?"sm":"xs",color:"accent",icon:"edit",onClick:e.showEditFunction},null,8,["size","onClick"])],2),o("div",{class:E(["row q-mt-sm",e.$q.screen.gt.sm?"text-body1":"text-caption"])},[o("div",$t,[o("div",ht,a(e.$t("name")),1),o("div",yt,a(e.employee[24]),1)]),o("div",qt,[o("div",gt,a(e.$t("address")),1),o("div",kt,a(e.employee[40]),1)]),o("div",Vt,[o("div",Ct,a(e.$t("preferredContactMethod")),1),o("div",wt,a(e.employee[58]),1)])],2)]),_:1})]),_:1}),l(ge,{class:"text-right"},{default:n(()=>[e.onJobBoard?m("",!0):(d(),V(C,{key:0,onClick:e.back,color:"secondary",label:e.$t("back"),class:"q-mr-sm"},null,8,["onClick","label"])),l(C,{onClick:e.save,color:"info",label:e.$t("continue")},null,8,["onClick","label"])]),_:1})])):m("",!0)]),_:1},8,["name","title","done"])}var St=ne(vt,[["render",Et]]);const Ut=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,Nt=re({props:{title:String,step:Number,name:Number},setup(){const e=Pe(),s=$e(),q=Ce(),c=we(),{t:k}=Se(),{relationshipOptions:p}=R(q),{savedEmergencyContacts:t}=R(c),{removeContact:f,addContact:r,updateContact:Q,employeeData:Y}=c,W=N({name:"first",value:null}),Z=N({name:"last",value:null}),G=N({name:"phone",value:null}),H=N({name:"relationship",value:null}),D=N([]),w=_(()=>{const u=t.value.concat(D.value);return u.sort(function(y,v){return y.editing&&!v.editing?-1:!y.editing&&v.editing?1:0}),u}),x=_(()=>w.value.filter(y=>y.editing).length>0);function K(){const u={next:3};s.updateProfile(u)}function ie(){const u={next:1};s.updateProfile(u)}function ee(){const u={3:w.value.length+1,6:"",7:"",8:"",11:"",12:"",16:"",editing:!0,new:!0,contact:null};D.value.push(u),console.log(w.value)}function de(u){t.value[u].editing=!0}function O(u){const y=w.value[u];console.log(y),e.dialog({title:"Alert",message:`Are you sure you want to remove ${y[6]} ${y[7]}?`,cancel:!0,persistent:!0}).onOk(()=>{f(y[3])})}const ue=M({relationship:M().required("Relationship is required.").nullable(),phone:g().matches(Ut,{message:`${k("validPhoneIsRequired")}`}).length(10,{message:`${k("validPhoneIsRequired")}`}).required("Phone is required.").label(`${k("phoneNumber")}`),last:g().required().label(`${k("lastName")}`),first:g().required().label(`${k("firstName")}`)}).required();function P(u){const y=[W.value,Z.value,G.value,H.value];u?y.forEach(v=>{v.name===u.name?v.value=u.message:v.value=null}):y.forEach(v=>{v.value=null})}async function I(u,y){console.log(u);const v=w.value[y];try{await ue.validate({relationship:u.contact,phone:u[16],last:u[7],first:u[6]}),v[11]=u.contact.value,v[12]=u.contact.label,v.editing=!1,P(),v.new?(v.new=!1,r(v),D.value.forEach((X,te)=>{X[3]===v[3]&&D.value.splice(te,1)})):Q(v)}catch({name:X,path:te,errors:L,inner:fe}){let oe="";L[0]instanceof Object?oe=L[0].message:oe=L[0],P({name:te,message:oe})}}function A(u){const y=w.value[u];console.log(y),y.new?D.value.forEach((v,X)=>{v[3]===y[3]&&D.value.splice(X,1)}):w.value[u].editing=!1}return{save:K,back:ie,savedEmergencyContacts:t,allContacts:w,editing:x,relationshipOptions:p,editItem:de,removeItem:O,saveItem:I,cancelEdit:A,addNewContactRow:ee,addContact:r,updateContact:Q,firstError:W,lastError:Z,phoneError:G,relationshipError:H,helpers:ke,employeeData:Y}}}),It={class:"col-12 col-md-4"},Ot={class:"text-primary"},Pt={class:"text-dark q-pl-sm"},At={class:"col-12 col-md-4"},Rt={class:"text-primary"},Qt={class:"text-dark q-pl-sm"},zt={key:0,class:"text-body2 text-dark"},Ft={class:"row q-py-sm"},Dt={class:"col-12 col-md-6 text-left"},Mt={key:0,class:"text-body2 text-primary text-italic q-pb-sm q-pl-md"},Tt=["id"],jt={class:"col-12 col-md-4"},Bt={class:"text-primary"},Yt={class:"text-dark q-pl-sm"},Ht={class:"text-primary"},Lt={class:"text-dark q-pl-sm"},Jt={class:"text-primary"},Wt={class:"text-dark q-pl-sm"},Zt={key:1,class:"items-center"},Gt=["onSubmit"],Kt={class:"row"},Xt={class:"col-12 col-md-3 q-pr-md"},_t={class:"col-12 col-md-3 q-pr-md"},xt={class:"col-12 col-md-3 q-pr-md"},eo={class:"col-12 col-md-3"},to={class:"row q-mt-md"},oo={class:"col text-right"};function lo(e,s,q,c,k,p){return d(),V(Ve,{name:e.name,title:e.title},{default:n(()=>[o("div",null,[l(be,{class:"q-px-xs"},{default:n(()=>[l(le,null,{default:n(()=>[o("div",{class:E(["text-dark",e.$q.screen.gt.sm?"text-h6":"text-body2"])},[se(a(e.$q.screen.gt.sm?`${e.$t("personalContactInfo")}`:`${e.$t("personal")}`)+" ",1),l(C,{class:"q-ml-sm",round:"",size:e.$q.screen.gt.sm?"sm":"xs",color:"accent",icon:"edit"},null,8,["size"])],2),o("div",{class:E(["row q-mt-sm",e.$q.screen.gt.sm?"text-body1":"text-caption"])},[o("div",It,[o("div",Ot,a(e.$t("phoneNumber")),1),o("div",Pt,a(e.employeeData[25]),1)]),o("div",At,[o("div",Rt,a(e.$t("email")),1),o("div",Qt,a(e.employeeData[26]),1)])],2)]),_:1}),e.$q.screen.gt.sm?m("",!0):(d(),V(ae,{key:0})),e.editing?m("",!0):(d(),V(le,{key:1,class:E(e.$q.screen.lt.md?"q-px-xs":"")},{default:n(()=>[e.$q.screen.gt.sm?m("",!0):(d(),U("div",zt,a(e.$t("emergencyContacts")),1)),o("div",Ft,[o("div",Dt,[l(C,{size:e.$q.screen.gt.sm?"md":"sm",color:"accent",label:(e.allContacts.length>0,e.$t("addEmergencyContact")),onClick:e.addNewContactRow,icon:"add"},null,8,["size","label","onClick"])])])]),_:1},8,["class"])),e.editing?(d(),V(ae,{key:2})):m("",!0),l(le,{class:E([e.editing?"q-pt-sm":"q-pt-none",e.$q.screen.gt.sm?"":"q-px-xs"])},{default:n(()=>[e.allContacts.length===0?(d(),U("div",Mt,a(e.$t("addEmergencyContactRequired")),1)):m("",!0),(d(!0),U(Ie,null,Oe(e.allContacts,(t,f)=>(d(),U("div",{id:t[3],key:t[3]},[l(be,{class:"q-pa-sm",flat:""},{default:n(()=>[t.editing?m("",!0):(d(),U("div",{key:0,class:E(["row items-center",e.$q.screen.gt.sm?"text-body2":"text-caption"])},[o("div",jt,[o("div",null,[o("div",Bt,a(e.$t("name")),1),o("div",Yt,a(e.helpers.formatName(t[6]))+" "+a(e.helpers.formatName(t[7])),1)])]),o("div",{class:E(e.$q.screen.gt.sm?"col-3":"col-12 q-pt-sm")},[o("div",null,[o("div",Ht,a(e.$t("phoneNumber")),1),o("div",Lt,a(e.helpers.formatPhone(t[8])),1)])],2),o("div",{class:E(e.$q.screen.gt.sm?"col-3":"col-12 q-pt-sm")},[o("div",null,[o("div",Jt,a(e.$t("relationship")),1),o("div",Wt,a(t[12]),1)])],2),o("div",{class:E(e.$q.screen.gt.sm?"col-2 text-right":"col-12 q-pt-md text-right")},[o("div",null,[l(C,{size:"sm",round:"",onClick:r=>e.editItem(f),color:"secondary",icon:"edit",class:"q-mr-sm"},null,8,["onClick"]),l(C,{size:"sm",round:"",onClick:r=>e.removeItem(f),color:"primary",icon:"delete"},null,8,["onClick"])])],2)],2)),t.editing?(d(),U("div",Zt,[o("form",{onSubmit:qe(r=>e.saveItem(t,f),["prevent"])},[o("div",Kt,[o("div",Xt,[l(F,{modelValue:t[6],"onUpdate:modelValue":r=>t[6]=r,dense:"",label:e.$t("firstName"),error:!!e.firstError.value,"bottom-slots":""},{error:n(()=>[se(a(e.firstError.value),1)]),_:2},1032,["modelValue","onUpdate:modelValue","label","error"])]),o("div",_t,[l(F,{modelValue:t[7],"onUpdate:modelValue":r=>t[7]=r,dense:"",label:e.$t("lastName"),error:!!e.lastError.value,"bottom-slots":""},{error:n(()=>[se(a(e.lastError.value),1)]),_:2},1032,["modelValue","onUpdate:modelValue","label","error"])]),o("div",xt,[l(F,{modelValue:t[16],"onUpdate:modelValue":r=>t[16]=r,dense:"",label:e.$t("phoneNumber"),error:!!e.phoneError.value,"bottom-slots":""},{error:n(()=>[se(a(e.phoneError.value),1)]),_:2},1032,["modelValue","onUpdate:modelValue","label","error"])]),o("div",eo,[l(J,{behavior:"menu",position:"top middle",modelValue:t.contact,"onUpdate:modelValue":r=>t.contact=r,dense:"",label:e.$t("relationship"),options:e.relationshipOptions,error:!!e.relationshipError.value,"bottom-slots":""},{error:n(()=>[se(a(e.relationshipError.value),1)]),_:2},1032,["modelValue","onUpdate:modelValue","label","options","error"])])]),o("div",to,[o("div",oo,[l(C,{onClick:r=>e.cancelEdit(f),color:"secondary",label:e.$t("cancel"),class:"q-mr-sm"},null,8,["onClick","label"]),l(C,{type:"submit",color:"info",label:e.$t("save")},null,8,["label"])])])],40,Gt)])):m("",!0)]),_:2},1024),f<e.allContacts.length-1?(d(),V(ae,{key:0})):m("",!0)],8,Tt))),128))]),_:1},8,["class"])]),_:1}),e.editing?m("",!0):(d(),V(ge,{key:0,class:"text-right"},{default:n(()=>[l(C,{onClick:e.back,color:"secondary",label:e.$t("back"),class:"q-mr-sm"},null,8,["onClick","label"]),l(C,{onClick:e.save,color:"info",label:e.$t("continue"),disabled:e.savedEmergencyContacts.length===0},null,8,["onClick","label","disabled"])]),_:1}))])]),_:1},8,["name","title"])}var so=ne(Nt,[["render",lo]]);const ao=re({props:{title:String,step:Number,name:Number},setup(){const{t:e}=Se(),s=De(),q=N(3),c=N(!1),k=Pe(),p=$e(),t=Ce(),f=He(),r=we(),{fetchVoluntaryForms:Q}=t,{experienceOptions:Y,companyOptions:W,craftOptions:Z,employmentOptions:G}=R(t),{hasAffirmative:H,hasVets:D,hasDisability:w,goToVoluntary:x}=R(f),{savedHistory:K}=R(r),{addHistory:ie,updateHistory:ee,removeHistory:de,employeeData:O,updateEmployeeData:ue}=r,P=N([]),{toggleLoader:I,profile:A}=p,{proceedToTest:u}=R(p),y=M({craft:M().required(`${e("selectACraft")}`).nullable(),experience:M().required(`${e("selectExperience")}`).nullable(),employment:M().required(`${e("selectEmploymentStatus")}`).nullable()}),{meta:v,errors:X,handleSubmit:te}=Ee({validationSchema:y,initialValues:{craft:A[40]?{value:A[40].value,label:A[40].label}:null,experience:O[53]?{value:O[53],label:O[54]}:null,employment:O[55]?{value:O[55],label:O[56]}:null}}),{value:L}=h("craft"),{value:fe}=h("experience"),{value:oe}=h("employment");Ne(A,()=>{A[40].value!==L.value.value&&(L.value={value:A[40].value,label:A[40].label})});const he=te(async $=>{const z={40:{value:$.craft.value,label:$.craft.label},42:{value:$.experience.value,label:$.experience.label},44:{value:$.employment.value,label:$.employment.label},39:{value:new Date}};if(x.value){const S={next:w.value?6:H.value?7:D.value?8:0,values:z,completed:!0};I(!0),await Q(),await p.updateProfile(S);try{await p.submitProfileToQB(),I(!1),s.push({name:"voluntary"})}catch{const me={next:0,completed:!1};await p.updateProfile(me),console.log("error submitting profile"),I(!1),window.location.reload(!0)}}else{const S={next:0,values:z,completed:!0};I(!0),await p.updateProfile(S);try{await p.submitProfileToQB(),u.value?(ue({fields:{122:{value:8}}}),s.replace({name:"assessment"})):(s.replace({name:"thanks"}),I(!1))}catch{const me={next:0,completed:!1};await p.updateProfile(me),console.log("error submitting profile"),I(!1),window.location.reload(!0)}}}),T=_(()=>{const $=K.value.concat(P.value);return $.sort(function(z,S){return z.editing&&!S.editing?-1:!z.editing&&S.editing?1:0}),$}),ye=_(()=>T.value.filter(z=>z.editing).length>0);function b(){const $={3:T.value.length+1,6:"",7:"",10:"",11:"",12:"",13:"",15:"",16:"",editing:!0,new:!0,company:null,craft:null};P.value.push($)}function ve(){const $={next:4};p.updateProfile($)}function i(){const $={next:2};p.updateProfile($)}function j($){K.value[$].editing=!0}function B($){const z=T.value[$];console.log(z),k.dialog({title:`${e("alert")}`,message:`${e("areYouSureYouWantToRemove")}`,cancel:!0,persistent:!0}).onOk(()=>{de(z[3])})}function ce($,z){const S=T.value[z];S[6]=$.company.value,S[7]=$.company.label,S[15]=$.craft.value,S[16]=$.craft.label,S.editing=!1,S.new?(S.new=!1,P.value.forEach((me,Qe)=>{me[3]===S[3]&&P.value.splice(Qe,1)}),ie(S)):ee(S)}function Ae($){const z=T.value[$];z.new?P.value.forEach((S,me)=>{S[3]===z[3]&&P.value.splice(me,1)}):T.value[$].editing=!1}function Re(){c.value?(q.value=3,c.value=!1):(c.value=!0,q.value=T.value.length)}return{save:ve,back:i,allHistory:T,addNewRow:b,editItem:j,removeItem:B,saveItem:ce,cancelEdit:Ae,editing:ye,date:Le,show:q,expanded:c,adjustRows:Re,formMeta:v,formErrors:X,submitUpdate:he,craft:L,experience:fe,employment:oe,experienceOptions:Y,companyOptions:W,craftOptions:Z,employmentOptions:G}}}),ro={class:"text-body2 text-dark"},no={class:"row"},io={class:"col-12 col-md-4 q-px-xs"},uo={class:"text-caption"},co={class:"col-12 col-md-4 q-px-xs"},mo={class:"text-caption"},po={class:"col-12 col-md-4 q-px-xs"},fo={class:"text-caption"},vo={class:"text-body2 text-dark"},bo={class:"row q-py-sm"},$o={class:"col-12 col-md-6"},ho={key:0,class:"text-body2 text-primary text-italic q-pb-sm q-pl-md"},yo=["id"],qo={class:"col-12 col-md-3"},go={class:"text-primary"},ko={class:"text-dark q-pl-sm"},Vo={class:"text-primary"},Co={class:"text-dark q-pl-sm"},wo={class:"text-primary"},Eo={class:"text-dark q-pl-sm"},So={class:"text-primary"},Uo={class:"text-dark q-pl-sm"},No={class:"text-primary"},Io={class:"text-dark q-pl-sm"},Oo={key:1,class:"items-center"},Po={class:"row"},Ao={class:"col-12 col-md-2 q-pr-md"},Ro={class:"col-12 col-md-2 q-pr-md"},Qo={class:"col-12 col-md-2 q-pr-md"},zo={class:"col-12 col-md-2 q-pr-md"},Fo={class:"col-12 col-md-2 q-pr-md"},Do={class:"col-12 col-md-2 q-pr-md"},Mo={class:"row q-mt-md"},To={class:"col text-right"},jo={class:"row q-pt-md"},Bo={key:0,class:"col-12 text-right"};function Yo(e,s,q,c,k,p){return d(),V(Ve,{name:e.name,title:e.title,done:e.step>3},{default:n(()=>[o("div",null,[o("form",{onSubmit:s[3]||(s[3]=qe((...t)=>e.submitUpdate&&e.submitUpdate(...t),["prevent"]))},[l(be,{class:"q-px-xs"},{default:n(()=>[l(le,{class:"q-pb-none q-mb-sm"},{default:n(()=>[o("div",ro,a(e.$t("applyingFor"))+":",1),o("div",no,[o("div",io,[l(J,{behavior:"menu",position:"top middle",disable:!0,dense:"",modelValue:e.craft,"onUpdate:modelValue":s[0]||(s[0]=t=>e.craft=t),label:e.$t("primaryCraft"),options:e.craftOptions,error:!!e.formErrors.craft,"bottom-slots":""},{error:n(()=>[o("div",uo,a(e.formErrors.craft),1)]),_:1},8,["modelValue","label","options","error"])]),o("div",co,[l(J,{behavior:"menu",position:"top middle",dense:"",modelValue:e.experience,"onUpdate:modelValue":s[1]||(s[1]=t=>e.experience=t),label:e.$t("yearsOfExperience"),options:e.experienceOptions,error:!!e.formErrors.experience,"bottom-slots":""},{error:n(()=>[o("div",mo,a(e.formErrors.experience),1)]),_:1},8,["modelValue","label","options","error"])]),o("div",po,[l(J,{behavior:"menu",position:"top middle",dense:"",modelValue:e.employment,"onUpdate:modelValue":s[2]||(s[2]=t=>e.employment=t),label:e.$t("currentEmploymentStatus"),options:e.employmentOptions,error:!!e.formErrors.employment,"bottom-slots":""},{error:n(()=>[o("div",fo,a(e.formErrors.employment),1)]),_:1},8,["modelValue","label","options","error"])])])]),_:1}),l(ae),e.editing?m("",!0):(d(),V(le,{key:0,class:E(e.$q.screen.lt.md?"q-px-xs":"")},{default:n(()=>[o("div",vo,a(e.$t("workHistory"))+":",1),o("div",bo,[o("div",$o,[l(C,{size:e.$q.screen.gt.sm?"md":"sm",color:"accent",label:e.allHistory.length>0?`${e.$t("addMoreHistory")}`:`${e.$t("addEmploymentHistory")}`,onClick:e.addNewRow,icon:"add"},null,8,["size","label","onClick"])])])]),_:1},8,["class"])),e.editing?(d(),V(ae,{key:1})):m("",!0),l(le,{class:E([e.editing?"q-pt-sm":"q-pt-none",e.$q.screen.gt.sm?"":"q-px-xs"])},{default:n(()=>[e.allHistory.length===0?(d(),U("div",ho,a(e.$t("addYourEmploymentHistoryLater")),1)):m("",!0),(d(!0),U(Ie,null,Oe(e.allHistory,(t,f)=>(d(),U("div",{id:t[3],key:f},[e.expanded||f+1<=e.show?(d(),V(be,{key:0,class:"q-px-sm q-pt-xs q-pb-sm",flat:""},{default:n(()=>[t.editing?m("",!0):(d(),U("div",{key:0,class:E(["row items-center",e.$q.screen.gt.sm?"text-body2":"text-caption"])},[o("div",qo,[o("div",null,[o("div",go,a(e.$t("company")),1),o("div",ko,a(t[7]),1)])]),o("div",{class:E(e.$q.screen.gt.sm?"col-2":"hidden")},[o("div",null,[o("div",Vo,a(e.$t("location")),1),o("div",Co,a(t[10]!==""?t[10]:"N/A"),1)])],2),o("div",{class:E(e.$q.screen.gt.sm?"col-2":"col-12 q-pt-md")},[o("div",null,[o("div",wo,a(e.$t("jobTitle")),1),o("div",Eo,a(t[16])+" "+a(t[11]),1)])],2),o("div",{class:E(e.$q.screen.gt.sm?"col-2":"col-6 q-pt-md")},[o("div",null,[o("div",So,a(e.$t("startDate")),1),o("div",Uo,a(e.date.formatDate(t[12],"MM-DD-YYYY")),1)])],2),o("div",{class:E(e.$q.screen.gt.sm?"col-2":"col-6 q-pt-md")},[o("div",null,[o("div",No,a(e.$t("endDate")),1),o("div",Io,a(e.date.formatDate(t[13],"MM-DD-YYYY")),1)])],2),o("div",{class:E(e.$q.screen.gt.sm?"col-1 text-right":"col-12 q-pt-md text-right")},[o("div",null,[l(C,{size:"sm",round:"",onClick:r=>e.editItem(f),color:"secondary",icon:"edit",class:"q-mr-sm"},null,8,["onClick"]),l(C,{size:"sm",round:"",onClick:r=>e.removeItem(f),color:"primary",icon:"delete"},null,8,["onClick"])])],2)],2)),t.editing?(d(),U("div",Oo,[l(We,{onSubmit:qe(r=>e.saveItem(t,f),["prevent"])},{default:n(()=>[o("div",Po,[o("div",Ao,[l(J,{modelValue:t.company,"onUpdate:modelValue":r=>t.company=r,dense:"",label:e.$t("company"),options:e.companyOptions,rules:[r=>!!r||"Field is required"]},null,8,["modelValue","onUpdate:modelValue","label","options","rules"])]),o("div",Ro,[l(J,{modelValue:t.craft,"onUpdate:modelValue":r=>t.craft=r,dense:"",label:e.$t("craft"),options:e.craftOptions,rules:[r=>!!r||"Field is required"]},null,8,["modelValue","onUpdate:modelValue","label","options","rules"])]),o("div",Qo,[l(F,{modelValue:t[11],"onUpdate:modelValue":r=>t[11]=r,dense:"",label:e.$t("jobTitle")},null,8,["modelValue","onUpdate:modelValue","label"])]),o("div",zo,[l(F,{modelValue:t[10],"onUpdate:modelValue":r=>t[10]=r,dense:"",label:e.$t("location")},null,8,["modelValue","onUpdate:modelValue","label"])]),o("div",Fo,[l(F,{type:"date",modelValue:t[12],"onUpdate:modelValue":r=>t[12]=r,dense:"",filled:"",hint:e.$t("startDate"),rules:[r=>!!r||"Field is required"]},null,8,["modelValue","onUpdate:modelValue","hint","rules"])]),o("div",Do,[l(F,{type:"date",modelValue:t[13],"onUpdate:modelValue":r=>t[13]=r,dense:"",filled:"",hint:e.$t("endDate"),rules:[r=>!!r||"Field is required"]},null,8,["modelValue","onUpdate:modelValue","hint","rules"])])]),o("div",Mo,[o("div",To,[l(C,{onClick:r=>e.cancelEdit(f),color:"secondary",label:e.$t("cancel"),class:"q-mr-sm"},null,8,["onClick","label"]),l(C,{type:"submit",color:"info",label:e.$t("save")},null,8,["label"])])])]),_:2},1032,["onSubmit"])])):m("",!0)]),_:2},1024)):m("",!0),f<e.allHistory.length-1?(d(),V(ae,{key:1})):m("",!0)],8,yo))),128)),e.allHistory.length>e.show||e.expanded?(d(),V(ae,{key:1})):m("",!0),o("div",jo,[e.allHistory.length>e.show||e.expanded?(d(),U("div",Bo,[l(C,{round:"",color:"secondary",onClick:e.adjustRows,icon:e.expanded?"expand_less":"expand_more"},{default:n(()=>[e.expanded?(d(),V(Ue,{key:0,anchor:"top middle"},{default:n(()=>[se(a(e.$t("showLess")),1)]),_:1})):m("",!0),e.expanded?m("",!0):(d(),V(Ue,{key:1,anchor:"top middle"},{default:n(()=>[se(a(e.$t("showMore")),1)]),_:1}))]),_:1},8,["onClick","icon"])])):m("",!0)])]),_:1},8,["class"])]),_:1}),e.editing?m("",!0):(d(),V(ge,{key:0,class:"text-right"},{default:n(()=>[l(C,{onClick:e.back,color:"secondary",label:e.$t("back"),class:"q-mr-sm"},null,8,["onClick","label"]),l(C,{type:"submit",color:"info",label:e.$t("continue")},null,8,["label"])]),_:1}))],32)])]),_:1},8,["name","title","done"])}var Ho=ne(ao,[["render",Yo]]);const Lo=re({components:{selectJob:_e,personalInfo:St,emergencyContact:so,workHistory:Ho},setup(){const e=$e(),{resetProfile:s}=e,{step:q}=R(e);s();const c=N(null);return{step:q,jobSelection:c,jobOptions:[{label:"Default Job",value:0}]}}});function Jo(e,s,q,c,k,p){const t=pe("select-job"),f=pe("personal-info"),r=pe("emergency-contact"),Q=pe("work-history");return d(),U("div",null,[l(je,{modelValue:e.step,"onUpdate:modelValue":s[0]||(s[0]=Y=>e.step=Y),vertical:"",animated:"","done-color":"info","active-color":"dark","inactive-color":"secondary",class:E(e.$q.screen.lt.md?"q-px-none q-mx-none":"")},{default:n(()=>[l(t,{title:e.$t("selectAJob"),step:e.step,name:0,done:e.step>0},null,8,["title","step","done"]),l(f,{title:e.$t("personalInformation"),step:e.step,name:1,done:e.step>1},null,8,["title","step","done"]),l(r,{title:e.$t("contactInformation"),step:e.step,name:2,done:e.step>2},null,8,["title","step","done"]),l(Q,{title:e.$t("employmentInformation"),step:e.step,name:3,done:e.step>3},null,8,["title","step","done"])]),_:1},8,["modelValue","class"])])}var Wo=ne(Lo,[["render",Jo]]);const Zo=re({components:{profileStepper:Wo},setup(){}});function Go(e,s,q,c,k,p){const t=pe("profile-stepper");return d(),U("div",null,[l(t)])}var Ko=ne(Zo,[["render",Go]]);const Xo=re({components:{Profile:Ko},setup(){const e=N(0),s=Ce(),{fetchFormOptions:q}=s,{formOptionsLoadingState:c}=R(s);return q(),{step:e,formOptionsLoadingState:c}}}),_o={key:0,class:"absolute-center"},xo={key:1,class:"row"},el={class:"col-12 q-pt-sm"},tl={class:"q-pl-sm"},ol={class:"text-h6 text-dark"},ll={class:"text-body1 text-secondary text-italic"};function sl(e,s,q,c,k,p){const t=pe("profile");return d(),V(Te,{style:{"max-width":"100vw"}},{default:n(()=>[e.formOptionsLoadingState?(d(),U("div",_o,[l(Me,{color:"primary",size:"5em"})])):m("",!0),e.formOptionsLoadingState?m("",!0):(d(),U("div",xo,[o("div",el,[l(be,{flat:""},{default:n(()=>[l(le,{class:E(e.$q.screen.lt.md?"q-px-xs":"")},{default:n(()=>[o("div",tl,[o("div",ol,a(e.$t("completeApplication")),1),o("div",ll,a(e.$t("pleaseCompleteYourApplication")),1)])]),_:1},8,["class"]),l(le,null,{default:n(()=>[l(t)]),_:1})]),_:1})])]))]),_:1})}var Ol=ne(Xo,[["render",sl]]);export{Ol as default};

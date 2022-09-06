var ge=Object.defineProperty,pe=Object.defineProperties;var ke=Object.getOwnPropertyDescriptors;var ie=Object.getOwnPropertySymbols;var $e=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var re=(e,s,y)=>s in e?ge(e,s,{enumerable:!0,configurable:!0,writable:!0,value:y}):e[s]=y,L=(e,s)=>{for(var y in s||(s={}))$e.call(s,y)&&re(e,y,s[y]);if(ie)for(var y of ie(s))qe.call(s,y)&&re(e,y,s[y]);return e},ue=(e,s)=>pe(e,ke(s));import{bF as je,bG as we,bH as Ce,r as j,c as h,bI as Fe,w as Se,h as U,c6 as J,cv as Be,cx as fe,g as _e,k as be,c4 as Ve,_ as ye,z as o,A as g,d as a,bh as l,c2 as x,E as u,C as t,bX as X,aa as d,am as f,an as r,b$ as T,c3 as ee,D as Qe,bj as de,cl as ve,cz as Me,at as w,aY as Pe,bY as E,bW as M,F as W,aX as Y}from"./index.6c674a19.js";import{Q as G}from"./QList.76fc6ce7.js";import{Q as K}from"./QMenu.b7fb2919.js";import{Q as Z}from"./QChip.6c6d3173.js";import{Q as Ne}from"./QPage.80490d1d.js";import{H as Oe,M as Ae,Q as he,L as De,G as Le}from"./quickbase.c9a9fc75.js";import{dayjs as xe}from"./dayjs.69e964e9.js";import{Q as ce}from"./QBadge.13ae6f49.js";import{C as me}from"./ClosePopup.7454e4a4.js";import{u as Je}from"./use-quasar.4e60ec94.js";import"./position-engine.703db134.js";import"./selection.7761caf6.js";import"./_commonjsHelpers.dfee5925.js";import"./localForage.7e70884e.js";import"./index.7dbe61ef.js";import"./i18n.8e2a8376.js";import"./api.51f82bf2.js";var ze=je({name:"QPagination",props:ue(L({},we),{modelValue:{type:Number,required:!0},min:{type:Number,default:1},max:{type:Number,required:!0},color:{type:String,default:"primary"},textColor:String,activeColor:String,activeTextColor:String,inputStyle:[Array,String,Object],inputClass:[Array,String,Object],size:String,disable:Boolean,input:Boolean,iconPrev:String,iconNext:String,iconFirst:String,iconLast:String,toFn:Function,boundaryLinks:{type:Boolean,default:null},boundaryNumbers:{type:Boolean,default:null},directionLinks:{type:Boolean,default:null},ellipses:{type:Boolean,default:null},maxPages:{type:Number,default:0,validator:e=>e>=0},ripple:{type:[Boolean,Object],default:null},round:Boolean,rounded:Boolean,flat:Boolean,outline:Boolean,unelevated:Boolean,push:Boolean,glossy:Boolean,dense:Boolean,padding:{type:String,default:"3px 2px"}}),emits:["update:modelValue"],setup(e,{emit:s}){const{proxy:y}=_e(),{$q:p}=y,C=Ce(e,p),k=j(null),b=h({get:()=>e.modelValue,set:m=>{if(m=parseInt(m,10),e.disable||isNaN(m))return;const $=Fe(m,e.min,e.max);e.modelValue!==$&&s("update:modelValue",$)}});Se(()=>e.min+e.max,()=>{b.value=e.modelValue});function n(m,$){return[!0,!1].includes(m)?m:$}const _=h(()=>"q-pagination row no-wrap items-center"+(e.disable===!0?" disabled":"")),q=h(()=>b.value+" / "+e.max),z=h(()=>n(e.boundaryLinks,e.input)),V=h(()=>n(e.boundaryNumbers,!e.input)),N=h(()=>n(e.directionLinks,e.input)),O=h(()=>n(e.ellipses,!e.input)),P=h(()=>{const m=[e.iconFirst||p.iconSet.pagination.first,e.iconPrev||p.iconSet.pagination.prev,e.iconNext||p.iconSet.pagination.next,e.iconLast||p.iconSet.pagination.last];return p.lang.rtl===!0?m.reverse():m}),i=h(()=>e.disable===!0?{"aria-disabled":"true"}:{}),c=h(()=>({round:e.round,rounded:e.rounded,outline:e.outline,unelevated:e.unelevated,push:e.push,glossy:e.glossy,dense:e.dense,padding:e.padding,color:e.color,flat:!0,size:e.size,ripple:e.ripple!==null?e.ripple:!0})),S=h(()=>({flat:e.flat,color:e.activeColor||e.color,textColor:e.activeTextColor||e.textColor}));function R(m){b.value=m}function v(m){b.value=b.value+m}function te(){b.value=k.value,k.value=null}function Q(m,$){const A=L(L({},c.value),m);return $!==void 0&&(e.toFn!==void 0?A.to=e.toFn($):A.onClick=()=>R($)),U(J,A)}return Object.assign(y,{set:R,setByOffset:v}),()=>{const m=[],$=[],A=[];if(z.value&&(m.push(Q({key:"bls",disable:e.disable||e.modelValue<=e.min,icon:P.value[0]},e.min)),$.unshift(Q({key:"ble",disable:e.disable||e.modelValue>=e.max,icon:P.value[3]},e.max))),N.value&&(m.push(Q({key:"bdp",disable:e.disable||e.modelValue<=e.min,icon:P.value[1]},e.modelValue-1)),$.unshift(Q({key:"bdn",disable:e.disable||e.modelValue>=e.max,icon:P.value[2]},e.modelValue+1))),e.input===!0)A.push(U(fe,{class:"inline",style:{width:`${q.value.length/1.5}em`},type:"number",dense:!0,value:k.value,disable:e.disable,dark:C.value,borderless:!0,inputClass:e.inputClass,inputStyle:e.inputStyle,placeholder:q.value,min:e.min,max:e.max,"onUpdate:modelValue"(B){k.value=B},onKeyup(B){Be(B,13)===!0&&te()},onBlur:te}));else{let B=Math.max(e.maxPages,1+(O.value?2:0)+(V.value?2:0)),D=e.min,I=e.max,le=!1,ae=!1,oe=!1,ne=!1;e.maxPages&&B<e.max-e.min+1&&(B=1+Math.floor(B/2)*2,D=Math.max(e.min,Math.min(e.max-B+1,e.modelValue-Math.floor(B/2))),I=Math.min(e.max,D+B-1),V.value&&(oe=!0,D+=1),O.value&&D>e.min+(V.value?1:0)&&(le=!0,D+=1),V.value&&(ne=!0,I-=1),O.value&&I<e.max-(V.value?1:0)&&(ae=!0,I-=1));const H={minWidth:`${Math.max(2,String(e.max).length)}em`};if(oe){const F=e.min===e.modelValue;m.push(Q(L({key:"bns",style:H,disable:e.disable,flat:!F,label:e.min},F?S.value:{}),e.min))}if(ne){const F=e.max===e.modelValue;$.unshift(Q(L({key:"bne",style:H,disable:e.disable,flat:!F,label:e.max},F?S.value:{}),e.max))}le&&m.push(Q({key:"bes",style:H,disable:e.disable,label:"\u2026",ripple:!1},D-1)),ae&&$.unshift(Q({key:"bee",style:H,disable:e.disable,label:"\u2026",ripple:!1},I+1));for(let F=D;F<=I;F++){const se={key:`bpg${F}`,style:H,disable:e.disable,label:F};F===e.modelValue&&Object.assign(se,S.value),A.push(Q(se,F))}}return U("div",L({class:_.value},i.value),[m,U("div",{class:"row justify-center"},[A]),$])}}});const Ie=be({props:{job:Object},setup(e){const s=Ve(),y=j(0),p=j(20),C=Je(),k=j(!1),b=j(!1),n=j(!1),{voluntaryFormsComplete:_,employeeData:q,updateEmployeeFromApp:z}=Oe(),{fetchFormOptions:V}=Ae(),{applyOnBoard:N,storeBoardApp:O}=he(),{updateProfile:P}=De(),i=h(()=>{const v=e.job;return v[201]?!(C.screen.lt.md&&v.recommended):!1});async function c(){b.value=!0}async function S(){try{n.value=!0;const v=await N({job:e.job});z({action:"push",values:v,key:537}),b.value=!1,k.value=!1,n.value=!1,C.notify({type:"positive",message:"Application successfully submitted!",position:"top-right"})}catch(v){console.log(v),n.value=!1,C.notify({type:"negative",message:"Something went wrong",position:"top-right"})}}async function R(){try{n.value=!0;const v=await N({job:e.job});await V(),z({action:"push",values:v,key:537}),O(v),P({next:1,values:{19:{value:v[20],label:v[21]},40:{value:v[22],label:v[23]}}}),b.value=!1,k.value=!1,n.value=!1,s.push({name:"apply"})}catch(v){console.log(v),n.value=!1,C.notify({type:"negative",message:"Something went wrong",position:"top-right"})}}return{helpers:Le,showDisa:i,showMore:k,apply:c,openApply:b,applyOnBoard:N,submitting:n,submitApp:S,voluntaryFormsComplete:_,tab:y,splitterModel:p,employeeData:q,goToProfile:R}}}),Ee={class:"row items-center"},Te=["hidden"],Re={class:"col-12 col-md-7"},He=w("Recommended"),Ue=w("DISA"),We={class:"text-primary text-caption"},Ye={key:0,class:"text-dark text-body2 q-mb-md"},Ge={key:1,class:"text-dark text-body2"},Ke={class:"row items-center q-mt-md"},Xe={class:"col text-right"},Ze={class:"row items-center"},et={class:"col-11"},tt={class:"col-1 text-right"},lt={key:0,style:{"min-height":"300px"}},at={class:"absolute-center"},ot={key:1},nt={class:"row justify-between"},st={class:"col-5 col-md-3"},it={class:"col-5 col-md-3"},rt={class:"row q-mt-md"},ut={class:"col"},dt={key:1,class:"text-primary text-caption text-italic"},ct={key:2,class:"text-primary text-caption text-italic"};function mt(e,s,y,p,C,k){return o(),g("div",null,[a(ee,{class:"q-mb-md"},{default:l(()=>[a(x,{class:u(["q-py-lg job-card",e.$q.screen.gt.sm?"q-pl-none":""]),onClick:s[0]||(s[0]=b=>e.showMore=!e.showMore)},{default:l(()=>[t("div",Ee,[t("div",{hidden:e.$q.screen.lt.md,class:"col-1 text-center"},[a(X,{size:"md",name:e.job.icon!==""?e.job.icon:"fa-solid fa-helmet-safety",color:"primary"},null,8,["name"])],8,Te),t("div",Re,[t("div",null,[t("div",null,[t("span",{class:u(["text-dark",e.$q.screen.gt.sm?"text-h6":"text-body2"])},d(e.job[43])+" "+d(e.job[12]),3),e.job.recommended&&!e.job.applied?(o(),f(ce,{key:0,class:u(["q-ml-md",e.$q.screen.gt.sm?"q-pa-sm":"q-pa-xs"]),color:"positive"},{default:l(()=>[He]),_:1},8,["class"])):r("",!0),e.showDisa&&!e.job.applied?(o(),f(ce,{key:1,class:u(["q-ml-md",e.$q.screen.gt.sm?"q-pa-sm":"q-pa-xs"]),color:"info"},{default:l(()=>[Ue]),_:1},8,["class"])):r("",!0),e.job.applied?(o(),g("span",{key:2,class:u(["text-primary q-pl-sm text-italic",(e.$q.screen.gt.sm,"text-caption")])}," Applied "+d(e.job.appliedOn),3)):r("",!0)]),t("div",{class:u(["text-secondary q-mt-sm",e.$q.screen.gt.sm?"text-body2":"text-caption"])},d(e.helpers.formatName(e.job[226]))+", "+d(e.helpers.formatName(e.job[227])),3)])]),t("div",{class:u(["col-12 col-md-4",e.$q.screen.gt.sm?"text-right":"q-pt-sm"])},[t("div",We,d(e.job[1].fromNow()),1)],2)])]),_:1},8,["class"]),e.showMore?(o(),f(T,{key:0})):r("",!0),e.showMore?(o(),f(x,{key:1},{default:l(()=>[e.job.purpose!==""&&e.job.purpose!==void 0&&(e.job.summary===""||e.job.summary===void 0)?(o(),g("div",Ye,d(e.job.purpose),1)):r("",!0),e.job.summary!==""&&e.job.summary!==void 0?(o(),g("div",Ge,d(e.job.summary),1)):r("",!0)]),_:1})):r("",!0),e.showMore?(o(),f(T,{key:2})):r("",!0),e.showMore?(o(),f(x,{key:3},{default:l(()=>[t("div",Ke,[t("div",Xe,[e.job.applied?r("",!0):(o(),f(J,{key:0,color:"info",label:"Apply for this Job",onClick:e.apply},null,8,["onClick"])),e.job.applied?(o(),g("div",{key:1,class:u(["text-primary",e.$q.screen.gt.sm?"text-body2":"text-caption"])}," Application Submitted on "+d(e.job),3)):r("",!0)])])]),_:1})):r("",!0)]),_:1}),a(Me,{modelValue:e.openApply,"onUpdate:modelValue":s[1]||(s[1]=b=>e.openApply=b),persistent:"","full-width":e.$q.screen.lt.md},{default:l(()=>[a(ee,{class:u(["scroll",e.$q.screen.gt.sm?"":"full-width"]),style:Qe(e.$q.screen.gt.sm?"min-width: 800px;":"")},{default:l(()=>[a(x,{class:"bg-primary text-white"},{default:l(()=>[t("div",Ze,[t("div",et,[t("div",{class:u([e.$q.screen.gt.sm?"text-h6":"text-body1"])},"Apply For This Job",2)]),t("div",tt,[de(a(J,{icon:"close",flat:"",round:"",dense:""},null,512),[[me]])])])]),_:1}),a(T),a(x,null,{default:l(()=>[e.submitting?(o(),g("div",lt,[t("div",at,[a(ve,{color:"primary",size:"5em"})])])):r("",!0),e.submitting?r("",!0):(o(),g("div",ot,[t("div",nt,[t("div",st,[t("div",{class:u(["text-primary",e.$q.screen.gt.sm?"text-body2":"text-caption"])},"Job Title",2),t("div",{class:u(["q-pl-sm",e.$q.screen.gt.sm?"text-body2":"text-caption"])},d(e.job[43])+" "+d(e.job[12]),3)]),t("div",it,[t("div",{class:u(["text-primary",e.$q.screen.gt.sm?"text-body2":"text-caption"])},"Date Posted",2),t("div",{class:u(["q-pl-sm",e.$q.screen.gt.sm?"text-body2":"text-caption"])},d(e.job[1].format("L")),3)]),t("div",{class:u(["col-5 col-md-3",e.$q.screen.lt.md?"q-pt-sm":""])},[t("div",{class:u(["text-primary",e.$q.screen.gt.sm?"text-body2":"text-caption"])},"Location",2),t("div",{class:u(["q-pl-sm",e.$q.screen.gt.sm?"text-body2":"text-caption"])},d(e.helpers.formatName(e.job[226]))+", "+d(e.helpers.formatName(e.job[227])),3)],2),t("div",{class:u(["col-5 col-md-3",e.$q.screen.lt.md?"q-pt-sm":""])},[t("div",{class:u(["text-primary",e.$q.screen.gt.sm?"text-body2":"text-caption"])},"Hiring Center",2),t("div",{class:u(["q-pl-sm",e.$q.screen.gt.sm?"text-body2":"text-caption"])},d(e.job[104]),3)],2)]),t("div",rt,[t("div",ut,[e.job.purpose!==""&&e.job.purpose!==void 0?(o(),g("div",{key:0,class:u(["text-dark q-mb-sm",e.$q.screen.gt.sm?"text-body2":"text-caption"])},d(e.job.purpose),3)):r("",!0),e.employeeData.complete?(o(),g("div",dt,"Your application is ready! Click Submit to apply for this job.")):(o(),g("div",ct,"We need a little more information! Click continue to apply for this job."))])])]))]),_:1}),e.submitting?r("",!0):(o(),f(T,{key:0})),e.submitting?r("",!0):(o(),f(x,{key:1,class:u(e.$q.screen.gt.sm?"text-right":"text-center")},{default:l(()=>[de(a(J,{class:"q-mr-sm",color:"secondary",label:"Cancel"},null,512),[[me]]),e.employeeData.complete&&e.voluntaryFormsComplete?(o(),f(J,{key:0,color:"info",label:"Submit",onClick:e.submitApp},null,8,["onClick"])):r("",!0),!e.employeeData.complete||!e.voluntaryFormsComplete?(o(),f(J,{key:1,color:"info",label:"Continue",onClick:e.goToProfile},null,8,["onClick"])):r("",!0)]),_:1},8,["class"]))]),_:1},8,["class","style"])]),_:1},8,["modelValue","full-width"])])}var ft=ye(Ie,[["render",mt]]);const bt=be({components:{Job:ft},setup(){const e=he(),s=j(!1),y=j(""),p=j(null),C=j(null),k=j(null),b=j(10),n=j(1);async function _(){s.value=!0,await e.getRequestJobs(),s.value=!1}(e.jobsForBoard&&e.jobsForBoard.length===0||!e.timeRequested||e.timeRequested.isBefore(xe().subtract(15,"minute")))&&_();const q=h(()=>{let i=[];return e.jobsForBoard.forEach(c=>{`${c[12]} ${c[43]} ${c[226]} ${c[227]} ${c[54]}`.toLowerCase().includes(y.value.toLowerCase())&&i.push(c)}),i=p.value?i.filter(c=>c[69]===p.value.value):i,i=C.value?i.filter(c=>c[227]===C.value.value):i,i=k.value?i.filter(c=>c[56]===k.value.value):i,i.sort((c,S)=>c.recommended===S.recommended?c[1].$d>S[1].$d?-1:1:c.recommended?-1:1),i}),z=h(()=>[...new Map(q.value.map(i=>[i[69],{label:i[43],value:i[69]}])).values()]),V=h(()=>[...new Map(q.value.map(i=>[i[227],{label:i[227],value:i[227]}])).values()]),N=h(()=>[...new Map(q.value.map(i=>[i[56],{label:i[104],value:i[56]}])).values()]),O=h(()=>{const i=q.value.length>b.value,c=(n.value-1)*b.value,S=n.value*b.value-1;return i?q.value.filter((R,v)=>v>=c&&v<=S):q.value}),P=h(()=>Math.round(q.value.length/b.value));return{filteredJobs:q,loading:s,search:y,craftFilter:p,stateFilter:C,hiringCenterFilter:k,craftOptions:z,stateOptions:V,hiringCenterOptions:N,paginatedJobs:O,page:n,pages:P}}}),yt={key:0,class:"q-px-md q-py-lg"},vt=t("div",{class:"text-h4 text-primary"},"Job Board",-1),ht={class:"row items-center justify-between"},gt={class:"col-12 col-md-6"},pt=w("Craft"),kt=w("State"),$t=w("Hiring Center"),qt={class:"q-pa-md"},jt={class:"q-mt-md"},wt={class:"row justify-between q-mb-md"},Ct={class:"col-5"},Ft={class:"text-body2 text-dark"},St=w("Found "),Bt={class:"text-primary"},_t=w(" jobs!"),Vt={key:0,class:"q-pa-lg flex flex-center"},Qt={key:1,class:"absolute-center"};function Mt(e,s,y,p,C,k){const b=Pe("job");return o(),f(Ne,{class:"window-height full-width"},{default:l(()=>[e.loading?r("",!0):(o(),g("div",yt,[vt,a(ee,{class:"q-my-md"},{default:l(()=>[a(x,null,{default:l(()=>[t("div",ht,[t("div",gt,[a(fe,{modelValue:e.search,"onUpdate:modelValue":s[0]||(s[0]=n=>e.search=n),label:"Search"},null,8,["modelValue"])]),t("div",{class:u(["col-12 col-md-5",e.$q.screen.gt.sm?"":"q-pt-md"])},[a(J,{color:"dark",label:"Filter","icon-right":"filter_list"},{default:l(()=>[a(K,null,{default:l(()=>[a(G,{style:{"min-width":"200px"}},{default:l(()=>[e.craftOptions.length>1?(o(),f(E,{key:0,clickable:""},{default:l(()=>[a(M,null,{default:l(()=>[pt]),_:1}),a(M,{side:""},{default:l(()=>[a(X,{name:"keyboard_arrow_right"})]),_:1}),a(K,{anchor:"top right",self:"top right","auto-close":""},{default:l(()=>[a(G,{style:{"min-width":"100px"}},{default:l(()=>[(o(!0),g(W,null,Y(e.craftOptions,n=>(o(),f(E,{key:n,clickable:"",onClick:_=>e.craftFilter?e.craftFilter=null:e.craftFilter=n},{default:l(()=>[a(M,null,{default:l(()=>[w(d(n.label),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})):r("",!0),e.stateOptions.length>1?(o(),f(E,{key:1,clickable:""},{default:l(()=>[a(M,null,{default:l(()=>[kt]),_:1}),a(M,{side:""},{default:l(()=>[a(X,{name:"keyboard_arrow_right"})]),_:1}),a(K,{anchor:"top right",self:"top right","auto-close":""},{default:l(()=>[a(G,{style:{"min-width":"100px"}},{default:l(()=>[(o(!0),g(W,null,Y(e.stateOptions,n=>(o(),f(E,{key:n,clickable:"",onClick:_=>e.stateFilter?e.stateFilter=null:e.stateFilter=n},{default:l(()=>[a(M,null,{default:l(()=>[w(d(n.label),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})):r("",!0),e.hiringCenterOptions.length>1?(o(),f(E,{key:2,clickable:""},{default:l(()=>[a(M,null,{default:l(()=>[$t]),_:1}),a(M,{side:""},{default:l(()=>[a(X,{name:"keyboard_arrow_right"})]),_:1}),a(K,{anchor:"top right",self:"top right","auto-close":""},{default:l(()=>[a(G,{style:{"min-width":"100px"}},{default:l(()=>[(o(!0),g(W,null,Y(e.hiringCenterOptions,n=>(o(),f(E,{key:n,clickable:"",onClick:_=>e.hiringCenterFilter?e.hiringCenterFilter=null:e.hiringCenterFilter=n},{default:l(()=>[a(M,null,{default:l(()=>[w(d(n.label),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})):r("",!0)]),_:1})]),_:1})]),_:1}),t("div",qt,[e.craftFilter?(o(),f(Z,{key:0,clickable:"",onClick:s[1]||(s[1]=n=>e.craftFilter=null),color:"info","text-color":"white","icon-right":"close"},{default:l(()=>[w(d(e.craftFilter.label),1)]),_:1})):r("",!0),e.stateFilter?(o(),f(Z,{key:1,clickable:"",onClick:s[2]||(s[2]=n=>e.stateFilter=null),color:"info","text-color":"white","icon-right":"close"},{default:l(()=>[w(d(e.stateFilter.label),1)]),_:1})):r("",!0),e.hiringCenterFilter?(o(),f(Z,{key:2,clickable:"",onClick:s[3]||(s[3]=n=>e.hiringCenterFilter=null),color:"info","text-color":"white","icon-right":"close"},{default:l(()=>[w(d(e.hiringCenterFilter.label),1)]),_:1})):r("",!0)])],2)])]),_:1})]),_:1}),a(T),t("div",jt,[t("div",wt,[t("div",Ct,[t("div",Ft,[St,t("span",Bt,d(e.filteredJobs.length),1),_t])])]),(o(!0),g(W,null,Y(e.paginatedJobs,n=>(o(),f(b,{key:n[3],job:n},null,8,["job"]))),128)),a(T),e.pages>1?(o(),g("div",Vt,[a(ze,{modelValue:e.page,"onUpdate:modelValue":s[4]||(s[4]=n=>e.page=n),max:e.pages,"max-pages":6,"direction-links":"","icon-prev":"fast_rewind","icon-next":"fast_forward"},null,8,["modelValue","max"])])):r("",!0)])])),e.loading?(o(),g("div",Qt,[a(ve,{color:"primary",size:"5em"})])):r("",!0)]),_:1})}var Kt=ye(bt,[["render",Mt]]);export{Kt as default};

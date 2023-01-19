var K=Object.defineProperty,N=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var w=(e,r,n)=>r in e?K(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,g=(e,r)=>{for(var n in r||(r={}))R.call(r,n)&&w(e,n,r[n]);if(k)for(var n of k(r))V.call(r,n)&&w(e,n,r[n]);return e},S=(e,r)=>N(e,$(r));import{bP as y,r as A,c as s,h as l,bI as W,bk as j,cZ as E,g as x,bV as F,bY as U,aU as L,da as T,ch as z,bQ as I,cj as H,i as M,bR as P,af as O}from"./index.7f467912.js";import{a as Y,b as Z,c as G,u as J,d as X}from"./use-panel.f17f9ea6.js";import{Q as ee}from"./QSlideTransition.1f4b8792.js";var B=y({name:"StepHeader",props:{stepper:{},step:{},goToPanel:Function},setup(e,{attrs:r}){const{proxy:{$q:n}}=x(),i=A(null),a=s(()=>e.stepper.modelValue===e.step.name),c=s(()=>{const t=e.step.disable;return t===!0||t===""}),d=s(()=>{const t=e.step.error;return t===!0||t===""}),u=s(()=>{const t=e.step.done;return c.value===!1&&(t===!0||t==="")}),_=s(()=>{const t=e.step.headerNav,o=t===!0||t===""||t===void 0;return c.value===!1&&e.stepper.headerNav&&o}),p=s(()=>e.step.prefix&&(a.value===!1||e.stepper.activeIcon==="none")&&(d.value===!1||e.stepper.errorIcon==="none")&&(u.value===!1||e.stepper.doneIcon==="none")),f=s(()=>{const t=e.step.icon||e.stepper.inactiveIcon;if(a.value===!0){const o=e.step.activeIcon||e.stepper.activeIcon;return o==="none"?t:o||n.iconSet.stepper.active}if(d.value===!0){const o=e.step.errorIcon||e.stepper.errorIcon;return o==="none"?t:o||n.iconSet.stepper.error}if(c.value===!1&&u.value===!0){const o=e.step.doneIcon||e.stepper.doneIcon;return o==="none"?t:o||n.iconSet.stepper.done}return t}),v=s(()=>{const t=d.value===!0?e.step.errorColor||e.stepper.errorColor:void 0;if(a.value===!0){const o=e.step.activeColor||e.stepper.activeColor||e.step.color;return o!==void 0?o:t}return t!==void 0?t:c.value===!1&&u.value===!0?e.step.doneColor||e.stepper.doneColor||e.step.color||e.stepper.inactiveColor:e.step.color||e.stepper.inactiveColor}),b=s(()=>"q-stepper__tab col-grow flex items-center no-wrap relative-position"+(v.value!==void 0?` text-${v.value}`:"")+(d.value===!0?" q-stepper__tab--error q-stepper__tab--error-with-"+(p.value===!0?"prefix":"icon"):"")+(a.value===!0?" q-stepper__tab--active":"")+(u.value===!0?" q-stepper__tab--done":"")+(_.value===!0?" q-stepper__tab--navigation q-focusable q-hoverable":"")+(c.value===!0?" q-stepper__tab--disabled":"")),q=s(()=>e.stepper.headerNav!==!0?!1:_.value);function h(){i.value!==null&&i.value.focus(),a.value===!1&&e.goToPanel(e.step.name)}function C(t){t.keyCode===13&&a.value===!1&&e.goToPanel(e.step.name)}return()=>{const t={class:b.value};_.value===!0&&(t.onClick=h,t.onKeyup=C,Object.assign(t,c.value===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:r.tabindex||0}));const o=[l("div",{class:"q-focus-helper",tabindex:-1,ref:i}),l("div",{class:"q-stepper__dot row flex-center q-stepper__line relative-position"},[l("span",{class:"row flex-center"},[p.value===!0?e.step.prefix:l(W,{name:f.value})])])];if(e.step.title!==void 0&&e.step.title!==null){const m=[l("div",{class:"q-stepper__title"},e.step.title)];e.step.caption!==void 0&&e.step.caption!==null&&m.push(l("div",{class:"q-stepper__caption"},e.step.caption)),o.push(l("div",{class:"q-stepper__label q-stepper__line relative-position"},m))}return j(l("div",t,o),[[E,q.value]])}}});const te=/(-\w)/g;function re(e){const r={};for(const n in e){const i=n.replace(te,a=>a[1].toUpperCase());r[i]=e[n]}return r}var se=y({name:"QStepper",props:S(g(g({},F),Y),{flat:Boolean,bordered:Boolean,alternativeLabels:Boolean,headerNav:Boolean,contracted:Boolean,headerClass:String,inactiveColor:String,inactiveIcon:String,doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String}),emits:Z,setup(e,{slots:r}){const n=x(),i=U(e,n.proxy.$q),{updatePanelsList:a,isValidPanelName:c,updatePanelIndex:d,getPanelContent:u,getPanels:_,panelDirectives:p,goToPanel:f,keepAliveProps:v,needsUniqueKeepAliveWrapper:b}=G();L(T,s(()=>g({goToPanel:f,keepAliveProps:v,needsUniqueKeepAliveWrapper:b},e)));const q=s(()=>`q-stepper q-stepper--${e.vertical===!0?"vertical":"horizontal"}`+(e.flat===!0||i.value===!0?" q-stepper--flat no-shadow":"")+(e.bordered===!0||i.value===!0&&e.flat===!1?" q-stepper--bordered":"")+(i.value===!0?" q-stepper--dark q-dark":"")),h=s(()=>`q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels===!0?"alternative":"standard"}-labels`+(e.flat===!1||e.bordered===!0?" q-stepper__header--border":"")+(e.contracted===!0?" q-stepper__header--contracted":"")+(e.headerClass!==void 0?` ${e.headerClass}`:""));function C(){const t=I(r.message,[]);if(e.vertical===!0){c(e.modelValue)&&d();const o=l("div",{class:"q-stepper__content"},I(r.default));return t===void 0?[o]:t.concat(o)}return[l("div",{class:h.value},_().map(o=>{const m=re(o.props);return l(B,{key:m.name,stepper:e,step:m,goToPanel:f})})),t,H("div",{class:"q-stepper__content q-panel-parent"},u(),"cont",e.swipeable,()=>p.value)]}return()=>(a(r),l("div",{class:q.value},z(r.navigation,C())))}});function D(e){return l("div",{class:"q-stepper__step-content"},[l("div",{class:"q-stepper__step-inner"},I(e.default))])}const Q={setup(e,{slots:r}){return()=>D(r)}};var ie=y({name:"QStep",props:S(g({},J),{icon:String,color:String,title:{type:String,required:!0},caption:String,prefix:[String,Number],doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String,headerNav:{type:Boolean,default:!0},done:Boolean,error:Boolean,onScroll:[Function,Array]}),setup(e,{slots:r,emit:n}){const{proxy:{$q:i}}=x(),a=M(T,P);if(a===P)return console.error("QStep needs to be a child of QStepper"),P;const{getCacheWithFn:c}=X(),d=A(null),u=s(()=>a.value.modelValue===e.name),_=s(()=>i.platform.is.ios!==!0&&i.platform.is.chrome===!0||u.value!==!0||a.value.vertical!==!0?{}:{onScroll(v){const{target:b}=v;b.scrollTop>0&&(b.scrollTop=0),e.onScroll!==void 0&&n("scroll",v)}}),p=s(()=>typeof e.name=="string"||typeof e.name=="number"?e.name:String(e.name));function f(){const v=a.value.vertical;return v===!0&&a.value.keepAlive===!0?l(O,a.value.keepAliveProps.value,u.value===!0?[l(a.value.needsUniqueKeepAliveWrapper.value===!0?c(p.value,()=>S(g({},Q),{name:p.value})):Q,{key:p.value},r.default)]:void 0):v!==!0||u.value===!0?D(r):void 0}return()=>l("div",g({ref:d,class:"q-stepper__step",role:"tabpanel"},_.value),a.value.vertical===!0?[l(B,{stepper:a.value,step:e,goToPanel:a.value.goToPanel}),a.value.animated===!0?l(ee,f):f()]:[f()])}});export{ie as Q,se as a};

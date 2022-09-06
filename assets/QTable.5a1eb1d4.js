var gt=Object.defineProperty,bt=Object.defineProperties;var mt=Object.getOwnPropertyDescriptors;var Te=Object.getOwnPropertySymbols;var St=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable;var xe=(e,l,a)=>l in e?gt(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,_=(e,l)=>{for(var a in l||(l={}))St.call(l,a)&&xe(e,a,l[a]);if(Te)for(var a of Te(l))yt.call(l,a)&&xe(e,a,l[a]);return e},L=(e,l)=>bt(e,mt(l));import{bF as ee,h as r,bU as Be,c7 as ht,bX as Ve,g as be,r as H,c as u,w as N,ch as wt,cn as Oe,aJ as _t,o as Pt,aI as Ct,aM as qt,aK as kt,bM as $e,bG as je,cT as Rt,bH as Ae,cU as Tt,c_ as ge,q as Fe,d7 as xt,aH as Ee,d8 as Bt,d9 as Q,d4 as fe,c6 as Z,b$ as Ot}from"./index.6c674a19.js";import{Q as Ft}from"./QList.76fc6ce7.js";import{Q as Lt}from"./QMarkupTable.9a5d9dcd.js";import{u as Dt,b as Mt,c as Ne,a as Vt}from"./QSelect.fdd46d88.js";import{u as $t,a as jt,b as At}from"./use-fullscreen.f7d9f446.js";var Et=ee({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:a}){const b=be(),{proxy:{$q:i}}=b,g=s=>{a("click",s)};return()=>{if(e.props===void 0)return r("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:g},Be(l.default));let s,v;const c=b.vnode.key;if(c){if(s=e.props.colsMap[c],s===void 0)return}else s=e.props.col;if(s.sortable===!0){const n=s.align==="right"?"unshift":"push";v=ht(l.default,[]),v[n](r(Ve,{class:s.__iconClass,name:i.iconSet.table.arrowUp}))}else v=Be(l.default);const y={class:s.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:s.headerStyle,onClick:n=>{s.sortable===!0&&e.props.sort(s),g(n)}};return r("th",y,v)}}});function Qe(e,l){return r("div",e,[r("table",{class:"q-table"},l)])}const Nt={list:Ft,table:Lt},Qt=["list","table","__qtable"];var Ht=ee({name:"QVirtualScroll",props:L(_({},Dt),{type:{type:String,default:"list",validator:e=>Qt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}}),setup(e,{slots:l,attrs:a}){let b;const i=H(null),g=u(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:s,localResetVirtualScroll:v,padVirtualScroll:c,onVirtualScrollEvt:y}=Mt({virtualScrollLength:g,getVirtualScrollTarget:q,getVirtualScrollEl:C}),n=u(()=>{if(g.value===0)return[];const F=(D,T)=>({index:s.value.from+T,item:D});return e.itemsFn===void 0?e.items.slice(s.value.from,s.value.to).map(F):e.itemsFn(s.value.from,s.value.to-s.value.from).map(F)}),S=u(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),P=u(()=>e.scrollTarget!==void 0?{}:{tabindex:0});N(g,()=>{v()}),N(()=>e.scrollTarget,()=>{w(),h()});function C(){return i.value.$el||i.value}function q(){return b}function h(){b=wt(C(),e.scrollTarget),b.addEventListener("scroll",y,Oe.passive)}function w(){b!==void 0&&(b.removeEventListener("scroll",y,Oe.passive),b=void 0)}function O(){let F=c(e.type==="list"?"div":"tbody",n.value.map(l.default));return l.before!==void 0&&(F=l.before().concat(F)),$e(l.after,F)}return _t(()=>{v()}),Pt(()=>{h()}),Ct(()=>{h()}),qt(()=>{w()}),kt(()=>{w()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Qe({ref:i,class:"q-table__middle "+S.value},O()):r(Nt[e.type],_(L(_({},a),{ref:i,class:[a.class,S.value]}),P.value),O)}}});const zt={xs:2,sm:4,md:6,lg:10,xl:14};function Le(e,l,a){return{transform:l===!0?`translateX(${a.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Ut=ee({name:"QLinearProgress",props:L(_(_({},je),Rt),{value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean}),setup(e,{slots:l}){const{proxy:a}=be(),b=Ae(e,a.$q),i=Tt(e,zt),g=u(()=>e.indeterminate===!0||e.query===!0),s=u(()=>e.reverse!==e.query),v=u(()=>L(_({},i.value!==null?i.value:{}),{"--q-linear-progress-speed":`${e.animationSpeed}ms`})),c=u(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),y=u(()=>Le(e.buffer!==void 0?e.buffer:1,s.value,a.$q)),n=u(()=>`q-linear-progress__track absolute-full q-linear-progress__track--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__track--${b.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),S=u(()=>Le(g.value===!0?1:e.value,s.value,a.$q)),P=u(()=>`q-linear-progress__model absolute-full q-linear-progress__model--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__model--${g.value===!0?"in":""}determinate`),C=u(()=>({width:`${e.value*100}%`})),q=u(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"}`);return()=>{const h=[r("div",{class:n.value,style:y.value}),r("div",{class:P.value,style:S.value})];return e.stripe===!0&&g.value===!1&&h.push(r("div",{class:q.value,style:C.value})),r("div",{class:c.value,style:v.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},$e(l.default,h))}}});function It(e,l){return new Date(e)-new Date(l)}const Kt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Gt(e,l,a,b){const i=u(()=>{const{sortBy:v}=l.value;return v&&a.value.find(c=>c.name===v)||null}),g=u(()=>e.sortMethod!==void 0?e.sortMethod:(v,c,y)=>{const n=a.value.find(C=>C.name===c);if(n===void 0||n.field===void 0)return v;const S=y===!0?-1:1,P=typeof n.field=="function"?C=>n.field(C):C=>C[n.field];return v.sort((C,q)=>{let h=P(C),w=P(q);return h==null?-1*S:w==null?1*S:n.sort!==void 0?n.sort(h,w,C,q)*S:ge(h)===!0&&ge(w)===!0?(h-w)*S:Fe(h)===!0&&Fe(w)===!0?It(h,w)*S:typeof h=="boolean"&&typeof w=="boolean"?(h-w)*S:([h,w]=[h,w].map(O=>(O+"").toLocaleString().toLowerCase()),h<w?-1*S:h===w?0:S)})});function s(v){let c=e.columnSortOrder;if(xt(v)===!0)v.sortOrder&&(c=v.sortOrder),v=v.name;else{const S=a.value.find(P=>P.name===v);S!==void 0&&S.sortOrder&&(c=S.sortOrder)}let{sortBy:y,descending:n}=l.value;y!==v?(y=v,n=c==="da"):e.binaryStateSort===!0?n=!n:n===!0?c==="ad"?y=null:n=!1:c==="ad"?n=!0:y=null,b({sortBy:y,descending:n,page:1})}return{columnToSort:i,computedSortMethod:g,sort:s}}const Wt={filter:[String,Object],filterMethod:Function};function Xt(e,l){const a=u(()=>e.filterMethod!==void 0?e.filterMethod:(b,i,g,s)=>{const v=i?i.toLowerCase():"";return b.filter(c=>g.some(y=>{const n=s(y,c)+"";return(n==="undefined"||n==="null"?"":n.toLowerCase()).indexOf(v)!==-1}))});return N(()=>e.filter,()=>{Ee(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:a}}function Jt(e,l){for(const a in l)if(l[a]!==e[a])return!1;return!0}function De(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Yt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Zt(e,l){const{props:a,emit:b}=e,i=H(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:a.rowsPerPageOptions.length>0?a.rowsPerPageOptions[0]:5},a.pagination)),g=u(()=>{const n=a["onUpdate:pagination"]!==void 0?_(_({},i.value),a.pagination):i.value;return De(n)}),s=u(()=>g.value.rowsNumber!==void 0);function v(n){c({pagination:n,filter:a.filter})}function c(n={}){Ee(()=>{b("request",{pagination:n.pagination||g.value,filter:n.filter||a.filter,getCellValue:l})})}function y(n,S){const P=De(_(_({},g.value),n));if(Jt(g.value,P)===!0){s.value===!0&&S===!0&&v(P);return}if(s.value===!0){v(P);return}a.pagination!==void 0&&a["onUpdate:pagination"]!==void 0?b("update:pagination",P):i.value=P}return{innerPagination:i,computedPagination:g,isServerSide:s,requestServerInteraction:c,setPagination:y}}function pt(e,l,a,b,i,g){const{props:s,emit:v,proxy:{$q:c}}=e,y=u(()=>b.value===!0?a.value.rowsNumber||0:g.value),n=u(()=>{const{page:T,rowsPerPage:x}=a.value;return(T-1)*x}),S=u(()=>{const{page:T,rowsPerPage:x}=a.value;return T*x}),P=u(()=>a.value.page===1),C=u(()=>a.value.rowsPerPage===0?1:Math.max(1,Math.ceil(y.value/a.value.rowsPerPage))),q=u(()=>S.value===0?!0:a.value.page>=C.value),h=u(()=>(s.rowsPerPageOptions.includes(l.value.rowsPerPage)?s.rowsPerPageOptions:[l.value.rowsPerPage].concat(s.rowsPerPageOptions)).map(x=>({label:x===0?c.lang.table.allRows:""+x,value:x})));N(C,(T,x)=>{if(T===x)return;const z=a.value.page;T&&!z?i({page:1}):T<z&&i({page:T})});function w(){i({page:1})}function O(){const{page:T}=a.value;T>1&&i({page:T-1})}function F(){const{page:T,rowsPerPage:x}=a.value;S.value>0&&T*x<y.value&&i({page:T+1})}function D(){i({page:C.value})}return s["onUpdate:pagination"]!==void 0&&v("update:pagination",_({},a.value)),{firstRowIndex:n,lastRowIndex:S,isFirstPage:P,isLastPage:q,pagesNumber:C,computedRowsPerPageOptions:h,computedRowsNumber:y,firstPage:w,prevPage:O,nextPage:F,lastPage:D}}const el={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},tl=["update:selected","selection"];function ll(e,l,a,b){const i=u(()=>{const q={};return e.selected.map(b.value).forEach(h=>{q[h]=!0}),q}),g=u(()=>e.selection!=="none"),s=u(()=>e.selection==="single"),v=u(()=>e.selection==="multiple"),c=u(()=>a.value.length>0&&a.value.every(q=>i.value[b.value(q)]===!0)),y=u(()=>c.value!==!0&&a.value.some(q=>i.value[b.value(q)]===!0)),n=u(()=>e.selected.length);function S(q){return i.value[q]===!0}function P(){l("update:selected",[])}function C(q,h,w,O){l("selection",{rows:h,added:w,keys:q,evt:O});const F=s.value===!0?w===!0?h:[]:w===!0?e.selected.concat(h):e.selected.filter(D=>q.includes(b.value(D))===!1);l("update:selected",F)}return{hasSelectionMode:g,singleSelection:s,multipleSelection:v,allRowsSelected:c,someRowsSelected:y,rowsSelectedNumber:n,isRowSelected:S,clearSelection:P,updateSelection:C}}function Me(e){return Array.isArray(e)?e.slice():[]}const al={expanded:Array},nl=["update:expanded"];function rl(e,l){const a=H(Me(e.expanded));N(()=>e.expanded,s=>{a.value=Me(s)});function b(s){return a.value.includes(s)}function i(s){e.expanded!==void 0?l("update:expanded",s):a.value=s}function g(s,v){const c=a.value.slice(),y=c.indexOf(s);v===!0?y===-1&&(c.push(s),i(c)):y!==-1&&(c.splice(y,1),i(c))}return{isRowExpanded:b,setExpanded:i,updateExpanded:g}}const ol={visibleColumns:Array};function il(e,l,a){const b=u(()=>{if(e.columns!==void 0)return e.columns;const v=e.rows[0];return v!==void 0?Object.keys(v).map(c=>({name:c,label:c.toUpperCase(),field:c,align:ge(v[c])?"right":"left",sortable:!0})):[]}),i=u(()=>{const{sortBy:v,descending:c}=l.value;return(e.visibleColumns!==void 0?b.value.filter(n=>n.required===!0||e.visibleColumns.includes(n.name)===!0):b.value).map(n=>{const S=n.align||"right",P=`text-${S}`;return L(_({},n),{align:S,__iconClass:`q-table__sort-icon q-table__sort-icon--${S}`,__thClass:P+(n.headerClasses!==void 0?" "+n.headerClasses:"")+(n.sortable===!0?" sortable":"")+(n.name===v?` sorted ${c===!0?"sort-desc":""}`:""),__tdStyle:n.style!==void 0?typeof n.style!="function"?()=>n.style:n.style:()=>null,__tdClass:n.classes!==void 0?typeof n.classes!="function"?()=>P+" "+n.classes:C=>P+" "+n.classes(C):()=>P})})}),g=u(()=>{const v={};return i.value.forEach(c=>{v[c.name]=c}),v}),s=u(()=>e.tableColspan!==void 0?e.tableColspan:i.value.length+(a.value===!0?1:0));return{colList:b,computedCols:i,computedColsMap:g,computedColspan:s}}const p="q-table__bottom row items-center",He={};Ne.forEach(e=>{He[e]={}});var gl=ee({name:"QTable",props:_(_(_(_(_(_(_(_(L(_({rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0}},He),{noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function}),je),$t),ol),Wt),Yt),al),el),Kt),emits:["request","virtual-scroll",...jt,...nl,...tl],setup(e,{slots:l,emit:a}){const b=be(),{proxy:{$q:i}}=b,g=Ae(e,i),{inFullscreen:s,toggleFullscreen:v}=At(),c=u(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),y=H(null),n=H(null),S=u(()=>e.grid!==!0&&e.virtualScroll===!0),P=u(()=>" q-table__card"+(g.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),C=u(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":P.value)+(g.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(s.value===!0?" fullscreen scroll":"")),q=u(()=>C.value+(e.loading===!0?" q-table--loading":""));N(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+C.value,()=>{S.value===!0&&n.value!==null&&n.value.reset()});const{innerPagination:h,computedPagination:w,isServerSide:O,requestServerInteraction:F,setPagination:D}=Zt(b,A),{computedFilterMethod:T}=Xt(e,D),{isRowExpanded:x,setExpanded:z,updateExpanded:ze}=rl(e,a),te=u(()=>{let t=e.rows;if(O.value===!0||t.length===0)return t;const{sortBy:o,descending:d}=w.value;return e.filter&&(t=T.value(t,e.filter,M.value,A)),We.value!==null&&(t=Xe.value(e.rows===t?t.slice():t,o,d)),t}),me=u(()=>te.value.length),$=u(()=>{let t=te.value;if(O.value===!0)return t;const{rowsPerPage:o}=w.value;return o!==0&&(I.value===0&&e.rows!==t?t.length>K.value&&(t=t.slice(0,K.value)):t=t.slice(I.value,K.value)),t}),{hasSelectionMode:j,singleSelection:Ue,multipleSelection:Se,allRowsSelected:Ie,someRowsSelected:ye,rowsSelectedNumber:le,isRowSelected:ae,clearSelection:Ke,updateSelection:U}=ll(e,a,$,c),{colList:Ge,computedCols:M,computedColsMap:he,computedColspan:we}=il(e,w,j),{columnToSort:We,computedSortMethod:Xe,sort:ne}=Gt(e,w,Ge,D),{firstRowIndex:I,lastRowIndex:K,isFirstPage:re,isLastPage:oe,pagesNumber:G,computedRowsPerPageOptions:Je,computedRowsNumber:W,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce}=pt(b,h,w,O,D,me),Ye=u(()=>$.value.length===0),Ze=u(()=>{const t={};return Ne.forEach(o=>{t[o]=e[o]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function pe(){S.value===!0&&n.value.reset()}function et(){if(e.grid===!0)return vt();const t=e.hideHeader!==!0?ke:null;if(S.value===!0){const d=l["top-row"],f=l["bottom-row"],m={default:R=>Pe(R.item,l.body,R.index)};if(d!==void 0){const R=r("tbody",d({cols:M.value}));m.before=t===null?()=>R:()=>[t()].concat(R)}else t!==null&&(m.before=t);return f!==void 0&&(m.after=()=>r("tbody",f({cols:M.value}))),r(Ht,L(_({ref:n,class:e.tableClass,style:e.tableStyle},Ze.value),{scrollTarget:e.virtualScrollTarget,items:$.value,type:"__qtable",tableColspan:we.value,onVirtualScroll:lt}),m)}const o=[at()];return t!==null&&o.unshift(t()),Qe({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},o)}function tt(t,o){if(n.value!==null){n.value.scrollTo(t,o);return}t=parseInt(t,10);const d=y.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(d!==null){const f=y.value.querySelector(".q-table__middle.scroll"),{offsetTop:m}=d,R=m<f.scrollTop?"decrease":"increase";f.scrollTop=m,a("virtual-scroll",{index:t,from:0,to:h.value.rowsPerPage-1,direction:R})}}function lt(t){a("virtual-scroll",t)}function _e(){return[r(Ut,{class:"q-table__linear-progress",color:e.color,dark:g.value,indeterminate:!0,trackColor:"transparent"})]}function Pe(t,o,d){const f=c.value(t),m=ae(f);if(o!==void 0)return o(Ce({key:f,row:t,pageIndex:d,__trClass:m?"selected":""}));const R=l["body-cell"],k=M.value.map(B=>{const J=l[`body-cell-${B.name}`],Y=J!==void 0?J:R;return Y!==void 0?Y(nt({key:f,row:t,pageIndex:d,col:B})):r("td",{class:B.__tdClass(t),style:B.__tdStyle(t)},A(B,t))});if(j.value===!0){const B=l["body-selection"],J=B!==void 0?B(rt({key:f,row:t,pageIndex:d})):[r(fe,{modelValue:m,color:e.color,dark:g.value,dense:e.dense,"onUpdate:modelValue":(Y,ft)=>{U([f],[t],Y,ft)}})];k.unshift(r("td",{class:"q-table--col-auto-width"},J))}const V={key:f,class:{selected:m}};return e.onRowClick!==void 0&&(V.class["cursor-pointer"]=!0,V.onClick=B=>{a("RowClick",B,t,d)}),e.onRowDblclick!==void 0&&(V.class["cursor-pointer"]=!0,V.onDblclick=B=>{a("RowDblclick",B,t,d)}),e.onRowContextmenu!==void 0&&(V.class["cursor-pointer"]=!0,V.onContextmenu=B=>{a("RowContextmenu",B,t,d)}),r("tr",V,k)}function at(){const t=l.body,o=l["top-row"],d=l["bottom-row"];let f=$.value.map((m,R)=>Pe(m,t,R));return o!==void 0&&(f=o({cols:M.value}).concat(f)),d!==void 0&&(f=f.concat(d({cols:M.value}))),r("tbody",f)}function Ce(t){return de(t),t.cols=t.cols.map(o=>{const d=_({},o);return Q(d,"value",()=>A(o,t.row)),d}),t}function nt(t){return de(t),Q(t,"value",()=>A(t.col,t.row)),t}function rt(t){return de(t),t}function de(t){Object.assign(t,{cols:M.value,colsMap:he.value,sort:ne,rowIndex:I.value+t.pageIndex,color:e.color,dark:g.value,dense:e.dense}),j.value===!0&&Q(t,"selected",()=>ae(t.key),(o,d)=>{U([t.key],[t.row],o,d)}),Q(t,"expand",()=>x(t.key),o=>{ze(t.key,o)})}function A(t,o){const d=typeof t.field=="function"?t.field(o):o[t.field];return t.format!==void 0?t.format(d,o):d}const E=u(()=>({pagination:w.value,pagesNumber:G.value,isFirstPage:re.value,isLastPage:oe.value,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce,inFullscreen:s.value,toggleFullscreen:v}));function ot(){const t=l.top,o=l["top-left"],d=l["top-right"],f=l["top-selection"],m=j.value===!0&&f!==void 0&&le.value>0,R="q-table__top relative-position row items-center";if(t!==void 0)return r("div",{class:R},[t(E.value)]);let k;if(m===!0?k=f(E.value).slice():(k=[],o!==void 0?k.push(r("div",{class:"q-table-control"},[o(E.value)])):e.title&&k.push(r("div",{class:"q-table__control"},[r("div",{class:["q-table__title",e.titleClass]},e.title)]))),d!==void 0&&(k.push(r("div",{class:"q-table__separator col"})),k.push(r("div",{class:"q-table__control"},[d(E.value)]))),k.length!==0)return r("div",{class:R},k)}const qe=u(()=>ye.value===!0?null:Ie.value);function ke(){const t=it();return e.loading===!0&&l.loading===void 0&&t.push(r("tr",{class:"q-table__progress"},[r("th",{class:"relative-position",colspan:we.value},_e())])),r("thead",t)}function it(){const t=l.header,o=l["header-cell"];if(t!==void 0)return t(ve({header:!0})).slice();const d=M.value.map(f=>{const m=l[`header-cell-${f.name}`],R=m!==void 0?m:o,k=ve({col:f});return R!==void 0?R(k):r(Et,{key:f.name,props:k},()=>f.label)});if(Ue.value===!0&&e.grid!==!0)d.unshift(r("th",{class:"q-table--col-auto-width"}," "));else if(Se.value===!0){const f=l["header-selection"],m=f!==void 0?f(ve({})):[r(fe,{color:e.color,modelValue:qe.value,dark:g.value,dense:e.dense,"onUpdate:modelValue":Re})];d.unshift(r("th",{class:"q-table--col-auto-width"},m))}return[r("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},d)]}function ve(t){return Object.assign(t,{cols:M.value,sort:ne,colsMap:he.value,color:e.color,dark:g.value,dense:e.dense}),Se.value===!0&&Q(t,"selected",()=>qe.value,Re),t}function Re(t){ye.value===!0&&(t=!1),U($.value.map(c.value),$.value,t)}const X=u(()=>{const t=[e.iconFirstPage||i.iconSet.table.firstPage,e.iconPrevPage||i.iconSet.table.prevPage,e.iconNextPage||i.iconSet.table.nextPage,e.iconLastPage||i.iconSet.table.lastPage];return i.lang.rtl===!0?t.reverse():t});function st(){if(e.hideBottom===!0)return;if(Ye.value===!0){if(e.hideNoData===!0)return;const d=e.loading===!0?e.loadingLabel||i.lang.table.loading:e.filter?e.noResultsLabel||i.lang.table.noResults:e.noDataLabel||i.lang.table.noData,f=l["no-data"],m=f!==void 0?[f({message:d,icon:i.iconSet.table.warning,filter:e.filter})]:[r(Ve,{class:"q-table__bottom-nodata-icon",name:i.iconSet.table.warning}),d];return r("div",{class:p+" q-table__bottom--nodata"},m)}const t=l.bottom;if(t!==void 0)return r("div",{class:p},[t(E.value)]);const o=e.hideSelectedBanner!==!0&&j.value===!0&&le.value>0?[r("div",{class:"q-table__control"},[r("div",[(e.selectedRowsLabel||i.lang.table.selectedRecords)(le.value)])])]:[];if(e.hidePagination!==!0)return r("div",{class:p+" justify-end"},ct(o));if(o.length>0)return r("div",{class:p},o)}function ut(t){D({page:1,rowsPerPage:t.value})}function ct(t){let o;const{rowsPerPage:d}=w.value,f=e.paginationLabel||i.lang.table.pagination,m=l.pagination,R=e.rowsPerPageOptions.length>1;if(t.push(r("div",{class:"q-table__separator col"})),R===!0&&t.push(r("div",{class:"q-table__control"},[r("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||i.lang.table.recordsPerPage]),r(Vt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:d,options:Je.value,displayValue:d===0?i.lang.table.allRows:d,dark:g.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ut})])),m!==void 0)o=m(E.value);else if(o=[r("span",d!==0?{class:"q-table__bottom-item"}:{},[d?f(I.value+1,Math.min(K.value,W.value),W.value):f(1,me.value,W.value)])],d!==0&&G.value>1){const k={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(k.size="sm"),G.value>2&&o.push(r(Z,L(_({key:"pgFirst"},k),{icon:X.value[0],disable:re.value,onClick:ie}))),o.push(r(Z,L(_({key:"pgPrev"},k),{icon:X.value[1],disable:re.value,onClick:se})),r(Z,L(_({key:"pgNext"},k),{icon:X.value[2],disable:oe.value,onClick:ue}))),G.value>2&&o.push(r(Z,L(_({key:"pgLast"},k),{icon:X.value[3],disable:oe.value,onClick:ce})))}return t.push(r("div",{class:"q-table__control"},o)),t}function dt(){const t=e.gridHeader===!0?[r("table",{class:"q-table"},[ke()])]:e.loading===!0&&l.loading===void 0?_e():void 0;return r("div",{class:"q-table__middle"},t)}function vt(){const t=l.item!==void 0?l.item:o=>{const d=o.cols.map(m=>r("div",{class:"q-table__grid-item-row"},[r("div",{class:"q-table__grid-item-title"},[m.label]),r("div",{class:"q-table__grid-item-value"},[m.value])]));if(j.value===!0){const m=l["body-selection"],R=m!==void 0?m(o):[r(fe,{modelValue:o.selected,color:e.color,dark:g.value,dense:e.dense,"onUpdate:modelValue":(k,V)=>{U([o.key],[o.row],k,V)}})];d.unshift(r("div",{class:"q-table__grid-item-row"},R),r(Ot,{dark:g.value}))}const f={class:["q-table__grid-item-card"+P.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(f.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(f.onClick=m=>{a("RowClick",m,o.row,o.pageIndex)}),e.onRowDblclick!==void 0&&(f.onDblclick=m=>{a("RowDblclick",m,o.row,o.pageIndex)})),r("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(o.selected===!0?" q-table__grid-item--selected":"")},[r("div",f,d)])};return r("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},$.value.map((o,d)=>t(Ce({key:c.value(o),row:o,pageIndex:d}))))}return Object.assign(b.proxy,{requestServerInteraction:F,setPagination:D,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce,isRowSelected:ae,clearSelection:Ke,isRowExpanded:x,setExpanded:z,sort:ne,resetVirtualScroll:pe,scrollTo:tt,getCellValue:A}),Bt(b.proxy,{filteredSortedRows:()=>te.value,computedRows:()=>$.value,computedRowsNumber:()=>W.value}),()=>{const t=[ot()],o={ref:y,class:q.value};return e.grid===!0?t.push(dt()):Object.assign(o,{class:[o.class,e.cardClass],style:e.cardStyle}),t.push(et(),st()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),r("div",o,t)}}});export{gl as Q,Et as a};

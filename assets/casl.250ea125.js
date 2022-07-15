import{k as m,r as b,i as h,f as v,l}from"./index.3c80f5fb.js";import{o as w,z as q,a as d,q as n}from"./quickbase.4c931772.js";import"./_commonjsHelpers.dfee5925.js";import"./dayjs.0468f2f9.js";import"./localForage.0ab76d9a.js";import"./index.7dbe61ef.js";import"./i18n.bcf53bbf.js";import"./api.3f683c47.js";function I(e){if(e.hasOwnProperty("possibleRulesFor"))return e;var i=b(!0);e.on("updated",function(){i.value=!i.value});var t=e.possibleRulesFor.bind(e);return e.possibleRulesFor=function(o,r){return i.value=i.value,t(o,r)},e.can=e.can.bind(e),e.cannot=e.cannot.bind(e),e}var p=Symbol("ability");function S(){var e=h(p);if(!e)throw new Error("Cannot inject Ability instance because it was not provided");return e}function P(e){return"a"in e?"a":"this"in e?"this":"an"in e?"an":""}m({name:"Can",props:{I:String,do:String,a:[String,Function],an:[String,Function],this:[String,Function,Object],on:[String,Function,Object],not:Boolean,passThrough:Boolean,field:String},setup:function(i,t){var o=t.slots,r=i,a="do",u="on";if(a in i||(a="I",u=P(i)),!r[a])throw new Error("Neither `I` nor `do` prop was passed in <Can>");if(!o.default)throw new Error("Expects to receive default slot");var c=S();return function(){var f=c.can(r[a],r[u],r.field),s=i.not?!f:f;return i.passThrough?o.default({allowed:s,ability:c}):s?o.default():null}}});function R(e,i,t){if(!i||!(i instanceof w))throw new Error("Please provide an Ability instance to abilitiesPlugin plugin");e.provide(p,I(i)),t&&t.useGlobalProperties&&(e.config.globalProperties.$ability=i,e.config.globalProperties.$can=i.can.bind(i))}const C=e=>e.matched.some(i=>d.can(i.meta.action||"read",i.meta.resource));var U=v(({app:e,router:i})=>{e.config.globalProperties.$subject=q,e.use(R,d,{useGlobalProperties:!0}),i.beforeEach(async(t,o,r)=>{const a=await n.isUserLoggedIn(),u=Object.assign({},t.query);if(a||n.logout(),u.office_id&&(n.setOfficeLocation({rid:u.office_id}),u.qr&&n.setCheckIn(!0)),o.fullPath==="/"&&!o.name&&(a?await n.reloadUserInfo({reAuthenticate:!0}):l.pageType==="Candidate Kiosk"&&await n.updateStore()),!C(t)){const g=t.path!=="/";return!a&&l.pageType==="Candidate Kiosk"&&l.startPage?r({name:"start"}):r(a?{name:"not-authorized"}:{name:"login",query:{...g&&{redirect:t.path}}})}if(t.meta.redirectIfLoggedIn&&a)return r("/");const c=await n.verifyRequired(a),f=await n.employeeLinkRequired(a),s=await n.getUserFromStore(a),y=await n.getSocialRequired(a);if(c)return o.name==="code-confirmation"&&a&&t.query.code?(await n.setVerified(!0),r({path:"/"})):t.name!=="code-confirmation"?r({name:"code-confirmation",query:{p:s[9]?s[9].phoneNumber:s[8].replace(/[^0-9]/g,""),rid:s[3]}}):r();if(f||y)return o.name==="verify-identity"&&a&&t.query.verify?(t.query.rid?await n.setIdentityVerified(t.query.rid):await n.setIdentityVerified(!1),r({path:"/",query:{}})):t.name!=="verify-identity"?r({name:"verify-identity",query:{rid:s[3]}}):r();if(t.name==="verify-identity"){if(!f)return r({path:"/"})}else if(t.name==="code-confirmation")return!a&&t.query.ac?r():r({path:"/"});return r()}),i.afterEach(async(t,o)=>{const r=await n.isUserLoggedIn();o.fullPath==="/"&&!o.name&&r&&await n.updateStore({reAuthenticate:!1})})});export{U as default};

import{f as k,P as g,k as s}from"./index.4017ca31.js";import{l as w}from"./index.113e7ee8.js";import{S as I,a as q,q as a}from"./quickbase.4804bb81.js";import"./_commonjsHelpers.a26ce4be.js";import"./dayjs.01a1f0cd.js";import"./index.04bc0a32.js";import"./localForage.8295c071.js";import"./api.a5c07642.js";import"./i18n.c0a86e49.js";const v=c=>c.matched.some(d=>q.can(d.meta.action||"read",d.meta.resource));var j=k(({app:c,router:d})=>{try{const t=new DeviceUUID().get();g.has("clm-qb-id")||g.set("clm-qb-id",t,{expires:"365d",secure:!0,sameSite:"Strict"})}catch(e){console.log(e)}c.config.globalProperties.$subject=I,c.use(w,q,{useGlobalProperties:!0}),d.beforeEach(async(e,t,i)=>{const r=await a.isUserLoggedIn(),u=Object.assign({},e.query);if(r||a.logout(),u.office_id?(a.setOfficeLocation({rid:u.office_id}),!!u.qr&(u.qr==="3422"||u.qr===3422)&&a.setCheckIn(!0)):u.qr&&u.type&&a.setEvent(u,!0),t.fullPath==="/"&&!t.name){const o=await a.getIpInfo();if(o){if(o.country!==s.country)try{a.fetchIpInfo()}catch{}}else try{a.fetchIpInfo()}catch{}if(r){if(await a.reloadUserInfo({reAuthenticate:!0}),e.path==="/login"&&await a.startPageEnabled()&&s.pageType==="Candidate Kiosk")return await a.logout(),i({name:"start"})}else if(s.pageType==="Candidate Kiosk"&&(await a.updateStore(),e.path==="/login"&&await a.startPageEnabled()&&s.pageType==="Candidate Kiosk"))return i({name:"start"})}if(!v(e)){const o=e.path!=="/",f=await a.startPageEnabled();return!r&&s.pageType==="Candidate Kiosk"&&f?i({name:"start"}):i(r?{name:"not-authorized"}:{name:"login",query:{...o&&{redirect:e.path}}})}if(s.pageType==="Candidate Kiosk"&&e.name!=="bookmarks"&&e.name!=="start"){const o=await a.bookmarksValid(),f=await a.bookMarksOnly();if(o&&f)return i({name:"bookmarks"})}if(e.name==="bookmarks"&&!await a.bookmarksValid())return a.clearBookmarks(),i("/");if(e.meta.redirectIfLoggedIn&&r)return i("/");const l=await a.phoneNumberRequired(r),y=await a.emailRequired(r),b=await a.verifyRequired(r),p=await a.employeeLinkRequired(r),n=await a.getUserFromStore(r),h=await a.getSocialRequired(r),m=await a.getEvent(r);if(l||y)return t.name==="update-information"&&r&&e.query.rid?(e.query.phoneNumber&&await a.setPhoneNumber(e.query.phoneNumber),e.query.email&&await a.setEmail(e.query.email),i({path:"/",query:{}})):e.name!=="update-information"?i({name:"update-information",query:{rid:n[3],...l&&{phoneNumberRequired:!0},...y&&{emailRequired:!0}}}):Object.keys(e.query).length===0&&t.name!=="update-information"?i({name:"update-information",query:{rid:n[3],...l&&{phoneNumberRequired:!0},...y&&{emailRequired:!0}}}):i();if(t.name==="update-information"&&Object.keys(e.query).length>=1)return i({path:"/",query:{}});if(b)return t.name==="code-confirmation"&&r&&e.query.code?(await a.setVerified(!0),i({path:"/"})):e.name!=="code-confirmation"?i({name:"code-confirmation",query:{p:n[9]?n[9].phoneNumber:n[8].replace(/[^0-9]/g,""),rid:n[3]}}):Object.keys(e.query).length===0&&t.name!=="code-confirmation"?i({name:"code-confirmation",query:{p:n[9]?n[9].phoneNumber:n[8].replace(/[^0-9]/g,""),rid:n[3]}}):i();if(p||h)return t.name==="verify-identity"&&r&&e.query.verify?(e.query.rid?await a.setIdentityVerified(e.query.rid):await a.setIdentityVerified(!1),i({path:"/",query:{}})):e.name!=="verify-identity"?i({name:"verify-identity",query:{rid:n[3]}}):Object.keys(e.query).length===0&&t.name!=="verify-identity"?i({name:"verify-identity",query:{rid:n[3]}}):i();if(e.name==="verify-identity"){if(!p)return i({path:"/"})}else if(e.name==="code-confirmation")return!r&&e.query.ac?i():i({path:"/"});return r&&m&&m.type==="Training"&&m.qr&&e.name!=="training"?i({name:"training",query:m}):i()}),d.afterEach(async(e,t)=>{const i=await a.isUserLoggedIn();t.fullPath==="/"&&!t.name&&i&&await a.updateStore({reAuthenticate:!1})})});export{j as default};

import{u as p,q as n}from"./app.c06ae7e4.js";import{dayjs as f}from"./dayjs.67bcdf99.js";import{u as T}from"./dataStore.eb3c3ed9.js";import{u as L}from"./dataStore.ccd157ed.js";import{k as M}from"./index.2bf5f3d5.js";const P=async({employee:s,assignment:e,effectiveNow:l,values:a,attachments:c,ratings:o,supervisor:t})=>{const{userData:r,getUserType:y}=p(),u=r;u.access&&delete u.access,u.permissions&&delete u.permissions;const R=[{12:{value:a.recommendation},25:{value:s[3]},28:{value:e[3]},30:{value:a.selection[10]},35:{value:e[142]},36:{value:a.effective},123:{value:a.lastDay},124:{value:u[3]},38:{value:JSON.stringify(u)},39:{value:y!=="QuickBase User"},60:{value:o.comments?o.comments:""},72:{value:a.equipment.value}}];if(l){const{ee:m,assign:i}=await S({assignment:e,supervisor:t}),{data:v}=await n.upsertRecordsXML({to:"bp3ga39ut",data:R,fieldsToReturn:[37],formatObject:37},{action:"create",type:"release"}),{release:d}=await O({release:v[0][37][3],employee:v[0][37][25],ratings:o,user:u,supervisor:t});if(c.length>0){const{docs:g}=await j({release:d,attachments:c,user:u});return d[70]=g.map(w=>w[12]),{release:d,employee:m,assignment:i,attachments:g}}else return{release:d,employee:m,assignment:i,attachments:[]}}else{const{data:m}=await n.upsertRecordsXML({to:"bp3ga39ut",data:R,fieldsToReturn:[37],formatObject:37},{action:"create",type:"release"});t&&X({assignment:e,supervisor:t});const{release:i}=await O({release:m[0][37][3],employee:m[0][37][25],ratings:o,user:u,supervisor:t});if(c.length>0){const{docs:v}=await j({release:i,attachments:c,user:u});return i[70]=v.map(d=>d[12]),{release:i,employee:s,assignment:e,attachments:v}}else return{release:i,employee:s,assignment:e,attachments:[]}}},O=async({release:s,employee:e,ratings:l,user:a,supervisor:c})=>{const o={6:{value:l.attendance},8:{value:l.attitude},10:{value:l.capability},12:{value:l.promotable},14:{value:l.comments?l.comments:""},16:{value:e},34:{value:s},36:{value:JSON.stringify(a)}};c&&Object.assign(o,{42:{value:c[18]}});const{data:t}=await n.upsertRecordsXML({to:"bqzkbcxup",data:[o],fieldsToReturn:[35],formatObject:35});return{release:t[0][35]}},j=async({release:s,attachments:e,user:l})=>{const a=[];e.forEach(t=>{Object.assign(t,{8:{value:JSON.stringify(l)},9:{value:s[3]},10:{value:s[25]}}),a.push(t)});const{data:c,metadata:o}=await n.upsertRecordsXML({to:"bsstsai5d",data:a,fieldsToReturn:[12],formatObject:12});if(o.lineErrors)throw o.lineErrors;return{docs:c,metadata:o}},S=async({assignment:s,supervisor:e,id:l})=>{const{removeData:a}=T(),{removeFromRoster:c}=L(),o={3:{value:l||s[3]},21:{value:"Complete"},22:{value:f()},165:{value:"Inactive"}};e&&e[3]&&Object.assign(o,{133:{value:e[3]?e[3]:""}});const{data:t}=await n.upsertRecordsXML({to:"bp3gazpqj",data:[o],fieldsToReturn:[110],formatObject:110});return c({id:t[0][110][74],data:t[0]}),a({type:"assignments",key:t[0][110][74],item:t[0][110],storageKey:M.storageAssignments}),{ee:await b({3:{value:t[0][110][18]},79:{value:19}}),assign:t[0][110]}},b=async s=>{const{data:e}=await n.upsertRecordsXML({to:"bp3gb7ng2",data:[s],fieldsToReturn:[549],formatObject:549});return e[0][549]},X=async({assignment:s,supervisor:e})=>{n.upsertRecordsXML({to:"bp3gazpqj",data:[{3:{value:s[3]},133:{value:e[3]?e[3]:""}}],fieldsToReturn:[110],formatObject:110})},z=async({release:s,disp:e})=>{const{userData:l}=p(),a=l;a.access&&delete a.access,a.permissions&&delete a.permissions;const c={3:{value:s[3]},42:{value:e.value==="Terminate"?"Reviewed":"Complete"},43:{value:e.value},73:{value:e.value==="Terminate"?"Pending":"Cancelled"},75:{value:JSON.stringify(a)},125:{value:a[3]},77:{value:f()}},o=e.value==="Terminate"?19:15,t=await b({3:{value:s[25]},79:{value:o},16:{value:s[35]}}),{data:r}=await n.upsertRecordsXML({to:"bp3ga39ut",data:[c],fieldsToReturn:[37],formatObject:37},{action:"update",type:"release"});return{release:r[0][37],employee:t}},C=async({release:s,fid:e,entryMoment:l,workdayData:a})=>{const{userData:c}=p(),o=e||37,t=c;t.access&&delete t.access,t.permissions&&delete t.permissions;const r=[{3:{value:s[3]},42:{value:"Complete"},73:{value:"Processed"},76:{value:JSON.stringify(t)},127:{value:t[3]},78:{value:f(l)||f()},106:{value:a?JSON.stringify(a):""}}];b({3:{value:s[25]},79:{value:""},122:{value:""}});const{data:y}=await n.upsertRecordsXML({to:"bp3ga39ut",data:r,fieldsToReturn:[o],formatObject:o},{action:"update",type:"release"});return{data:y[0][o]}},k=async({release:s,disp:e})=>{const{userData:l}=p(),a=l;a.access&&delete a.access,a.permissions&&delete a.permissions;const c={3:{value:s[3]},42:{value:"Rescinded"},43:{value:"Rescinded"},73:{value:"Not Processed"},75:{value:JSON.stringify(a)},77:{value:f()}},o={3:{value:s.assignment[3]},21:{value:"In Process"},22:{value:""},165:{value:"Active"},112:{value:!1}};await n.upsertRecordsXML({to:"bp3gazpqj",data:[o],fieldsToReturn:[110],formatObject:110});const t=await b({3:{value:s[25]},79:{value:7},16:{value:s[35]}}),{data:r}=await n.upsertRecordsXML({to:"bp3ga39ut",data:[c],fieldsToReturn:[37],formatObject:37},{action:"update",type:"release"});return{release:r[0][37],employee:t}};export{S as a,P as b,z as f,k as r,j as s,C as t};

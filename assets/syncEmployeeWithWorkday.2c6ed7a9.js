import{q as u}from"./quickbase.159c15f2.js";import{dayjs as i}from"./dayjs.0f1a0bc9.js";import{u as f}from"./useQuerySaver.c5fe436e.js";import"./workday.60a35b68.js";import{workdayAPI as l}from"./workdayAPI.3922a68e.js";const S=async({clm:e},a)=>{const s=!e[576]||!e[576].$d||e[576]&&e[576].$d&&!i(e[576].$d).isSameOrAfter(i().subtract(i.duration({days:2})),"day");if(!a&&!s){if(e.workday)return{sync:e.workday,clm:e};{const{data:t}=await u.fetchFromHiringApp({fields:[f({type:"workdaySync",query:"",id:e[578]})]});if(t&&t[22]){const n=o(e);if(n){const{sync:r}=await y({request:n,employee:e});return e[576]=r[1]&&r[1].$d?i(r[1].$d):e[576],{sync:r,clm:e}}else return{sync:null,clm:e}}else return{sync:t,clm:e}}}else{const t=o(e);if(t){const{sync:n}=await y({request:t,employee:e});return e[576]=n[1]&&n[1].$d?i(n[1].$d):e[576],{sync:n,clm:e}}else return{sync:null,clm:e}}},o=e=>{let a={sandbox:e[207],includeTransactionLogs:!0,includeRelatedPersons:!0};return e[378]!==""?a.workerId=e[378]:e[188].length===9?a.ssn=e[188]:e[567].length===9?a.sin=e[567]:(e[509],a=null),a},d=async({id:e,worker:a,values:s})=>{const t=s||[{6:{value:e},8:{value:a.workerName||""},9:{value:a.nationalId||""},10:{value:a.userId||""},11:{value:a.workerId||""},12:{value:a.employmentData?JSON.stringify(a.employmentData):""},14:{value:a.personalData?JSON.stringify(a.personalData):""},16:{value:a.workerReference?JSON.stringify(a.workerReference):""},17:{value:a.managementChainData?JSON.stringify(a.managementChainData):""},18:{value:a.organizations?JSON.stringify(a.organizations):""},19:{value:a.applicantReference?JSON.stringify(a.applicantReference):""},21:{value:a.jobHistory?JSON.stringify(a.jobHistory):""},23:{value:a.relatedPersons?JSON.stringify(a.relatedPersons):""}}],{data:n}=await u.upsertRecordsXML({to:"bspfhy84a",data:t,fieldsToReturn:[7],formatObject:7});return{sync:n[0][7]}},O=async({wd:e,clm:a})=>{const{data:s}=await u.upsertRecordsXML({to:"bp3gb7ng2",data:[{3:{value:a[3]},568:{value:i()}}],fieldsToReturn:[549],formatObject:549});return{clm:s[0][549],sync:e}},y=async({request:e,employee:a})=>{const{data:s}=await l.getWorker(e);let t;if(s.length>0?t=s[0]:t=null,t)return await d({id:a[3],worker:t});{const n=[{3:{value:a[3]},22:{value:!0}}];return await d({values:n})}};export{S as a,O as s};

import{q as i}from"./quickbase.c0a4ee71.js";import{dayjs as s}from"./dayjs.126d3740.js";import{u as d}from"./useQuerySaver.e863619d.js";import"./workday.3eac6f89.js";import{workdayAPI as f}from"./workdayAPI.5ef96c4d.js";const v=async({clm:e})=>{if(e[576]&&e[576].$d&&s(e[576].$d).isSameOrAfter(s().subtract(s.duration({days:5})),"day")){const{data:t}=await i.fetchFromHiringApp({fields:[d({type:"workdaySync",query:"",id:e[578]})]});return{sync:t,clm:e}}else{let t={sandbox:e[207]};if(e[378]!==""?t.workerId=e[378]:e[188].length===9?t.ssn=e[188]:t=null,t&&!e[509]){const{data:r}=await f.getWorker(t);let n;if(r.length>0?n=r[0]:n=null,n){const a=n,o=[{6:{value:e[3]},8:{value:a.workerName},9:{value:a.nationalId},10:{value:a.userId},11:{value:a.workerId},12:{value:JSON.stringify(a.employmentData)},14:{value:JSON.stringify(a.personalData)},16:{value:JSON.stringify(a.workerReference)},17:{value:`${JSON.stringify(a.managementChainData)}`},18:{value:`${JSON.stringify(a.organizations)}`},19:{value:a.applicantReference?JSON.stringify(a.applicantReference):""}}],{data:u}=await i.upsertRecordsXML({to:"bspfhy84a",data:o,fieldsToReturn:[7],formatObject:7});return{sync:u[0][7],clm:e}}}}},w=async({wd:e,clm:t})=>{const{data:r}=await i.upsertRecordsXML({to:"bp3gb7ng2",data:[{3:{value:t[3]},568:{value:s()}}],fieldsToReturn:[549],formatObject:549});return{clm:r[0][549],sync:e}};export{v as a,w as s};

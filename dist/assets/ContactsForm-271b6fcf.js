import{u as V,a as _,_ as l,F as v}from"./vee-validate-0107e2ca.js";import{e as f,u as b,f as h,g as F,o as s,h as m,w as N,i as u,j as S,b as n,a as q}from"./index-e5ac8d2f.js";const C=q("button",{class:"modal-contacts__btn-submit btn btn_solid"},"Contact me",-1),x={__name:"ContactsForm",emits:["onSubmitEvent"],setup(U,{emit:r}){const a=f({name:"",phone:"",email:"",vehicle:"Name of selected vehicle"}),d=b(),o=h(()=>d.data),i=V();_();async function c(){(await i()).valid&&r("onSubmitEvent")}return F(()=>{o.value&&o.value.name&&(a.vehicle=o.value.name)}),(p,e)=>(s(),m(u(v),{onSubmit:e[4]||(e[4]=t=>c()),class:"modal-contacts__form"},{default:N(()=>[u(o)?(s(),m(l,{key:0,modelValue:a.vehicle,"onUpdate:modelValue":e[0]||(e[0]=t=>a.vehicle=t),name:"vehicle",rules:{required:!0},class:"modal-contacts__input"},null,8,["modelValue"])):S("",!0),n(l,{modelValue:a.name,"onUpdate:modelValue":e[1]||(e[1]=t=>a.name=t),name:"name",rules:{required:!0},placeholder:"Your Name",icon:"user",class:"modal-contacts__input"},null,8,["modelValue"]),n(l,{modelValue:a.phone,"onUpdate:modelValue":e[2]||(e[2]=t=>a.phone=t),name:"phone",rules:{required:!0,digits:10},placeholder:"Phone Number",icon:"phone",class:"modal-contacts__input"},null,8,["modelValue"]),n(l,{modelValue:a.email,"onUpdate:modelValue":e[3]||(e[3]=t=>a.email=t),name:"email",rules:{required:!0,email:!0},placeholder:"Email Address",icon:"letter",class:"modal-contacts__input"},null,8,["modelValue"]),C]),_:1}))}};export{x as default};
System.register(["./vue-legacy.B4Qqu2kk.js","./drawer-legacy.BJyqxmmi.js","./detail.vue_vue_type_script_setup_true_name_meterDetail_lang-legacy.Bnd0dK1i.js","./api-legacy.B9j3BhUk.js","./@vue-legacy.BXDSVpdI.js"],(function(e,t){"use strict";var a,l,u,d,s,i,n,o,r,p,m;return{setters:[null,e=>{a=e.d},e=>{l=e._},e=>{u=e.g},e=>{d=e.d,s=e.r,i=e.w,n=e.v,o=e.l,r=e.j,p=e.o,m=e.n}],execute:function(){e("_",d({__name:"AllRight",props:{modelValue:{type:Boolean,defalut:!1},title:{type:String,defalut:""},tabs:{type:Object,default:[]},id:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const d=t,y=s(!1);let c=e;i((()=>c.modelValue),(e=>{y.value=e,e&&c.id&&_()}),{immediate:!0}),i((()=>c.id),(()=>{y.value&&c.id&&_()})),i((()=>y.value),(e=>{e||g()}));const v=s({}),_=()=>{u(c.id).then((e=>{v.value=e.data,console.log("res.data :>> ",e.data)}))},g=()=>{d("update:modelValue",!1)},b=n({tabs:[{name:"基本信息",type:"1"}]});return(e,t)=>(p(),o(a,{modelValue:y.value,"onUpdate:modelValue":t[0]||(t[0]=e=>y.value=e),title:"空间详情",tabs:b.tabs},{detailSynopsis:r((()=>[])),operationBotton:r((()=>[])),operationContent:r((({type:e})=>[1==e.editableTabsValue?(p(),o(l,{key:0,data:v.value},null,8,["data"])):m("",!0)])),_:1},8,["modelValue","tabs"]))}}))}}}));
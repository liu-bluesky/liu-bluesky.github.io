System.register(["./vue-legacy.B4Qqu2kk.js","./element-easy-form-legacy.BhPcL43a.js","./api-legacy.D03ffr44.js","./vue-i18n-legacy.DW2dszxQ.js","./index-legacy.C7Ic2KQL.js","./element-plus-legacy.BDEdAKzd.js","./@vue-legacy.BXDSVpdI.js"],(function(e,t){"use strict";var a,l,r,s,o,u,n,m,d,i,c,p,g,y,h,v,f,N,b;return{setters:[null,e=>{a=e.E},e=>{l=e.u,r=e.a,s=e.g},e=>{o=e.u},e=>{u=e.d},e=>{n=e.a},e=>{m=e.d,d=e.r,i=e.v,c=e.w,p=e.h,g=e.l,y=e.j,h=e.u,v=e.o,f=e.a,N=e.i,b=e.m}],execute:function(){(()=>{const e=new Map;e.set("default",48),e.set("small",16),e.set("large",64)})();const t={style:"width:300px"},j=e("d","1200px");e("_",m({__name:"addOrEdit",props:{modelValue:{type:Boolean,defalut:!1},id:{type:String,defalut:""}},emits:["update:modelValue","update"],setup(e,{emit:m}){const _=m;let w=e;const{t:x}=o(),V=d(!1),A=d(!1),E=d(),T=async()=>{try{const e=await E.value.validate();w.id?l(e).then((e=>{n.success(x("表单提交.操作成功")),C(),_("update")})):r(e).then((e=>{n.success(x("表单提交.操作成功")),C(),_("update")}))}catch(e){console.log("error :>> ",e)}};i({}),d({name:""});const q=d({schema:[{label:"计量表编号",prop:"meterNumber",colAttrs:{span:12},componentName:"ElInput",attrs:{placeholder:"请输入编号",maxlength:30,...t},rules:[{required:!0,message:"计量表编号不能为空",trigger:"change"}]},{label:"计量表名称",prop:"meterName",colAttrs:{span:12},componentName:"ElInput",attrs:{placeholder:"请输入名称",maxlength:30,...t},rules:[{required:!0,message:"计量表名称不能为空",trigger:"change"}]},{label:"计量表类型",prop:"meterType",colAttrs:{span:12},componentName:"selectDict",attrs:{placeholder:"请选择类型",dictCode:"meter_type",...t},rules:[{required:!0,message:"计量表类型不能为空",trigger:"change"}]},{label:"计量值单位",prop:"unit",colAttrs:{span:12},componentName:"ElInput",attrs:{placeholder:"请输入计量值单位",...t},rules:[{required:!0,message:"计量值单位不能为空",trigger:"change"}]}],model:{meterNumber:"",meterName:"",meterType:"",areaName:"",unit:""},formAttrs:{"label-width":"120px",inline:!0}});c((()=>w.modelValue),(e=>{V.value=e,w.id&&e?s(w.id).then((e=>{q.value.model=e.data,q.value.model.meterType=u(e.data.meterType)})):!w.id&&e&&(q.value.model={meterNumber:"",meterName:"",meterType:"",unit:""})}),{immediate:!0});const C=()=>{_("update:modelValue",!1)};return c((()=>V.value),(e=>{e||C()})),(t,l)=>{const r=p("el-button"),s=p("ComDialog");return v(),g(s,{modelValue:V.value,"onUpdate:modelValue":l[0]||(l[0]=e=>V.value=e),title:e.id?"编辑":"新增",width:h(j)},{footer:y((()=>[f("div",null,[N(r,{size:"large",onClick:C},{default:y((()=>[b("取消")])),_:1}),N(r,{size:"large",loading:A.value,type:"primary",onClick:T},{default:y((()=>[b("保存")])),_:1},8,["loading"])])])),default:y((()=>[N(h(a),{ref_key:"comFromRef",ref:E,formJson:q.value},null,8,["formJson"])])),_:1},8,["modelValue","title","width"])}}}))}}}));
System.register(["./vue-legacy.DBRrBtpm.js","./element-easy-form-legacy.qOA0b7-B.js","./api-legacy.I-txVO93.js","./index-legacy.DXR_xCEL.js","./vue-i18n-legacy.C9LA4yz_.js","./element-plus-legacy.DmpWEuLf.js","./@vue-legacy.TdPVzoUZ.js"],(function(e,t){"use strict";var a,l,r,o,u,m,n,s,d,i,c,p,g,y,h,v,f,N,b,j,_;return{setters:[null,e=>{a=e.E},e=>{l=e.u,r=e.a,o=e.g},e=>{u=e.d,m=e.e,n=e.g},e=>{s=e.u},e=>{d=e.a},e=>{i=e.d,c=e.r,p=e.A,g=e.w,y=e.i,h=e.m,v=e.k,f=e.u,N=e.o,b=e.a,j=e.j,_=e.q}],execute:function(){e("_",i({__name:"addOrEdit",props:{modelValue:{type:Boolean,defalut:!1},id:{type:String,defalut:""}},emits:["update:modelValue","update"],setup(e,{emit:t}){const i=t;let V=e;const{t:A}=s(),q=c(!1),w=c(!1),x=c(),E=async()=>{try{const e=await x.value.validate();V.id?l(e).then((e=>{d.success(A("操作成功")),k(),i("update")})):r(e).then((e=>{d.success(A("操作成功")),k(),i("update")}))}catch(e){console.log("error :>> ",e)}};p({}),c({name:""});const T=c({schema:[{label:"计量表编号",prop:"meterNumber",colAttrs:{span:12},componentName:"ElInput",attrs:{placeholder:"请输入编号",maxlength:30,...m},rules:[{required:!0,message:"计量表编号不能为空",trigger:"change"}]},{label:"计量表名称",prop:"meterName",colAttrs:{span:12},componentName:"ElInput",attrs:{placeholder:"请输入名称",maxlength:30,...m},rules:[{required:!0,message:"计量表名称不能为空",trigger:"change"}]},{label:"计量表类型",prop:"meterType",colAttrs:{span:12},componentName:"selectDict",attrs:{placeholder:"请选择类型",dictCode:"meter_type",...m},rules:[{required:!0,message:"计量表类型不能为空",trigger:"change"}]},{label:"计量值单位",prop:"unit",colAttrs:{span:12},componentName:"ElInput",attrs:{placeholder:"请输入计量值单位",...m},rules:[{required:!0,message:"计量值单位不能为空",trigger:"change"}]}],model:{meterNumber:"",meterName:"",meterType:"",areaName:"",unit:""},formAttrs:{"label-width":"120px",inline:!0}});g((()=>V.modelValue),(e=>{q.value=e,V.id&&e?o(V.id).then((e=>{T.value.model=e.data,T.value.model.meterType=n(e.data.meterType)})):!V.id&&e&&(T.value.model={meterNumber:"",meterName:"",meterType:"",unit:""})}),{immediate:!0});const k=()=>{i("update:modelValue",!1)};return g((()=>q.value),(e=>{e||k()})),(t,l)=>{const r=y("el-button"),o=y("ComDialog");return N(),h(o,{modelValue:q.value,"onUpdate:modelValue":l[0]||(l[0]=e=>q.value=e),title:e.id?"编辑":"新增",width:f(u)},{footer:v((()=>[b("div",null,[j(r,{size:"large",onClick:k},{default:v((()=>[_("取消")])),_:1}),j(r,{size:"large",loading:w.value,type:"primary",onClick:E},{default:v((()=>[_("保存")])),_:1},8,["loading"])])])),default:v((()=>[j(f(a),{ref_key:"comFromRef",ref:x,formJson:T.value},null,8,["formJson"])])),_:1},8,["modelValue","title","width"])}}}))}}}));
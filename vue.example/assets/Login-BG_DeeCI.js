import"./vue-C5dO_luG.js";import{u as z,a as K}from"./vue-router-BozZHOWV.js";import{_ as I,b as W,d as ee,g as te,e as oe}from"./index-BlbMRq7A.js";import{d as R,r as g,v as w,o as _,c as b,g as J,bm as U,bk as q,a as u,f as N,h as p,i as t,j as o,u as D,l as Q,n as j,m as F,t as L,ac as ae,a0 as M,a1 as Z}from"./@vue-CEwL1emF.js";import{b as X}from"./element-plus-DMVJK10x.js";import"./ace-builds-BgbZLK3Y.js";import"./vuex-Ba7ek5fU.js";import"./path-browserify-CtykbOjM.js";import"./@vueuse-DfzPTH68.js";import"./axios-DHSC6jYe.js";import"./js-cookie-Cz0CWeBA.js";import"./nprogress-DI8p4ty5.js";import"./@element-plus-DNaH03KG.js";/* empty css                    */import"./dayjs-CdRyolhI.js";import"./element-easy-form-4sEWskrm.js";import"./mockjs-DBNDAG0j.js";import"./vuedraggable-CHX8LlEE.js";import"./sortablejs-Df4VMxQp.js";import"./vue3-ace-editor-D2yfFFZ4.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./uuid-D8aEg3BZ.js";import"./lodash-es-WEemOz_S.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./async-validator-D3FX-SGt.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-CtcGg-6p.js";const ue=a=>(U("data-v-a15b242a"),a=a(),q(),a),se={class:"login-left animate__animated animate__bounceInLeft"},le=ue(()=>u("div",{class:"fdc jcc login-left-readme"},[u("img",{class:"login-box-bg",src:W,alt:""}),u("div",{class:"white mt60 first"},"本产项目用于案例模板、教学规范"),u("div",{class:"white mt30 secound"},"提供纯洁的教学案例也可以用于实战")],-1)),ie=[le],ne=R({__name:"login-left",setup(a){const r=J();return r==null||r.appContext.config.globalProperties.$route,g(0),w({data:{a:1}}),(d,E)=>(_(),b("div",se,[...ie]))}}),re=I(ne,[["__scopeId","data-v-a15b242a"]]),Y=()=>({regEmail:r=>{var d=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;return d.test(r)}}),de=a=>(U("data-v-65213428"),a=a(),q(),a),me={class:"login-form mxauto white-bg"},ce=de(()=>u("h1",{class:"title"},"登录",-1)),pe={key:0},_e={class:"login-code"},ge=["src"],fe={key:1},Be={class:"aic"},he={class:"jcb aic w100"},Fe=R({__name:"login-form",emits:["handleGoregister"],setup(a,{emit:r}){let d=r;const E=z(),{openLoading:v,closeLoading:f}=ee(),B=g(),{regEmail:A}=Y(),y=()=>{d("handleGoregister",!0)};let x=g("获取验证码"),$=60;const G=()=>{if($==0){x.value="获取验证码",$=60;return}else x.value=$+"s",$--;setTimeout(function(){G()},1e3)},T=()=>{if(!A(e.loginValidateForm.email)){X.warning("请输入邮箱");return}G()};let s=g(!0);const S=w({email:[{required:!0,type:"email",message:"请输入邮箱地址",trigger:["blur","change"]}],password:[{required:!0,message:"密码不能为空"},{min:5,max:16,message:"长度在 5 到 16 个字符",trigger:"blur"}],username:[{required:!0,message:"账号不能为空",trigger:"blur"}]});let C=g(!1);const e=w({loginValidateForm:{username:"admin",password:"admin123",email:"",code:"",uuid:""},captchaEnabled:!1,image:""}),n=()=>{te().then(m=>{e.captchaEnabled=m.captchaEnabled,e.loginValidateForm.uuid=m.uuid,e.image="data:image/gif;base64,"+m.img})},h=async m=>{m&&(await(m==null?void 0:m.validate()),oe.dispatch("loginModule/Login",e.loginValidateForm).then(i=>{E.push("/")}).catch(()=>{e.captchaEnabled&&n()}))},P=()=>{s.value=!s.value};return N(()=>{f(),n()}),(m,i)=>{const V=p("el-input"),l=p("el-form-item"),k=p("el-button"),O=p("el-form");return _(),b("div",me,[ce,t(O,{rules:S,model:e.loginValidateForm,ref_key:"ruleFormRef",ref:B,onKeyup:i[6]||(i[6]=ae(c=>h(B.value),["enter","native"])),class:"ruleForm mt30"},{default:o(()=>[D(s)?(_(),b("div",pe,[t(l,{prop:"username",class:"mt30"},{default:o(()=>[t(V,{type:"text",placeholder:"请输入",modelValue:e.loginValidateForm.username,"onUpdate:modelValue":i[0]||(i[0]=c=>e.loginValidateForm.username=c),autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(l,{class:"mt30",prop:"password"},{default:o(()=>[t(V,{"show-password":"",placeholder:"输入密码",modelValue:e.loginValidateForm.password,"onUpdate:modelValue":i[1]||(i[1]=c=>e.loginValidateForm.password=c),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e.captchaEnabled?(_(),Q(l,{key:0,prop:"code"},{default:o(()=>[t(V,{modelValue:e.loginValidateForm.code,"onUpdate:modelValue":i[2]||(i[2]=c=>e.loginValidateForm.code=c),placeholder:"验证码",style:{width:"63%"}},null,8,["modelValue"]),u("div",_e,[e.image?(_(),b("img",{key:0,src:e.image,onClick:n,class:"login-code-img"},null,8,ge)):j("",!0)])]),_:1})):j("",!0)])):(_(),b("div",fe,[t(l,{prop:"email"},{default:o(()=>[u("div",Be,[t(V,{placeholder:"输入邮箱",modelValue:e.loginValidateForm.email,"onUpdate:modelValue":i[3]||(i[3]=c=>e.loginValidateForm.email=c)},null,8,["modelValue"]),t(k,{type:"primary",onClick:T,class:"ml15"},{default:o(()=>[F(L(D(x)),1)]),_:1})])]),_:1}),t(l,{prop:"code"},{default:o(()=>[t(V,{placeholder:"验证码",modelValue:e.loginValidateForm.code,"onUpdate:modelValue":i[4]||(i[4]=c=>e.loginValidateForm.code=c),type:"text"},null,8,["modelValue"])]),_:1})])),t(l,{class:"mt30"},{default:o(()=>[t(k,{type:"primary",class:"w100",loading:D(C),onClick:i[5]||(i[5]=c=>h(B.value))},{default:o(()=>[F("登录")]),_:1},8,["loading"])]),_:1}),t(l,{class:"mt30"},{default:o(()=>[u("div",he,[t(k,{onClick:y},{default:o(()=>[F("注册")]),_:1}),t(k,{onClick:y},{default:o(()=>[F("忘记密码")]),_:1}),t(k,{onClick:P},{default:o(()=>[F(L(D(s)?"邮箱登录":"账户密码登录"),1)]),_:1})])]),_:1})]),_:1},8,["rules","model"])])}}}),ve=I(Fe,[["__scopeId","data-v-65213428"]]),Ce=a=>(U("data-v-74af8ea3"),a=a(),q(),a),Ve=Ce(()=>u("h1",{class:"title"},"注册",-1)),be={class:"aic"},we={class:"mt30"},Ee=R({__name:"register",emits:["handleGologin"],setup(a,{emit:r}){let d=r;const E=()=>{d("handleGologin",!1)},v=g(),{regEmail:f}=Y();z(),K();let B=g("获取验证码"),A=60;const y=()=>{if(A==0){B.value="获取验证码",A=60;return}else B.value=A+"s",A--;setTimeout(function(){y()},1e3)},x=()=>{if(!f(s.email)){X.warning("请输入邮箱");return}y()},T=w({code:[{required:!0,message:"请输入邮箱验证码",trigger:"blur"}],username:[{required:!0,message:"请输入名字",trigger:"blur"}],email:[{required:!0,type:"email",message:"请输入邮箱地址",trigger:["blur","change"]}],password:[{required:!0,validator:(C,e,n)=>{if(e==="")n(new Error("请输入密码"));else{if(s.checkPass!==""){if(!v.value)return;v.value.validateField("checkPass",()=>null)}n()}},trigger:"blur"}],checkPass:[{required:!0,validator:(C,e,n)=>{e===""?n(new Error("请验证密码")):e!==s.password?n(new Error("两次密码不一致!")):n()},trigger:"blur"}]}),s=w({username:"19939962786",checkPass:"123456",password:"123456",email:"229236940@qq.com",code:"JXUY2Q"}),S=C=>{C&&C.validate(e=>{if(!e)return console.log("error submit!"),!1})};return N(()=>{}),(C,e)=>{const n=p("el-input"),h=p("el-form-item"),P=p("el-button"),m=p("el-form"),i=p("el-link"),V=p("el-card");return _(),Q(V,{class:"register mxauto"},{default:o(()=>[Ve,t(m,{ref_key:"ruleFormRef",ref:v,class:"mt30","status-icon":"",rules:T,model:s,"label-width":"80px"},{default:o(()=>[t(h,{label:"用户名",prop:"username"},{default:o(()=>[t(n,{modelValue:s.username,"onUpdate:modelValue":e[0]||(e[0]=l=>s.username=l)},null,8,["modelValue"])]),_:1}),t(h,{label:"密码",prop:"password"},{default:o(()=>[t(n,{modelValue:s.password,"onUpdate:modelValue":e[1]||(e[1]=l=>s.password=l),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(h,{label:"验证密码",prop:"checkPass"},{default:o(()=>[t(n,{modelValue:s.checkPass,"onUpdate:modelValue":e[2]||(e[2]=l=>s.checkPass=l),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(h,{label:"邮箱",prop:"email"},{default:o(()=>[u("div",be,[t(n,{modelValue:s.email,"onUpdate:modelValue":e[3]||(e[3]=l=>s.email=l)},null,8,["modelValue"]),t(P,{type:"primary",onClick:x,class:"ml15"},{default:o(()=>[F(L(D(B)),1)]),_:1})])]),_:1}),t(h,{label:"验证码",prop:"code"},{default:o(()=>[t(n,{modelValue:s.code,"onUpdate:modelValue":e[4]||(e[4]=l=>s.code=l),type:"text"},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"]),t(P,{class:"w100",type:"primary",onClick:e[5]||(e[5]=l=>S(v.value))},{default:o(()=>[F("创建")]),_:1}),u("div",we,[t(i,{onClick:E,type:"primary"},{default:o(()=>[F("登录")]),_:1})])]),_:1})}}}),Ae=I(Ee,[["__scopeId","data-v-74af8ea3"]]),ye={class:"animate__animated animate__bounceInRight login-right"},xe={class:""},$e=R({__name:"login-right",setup(a){const r=J();r==null||r.appContext.config.globalProperties.$route,g(0);const d=w({isRegister:!1}),E=f=>{d.isRegister=f},v=f=>{d.isRegister=f};return(f,B)=>(_(),b("div",ye,[u("div",xe,[M(t(Ae,{class:"animate__animated animate__bounceInRight",onHandleGologin:v},null,512),[[Z,d.isRegister]]),M(t(ve,{class:"animate__animated animate__bounceInRight",onHandleGoregister:E},null,512),[[Z,!d.isRegister]])])]))}}),H=I($e,[["__scopeId","data-v-78406968"]]),ke=a=>(U("data-v-2529d779"),a=a(),q(),a),De={class:"h100 w100"},Ie={class:"h100 w100 hidden-md-and-down"},Re={class:"login-bg"},Pe={class:"zIndex-2 login-box mxauto container aic"},Ue={class:"flex1"},qe={class:"flex1"},Ge={class:"flex1 small-bg h100 w100 hidden-md-and-up1"},Te={class:"positionCenterTop"},Se=ke(()=>u("h1",{class:"white login-box-title text-center animate__animated animate__bounceInRight"}," element-plus+vite+ts+script setup语法糖 ",-1)),Le=R({__name:"Login",setup(a){return z(),K(),N(()=>{}),g(0),w({data:{a:1}}),(r,d)=>(_(),b("div",De,[u("div",Ie,[u("div",Re,[u("div",Pe,[u("div",Ue,[t(re)]),u("div",qe,[t(H)])])])]),u("div",Ge,[u("div",Te,[Se,t(H)])])]))}}),ft=I(Le,[["__scopeId","data-v-2529d779"]]);export{ft as default};
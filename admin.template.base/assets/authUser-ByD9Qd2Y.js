import"./vue-D_Lb-A9Z.js";import{u as y,a as v}from"./vue-router-BVkJAzvN.js";import"./index-D5ps7mph.js";import{g as x,u as D}from"./user-CvapMDLM.js";import{a as B}from"./element-plus-FIipFbdT.js";import{d as k,r as c,i as d,b as R,j as l,c as A,k as a,l as r,n as E,o as S,a as f,A as C}from"./@vue-BQoY7e5N.js";import"./axios-CdcsOsvR.js";import"./vuex-DyTWwpEf.js";import"./js-cookie-Cz0CWeBA.js";import"./path-browserify-D3uKt2uU.js";import"./vue-i18n-Q_0SgK56.js";import"./@intlify-fCQYzvHO.js";import"./@vueuse-4YXd5vDE.js";import"./element-easy-print-DG2WoKE1.js";import"./mockjs-DsfWEKpx.js";import"./vue3-draggable-resizable-yn-D9piuQcC.js";import"./element-easy-form-vZ9-b79u.js";import"./vuedraggable-ClYEMSPW.js";import"./sortablejs-C1wvN1Nu.js";import"./@vue-monaco-CKP0PU5x.js";import"./uuid-CQkTLCs1.js";import"./nprogress-C1nr5Arz.js";import"./@element-plus-CoZ0GdCx.js";/* empty css                    */import"./dayjs-CuLmuTop.js";import"./lodash-es-CiJSjksT.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./async-validator-D3FX-SGt.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-B55MhO6l.js";const T={class:"commonBoxmp"},j={class:"jcb aic w100"},q={class:"aic jcc mt20"},ge=k({__name:"authUser",setup(w){const b=y(),i=v();c(!0);const e=d({openDataScope:!1,defaultProps:{children:"children",label:"label"},menuOptions:[],deptOptions:[],deptExpand:!1,deptNodeAll:!1,menuExpand:!1,menuNodeAll:!1,title:"",form:{},userVisible:!1,roleIds:[],height:0,tableData:[],columnData:[{label:"角色编号",prop:"roleId",visible:!0},{label:"角色名称",prop:"roleName",visible:!0},{label:"权限字符",prop:"roleKey",visible:!0},{label:"创建时间",prop:"createTime",visible:!0}],loading:!1}),m=d(JSON.parse(JSON.stringify({pageNum:1,pageSize:10,userName:"",phonenumber:""}))),_=t=>{e.roleIds=t.map(o=>o.roleId)},g=async t=>{const o=m.userId,s=e.roleIds.join(",");D({userId:o,roleIds:s}).then(n=>{B.success("授权成功"),h()})},p=c(),F=()=>{e.loading=!0,x(m.userId).then(t=>{e.form=t.user,e.tableData=t.roles,e.loading=!1,E(()=>{e.tableData.forEach(o=>{o.flag&&p.value.tableRef.toggleRowSelection(o)})})})},h=()=>{b.go(-1)};return R(()=>{const t=i.params&&i.params.userId;t&&(m.userId=t,F())}),(t,o)=>{const s=l("el-input"),n=l("el-form-item"),N=l("el-form"),I=l("el-button"),V=l("TableV2");return S(),A("div",T,[a(V,{class:"flex1",data:e.tableData,ref_key:"tableV2Ref",ref:p,selection:"",onSelectionChange:_,columns:e.columnData},{tableHeader:r(()=>[f("div",j,[a(N,{ref:"queryForm",inline:!0},{default:r(()=>[a(n,{label:"用户昵称",prop:"nickName"},{default:r(()=>[a(s,{modelValue:e.form.nickName,"onUpdate:modelValue":o[0]||(o[0]=u=>e.form.nickName=u),clearable:"",disabled:"",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),a(n,{label:"登录账号",prop:"userName"},{default:r(()=>[a(s,{modelValue:e.form.userName,"onUpdate:modelValue":o[1]||(o[1]=u=>e.form.userName=u),placeholder:"请输入手机号码",clearable:"",disabled:"",style:{width:"240px"}},null,8,["modelValue"])]),_:1})]),_:1},512)]),f("div",q,[a(I,{type:"primary",onClick:o[2]||(o[2]=u=>g())},{default:r(()=>[C("授权")]),_:1})])]),_:1},8,["data","columns"])])}}});export{ge as default};
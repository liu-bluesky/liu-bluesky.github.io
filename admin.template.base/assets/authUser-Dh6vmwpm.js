import"./vue-CVNGtIj_.js";import{u as A,a as B}from"./vue-router-D7bIofKn.js";import E from"./selectUser-DV70T3Pf.js";import{_ as O}from"./index-Bzhtb0e2.js";import{f as j}from"./index-CMddJZDb.js";import{a as x,b as F,c as K}from"./role-R-A5z3Le.js";import{a as v,c as L}from"./element-plus-CvdjtRA4.js";import{d as P,r as c,i as d,b as V,u as f,j as s,c as M,k as o,l as r,o as J,a as Q,al as U,A as _}from"./@vue-4wuvJO_G.js";import"./axios-CdcsOsvR.js";import"./vuex-CDsxXceG.js";import"./js-cookie-Cz0CWeBA.js";import"./path-browserify-D3uKt2uU.js";import"./vue-i18n-Bt9z2wfA.js";import"./@intlify-fCQYzvHO.js";import"./@vueuse-g1uILd_S.js";import"./element-easy-print-IlIR9WEy.js";import"./mockjs-DsfWEKpx.js";import"./vue3-draggable-resizable-yn-BhhoUBD4.js";import"./element-easy-form-BxKQ1EaY.js";import"./vuedraggable-C23OG9zM.js";import"./sortablejs-C1wvN1Nu.js";import"./@vue-monaco-CTUC9hHy.js";import"./uuid-CQkTLCs1.js";import"./nprogress-C1nr5Arz.js";import"./@element-plus-DtKFL0Hn.js";/* empty css                    */import"./dayjs-CuLmuTop.js";import"./lodash-es-CiJSjksT.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./async-validator-D3FX-SGt.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-B55MhO6l.js";const $={class:"commonBoxmp"},G={class:"jcb aic w100"},Te=P({__name:"authUser",setup(H){A();const b=B(),{parseTime:W,addDateRange:X,getDict:k}=j();c(!0);const g=c(),m=d({openDataScope:!1,defaultProps:{children:"children",label:"label"},menuOptions:[],deptOptions:[],deptExpand:!1,deptNodeAll:!1,menuExpand:!1,menuNodeAll:!1,title:"",form:{},userVisible:!1,rules:{roleName:[{required:!0,message:"角色名称不能为空",trigger:"blur"}],roleKey:[{required:!0,message:"权限字符不能为空",trigger:"blur"}],roleSort:[{required:!0,message:"角色顺序不能为空",trigger:"blur"}]},dateRange:[],height:0,tableData:[],columnData:[{label:"用户名称",visible:!0,prop:"userName"},{label:"用户昵称",visible:!0,prop:"nickName"},{label:"邮箱",visible:!0,prop:"email"},{label:"手机",prop:"phonenumber",visible:!0},{label:"状态",visible:!0,prop:"status",render:({row:t})=>o(O,{values:t.status,dataType:"primary",options:N.sys_normal_disable},null)},{label:"创建时间",visible:!0,prop:"createTime"}],loading:!1}),h=d({currentPage:1,total:10,pageSize:10,pageSizes:[10,20,30,40],layout:"total, prev, pager, next,sizes"}),I={pageNum:1,pageSize:10,userName:"",phonenumber:""},e=d(JSON.parse(JSON.stringify(I))),p=()=>{e.pageNum=1;let t=f(e);g.value.getList(t)},S=()=>{Object.assign(e,I),p()},w=t=>{const a=e.roleId;L.confirm('确认要取消该用户"'+t.userName+'"角色吗？').then(function(){return K({userId:t.userId,roleId:a})}).then(()=>{v.success("取消授权成功")}).catch(function(){})};let y=c();const z=()=>{y.value.show()},C=()=>{m.loading=!0,e.pageNum=h.currentPage,e.pageSize=h.pageSize,x(e).then(t=>{m.tableData=t.rows,h.total=t.total,m.loading=!1})};c();const R=t=>{const a=e.roleId,n=t.ids.join(",");if(n==""){v.error("请选择要分配的用户");return}F({roleId:a,userIds:n}).then(l=>{v.success(l.msg),l.code===200&&y.value.hide()})};let N=d({sys_normal_disable:[]});return V(async()=>{N.sys_normal_disable=await k("sys_normal_disable"),C()}),V(()=>{const t=b.params&&b.params.roleId;if(t){e.roleId=t;let a=f(e);g.value.getList(a)}}),(t,a)=>{const n=s("el-input"),l=s("el-form-item"),u=s("el-button"),D=s("el-form"),T=s("el-table-column"),q=s("TableV2");return J(),M("div",$,[o(q,{class:"flex1",apiFunction:f(x),ref_key:"tableV2Ref",ref:g,columns:m.columnData},{tableHeader:r(()=>[Q("div",G,[o(D,{model:e,ref:"queryForm",size:"small",inline:!0},{default:r(()=>[o(l,{label:"用户名称",prop:"userName"},{default:r(()=>[o(n,{modelValue:e.userName,"onUpdate:modelValue":a[0]||(a[0]=i=>e.userName=i),placeholder:"请输入用户名称",clearable:"",style:{width:"240px"},onKeyup:U(p,["enter","native"])},null,8,["modelValue"])]),_:1}),o(l,{label:"手机号码",prop:"phonenumber"},{default:r(()=>[o(n,{modelValue:e.phonenumber,"onUpdate:modelValue":a[1]||(a[1]=i=>e.phonenumber=i),placeholder:"请输入手机号码",clearable:"",style:{width:"240px"},onKeyup:U(p,["enter","native"])},null,8,["modelValue"])]),_:1}),o(l,null,{default:r(()=>[o(u,{type:"primary",size:"mini",onClick:p},{default:r(()=>[_("搜索")]),_:1}),o(u,{size:"mini",onClick:S},{default:r(()=>[_("重置")]),_:1})]),_:1})]),_:1},8,["model"]),o(u,{type:"primary",onClick:z},{default:r(()=>[_("添加用户")]),_:1})])]),operation:r(()=>[o(T,{label:"操作",fixed:"right",width:"160px",align:"left"},{default:r(i=>[o(u,{type:"text",onClick:Y=>w(i.row)},{default:r(()=>[_("取消授权")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["apiFunction","columns"]),o(E,{ref_key:"selectUserRef",ref:y,onGetUsers:R,roleId:f(b).params.roleId},null,8,["roleId"])])}}});export{Te as default};
import"./vue-DSB24BnW.js";import{u as me,a as pe}from"./vue-router-fyTrc5Va.js";import{f as ie,j as fe,r as ce}from"./index-CfbifT15.js";import{_ as _e}from"./index-CR9DtD1f.js";import{d as be,l as he,e as ye,f as Ve,g as ke,h as ge,i as E,j as Ce}from"./role-C6Ez1zIw.js";import{t as ve,r as Se}from"./menu-CyPa9kSF.js";import{c as M,a as g}from"./element-plus-Cdmo8XhC.js";import{d as xe,v as F,f as j,r as y,h as r,c as $,i as l,j as a,u as we,o as w,a as c,m as d,F as Ke,k as Re,l as Ue,R as Ne,S as De,x as C}from"./@vue-CmN6Z9lx.js";import"./ace-builds-DiBK84cm.js";import"./vuex-CLkfaZ6_.js";import"./js-cookie-Cz0CWeBA.js";import"./path-browserify-Jw_v0k3c.js";import"./@vueuse-D81fD1wx.js";import"./nprogress-C9k5oxGd.js";import"./axios-BNZxzx77.js";import"./@element-plus-DGCe4rM-.js";/* empty css                    */import"./dayjs-BhI1duP8.js";import"./element-easy-form-Dkjp9jsl.js";import"./mockjs-72j0mDZC.js";import"./vuedraggable-C0hio2tq.js";import"./sortablejs-CUXm9Ppf.js";import"./vue3-ace-editor-YX3apWn1.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./uuid-CQkTLCs1.js";import"./vue-i18n-BPZ2p18e.js";import"./@intlify-fCQYzvHO.js";import"./element-easy-print-B_PXcQ-3.js";import"./vue3-draggable-resizable-yn-Cm3Ut1tY.js";import"./lodash-es-CiJSjksT.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./async-validator-D3FX-SGt.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-B55MhO6l.js";const Te={class:"commonBoxmp"},Ie={class:"jcb aic w100"},Ae={class:"aic"},Oe={class:"dialog-footer"},Ee={class:"dialog-footer"},Ct=xe({__name:"index",setup(Me){me(),pe();const{parseTime:Fe,addDateRange:je,getDict:B}=ie();let K=F({sys_job_status:[]});j(async()=>{K.sys_job_status=await B("sys_job_status")}),y(!0);const t=F({openDataScope:!1,defaultProps:{children:"children",label:"label"},menuOptions:[],deptOptions:[],dataScopeOptions:[{value:"1",label:"全部数据权限"},{value:"2",label:"自定数据权限"},{value:"3",label:"本部门数据权限"},{value:"4",label:"本部门及以下数据权限"},{value:"5",label:"仅本人数据权限"}],deptExpand:!1,deptNodeAll:!1,menuExpand:!1,menuNodeAll:!1,title:"",form:{},userVisible:!1,rules:{roleName:[{required:!0,message:"角色名称不能为空",trigger:"blur"}],roleKey:[{required:!0,message:"权限字符不能为空",trigger:"blur"}],roleSort:[{required:!0,message:"角色顺序不能为空",trigger:"blur"}]},dateRange:[],height:0,tableData:[],columnData:[{label:"角色编号",prop:"roleId",visible:!0},{label:"角色名称",prop:"roleName",visible:!0},{label:"权限字符",prop:"roleKey",visible:!0},{label:"显示顺序",prop:"roleSort",visible:!0},{label:"状态",prop:"status",visible:!0,render:({row:n})=>l(_e,{values:n.status,dataType:"primary",options:K.sys_job_status,onClick:()=>te(n)},null)},{label:"创建时间",prop:"createTime",visible:!0}],loading:!1}),L=()=>{let n=p.value.getCheckedKeys(),e=p.value.getHalfCheckedKeys();return n.unshift.apply(n,e),n},P=()=>{let n=b.value.getCheckedKeys(),e=b.value.getHalfCheckedKeys();return n.unshift.apply(n,e),n},q=n=>{t.form.roleId!=null&&(t.form.deptIds=P(),ye(t.form).then(e=>{t.openDataScope=!1,_()}))},H=async n=>{n&&(await n.validate(),t.form.menuIds=L(),t.form.roleId!=null?Ve(t.form).then(e=>{g.success("修改成功"),t.userVisible=!1,_()}):ke(t.form).then(e=>{g.success("新增成功"),t.userVisible=!1,_()}))},Q=n=>{const e=n.roleId;M.confirm('是否确认删除角色编号为"'+e+'"的数据项？').then(function(){return ge(e)}).then(()=>{g.success("删除成功"),_()}).catch(function(){})},z=n=>{const e=n.roleId,s=Z(e);E(e).then(u=>{t.title="修改角色",t.form=u.data,C(()=>{s.then(V=>{V.checkedKeys.forEach(S=>{C(()=>{p.value.setChecked(S,!0,!1)})})})}),t.userVisible=!0})},G=()=>{Y(),t.form={},t.title="添加角色",t.userVisible=!0,C(()=>{console.log("treeRef :>> ",p.value)})},R=y(),_=()=>{R.value.getList()},U=y(),p=y(),b=y(),J=n=>{t.form={};const e=ee(n.roleId);E(n.roleId).then(s=>{t.form=s.data,t.openDataScope=!0,C(()=>{e.then(u=>{b.value.setCheckedKeys(u.checkedKeys)})}),t.title="分配数据权限"})},W=n=>{const e=n.roleId;ce("/system/role-auth/user/"+e)},X=(n,e)=>{switch(n){case"handleDataScope":J(e);break;case"handleAuthUser":W(e);break}},Y=()=>{ve().then(n=>{t.menuOptions=n.data})},Z=n=>Se(n).then(e=>(t.menuOptions=e.menus,e)),ee=n=>Ce(n).then(e=>(t.deptOptions=e.depts,e)),te=n=>{let e=n.status==="0"?"启用":"停用";M.confirm('确认要"'+e+'""'+n.roleName+'"角色吗？').then(function(){return be(n.roleId,n.status)}).then(()=>{g.success(e+"成功")}).catch(function(){n.status=n.status==="0"?"1":"0"})},N=(n,e)=>{if(e=="menu"){let s=t.menuOptions;for(let u=0;u<s.length;u++)p.value.store.nodesMap[s[u].id].expanded=n}else if(e=="dept"){let s=t.deptOptions;for(let u=0;u<s.length;u++)b.value.store.nodesMap[s[u].id].expanded=n}},D=(n,e)=>{e=="menu"?p.value.setCheckedNodes(n?t.menuOptions:[]):e=="dept"&&b.value.setCheckedNodes(n?t.deptOptions:[])},T=(n,e)=>{e=="menu"?t.form.menuCheckStrictly=!!n:e=="dept"&&(t.form.deptCheckStrictly=!!n)};return j(()=>{_()}),(n,e)=>{const s=r("el-button"),u=r("arrow-down"),V=r("el-icon"),v=r("el-dropdown-item"),S=r("el-dropdown-menu"),le=r("el-dropdown"),oe=r("el-table-column"),ae=r("TableV2"),h=r("el-input"),m=r("el-form-item"),i=r("el-col"),ne=r("QuestionFilled"),re=r("el-tooltip"),k=r("el-row"),se=r("el-input-number"),f=r("el-checkbox"),I=r("el-tree"),A=r("el-form"),O=r("el-dialog"),de=r("el-option"),ue=r("el-select");return w(),$("div",Te,[l(ae,{class:"flex1",apiFunction:we(he),isInit:!1,filter:{},ref_key:"tableV2Ref",ref:R,columns:t.columnData},{tableHeader:a(()=>[c("div",Ie,[l(s,{type:"primary",onClick:G},{default:a(()=>[d("添加角色")]),_:1})])]),operation:a(()=>[l(oe,{label:"操作",fixed:"right",width:"160px",align:"left"},{default:a(o=>[l(s,{type:"text",onClick:x=>z(o.row)},{default:a(()=>[d("修改")]),_:2},1032,["onClick"]),l(s,{type:"text",onClick:x=>Q(o.row)},{default:a(()=>[d("删除")]),_:2},1032,["onClick"]),l(le,{onCommand:x=>X(x,o.row)},{dropdown:a(()=>[l(S,null,{default:a(()=>[l(v,{command:"handleDataScope"},{default:a(()=>[d("数据权限")]),_:1}),l(v,{command:"handleAuthUser"},{default:a(()=>[d("分配用户")]),_:1})]),_:1})]),default:a(()=>[l(s,{class:"ml10",type:"text"},{default:a(()=>[d(" 更多 "),l(V,{class:"el-icon--right"},{default:a(()=>[l(u)]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),_:1})]),_:1},8,["apiFunction","columns"]),l(O,{modelValue:t.userVisible,"onUpdate:modelValue":e[13]||(e[13]=o=>t.userVisible=o),title:t.title,width:"50%","destroy-on-close":"",center:""},{footer:a(()=>[c("span",Oe,[l(s,{onClick:e[11]||(e[11]=o=>t.userVisible=!1)},{default:a(()=>[d("取消")]),_:1}),l(s,{type:"primary",onClick:e[12]||(e[12]=o=>H(U.value))},{default:a(()=>[d(" 确定 ")]),_:1})])]),default:a(()=>[l(A,{ref_key:"ruleFormRef",ref:U,model:t.form,rules:t.rules,"label-width":"120px",class:"demo-ruleForm"},{default:a(()=>[l(k,{gutter:20},{default:a(()=>[l(i,{span:12},{default:a(()=>[l(m,{label:"角色名称",prop:"roleName"},{default:a(()=>[l(h,{modelValue:t.form.roleName,"onUpdate:modelValue":e[0]||(e[0]=o=>t.form.roleName=o),placeholder:"请输入角色名称"},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{span:12},{default:a(()=>[l(m,{prop:"roleKey"},{label:a(()=>[c("div",Ae,[l(re,{content:"控制器中定义的权限字符，如：@PreAuthorize(`@ss.hasRole('admin')`)",placement:"top"},{default:a(()=>[l(V,null,{default:a(()=>[l(ne)]),_:1})]),_:1}),d(" 权限字符 ")])]),default:a(()=>[l(h,{modelValue:t.form.roleKey,"onUpdate:modelValue":e[1]||(e[1]=o=>t.form.roleKey=o),placeholder:"请输入权限字符"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(k,{gutter:20},{default:a(()=>[l(i,{span:12},{default:a(()=>[l(m,{label:"角色顺序",prop:"roleSort"},{default:a(()=>[l(se,{modelValue:t.form.roleSort,"onUpdate:modelValue":e[2]||(e[2]=o=>t.form.roleSort=o),"controls-position":"right",min:0},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{span:12},{default:a(()=>[l(m,{label:"状态"},{default:a(()=>[l(fe,{class:"w100",dataType:"radio",dictCode:"sys_normal_disable",modelValue:t.form.status,"onUpdate:modelValue":e[3]||(e[3]=o=>t.form.status=o)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(k,{gutter:20},{default:a(()=>[l(i,{span:24},{default:a(()=>[l(m,{label:"菜单权限",prop:"roleSort"},{default:a(()=>[c("div",null,[c("div",null,[l(f,{modelValue:t.menuExpand,"onUpdate:modelValue":e[4]||(e[4]=o=>t.menuExpand=o),onChange:e[5]||(e[5]=o=>N(o,"menu"))},{default:a(()=>[d("展开/折叠")]),_:1},8,["modelValue"]),l(f,{modelValue:t.menuNodeAll,"onUpdate:modelValue":e[6]||(e[6]=o=>t.menuNodeAll=o),onChange:e[7]||(e[7]=o=>D(o,"menu"))},{default:a(()=>[d("全选/全不选")]),_:1},8,["modelValue"]),l(f,{modelValue:t.form.menuCheckStrictly,"onUpdate:modelValue":e[8]||(e[8]=o=>t.form.menuCheckStrictly=o),onChange:e[9]||(e[9]=o=>T(o,"menu"))},{default:a(()=>[d("父子联动")]),_:1},8,["modelValue"])]),l(I,{class:"tree-border",data:t.menuOptions,"show-checkbox":"",ref_key:"treeRef",ref:p,"node-key":"id","check-strictly":!t.form.menuCheckStrictly,"empty-text":"加载中，请稍候",props:t.defaultProps},null,8,["data","check-strictly","props"])])]),_:1})]),_:1})]),_:1}),l(k,null,{default:a(()=>[l(i,{span:24},{default:a(()=>[l(m,{label:"备注"},{default:a(()=>[l(h,{modelValue:t.form.remark,"onUpdate:modelValue":e[10]||(e[10]=o=>t.form.remark=o),type:"textarea",placeholder:"请输入内容"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),l(O,{title:t.title,modelValue:t.openDataScope,"onUpdate:modelValue":e[24]||(e[24]=o=>t.openDataScope=o),width:"500px","append-to-body":""},{footer:a(()=>[c("div",Ee,[l(s,{type:"primary",onClick:q},{default:a(()=>[d("确 定")]),_:1}),l(s,{onClick:e[23]||(e[23]=o=>t.openDataScope=!1)},{default:a(()=>[d("取 消")]),_:1})])]),default:a(()=>[l(A,{model:t.form,"label-width":"80px"},{default:a(()=>[l(m,{label:"角色名称"},{default:a(()=>[l(h,{modelValue:t.form.roleName,"onUpdate:modelValue":e[14]||(e[14]=o=>t.form.roleName=o),disabled:!0},null,8,["modelValue"])]),_:1}),l(m,{label:"权限字符"},{default:a(()=>[l(h,{modelValue:t.form.roleKey,"onUpdate:modelValue":e[15]||(e[15]=o=>t.form.roleKey=o),disabled:!0},null,8,["modelValue"])]),_:1}),l(m,{label:"权限范围"},{default:a(()=>[l(ue,{modelValue:t.form.dataScope,"onUpdate:modelValue":e[16]||(e[16]=o=>t.form.dataScope=o),onChange:n.dataScopeSelectChange},{default:a(()=>[(w(!0),$(Ke,null,Re(t.dataScopeOptions,o=>(w(),Ue(de,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),Ne(l(m,{label:"数据权限"},{default:a(()=>[l(f,{modelValue:t.deptExpand,"onUpdate:modelValue":e[17]||(e[17]=o=>t.deptExpand=o),onChange:e[18]||(e[18]=o=>N(o,"dept"))},{default:a(()=>[d("展开/折叠")]),_:1},8,["modelValue"]),l(f,{modelValue:t.deptNodeAll,"onUpdate:modelValue":e[19]||(e[19]=o=>t.deptNodeAll=o),onChange:e[20]||(e[20]=o=>D(o,"dept"))},{default:a(()=>[d("全选/全不选")]),_:1},8,["modelValue"]),l(f,{modelValue:t.form.deptCheckStrictly,"onUpdate:modelValue":e[21]||(e[21]=o=>t.form.deptCheckStrictly=o),onChange:e[22]||(e[22]=o=>T(o,"dept"))},{default:a(()=>[d("父子联动")]),_:1},8,["modelValue"]),l(I,{class:"tree-border",data:t.deptOptions,"show-checkbox":"","default-expand-all":"",ref:"dept","node-key":"id","check-strictly":!t.form.deptCheckStrictly,"empty-text":"加载中，请稍候",props:t.defaultProps},null,8,["data","check-strictly","props"])]),_:1},512),[[De,t.form.dataScope==2]])]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}}});export{Ct as default};
System.register(["./vue-legacy.Bl-PfySD.js","./cache-legacy.QlxvzewW.js","./echarts-legacy.CarzNgje.js","./@vue-legacy.CwdyZYS1.js","./axios-legacy.CE4zynPM.js","./index-legacy.DHZTvmRy.js","./vue-router-legacy.BdRy8noV.js","./vuex-legacy.Bi4oHcOr.js","./js-cookie-legacy.DG9X5X6R.js","./path-browserify-legacy.BCzbrAs3.js","./vue-i18n-legacy.CvzA-Cqs.js","./@intlify-legacy.3btIA504.js","./@vueuse-legacy.BN2qhswX.js","./element-easy-print-legacy.DiR45snQ.js","./mockjs-legacy.s1yaCGEC.js","./vue3-draggable-resizable-yn-legacy.Cgx6_OP_.js","./element-plus-legacy.70wpbogp.js","./lodash-es-legacy.Btr3ptxK.js","./@element-plus-legacy.DPuXPpDe.js","./@popperjs-legacy.CtArNnFZ.js","./@ctrl-legacy.BxnR6uzU.js","./dayjs-legacy.B22LMrWi.js","./async-validator-legacy.DmN8ALBH.js","./memoize-one-legacy.BFFEFRop.js","./normalize-wheel-es-legacy.BGuSd53u.js","./@floating-ui-legacy.-y5top_l.js","./element-easy-form-legacy.CgzD5D2G.js","./vuedraggable-legacy.BoNIs_f3.js","./sortablejs-legacy.C6Cuwc5M.js","./@vue-monaco-legacy.eZZ8SJfw.js","./uuid-legacy.2vyezZly.js","./nprogress-legacy.Y7JZ8cCh.js","./animate.css-legacy.BfzBEcwY.js","./tslib-legacy.BRErZza_.js","./zrender-legacy.CD8ofmnk.js"],(function(l,e){"use strict";var a,s,c,t,n,i,d,u,o,r,_,y,f,m,b,v;return{setters:[null,l=>{a=l.g},l=>{s=l.i},l=>{c=l.d,t=l.i,n=l.r,i=l.b,d=l.j,u=l.c,o=l.k,r=l.l,_=l.n,y=l.o,f=l.a,m=l.u,b=l.B,v=l.x},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const e={class:"app-container"},g=f("div",null,[f("span",null," 基本信息")],-1),p={class:"el-table el-table--enable-row-hover el-table--medium"},j={cellspacing:"0",style:{width:"100%"}},h=f("td",{class:"el-table__cell is-leaf"},[f("div",{class:"cell"},"Redis版本")],-1),k={class:"el-table__cell is-leaf"},x={key:0,class:"cell"},O=f("td",{class:"el-table__cell is-leaf"},[f("div",{class:"cell"},"运行模式")],-1),w={class:"el-table__cell is-leaf"},z={key:0,class:"cell"},S=f("td",{class:"el-table__cell is-leaf"},[f("div",{class:"cell"},"端口")],-1),F={class:"el-table__cell is-leaf"},D={key:0,class:"cell"},q=f("td",{class:"el-table__cell is-leaf"},[f("div",{class:"cell"},"客户端数")],-1),A={class:"el-table__cell is-leaf"},B={key:0,class:"cell"},K=f("td",{class:"el-table__cell is-leaf"},[f("div",{class:"cell"},"运行时间(天)")],-1),R={class:"el-table__cell is-leaf"},C={key:0,class:"cell"},E=f("td",{class:"el-table__cell is-leaf"},[f("div",{class:"cell"},"使用内存")],-1),I={class:"el-table__cell is-leaf"},P={key:0,class:"cell"},T=f("td",{class:"el-table__cell is-leaf"},[f("div",{class:"cell"},"使用CPU")],-1),U={class:"el-table__cell is-leaf"},G={key:0,class:"cell"},H=f("td",{class:"el-table__cell is-leaf"},[f("div",{class:"cell"},"内存配置")],-1),J={class:"el-table__cell is-leaf"},L={key:0,class:"cell"},M=f("td",{class:"el-table__cell is-leaf"},[f("div",{class:"cell"},"AOF是否开启")],-1),N={class:"el-table__cell is-leaf"},Q={key:0,class:"cell"},V=f("td",{class:"el-table__cell is-leaf"},[f("div",{class:"cell"},"RDB是否成功")],-1),W={class:"el-table__cell is-leaf"},X={key:0,class:"cell"},Y=f("td",{class:"el-table__cell is-leaf"},[f("div",{class:"cell"},"Key数量")],-1),Z={class:"el-table__cell is-leaf"},$={key:0,class:"cell"},ll=f("td",{class:"el-table__cell is-leaf"},[f("div",{class:"cell"},"网络入口/出口")],-1),el={class:"el-table__cell is-leaf"},al={key:0,class:"cell"},sl=f("div",null,[f("span",null," 命令统计")],-1),cl={class:"el-table el-table--enable-row-hover el-table--medium"},tl=f("div",null,[f("span",null," 内存信息")],-1),nl={class:"el-table el-table--enable-row-hover el-table--medium"};l("default",c({__name:"index",props:{msg:{type:String,required:!0}},setup(l){const c=t({tableData:[],commandstatsOpt:null,usedmemoryOpt:null});let il=n({}),dl=n(""),ul=n("");return i((()=>{a().then((l=>{il.value=l.data,_((()=>{c.commandstatsOpt=s(dl.value,"macarons"),c.commandstatsOpt.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"命令",type:"pie",roseType:"radius",radius:[15,95],center:["50%","38%"],data:l.data.commandStats,animationEasing:"cubicInOut",animationDuration:1e3}]}),c.usedmemoryOpt=s(ul.value,"macarons"),c.usedmemoryOpt.setOption({tooltip:{formatter:"{b} <br/>{a} : "+il.value.info.used_memory_human},series:[{name:"峰值",type:"gauge",min:0,max:1e3,detail:{formatter:il.value.info.used_memory_human},data:[{value:parseFloat(il.value.info.used_memory_human),name:"内存消耗"}]}]})}))}))})),(l,a)=>{const s=d("el-card"),c=d("el-col"),t=d("el-row");return y(),u("div",e,[o(t,null,{default:r((()=>[o(c,{span:24,class:"card-box"},{default:r((()=>[o(s,null,{header:r((()=>[g])),default:r((()=>[f("div",p,[f("table",j,[f("tbody",null,[f("tr",null,[h,f("td",k,[m(il).info?(y(),u("div",x,b(m(il).info.redis_version),1)):v("",!0)]),O,f("td",w,[m(il).info?(y(),u("div",z,b("standalone"==m(il).info.redis_mode?"单机":"集群"),1)):v("",!0)]),S,f("td",F,[m(il).info?(y(),u("div",D,b(m(il).info.tcp_port),1)):v("",!0)]),q,f("td",A,[m(il).info?(y(),u("div",B,b(m(il).info.connected_clients),1)):v("",!0)])]),f("tr",null,[K,f("td",R,[m(il).info?(y(),u("div",C,b(m(il).info.uptime_in_days),1)):v("",!0)]),E,f("td",I,[m(il).info?(y(),u("div",P,b(m(il).info.used_memory_human),1)):v("",!0)]),T,f("td",U,[m(il).info?(y(),u("div",G,b(parseFloat(m(il).info.used_cpu_user_children).toFixed(2)),1)):v("",!0)]),H,f("td",J,[m(il).info?(y(),u("div",L,b(m(il).info.maxmemory_human),1)):v("",!0)])]),f("tr",null,[M,f("td",N,[m(il).info?(y(),u("div",Q,b("0"==m(il).info.aof_enabled?"否":"是"),1)):v("",!0)]),V,f("td",W,[m(il).info?(y(),u("div",X,b(m(il).info.rdb_last_bgsave_status),1)):v("",!0)]),Y,f("td",Z,[m(il).dbSize?(y(),u("div",$,b(m(il).dbSize),1)):v("",!0)]),ll,f("td",el,[m(il).info?(y(),u("div",al,b(m(il).info.instantaneous_input_kbps)+"kps/"+b(m(il).info.instantaneous_output_kbps)+"kps ",1)):v("",!0)])])])])])])),_:1})])),_:1}),o(c,{span:12,class:"card-box"},{default:r((()=>[o(s,null,{header:r((()=>[sl])),default:r((()=>[f("div",cl,[f("div",{ref_key:"commandstats",ref:dl,style:{height:"420px"}},null,512)])])),_:1})])),_:1}),o(c,{span:12,class:"card-box"},{default:r((()=>[o(s,null,{header:r((()=>[tl])),default:r((()=>[f("div",nl,[f("div",{ref_key:"usedmemory",ref:ul,style:{height:"420px"}},null,512)])])),_:1})])),_:1})])),_:1})])}}}))}}}));
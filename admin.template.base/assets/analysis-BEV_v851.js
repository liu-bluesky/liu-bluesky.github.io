import"./vue-CVNGtIj_.js";import{u as s,a as u}from"./vue-router-D7bIofKn.js";import{i as o}from"./echarts-Dkb_i_rp.js";import{_ as m}from"./index-DkSUJrfs.js";import{d as p,r as n,i as l,b as c,j as d,c as f,k as y,o as B}from"./@vue-4wuvJO_G.js";import"./axios-CdcsOsvR.js";import"./tslib-BDyQ-Jie.js";import"./zrender-JdQgtl18.js";import"./vuex-CDsxXceG.js";import"./js-cookie-Cz0CWeBA.js";import"./path-browserify-D3uKt2uU.js";import"./vue-i18n-Bt9z2wfA.js";import"./@intlify-fCQYzvHO.js";import"./@vueuse-g1uILd_S.js";import"./element-easy-print-IlIR9WEy.js";import"./mockjs-DsfWEKpx.js";import"./vue3-draggable-resizable-yn-BhhoUBD4.js";import"./element-plus-CvdjtRA4.js";import"./lodash-es-CiJSjksT.js";import"./@element-plus-DtKFL0Hn.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-CuLmuTop.js";import"./async-validator-D3FX-SGt.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-B55MhO6l.js";import"./element-easy-form-j6O3PxFI.js";import"./vuedraggable-C23OG9zM.js";import"./sortablejs-C1wvN1Nu.js";import"./@vue-monaco-CTUC9hHy.js";import"./uuid-CQkTLCs1.js";import"./nprogress-C1nr5Arz.js";/* empty css                    */const E={class:"commonBoxmp"},v=p({__name:"analysis",setup(A){s(),u(),n(!0),l({data:{a:1}});const r=()=>{var a=document.getElementById("traffic"),t=o(a),e;e={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["小程序","移动端","pc端"]},toolbox:{feature:{saveAsImage:{}}},xAxis:[{type:"category",boundaryGap:!1,data:["第一季度","第二季度","第三季度","第四季度"]}],yAxis:[{type:"value"}],series:[{name:"小程序",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"移动端",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"pc端",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]}]},e&&t.setOption(e),window.addEventListener("resize",()=>{t.resize()})},i=()=>{var a=document.getElementById("sales"),t=o(a),e;e={title:{text:"销量前五商品",subtext:"1月",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"商品名",type:"pie",radius:"50%",data:[{value:1048,name:"手机"},{value:735,name:"平板"},{value:580,name:"台式机"},{value:484,name:"智能手环"},{value:300,name:"智能手表"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},e&&t.setOption(e),window.addEventListener("resize",()=>{t.resize()})};return c(()=>{setTimeout(()=>{r(),i()},1e3)}),(a,t)=>{const e=d("EasyPrint");return B(),f("div",E,[y(e)])}}}),ee=m(v,[["__scopeId","data-v-52ef586c"]]);export{ee as default};
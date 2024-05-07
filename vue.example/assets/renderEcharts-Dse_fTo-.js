import"./vue-C5dO_luG.js";import{u as y,a as b}from"./vue-router-BozZHOWV.js";import{d as S,r as e,bS as w,bT as C,v as M,f as D,h as d,o as F,c as E,i as n,j as h,u as s,bU as k,bV as A,a as O,m as z,bW as P}from"./@vue-CEwL1emF.js";import{F as L}from"./file-saver-BBbes1LX.js";import{t as I}from"./html-to-image-BMEuJ5ne.js";import{_ as R}from"./index-GwR-I7z6.js";import"./ace-builds-BgbZLK3Y.js";import"./vuex-Ba7ek5fU.js";import"./path-browserify-CtykbOjM.js";import"./@vueuse-DfzPTH68.js";import"./axios-DHSC6jYe.js";import"./js-cookie-Cz0CWeBA.js";import"./element-plus-DMVJK10x.js";import"./lodash-es-WEemOz_S.js";import"./@element-plus-DNaH03KG.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-CdRyolhI.js";import"./async-validator-D3FX-SGt.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-CtcGg-6p.js";import"./nprogress-DI8p4ty5.js";/* empty css                    */import"./element-easy-form-4sEWskrm.js";import"./mockjs-DBNDAG0j.js";import"./vuedraggable-CHX8LlEE.js";import"./sortablejs-Df4VMxQp.js";import"./vue3-ace-editor-D2yfFFZ4.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./uuid-D8aEg3BZ.js";const T=()=>`
  <template>
  <div
    class="content"
    :style="{
      height: height,
      width: width,
    }"
  >
    <img src="/vue.example/dizuo.png" class="dizuo" alt="" />
    <div id="container"></div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { getSeriesPie3D, getParametricEquation } from "./tool";
import "echarts";
import "echarts-gl";
const props = defineProps({
  width: {
    //列数据
    type: String,
    default: "930px",
  },
  height: {
    type: String,
    default: "492px",
  },
});
onMounted(() => {
  getEcharts();
});
const getEcharts = () => {
  let selectedIndex = "";
  let hoveredIndex = "";
  // 传入数据生成 option
  let data = [
    {
      name: "预付款",
      value: 925,
      itemStyle: {
        color: "#02A4F4",
      },
    },
    {
      name: "其他款项",
      value: 200,
      itemStyle: {
        color: "#43DEDC",
      },
    },
  ];
  let series = getSeriesPie3D({
    pieData: data,
    internalDiameterRatio: 0,
    bottomk: 0,
    pieHeight: 10,
  });
  let option = {
    
    fontFamily: "Source Han Sans CN",
    legend: {
      show: true,
      bottom: 10,
      itemHeight: 14,
      itemWidth: 24,
      itemGap: 30,
      textStyle: {
        color: "#D3E4FE",
        fontSize: 12,
        fontWeight: "400",
      },
      data: data,
    },
    tooltip: {
      formatter: (params) => {
        if (params.seriesName !== "mouseoutSeries") {
          return params.seriesName+"<br/><span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:"+params.color+";'></span>"+ series[params.seriesIndex].pieData.value;
        }
      },
    },
    xAxis3D: {
      min: -1,
      max: 1,
    },
    yAxis3D: {
      min: -1,
      max: 1,
    },
    zAxis3D: {
      min: -1,
      max: 1,
    },

    grid3D: {
      show: false,
      boxHeight: 15,
      height: "100%",
      width: "100%",
      //  postEffect:{
      //   enable:true
      //  },
      viewControl: {
        //3d效果可以放大、旋转等，请自己去查看官方配置
        alpha: 25,
        // 饼块开始得角度
        beta: -10,
        rotateSensitivity: 1,
        zoomSensitivity: 0,
        panSensitivity: 0,
        autoRotate: false,
        distance: 500,
        autoRotateSpeed: 10,
        autoRotateAfterStill: 10,
      },
    },
    series: series,
  };
  //构建3d饼状图
  let myChart = echarts.init(document.getElementById("container"));
  // 传入数据生成 option
  // myChart.setOption(option);
  // 监听 mouseover，近似实现高亮（放大）效果
  myChart.on("click", function (params) {
    // 准备重新渲染扇形所需的参数
    let isSelected;
    let isHovered;
    let startRatio;
    let endRatio;
    let k;
    let i;

    // 如果触发 mouseover 的扇形当前已高亮，则不做操作
    if (hoveredIndex === params.seriesIndex) {
      return;

      // 否则进行高亮及必要的取消高亮操作
    } else {
      // 如果当前有高亮的扇形，取消其高亮状态（对 option 更新）
      if (hoveredIndex !== "") {
        // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 false。
        // isSelected = option.series[hoveredIndex].pieStatus.selected;
        isSelected = false;
        startRatio = option.series[hoveredIndex].pieData.startRatio;
        endRatio = option.series[hoveredIndex].pieData.endRatio;
        k = option.series[hoveredIndex].pieStatus.k;
        i = 10;
        // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
        option.series[hoveredIndex].parametricEquation = getParametricEquation(
          startRatio,
          endRatio,
          isSelected,
          isHovered,
          k,
          i
        );
        option.series[hoveredIndex].pieStatus.hovered = isHovered;

        // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
        hoveredIndex = "";
      }

      // 如果触发 mouseover 的扇形不是透明圆环，将其高亮（对 option 更新）
      if (params.seriesName !== "mouseoutSeries") {
        // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
        // isSelected = option.series[params.seriesIndex].pieStatus.selected;
        isSelected = true;
        startRatio = option.series[params.seriesIndex].pieData.startRatio;
        endRatio = option.series[params.seriesIndex].pieData.endRatio;
        k = option.series[params.seriesIndex].pieStatus.k;

        // 对当前点击的扇形，执行高亮操作（对 option 更新）
        option.series[params.seriesIndex].parametricEquation =
          getParametricEquation(
            startRatio,
            endRatio,
            isSelected,
            isHovered,
            k,
            15
          );
        option.series[params.seriesIndex].pieStatus.hovered = isHovered;

        // 记录上次高亮的扇形对应的系列号 seriesIndex
        hoveredIndex = params.seriesIndex;
      }

      // 使用更新后的 option，渲染图表
      myChart.setOption(option);
    }
  });
  // 初始化激活数据
  const initIndex = 1;
  // 对当前点击的扇形，执行高亮操作（对 option 更新）
  option.series[initIndex].parametricEquation = getParametricEquation(
    option.series[initIndex].pieData.startRatio,
    option.series[initIndex].pieData.endRatio,
    true,
    false,
    option.series[initIndex].pieStatus.k,
    15
  );
  // 记录上次高亮的扇形对应的系列号 seriesIndex
  hoveredIndex = initIndex;
  // 使用更新后的 option，渲染图表
  myChart.setOption(option);
  // 修正取消高亮失败的 bug
  // myChart.on('globalout', function () {
  //     if (hoveredIndex !== '') {
  //         // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
  //         isSelected = option.series[hoveredIndex].pieStatus.selected;
  //         isHovered = false;
  //         k = option.series[hoveredIndex].pieStatus.k;
  //         startRatio = option.series[hoveredIndex].pieData.startRatio;
  //         endRatio = option.series[hoveredIndex].pieData.endRatio;
  //         // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
  //        i = 10
  //         option.series[hoveredIndex].parametricEquation = getParametricEquation(
  //             startRatio,
  //             endRatio,
  //             isSelected,
  //             isHovered,
  //             k,
  //             i
  //         );
  //         option.series[hoveredIndex].pieStatus.hovered = isHovered;

  //         // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
  //         hoveredIndex = '';
  //     }

  //     // 使用更新后的 option，渲染图表
  //     myChart.setOption(option);
  // });
};
const count = ref(0);
const state = reactive({});
<\/script>

<style scoped >
.content {
  position: relative;
  background-color: #022b66;
  box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  border: 1px solid rgba(19, 127, 212, 0.6);
}
#container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 2;
}
.dizuo {
  z-index: 1;
  position: absolute;
  bottom: 106px;
  left: 50%;
  width: 443px;
  height: 151px;
  transform: translateX(-48%);
}
</style>

  
  `,B=()=>`
  <template>
  <div
    class="content"
    :style="{
      height: height,
      width: width,
    }"
  >
    <img src="/vue.example/dizuo.png" class="dizuo" alt="" />
    <div id="container2"></div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { getSeriesPie3D, getParametricEquation } from "./tool";
import  "echarts";
import "echarts-gl";
const props = defineProps({
  width: {
    //列数据
    type: String,
    default: "930px",
  },
  height: {
    type: String,
    default: "492px",
  },
});
onMounted(() => {
  getEcharts();
});
const getEcharts = () => {
  let selectedIndex = "";
  let hoveredIndex = "";
  // 传入数据生成 option
  let data = [
    {
      name: "电气维保",
      value: 25,
      itemStyle: {
        color: "#00ADEF",
      },
    },
    {
      name: "机液维保",
      value: 20,
      itemStyle: {
        color: "#6E67E3",
      },
    },{
      name: "项目经理",
      value: 25,
      itemStyle: {
        color: "#E2698D",
      },
    },
    {
      name: "操作手",
      value: 20,
      itemStyle: {
        color: "#30B878",
      },
    },
  ];
  let series = getSeriesPie3D({
    pieData: data,
    internalDiameterRatio:0.6,
    bottomk: 0,
  });
  let option = {
    fontFamily: "Source Han Sans CN",
    legend: {
      show: true,
      bottom: 10,
      itemHeight: 14,
      itemWidth: 24,
      itemGap: 30,
      textStyle: {
        color: "#D3E4FE",
        fontSize: 12,
        fontWeight: "400",
      },
      data: data,
    },
    tooltip: {
      formatter: (params) => {
        if (params.seriesName !== "mouseoutSeries") {
          return params.seriesName+"<br/><span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:"+params.color+";'></span>"+ series[params.seriesIndex].pieData.value;
        }
      },
    },
    xAxis3D: {
      min: -1,
      max: 1,
    },
    yAxis3D: {
      min: -1,
      max: 1,
    },
    zAxis3D: {
      min: -1,
      max: 1,
    },

    grid3D: {
      show: false,
      boxHeight: 15,
      height: "100%",
      width: "100%",
      //  postEffect:{
      //   enable:true
      //  },
      viewControl: {
        //3d效果可以放大、旋转等，请自己去查看官方配置
        alpha: 25,
        // 饼块开始得角度
        beta: 190,
        rotateSensitivity: 1,
        zoomSensitivity: 0,
        panSensitivity: 0,
        autoRotate: false,
        distance: 260,
        autoRotateSpeed: 10,
        autoRotateAfterStill: 10,
      },
    },
    series: series,
  };
  //构建3d饼状图
  let myChart = echarts.init(document.getElementById("container2"));
  // 传入数据生成 option
  myChart.setOption(option);

};
const count = ref(0);
const state = reactive({});
<\/script>


<style scoped >
.content {
  position: relative;
  background-color: #022b66;
  box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  border: 1px solid rgba(19, 127, 212, 0.6);
}
#container2 {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 2;
}
.dizuo {
  z-index: 1;
  position: absolute;
  bottom: 106px;
  left: 50%;
  width: 443px;
  height: 151px;
  transform: translateX(-48%);
}
</style>

  
  `,j=()=>`
  <template>
  <div
    class="content"
    :style="{
      height: height,
      width: width,
    }"
  >
    <img src="/vue.example/dizuo.png" class="dizuo3" alt="" />
    <div id="container3"></div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { getSeriesPie3D, getParametricEquation } from "./tool";
import  "echarts";
import "echarts-gl";
const props = defineProps({
  width: {
    //列数据
    type: String,
    default: "930px",
  },
  height: {
    type: String,
    default: "492px",
  },
});
onMounted(() => {
  getEcharts();
});
const getEcharts = () => {
  let selectedIndex = "";
  let hoveredIndex = "";
  // 传入数据生成 option
  let data = [
    {
      name: "电气维保",
      value: 25,
      itemStyle: {
        color: "#00ADEF",
      },
    },
    {
      name: "机液维保",
      value: 20,
      itemStyle: {
        color: "#6E67E3",
      },
    },{
      name: "项目经理",
      value: 25,
      itemStyle: {
        color: "#E2698D",
      },
    },
    {
      name: "操作手",
      value: 20,
      itemStyle: {
        color: "#30B878",
      },
    },
  ];
  let series = getSeriesPie3D({
    pieData: data,
    internalDiameterRatio:0,
    bottomk: 0,
    pieHeight: 46,
  });
  let option = {
    fontFamily: "Source Han Sans CN",
    legend: {
      show: true,
      bottom: 10,
      itemHeight: 14,
      itemWidth: 24,
      itemGap: 30,
      textStyle: {
        color: "#D3E4FE",
        fontSize: 12,
        fontWeight: "400",
      },
      data: data,
    },
    tooltip: {
      formatter: (params) => {
        if (params.seriesName !== "mouseoutSeries") {
          return params.seriesName+"<br/><span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:"+params.color+";'></span>"+ series[params.seriesIndex].pieData.value;
        }
      },
    },
    xAxis3D: {
      min: -1,
      max: 1,
    },
    yAxis3D: {
      min: -1,
      max: 1,
    },
    zAxis3D: {
      min: -1,
      max: 1,
    },

    grid3D: {
      show: false,
      boxHeight: 15,
      height: "100%",
      width: "100%",
      //  postEffect:{
      //   enable:true
      //  },
      viewControl: {
        //3d效果可以放大、旋转等，请自己去查看官方配置
        alpha: 25,
        // 饼块开始得角度
        beta: 190,
        rotateSensitivity: 1,
        zoomSensitivity: 0,
        panSensitivity: 0,
        autoRotate: false,
        distance: 400,
        autoRotateSpeed: 10,
        autoRotateAfterStill: 10,
      },
    },
    series: series,
  };
  //构建3d饼状图
  let myChart = echarts.init(document.getElementById("container3"));
  // 传入数据生成 option
  myChart.setOption(option);

};
const count = ref(0);
const state = reactive({});
<\/script>

<style scoped >
.content {
  position: relative;
  background-color: #022b66;
  box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  border: 1px solid rgba(19, 127, 212, 0.6);
}
#container3 {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 2;
}
.dizuo3 {
  z-index: 1;
  position: absolute;
  bottom: 106px;
  left: 50%;
  width: 443px;
  height: 151px;
  transform: translateX(-48%);
}
</style>

  
  `,W=()=>`
  <template>
  <div
    class="content"
    :style="{
      height: height,
      width: width,
    }"
  >
    <img src="/vue.example/dizuo.png" class="dizuo3" alt="" />
    <div id="container3"></div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { getSeriesPie3D, getParametricEquation } from "./tool";
import  "echarts";
import "echarts-gl";
const props = defineProps({
  width: {
    //列数据
    type: String,
    default: "930px",
  },
  height: {
    type: String,
    default: "492px",
  },
});
onMounted(() => {
  getEcharts();
});
const getEcharts = () => {
  let selectedIndex = "";
  let hoveredIndex = "";
  // 传入数据生成 option
  let data = [
    {
      name: "电气维保",
      value: 25,
      itemStyle: {
        color: "#00ADEF",
      },
    },
    {
      name: "机液维保",
      value: 20,
      itemStyle: {
        color: "#6E67E3",
      },
    },{
      name: "项目经理",
      value: 25,
      itemStyle: {
        color: "#E2698D",
      },
    },
    {
      name: "操作手",
      value: 20,
      itemStyle: {
        color: "#30B878",
      },
    },
  ];
  let series = getSeriesPie3D({
    pieData: data,
    internalDiameterRatio:0,
    bottomk: 0,
    pieHeight: 46,
  });
  let option = {
    fontFamily: "Source Han Sans CN",
    legend: {
      show: true,
      bottom: 10,
      itemHeight: 14,
      itemWidth: 24,
      itemGap: 30,
      textStyle: {
        color: "#D3E4FE",
        fontSize: 12,
        fontWeight: "400",
      },
      data: data,
    },
    tooltip: {
      formatter: (params) => {
        if (params.seriesName !== "mouseoutSeries") {
          return params.seriesName+"<br/><span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:"+params.color+";'></span>"+ series[params.seriesIndex].pieData.value;
        }
      },
    },
    xAxis3D: {
      min: -1,
      max: 1,
    },
    yAxis3D: {
      min: -1,
      max: 1,
    },
    zAxis3D: {
      min: -1,
      max: 1,
    },

    grid3D: {
      show: false,
      boxHeight: 15,
      height: "100%",
      width: "100%",
      //  postEffect:{
      //   enable:true
      //  },
      viewControl: {
        //3d效果可以放大、旋转等，请自己去查看官方配置
        alpha: 25,
        // 饼块开始得角度
        beta: 190,
        rotateSensitivity: 1,
        zoomSensitivity: 0,
        panSensitivity: 0,
        autoRotate: false,
        distance: 400,
        autoRotateSpeed: 10,
        autoRotateAfterStill: 10,
      },
    },
    series: series,
  };
  //构建3d饼状图
  let myChart = echarts.init(document.getElementById("container3"));
  // 传入数据生成 option
  myChart.setOption(option);

};
const count = ref(0);
const state = reactive({});
<\/script>

<style scoped >
.content {
  position: relative;
  background-color: #022b66;
  box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  border: 1px solid rgba(19, 127, 212, 0.6);
}
#container3 {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 2;
}
.dizuo3 {
  z-index: 1;
  position: absolute;
  bottom: 106px;
  left: 50%;
  width: 443px;
  height: 151px;
  transform: translateX(-48%);
}
</style>

  
  `,_=()=>`
  <template>
  <div
    class="content"
    :style="{
      height: height,
      width: width,
    }"
  >
    <div id="huikuan-echarts"></div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import "echarts";
const props = defineProps({
  width: {
    //列数据
    type: String,
    default: "930px",
  },
  height: {
    type: String,
    default: "492px",
  },
});
onMounted(() => {
  getEcharts();
});
const state = reactive({
  huikuna: {
    weihuikuan_yidaoqi: 125, //已到期
    weihuikuan_weidaoqi: 125, //未到期
    yihuikuan: 750, //已回款
  },
});
const getEcharts = () => {
  let data = [
    {
      value: state.huikuna.weihuikuan_yidaoqi,
      name: "已到期",
    },
    {
      value: state.huikuna.weihuikuan_weidaoqi,
      name: "未到期",
    },
    {
      value: state.huikuna.yihuikuan,
      name: "已回款金额",
      labelLine: {
        lineStyle: {
          width: 0,
        },
      },
    },
  ];
  let weihuikuanAll =
    state.huikuna.weihuikuan_yidaoqi + state.huikuna.weihuikuan_weidaoqi;

  let myChart = echarts.init(document.getElementById("huikuan-echarts"));
  let option = {
    color: ["#F486B9", "#617DFB", "#173667", "#FDCE34", "#0099F9", "#fa8c35"],
    tooltip: {
      show: false,
      backgroundColor: "#02132fC9",
      borderColor: "#0D97E460",
      textStyle: {
        fontSize: 16,
        color: "#DCDCDC",
      },
      formatter: (params) => {},
    },

    series: [
      {
        name: "",
        type: "pie",
        startAngle: 45, 
        center: ["35%", "50%"],
        radius: ["55%", "75%"],
        avoidLabelOverlap: false,
       
        label: {
          textStyle: {
            fontSize: 16,
            color: "#fff",
          },
          formatter: function(params) {
            let vv = 'a';
            if (params.dataIndex === 2) {
              return '';
            } else if (params.dataIndex === 0) {
              vv = 'a';
            } else if (params.dataIndex === 1) {
              vv = 'b';
            }
            let str = '{' + vv + '|';
            str += params.name + '\\n' + params.value + '万 ' + parseFloat(((params
              .value / (
                weihuikuanAll)) * 100).toFixed(2)) + '%';
            str += '}';
            return str;
          },
          rich: {
            a: {
              color: "#F486B9",
              fontSize: 16,
              align: "center",
              lineHeight: 25,
              fontWeight: 600,
            }, 
            b: {
              color: "#617DFB",
              fontSize: 16,
              align: "center",
              lineHeight: 25,
              fontWeight: 600,
            },
          },
        },
        data: data,
      },
      {
        name: "",
        type: "pie",
        startAngle: 45, // 这里将起始角度设置为180度
        selectedMode: "single",
        center: ["35%", "50%"],
        radius: [0, "45%"],
        label: {
          position: "inner",
          textStyle: {
            fontSize: 14,
            color: "#fff",
            lineHeight: 20,
          },
          formatter: (params) => {
            return params.name + 
            "\\n" +
             params.value +"万"+
            "\\n" +
             params.percent + "%";
             
                },
        },

        data: [
          {
            value:
              state.huikuna.weihuikuan_weidaoqi +
              state.huikuna.weihuikuan_yidaoqi,
            name: "未回款",
          },
          {
            value: state.huikuna.yihuikuan,
            name: "已回款",
          },
        ],
      },
    ],
  };
  myChart.setOption(option);
};
const count = ref(0);
<\/script>

<style scoped>
.content {
  position: relative;
  background-color: #022b66;
  box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  border: 1px solid rgba(19, 127, 212, 0.6);
}
#huikuan-echarts {
  width: 100%;
  height: 100%;
}
</style>

  `,X=()=>`
 
  <template>
  <div
    class="content"
    :style="{
      height: height,
      width: width,
    }"
  >
    <div id="huikuan-echarts"></div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import "echarts";
const props = defineProps({
  width: {
    //列数据
    type: String,
    default: "930px",
  },
  height: {
    type: String,
    default: "492px",
  },
});
onMounted(() => {
  getEcharts();
});

const getEcharts = () => {
 //展示数据
const optionData = [];
//扇形图颜色数据
const colorList = [
   { color1: '#E2698D', color2: '#A94E6D' },
    { color1: '#DE7110', color2: '#FECD70' },
    { color1: '#D09F08', color2: '#F7CB45' },
      { color1: '#238483', color2: '#55C27C' },
   { color1: '#45EAFF', color2: '#40AFAF' },
      { color1: '#12B3F8', color2: '#7DE8FF' },
     { color1: '#0176D3', color2: '#13B7FF' },
];
//请求的数据
const resultData = [
   {
      name: '罗汉松',
      value: 95,
      percent: '8.05'
   },
   {
      name: '四季桂',
      value: 120,
      percent: '10.17'
   },
   {
      name: '马齿笕',
      value: 98,
      percent: '8.31'
   },
   {
      name: '青江藤',
      value: 90,
      percent: '7.63'
   },
   {
      name: '麻竹',
      value: 100,
      percent: '8.48'
   },
   {
      name: '鸭舌草',
      value: 97,
      percent: '8.22'
   },
   {
      name: '金鱼藻',
      value: 100,
      percent: '8.47'
   },
 
];
let sum = 0;
resultData.forEach(item => {
   sum += item.value;
})
resultData.forEach(item => {
   optionData.push({ value: item.value, name: item.name });
   optionData.push({ name: '', value: sum / 100, itemStyle: { color: 'transparent' } });
})

  let myChart = echarts.init(document.getElementById("huikuan-echarts"));
  let option = {
   //你的代码
   legend: [
      {
        show:false,
         orient: 'vertical',
         right: '10%',
         top: '10%',
         itemGap: 30,
         textStyle: {
            color: '#ffffff',
            fontSize: 12,
            rich: {
               name: {
                  width: 80,
                  fontSize: 16,
               },
               value: {
                  width: 20,
                  fontSize: 16,
                  padding: [0, 0, 0, 50]
               },
               percent: {
                  width: 10,
                  fontSize: 16,
               },
            },
         },
         data: resultData,
         formatter: (name) => {
            if (resultData.length) {
               const item = resultData.filter((item) => item.name === name)[0];
               return \`{name|\${name}}{value| \${item.percent}%}{value| \${item.value}km²}\`;
            }
         },
      },
   ],
   tooltip: {
    show:false,
      trigger: 'item',
      formatter(params) {
         let res = '';
         const { marker, name, value } = params;
         if (name !== '') {
            res += \`\${marker}${name}:\${value}Km²\`
         }
         return res;
      }
   },
   grid:{
  
   },
   series: [
      {
         type: 'pie',
         roseType: 'radius',
         radius: ['20%', '60%'],
         center: ['50%', '50%'],
               label: {
          textStyle: {
            fontSize: 16,
            color: "#fff",
          },
          formatter: function(params) {
            console.log(params)
            return \`{a|\${params.name}}
{b|\${params.value}个(\${params.percent}%)}\`;
          },
          rich: {
            a: {
              color: "rgba(211, 228, 254, 1)",
              fontSize: 16,
              align: "center",
              lineHeight: 25,
              fontWeight: 600,
            }, 
            b: {
              color: "inherit",
              fontSize: 16,
              align: "center",
              lineHeight: 25,
              fontWeight: 600,
            },
          },
        },
         labelLine: {
            show: true,
         },
         itemStyle: {
            normal: {
               color(params) {
                  return colorList[parseInt(params.dataIndex / 2)].color1;
               }
            }
         },
         z: 3,
         data: optionData,
      },
      {
         type: 'pie',
         roseType: 'radius',
         radius: ['20%', '62%'],
         center: ['50%', '50%'],
         label: {
            show: false,
         },
         labelLine: {
            show: false,
         },
         itemStyle: {
            normal: {
               color(params) {
                  return colorList[parseInt(params.dataIndex / 2)].color2;
               }
            }
         },
         z: 2,
         data: optionData,
      }
   ]
}
  myChart.setOption(option);
};
const count = ref(0);
<\/script>

<style scoped>
.content {
  position: relative;
  background-color: #022b66;
  box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  border: 1px solid rgba(19, 127, 212, 0.6);
}
#huikuan-echarts {
  width: 100%;
  height: 100%;
}
</style>

  
  `,$=()=>`
 
 
  <template>
  <div
    class="content"
    :style="{
      height: height,
      width: width,
    }"
  >
    <div id="huikuan-echarts"></div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import "echarts";
const props = defineProps({
  width: {
    //列数据
    type: String,
    default: "930px",
  },
  height: {
    type: String,
    default: "492px",
  },
});
onMounted(() => {
  getEcharts();
});

const getEcharts = () => {
 //展示数据
const optionData = [];
 //展示数据
const optionData2 = [];
//扇形图颜色数据
const colorList = [
"#25CEF0","#E8574C","#D0D96F","#fff"
];
//请求的数据
const resultData = [
   {
      name: '罗汉松',
      value: 95,
      percent: '8.05'
   },
   {
      name: '四季桂',
      value: 120,
      percent: '10.17'
   },
   {
      name: '马齿笕',
      value: 98,
      percent: '8.31'
   },
];
let sum = 0;
resultData.forEach(item => {
   sum += item.value;
})
resultData.forEach((item,i) => {
   optionData.push({ value: item.value, name: item.name,label:{
              formatter: function(params) {
            console.log(params)
            return \`{a|\${params.name}}
{b|\${params.value}个(\${params.percent}%)}\`;
          },
   } });

        optionData2.push(
  { value: item.value, name: item.name,color:'#fff' }
    )
    optionData2.push(
       {
       value:10,
       name:"12",
     
       label:{
          position:"inside",
          backgroundColor:"#fff",
          width:15,
          height:15,
          borderWidth:4,
          borderTYpe:"solid",
         // borderColor:color[i],
          borderRadius:300
       }
    }
    )
})

  let myChart = echarts.init(document.getElementById("huikuan-echarts"));
  let option = {


   grid:{
  
   },
   color:colorList,
   series: [
      {
         type: 'pie',
         radius: ['50%', '60%'],
         center: ['50%', '50%'],
         itemStyle:{
            borderRadius:20,
         },
               label: {
          textStyle: {
            fontSize: 16,
            color: "#fff",
          },
  
          rich: {
            a: {
              color: "rgba(211, 228, 254, 1)",
              fontSize: 16,
              align: "center",
              lineHeight: 25,
              fontWeight: 600,
            }, 
            b: {
              color: "inherit",
              fontSize: 16,
              align: "center",
              lineHeight: 25,
              fontWeight: 600,
            },
          },
        },
         labelLine: {
            show: true,
         },
         data: optionData,
         z:1
      },
  {
         type: 'pie',
         radius: ['50%', '60%'],
         center: ['50%', '50%'],
         itemStyle:{
            borderRadius:20,
         },
               label: {
          textStyle: {
            fontSize: 16,
            color: "#fff",
          },
  
          rich: {
            a: {
              color: "rgba(211, 228, 254, 1)",
              fontSize: 16,
              align: "center",
              lineHeight: 25,
              fontWeight: 600,
            }, 
            b: {
              color: "inherit",
              fontSize: 16,
              align: "center",
              lineHeight: 25,
              fontWeight: 600,
            },
          },
        },
         labelLine: {
            show: true,
         },
         data: optionData2,
         z:3
      },
   ]
}
  myChart.setOption(option);
};
const count = ref(0);
<\/script>

<style scoped>
.content {
  position: relative;
  background-color: #022b66;
  box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  border: 1px solid rgba(19, 127, 212, 0.6);
}
#huikuan-echarts {
  width: 100%;
  height: 100%;
}
</style>

  
  

  
  `,H=()=>`
    <template>
    <div
      class="content"
   
    >
     <div :ref="echartsMap" id="mainChina"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, nextTick, onMounted, watch } from "vue";
  import "echarts";
  
  const state = reactive({
    option: {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        show: false,
      },
      grid: {
        left: "3%",
        right: "10%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
        name: "(个)",
        nameLocation: "end",
        nameGap: 35,
        boundaryGap: [0, 0.01],
        position: "top",
        nameTextStyle: {
          fontSize: 12,
          color: "#999999",
        },
        axisLabel: {
          color: "#D3E4FE",
        },
        splitLine: {
          lineStyle: {
            color: "#073370",
            width: 1,
            type: "dashed",
          },
        },
      },
      yAxis: {
        type: "category",
        axisTick: { show: false },
  
        data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
        axisLabel: {
          color: "#D3E4FE",
        },
        axisLine: {
          lineStyle: {
            color: "#073370",
            width: 1,
          },
        },
      },
      series: [
        {
          name: "2011",
          barWidth: 8,
          type: "bar",
          data: [1000, 2348, 2904, 1049, 1744, 6230],
          label: {
            show: true,
            precision: 1,
            position: "right",
            valueAnimation: true,
            color: "#D3E4FE",
            fontFamily: "monospace",
          },
          itemStyle: {
            barBorderRadius: [10, 10, 10, 10],
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "rgba(63,117,255,0)" },
                { offset: 1, color:"#0063FA" },
              ],
              global: false, // 缺省为 false
            },
          },
        },
        {
          name: "外圆",
          type: "scatter",
          emphasis: {
            scale: false,
          },
          symbol: "circle",
          symbolSize: [10, 10], // 进度条白点
          itemStyle: {
            show: true,
            barBorderRadius: [10, 10, 10, 10],
            color: "#77BEFF",
            shadowColor: "#3F75FF",
            shadowBlur: 11,
            // shadowOffsetY: 5,
            // shadowOffsetX: 5,
            borderWidth: 1,
            opacity: 1,
          },
          z: 2,
          data: [1000, 2348, 2904, 1049, 1744, 6230],
          animationDelay: 500,
        },
      ],
    },
  });
  let echartsMapel = ref("");
  let opt = null;
  const echartsMap = (e) => (echartsMapel.value = e);
  const init = () => {
    let myChart = echarts.init(echartsMapel.value);
    myChart.setOption(state.option);
    const setOption = (dataObj) => {
      let opt = myChart.getOption();
      Object.assign(opt, dataObj);
      myChart.setOption(opt);
    };
    return setOption;
  };
  
  onMounted(() => {
    init();
  });
  <\/script>
  
  <style scoped >
  .content {
    position: relative;
    width: 100%;
    box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  }
  #mainChina {
    width: 100%;
    height: 600px;
    background-color: #00184F;
  }
  </style>
  
  
    `,V=()=>`
    <template>
    <div
      class="content"
   
    >
     <div :ref="echartsMap" id="mainChina"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, nextTick, onMounted, watch } from "vue";
  import "echarts";
  
  const state = reactive({
    option: {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        show: false,
      },
      grid: {
        left: "3%",
        right: "10%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
     
        axisTick: { show: false },
        axisLabel: {
          color: "#D3E4FE",
        },
  
        data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
      },
      yAxis: {
        type: "value",
        
        name: "(个)",
        nameLocation: "end",
        nameGap: 35,
        boundaryGap: [0, 0.01],
        nameTextStyle: {
          fontSize: 12,
          color: "#999999",
        },
        splitLine: {
          lineStyle: {
            color: "#073370",
            width: 1,
            type: "dashed",
          },
        },
        axisLabel: {
          color: "#D3E4FE",
        },
        axisLine: {
          lineStyle: {
            color: "#073370",
            width: 1,
          },
        },
      },
      series: [
        {
          name: "2011",
          barWidth: 18,
          type: "bar",
          data: [1000, 2348, 2904, 1049, 1744, 6230],
          label: {
            show: true,
            precision: 1,
            position: "top",
            valueAnimation: true,
            color: "#D3E4FE",
            fontFamily: "monospace",
          },
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 1,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "rgba(63,117,255,0)" },
                { offset: 1, color:"#00AAFA" },
              ],
              global: false, // 缺省为 false
            },
          },
        },
      ],
    },
  });
  let echartsMapel = ref("");
  let opt = null;
  const echartsMap = (e) => (echartsMapel.value = e);
  const init = () => {
    let myChart = echarts.init(echartsMapel.value);
    myChart.setOption(state.option);
    const setOption = (dataObj) => {
      let opt = myChart.getOption();
      Object.assign(opt, dataObj);
      myChart.setOption(opt);
    };
    return setOption;
  };
  
  onMounted(() => {
    init();
  });
  <\/script>
  
  <style scoped >
  .content {
    position: relative;
    width: 100%;
    box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  }
  #mainChina {
    width: 100%;
    height: 600px;
    background-color: #00184F;
  }
  </style>
  
  
    `,Y=()=>`
    <template>
    <div
      class="content"
      :style="{
        height: height,
        width: width,
      }"
    >
        <div :ref="echartsMap" id="mainChina"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, nextTick, onMounted, watch } from "vue";
  import  "echarts";
  const offsetX = 20;
  const offsetY = 10;
  // 绘制左侧面
  const CubeLeft = echarts.graphic.extendShape({
     shape: {
        x: 0,
        y: 0,
     },
     buildPath: function (ctx, shape) {
        // 会canvas的应该都能看得懂，shape是从custom传入的
        const xAxisPoint = shape.xAxisPoint;
        // console.log(shape);
        const c0 = [shape.x, shape.y-5];
        const c1 = [shape.x - offsetX, shape.y - offsetY];
        const c2 = [xAxisPoint[0] - offsetX, xAxisPoint[1] - offsetY];
        const c3 = [xAxisPoint[0], xAxisPoint[1]-5];
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
     },
  });
  // 绘制右侧面
  const CubeRight = echarts.graphic.extendShape({
     shape: {
        x: 0,
        y: 0,
     },
     buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c1 = [shape.x, shape.y-5];
        const c2 = [xAxisPoint[0], xAxisPoint[1]-5];
        const c3 = [xAxisPoint[0] + offsetX, xAxisPoint[1] - offsetY];
        const c4 = [shape.x + offsetX, shape.y - offsetY];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
     },
  });
  // 绘制顶面
  const CubeTop = echarts.graphic.extendShape({
     shape: {
        x: 0,
        y: 0,
     },
     buildPath: function (ctx, shape) {
          const y = -1
        const c1 = [shape.x, shape.y+y-5];
        const c2 = [shape.x + offsetX, shape.y - offsetY+y] ; //右点
        const c3 = [shape.x, shape.y - offsetX+y+5];
        const c4 = [shape.x - offsetX, shape.y - offsetY+y];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
     },
  });
  // 注册三个面图形
  echarts.graphic.registerShape('CubeLeft', CubeLeft);
  echarts.graphic.registerShape('CubeRight', CubeRight);
  echarts.graphic.registerShape('CubeTop', CubeTop);
  
  const data  =[1000, 2348, 2904, 1049, 1744, 6230]
  /*
  基本数据类型
  引用数据类型（复杂类型） 个人建议 ref初始化变量 
  ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
  ref定义的数据访问的时候要多一个.value
  */
  const color = ["rgba(63,117,255,0)", "#0063FA"];
  const state = reactive({
    option:  {
    
      
  
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
  
      xAxis: {
        type: 'category',
        axisTick: { show: false },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        axisLabel: {
          color: "#97B2E0",
        },
      },
      yAxis: [
          {
        type: 'value',
        name:"(万元)", 
              axisLine: {
              show: true,
              lineStyle: {
                 color: '#00A8FF'
              }
           },
        nameTextStyle: {
            color:"#97B2E0",
            padding:[0,0,-550,-50]
        },
        axisLabel: {
          color: "#97B2E0",
        },
        splitLine: {
          show: false,
         
          },
          axisTick:{
              show:false
          }
      }
      ],
      series: [
      
        {
          type: 'custom',
          renderItem: (params, api) => {
             const location = api.coord([api.value(0), api.value(1)]);
             return {
                type: 'group',
                children: [
                   {
                      type: 'CubeLeft',
                      shape: {
                         api,
                         xValue: api.value(0),
                         yValue: api.value(1),
                         x: location[0],
                         y: location[1],
                         xAxisPoint: api.coord([api.value(0), 0]),
                      },
                      style: {
                         fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                               offset: 0,
                               color: '#39CEFF'
                            },
                            {
                               offset: 1,
                               color: 'rgba(51, 152, 188, 0)',
                            },
                         ]),
                      },
                   },
                   {
                      type: 'CubeRight',
  
                      shape: {
                         api,
                         xValue: api.value(0),
                         yValue: api.value(1),
                         x: location[0],
                         y: location[1],
                         xAxisPoint: api.coord([api.value(0), 0]),
                      },
                      style: {
                         fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                             {
                               offset: 0,
                               color: '#39CEFF'
                            },
                            {
                               offset: 1,
                               color: 'rgba(51, 152, 188, 0)',
                            },
                         ]),
                      },
                   },
                   {
                      type: 'CubeTop',
                      shape: {
                         api,
                         xValue: api.value(0),
                         yValue: api.value(1),
                         x: location[0],
                         y: location[1],
                         xAxisPoint: api.coord([api.value(0), 0]),
                      },
                      style: {
                         fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                               offset: 0,
                               color: '#00DEFF',
                            },
                            {
                               offset: 1,
                               color: '#00DEFF',
                            },
                         ]),
                      },
                   },
                ],
             };
          },
          data:data,
          
       },
           {
           type: 'bar',
           itemStyle: {
              color: 'transparent',
           },
           tooltip: {},
           data: data,
              label: {
            show: true,
            precision: 1,
            position: "top",
            valueAnimation: true,
            color: "#D3E4FE",
            fontFamily: "monospace",
            offset: [0, -10],
          },
        },
      ]
    },
  });
  let echartsMapel = ref("");
  let opt = null;
  const echartsMap = (e) => (echartsMapel.value = e);
  const init = () => {
    let myChart = echarts.init(echartsMapel.value);
    myChart.setOption(state.option);
    const setOption = (dataObj) => {
      let opt = myChart.getOption();
      Object.assign(opt, dataObj);
      myChart.setOption(opt);
    };
    return setOption;
  };
  const handleRun = (val) => {
    opt(val);
  };
  onMounted(() => {
    setTimeout(() => {
      opt = init();
    }, 500);
    window.addEventListener("resize", () => {
      opt();
    });
  });
  <\/script>
  
  <style scoped >
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  }
  #mainChina {
    width: 100%;
    height: 600px;
    background-color: #00184F;
  }
  </style>
  
    `,q=()=>`
  
  
    <template>
    <div
      class="content"
      :style="{
        height: height,
        width: width,
      }"
    >
        <div :ref="echartsMap" id="mainChina"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, nextTick, onMounted, watch } from "vue";
  import  "echarts";
const offsetX = 12;
const offsetY = 6;
const barWidth = 30
// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
   shape: {
      x: 0,
      y: 0,
   },
   buildPath: function (ctx, shape) {
      // 会canvas的应该都能看得懂，shape是从custom传入的
      const xAxisPoint = shape.xAxisPoint;
      // console.log(shape);
      const c0 = [shape.x, shape.y];
      const c1 = [shape.x - offsetX, shape.y - offsetY];
      const c2 = [xAxisPoint[0] - offsetX, xAxisPoint[1] - offsetY];
      const c3 = [xAxisPoint[0], xAxisPoint[1]];
      ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
   },
});
// 绘制右侧面
const CubeRight = echarts.graphic.extendShape({
   shape: {
      x: 0,
      y: 0,
   },
   buildPath: function (ctx, shape) {
      const xAxisPoint = shape.xAxisPoint;
      const c1 = [shape.x, shape.y];
      const c2 = [xAxisPoint[0], xAxisPoint[1]];
      const c3 = [xAxisPoint[0] + offsetX, xAxisPoint[1] - offsetY];
      const c4 = [shape.x + offsetX, shape.y - offsetY];
      ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
   },
});
// 绘制顶面
const CubeTop = echarts.graphic.extendShape({
   shape: {
      x: 0,
      y: 0,
   },
   buildPath: function (ctx, shape) {
      const c1 = [shape.x, shape.y];
      const c2 = [shape.x + offsetX, shape.y - offsetY]; //右点
      const c3 = [shape.x, shape.y - offsetX];
      const c4 = [shape.x - offsetX, shape.y - offsetY];
      ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
   },
});
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
const colorArr2 = [
   ['rgba(0, 159, 250, 1)', '#22F9E3', 'rgba(35, 235, 255, 1)'],
    ['rgba(252, 145, 56, 1)', 'rgba(252, 178, 115, 1)', 'rgba(255, 156, 84, 1)'],
]
  const colorArr = [
    {
      CubeLeft:['rgba(36, 240, 255, 1)','rgba(0, 125, 250,1)'],
      CubeRight:['rgba(36, 240, 255, 1)','rgba(0, 125, 250,1)'],
       CubeTop:['rgba(35, 235, 255, 1)'],
    },
     {
           CubeLeft:['rgba(252, 145, 56,1)','rgba(252, 178, 115,1)'],
      CubeRight:['rgba(240, 121, 44,1)','rgba(221, 86, 27,1)'],
       CubeTop:['rgba(255, 156, 84,1)'],
     }
  ]
let series = []
let xData = ['上行PRB利用率(%)', '下行PRB利用率(%)', '上行吞吐率(%)', '下行吞吐率(%)', '上行DB引用率', '下行DB引用率']
let legendArr = ['扩容前', '扩容后']
let datas = [
   ['20', '30', '40', '50', '30', '40',],
   ['70', '80', '80', '70', '80', '70'],
]
datas.forEach((item, index) => {
   series.push({
      type: 'custom',
      name: legendArr[index],
      renderItem: (params, api) => {
         const location = api.coord([api.value(0), api.value(1)]);
         return {
            type: 'group',
            x: (index - datas.length / 2) * barWidth + 15,
            children: [
               {
                  type: 'CubeLeft',
                  shape: {
                     api,
                     xValue: api.value(0),
                     yValue: api.value(1),
                     x: location[0],
                     y: location[1],
                     xAxisPoint: api.coord([api.value(0), 0]),
                  },
                  style: {
                     fill: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                        {
                           offset: 0,
                           color: colorArr[index % colorArr.length].CubeLeft[0],
                        },
                        {
                           offset: 1,
                           color: colorArr[index % colorArr.length].CubeLeft[1],
                        },
                     ]),
                  },
               },
               {
                  type: 'CubeRight',
                  shape: {
                     api,
                     xValue: api.value(0),
                     yValue: api.value(1),
                     x: location[0],
                     y: location[1],
                     xAxisPoint: api.coord([api.value(0), 0]),
                  },
                  style: {
                     fill: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                             {
                           offset: 0,
                           color: colorArr[index % colorArr.length].CubeRight[0],
                        },
                        {
                           offset: 1,
                           color: colorArr[index % colorArr.length].CubeRight[1],
                        },
                     ]),
                  },
               },
               {
                  type: 'CubeTop',
                  shape: {
                     api,
                     xValue: api.value(0),
                     yValue: api.value(1),
                     x: location[0],
                     y: location[1],
                     xAxisPoint: api.coord([api.value(0), 0]),
                  },
                  style: {
                     fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                           offset: 0,
                           color: colorArr[index % colorArr.length].CubeTop[0],
                        },
                        {
                           offset: 1,
                           color: colorArr[index % colorArr.length].CubeTop[0],
                        },
                     ]),
                  },
               },
            ],
         };
      },
      data: item
   }, {
      type: 'bar',
      name: legendArr[index],
      barWidth: 25,//当前适配，更改需要同时更改 offsetX,offsetY,barWidth
      label: {
         normal: {
            show: true,
            position: 'top',
            // formatter: (e) => {
            //    return e.value + '次';
            // },
            fontSize: 16,
            color: 'rgba(211, 228, 254, 1)',
            offset: [0, -10],
         },
      },
      itemStyle: {
         color: 'transparent',
      },
      tooltip: {},
      data: item,
   })
})
  /*
  基本数据类型
  引用数据类型（复杂类型） 个人建议 ref初始化变量 
  ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
  ref定义的数据访问的时候要多一个.value
  */
  const color = ["rgba(63,117,255,0)", "#0063FA"];
  const state = reactive({
    option:  {
   backgroundColor: '#012366',
   tooltip: {
      trigger: 'axis',
      borderWidth: 0,
      backgroundColor: 'rgba(8,36,68,.7)',
      color: '#fff',
      textStyle: {
         color: '#fff'
      },
      formatter: function (params, ticket, callback) {
         console.log(params)
         let str = params[0].name + '</br>';
         params.forEach((item, index) => {
            if (item.seriesType == 'custom')  //避免上方数字的bar也展示tooltip数据
               str += \`
          <div style='display:flex;justify-content:space-between;align-items:center'>
            <div style='margin-right:20px;'>
              <span style="display:inline-block;width:10px;height:10px;border-radius:5px;background-color:\${colorArr[index % colorArr.length].CubeTop[0]}"></span>
              &nbsp;\${item.seriesName}
            </div>
            <span>&nbsp;\${item.value ? item.value : '-'}</span>
          </div>\`
         })
         return str;
      },
   },
   grid: {
      left: 40,
      right: 40,
      top: 200,
      bottom: 35,
      containLabel: true
   },
   legend: {
      right: '20',
      top: '40',
      show: true,
      selectedMode: false, // 取消图例点击事件 目前图例显示隐藏指标值位置会错误
      textStyle: {
         color: 'white',
         fontSize: 16
      },
      data: legendArr.map((item, index) => {
         return {
            name: item,
            textStyle: {
               color: 'white',
               fontSize: 16
            },
            itemStyle: {
               color: colorArr[index % colorArr.length].CubeTop[0],
            }
         };
      }),
   },

   xAxis: {
      type: 'category',
      data: xData,
      axisLine: {
         show: true,
         lineStyle: {
            color: '#045d79'
            // width: 2
         }
      },
      axisTick: {
         show: false
      },
      axisLabel: {
         color: 'white',
         fontSize: 14
      }
   },
   yAxis: {
      type: 'value',
      axisLabel: {
         color: 'white',
         fontSize: 14
      },
      splitLine: {
         show: false
      },
      show: false
   },
   series: series,
   //数据过多避免重叠
   dataZoom: [
      {
         show: true,
         height: 10,
         xAxisIndex: [0],
         bottom: 20,
         showDetail: false,
         borderColor: 'transparent',
         textStyle: {
            fontSize: 0,
         },
         endValue: 12 / datas.length, //从0开始的相当于5个x轴的数据
         backgroundColor: 'rgba(0,0,0,0)', 
         borderWidth: 0,
         handleSize: '0%',
         handleStyle: {
            color: '#d3dee5',
         },
      },
   ]
},
  });
  let echartsMapel = ref("");
  let opt = null;
  const echartsMap = (e) => (echartsMapel.value = e);
  const init = () => {
    let myChart = echarts.init(echartsMapel.value);
    myChart.setOption(state.option);
    const setOption = (dataObj) => {
      let opt = myChart.getOption();
      Object.assign(opt, dataObj);
      myChart.setOption(opt);
    };
    return setOption;
  };
  const handleRun = (val) => {
    opt(val);
  };
  onMounted(() => {
    setTimeout(() => {
      opt = init();
    }, 500);
    window.addEventListener("resize", () => {
      opt();
    });
  });
  <\/script>
  
  <style scoped >
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  }
  #mainChina {
    width: 100%;
    height: 600px;
    background-color: #00184F;
  }
  </style>
  
    
    
    
    `,G=()=>`
    <template>
    <div
      class="content"
   
    >
     <div :ref="echartsMap" id="mainChina"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, nextTick, onMounted, watch } from "vue";
  import "echarts";
  
  const state = reactive({
    option: {

      //图表离容器的距离
      grid: {
         left: "10%",
         top: "10%",
         right: "10%",
         bottom: "10%",
      },
      //X轴
      xAxis: {
         data: ['库里', '科比', '詹姆斯', '乔丹', '杜兰特', '欧文', '威少'],
         axisLabel: {
            textStyle: {
               color: '#D3E4FE',
               fontSize: 16
            }
         },
         axisTick: {
            show: false //隐藏X轴刻度尺
         },
  
      axisLine: {
        show: true,
        lineStyle: {
           color: '#00A8FF'
        }
     },
      },
      //y轴
      yAxis: {
        name:"(万元)", 
       
        nameTextStyle: {
            color:"#97B2E0",
            padding:[0,0,-530,-10]
        },
        axisLabel: {
          textStyle: {
             color: '#D3E4FE',
             fontSize: 16
          }
       },
        axisTick:{
          show:false
      },
      splitLine: {
        show: false,
       
        },
      axisLine: {
        show: true,
        lineStyle: {
           color: '#00A8FF'
        },
        
     },
      },
      series: [{
         data: [2, 1, 4, 6, 1, 0, 1],
         label: {
            show: true,
            position: "top",
            distance: 0,
            color: "#D3E4FE",
            formatter: "{c}" + "MVP",
            offset:[0,-5]
         },
         name: '球星',
         //图表类型
         //折线图line,饼图pie，散点图scatter等等
         type: 'bar',
         barWidth: 30,
         itemStyle: {
            barBorderRadius: [20, 20, 0, 0],
            color: {
               x: 0,  //右
               y: 0,  //下
               x2: 0,  //左
               y2: 1,  //上
               colorStops: [
                  {
                     offset: 0.1,
                     color: '#00B4DB' // 0% 处的颜色
                  },
                  {
                     offset: 1,
                     color: '#0083B0' // 100% 处的颜色
                  }
               ]
            }
         }
      }]
   }
   
  });
  let echartsMapel = ref("");
  let opt = null;
  const echartsMap = (e) => (echartsMapel.value = e);
  const init = () => {
    let myChart = echarts.init(echartsMapel.value);
    myChart.setOption(state.option);
    const setOption = (dataObj) => {
      let opt = myChart.getOption();
      Object.assign(opt, dataObj);
      myChart.setOption(opt);
    };
    return setOption;
  };
  
  onMounted(() => {
    init();
  });
  <\/script>
  
  <style scoped >
  .content {
    position: relative;
    width: 100%;
    box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  }
  #mainChina {
    width: 100%;
    height: 600px;
    background-color: #00184F;
  }
  </style>
  
  
    `,N=()=>`
   
    <template>
    <div
      class="content"
   
    >
     <div :ref="echartsMap" id="mainChina"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, nextTick, onMounted, watch } from "vue";
  import "echarts";
  
  const state = reactive({
    option:  {
   //   backgroundColor:"#0F285C",
   grid: {
      containLabel: true,
      top: 30,
      right: 15,
      bottom: 30,
      left: 15
   },
   tooltip: {
      trigger: "axis",
      axisPointer: {
         type: 'none'
      },
   
      extraCssText: 'opacity: 0.8;background-color:#050F1B;padding:16px;box-shadow: 1px 6px 15px 1px rgba(0,0,0,0.13);border-radius: 4px;filter: blur(undefinedpx);border:none;'
   },
   xAxis: {
      // 类目轴
      type: "category",
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
         show: false //隐藏X轴刻度
      },
      
      axisLine: {
         lineStyle: {
            color: "rgba(87, 206, 234, 1)"
         }
      },
      axisLabel: {
          color: "#D3E4FE",
        },
   },
   yAxis: {
      type: 'value',
        name:"(个)", 
              axisLine: {
              show: true,
              lineStyle: {
                 color: '#00A8FF'
              }
           },


        nameTextStyle: {
            color:"#97B2E0",
            padding:[0,0,-560,-50]
        },
        boundaryGap: [0, 0.01],

        splitLine: {
          lineStyle: {
            color: "#073370",
            width: 1,
            type: "dashed",
          },
        },
        axisLabel: {
          color: "#D3E4FE",
        },
        axisLine: {
          lineStyle: {
            color: "#073370",
            width: 1,
          },
        },
   },
   series: [
      {
         type: "pictorialBar",
          barWidth: "80",
         barCategoryGap: "12%",
         label: {
            normal: {
               show: true,
               position: "top",
               textStyle: {
                  color: "#FFFFFF",
                  fontSize: 12
               }
            }
         },
         itemStyle: {
            normal: {
               color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                     {
                        offset: 0,
                        color: "#2BCEFF"  // 0% 处的颜色
                     },
                     {
                        offset: 1,
                        color: "rgba(43, 206, 255, 0)" // 100% 处的颜色
                     }
                  ],
                  globalCoord: false // 缺省为 false
               } //渐变颜色
            }
         },
   
         symbol:
            "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",

         data: [132, 66, 54, 37, 88, 136, 12]
      }
   ]
},
  });
  let echartsMapel = ref("");
  let opt = null;
  const echartsMap = (e) => (echartsMapel.value = e);
  const init = () => {
    let myChart = echarts.init(echartsMapel.value);
    myChart.setOption(state.option);
    const setOption = (dataObj) => {
      let opt = myChart.getOption();
      Object.assign(opt, dataObj);
      myChart.setOption(opt);
    };
    return setOption;
  };
  
  onMounted(() => {
    init();
  });
  <\/script>
  
  <style scoped >
  .content {
    position: relative;
    width: 100%;
    box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  }
  #mainChina {
    width: 100%;
    height: 600px;
    background-color: #00184F;
  }
  </style>
  
  
    
    `,Z=()=>`
    <template>
    <div
      class="content"
   
    >
     <div :ref="echartsMap" id="mainChina"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, nextTick, onMounted, watch } from "vue";
  import "echarts";
  
  const state = reactive({
    option: {
  
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Email', 'Union Ads'],
          textStyle: {
            color: '#D3E4FE',
            fontSize: 16,
        },
        left:20,
        top: 10,
        itemWidth: 15,
        itemGap: 18,
        itemHeight: 18,
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
    
        xAxis: {
          type: 'category',
          axisTick: { show: false },
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLabel: {
            color: "#97B2E0",
          },
        },
        yAxis: {
          type: 'value',
          name:"(万元)", 
         
          nameTextStyle: {
              color:"#97B2E0",
              padding:[0,0,-550,-50]
          },
          axisLabel: {
            color: "#97B2E0",
          },
          splitLine: {
            show: true,
            lineStyle: {
                type: [1,2],
                dashOffset: 1,
                color: '#A4DAFF'
            }
        },
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            symbolSize: 10,
            color:"#00FFE4",
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            smooth: true,
            symbolSize: 10,
            color:"#DE980F",
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          
        ]
      }
  });
  let echartsMapel = ref("");
  let opt = null;
  const echartsMap = (e) => (echartsMapel.value = e);
  const init = () => {
    let myChart = echarts.init(echartsMapel.value);
    myChart.setOption(state.option);
    const setOption = (dataObj) => {
      let opt = myChart.getOption();
      Object.assign(opt, dataObj);
      myChart.setOption(opt);
    };
    return setOption;
  };
  
  onMounted(() => {
    init();
  });
  <\/script>
  
  <style scoped >
  .content {
    position: relative;
    width: 100%;
    box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  }
  #mainChina {
    width: 100%;
    height: 600px;
    background-color: #00184F;
  }
  </style>
  
  
    `,U=()=>`
    <template>
    <div
      class="content"
   
    >
     <div :ref="echartsMap" id="mainChina"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, nextTick, onMounted, watch } from "vue";
  import "echarts";
  
  const state = reactive({
    option: {
  
      tooltip: {
        trigger: 'axis'
      },
  
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
  
      xAxis: {
        type: 'category',
        axisTick: { show: false },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
          color: "#97B2E0",
        },
      },
      yAxis: {
        type: 'value',
        name:"(万元)", 
       
        nameTextStyle: {
            color:"#97B2E0",
            padding:[0,0,-550,-50]
        },
        axisLabel: {
          color: "#97B2E0",
        },
        splitLine: {
          show: true,
          lineStyle: {
              type: [1,2],
              dashOffset: 1,
              color: '#A4DAFF'
          }
      },
      },
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          color:"#00FFE4",
          smooth: true,
          data: [120, 132, 101, 134, 90, 230, 210],
                 areaStyle: {
                    //新版渐变色实现
                    color: {
                       type: 'linear',
                       x: 0,
                       y: 0,
                       x2: 0,
                       y2: 1,
                       colorStops: [
                          {
                             offset: 1,
                             color: 'rgba(1, 180, 255, 0)'
                          },
                          {
                             offset: 0,
                             color: '#00FFE4'
                          }
                       ]
                    }
                  }
        },
      ]
    }
  });
  let echartsMapel = ref("");
  let opt = null;
  const echartsMap = (e) => (echartsMapel.value = e);
  const init = () => {
    let myChart = echarts.init(echartsMapel.value);
    myChart.setOption(state.option);
    const setOption = (dataObj) => {
      let opt = myChart.getOption();
      Object.assign(opt, dataObj);
      myChart.setOption(opt);
    };
    return setOption;
  };
  
  onMounted(() => {
    init();
  });
  <\/script>
  
  <style scoped >
  .content {
    position: relative;
    width: 100%;
    box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  }
  #mainChina {
    width: 100%;
    height: 600px;
    background-color: #00184F;
  }
  </style>
  
  
    `,K=()=>`

    <template>
    <div
      class="content"
   
    >
     <div :ref="echartsMap" id="mainChina"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, nextTick, onMounted, watch } from "vue";
  import "echarts";
  
  const state = reactive({
    option:  {

       
        "legend": {
           show:false
        },
        "grid": {
            "top": "24%",
            left:"10"
        },
        series: [
            {
                name: '',
                type: 'funnel',
                left: '0',
                width: '40%',
                minSize: 84,
                maxSize: 260,
                label: {
               
                              formatter: function(params) {
                                console.log(params)
                        return '{a| '+params.name+'} {b| '+params.value+'个 ('+params.percent+'%)}';
                      },
                      rich: {
                        a: {
                          color: "rgba(211, 228, 254, 1)",
                          fontSize: 16,
                          align: "center",
                          lineHeight: 25,
                          fontWeight: 600,
                        }, 
                        b: {
                          color: "rgba(0, 205, 222, 1)",
                          fontSize: 16,
                          align: "center",
                          lineHeight: 25,
                          fontWeight: 600,
                        },
                      },
                    emphasis: {
                        position:'left',
                        formatter: '{c}%'
                    },
                
                },
                labelLine: {
                    normal: {
                        length: 200,
                        position: 'left',
                        
                        lineStyle: {
                            width:1
                            
                        }
                    }
                },
                itemStyle: {
                  opacity:1,
                     borderWidth: 0,
                    shadowBlur: 5,
                    shadowOffsetX: 0,
                    shadowOffsetY:  2,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                data: [
                    {value:30, name: '访问', 
                        itemStyle: {
                            normal: {
                                color: 'rgba(62, 230, 227, 1)'
                            }
                        },
                       labelLine:{
                           normal: {
                               lineStyle: {
                                   shadowColor: 'rgba(62, 230, 227, 1)',
                                   shadowOffsetX: 1
                               }
                           }
                       }
                    },
                    {value: 25, name: '咨询',
                         itemStyle: {
                            normal: {
                                color: 'rgba(59, 188, 217, 1)'
                            }
                        },
                         labelLine:{
                           normal: {
                               lineStyle: {
                                   shadowColor: 'rgba(59, 188, 217, 1)',
                                   shadowOffsetX: 1
                               }
                           }
                       }
                    },
                    {value: 15, name: '订单',
                         itemStyle: {
                            normal: {
                                color: 'rgba(55, 139, 204, 1)'
                            }
                        },
                         labelLine:{
                           normal: {
                               lineStyle: {
                                   shadowColor: 'rgba(55, 139, 204, 1)',
                                   shadowOffsetX: 1
                               }
                           }
                       }
                    },
                    {value: 15, name: '点击',
                         itemStyle: {
                            normal: {
                                color: 'rgba(55, 139, 204, 1)'
                            }
                        },
                         labelLine:{
                           normal: {
                               lineStyle: {
                                   shadowColor: 'rgba(55, 139, 204, 1)',
                                   shadowOffsetX: 1
                               }
                           }
                       }
                    },
                    {value: 10, name: '展现',
                         itemStyle: {
                            normal: {
                                color: 'rgba(52, 80, 191, 1)'
                            }
                        },
                         labelLine:{
                           normal: {
                               lineStyle: {
                                   shadowColor: 'rgba(52, 80, 191, 1)',
                                   shadowOffsetX: 1
                               }
                           }
                       }
                    }
                ]
            },
            {
                name: '',
                type: 'funnel',
                top:0,
                gap: 10,
                label: {
                    normal: {
                        position: 'inside',
                        formatter: '转化率：({c}%)',
                        textStyle: {
                            color: '#fff'
                        }
                    }
                  
                },
                labelLine: {
                    normal: {
                      
                
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderWidth:0,
                        opacity: 0
                    }
                },
                data: [
                    {value: 60, name: '访问'
                
                    },
                    {value: 40, name: '咨询'},
                    {value: 20, name: '订单'},
                    {value: 80, name: '点击'},
                    {value: 100, name: '展现'}
                ]
            }
        ]
    }
    
  });
  let echartsMapel = ref("");
  let opt = null;
  const echartsMap = (e) => (echartsMapel.value = e);
  const init = () => {
    let myChart = echarts.init(echartsMapel.value);
    myChart.setOption(state.option);
    const setOption = (dataObj) => {
      let opt = myChart.getOption();
      Object.assign(opt, dataObj);
      myChart.setOption(opt);
    };
    return setOption;
  };
  
  onMounted(() => {
    init();
  });
  <\/script>
  
  <style scoped >
  .content {
    position: relative;
    width: 100%;
    box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  }
  #mainChina {
    width: 100%;
    height: 600px;
    background-color: #00184F;
  }
  </style>
  
  
    
    `,J=()=>`
<template>
    <div
      class="content"
   
    >
     <div :ref="echartsMap" id="mainChina"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, nextTick, onMounted, watch } from "vue";
  import "echarts";
  let value = 20.66;
let title = '%';
  const state = reactive({
    option:  {
    title: {
        text: '{b|销售额度}\\n{a|' + value + '%}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
              
                b: {
                    fontSize: 38,
                    color: 'rgba(211, 228, 254, 1)',
                    // padding: [0,0,14,0]
                },
                a: {
                    fontSize: 38,
                    color: 'rgba(104, 228, 255, 1)',
                     padding: [20,0,0 ,0]
                },
            },
        },
    },
    series: [
        {
            type: 'gauge',
            radius: '60%',
            clockwise: true,
            startAngle: '90',
            endAngle: '-270',
            splitNumber: 10,
            detail: {
                offsetCenter: [0, -20],
                formatter: ' ',
            },
            pointer: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [value / 100, 'rgba(0, 149, 255, 1)'],
                        [1, 'rgb(3,89,130)'],
                    ],
                    width: 30,
                   
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                length: 32,
                lineStyle: {
                    color: 'white',
                    width: 6,
                },
            },
            axisLabel: {
                show: false,
            },
        },
     
    ],
}
    
  });
  let echartsMapel = ref("");
  let opt = null;
  const echartsMap = (e) => (echartsMapel.value = e);
  const init = () => {
    let myChart = echarts.init(echartsMapel.value);
    myChart.setOption(state.option);
    const setOption = (dataObj) => {
      let opt = myChart.getOption();
      Object.assign(opt, dataObj);
      myChart.setOption(opt);
    };
    return setOption;
  };
  
  onMounted(() => {
    init();
  });
  <\/script>
  
  <style scoped >
  .content {
    position: relative;
    width: 100%;
    box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  }
  #mainChina {
    width: 100%;
    height: 600px;
    background-color: #00184F;
  }
  </style>
  
  
    
    
  
  
    
    `,Q=()=>`
   
  
   
    <template>
    <div
      class="content"
   
    >
     <div :ref="echartsMap" id="mainChina"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, nextTick, onMounted, watch } from "vue";
  import "echarts";
  
  const state = reactive({
    option: {
  legend: {
    data: ["贯通率", "球星", "经纪人"],
    textStyle: {
      color: "#B4B4B4",
    },
    left: "7%",
    top:10,
  },
      //图表离容器的距离
      grid: {
         left: "10%",
         top: "10%",
         right: "10%",
         bottom: "10%",
      },
        tooltip: {
    trigger: "axis",
    backgroundColor: "rgba(255,255,255,1)",
    axisPointer: {
      type: "shadow",
      label: {
        show: true,
        backgroundColor: "#7B7DDC",
      },
    },
  },
      //X轴
      xAxis: {
         data: ['库里', '科比', '詹姆斯', '乔丹', '杜兰特', '欧文', '威少'],
         axisLabel: {
            textStyle: {
               color: '#D3E4FE',
               fontSize: 16
            }
         },
         axisTick: {
            show: false //隐藏X轴刻度尺
         },
  
      axisLine: {
        show: true,
        lineStyle: {
           color: '#00A8FF'
        }
     },
      },
      //y轴
      yAxis:[
       {
        name:"(万元)", 
       
        nameTextStyle: {
            color:"#97B2E0",
            padding:[0,0,-530,-10]
        },
        axisLabel: {
          textStyle: {
             color: '#D3E4FE',
             fontSize: 16
          }
       },
        axisTick:{
          show:false
      },
      splitLine: {
        show: false,
       
        },
      axisLine: {
        show: true,
        lineStyle: {
           color: '#00A8FF'
        },
        
     },
      },
       {
        name:"(个)", 
       
        nameTextStyle: {
            color:"#97B2E0",
            padding:[0,0,-530,-10]
        },
        axisLabel: {
          textStyle: {
             color: '#D3E4FE',
             fontSize: 16
          }
       },
        axisTick:{
          show:false
      },
      splitLine: {
        show: false,
       
        },
      axisLine: {
        show: true,
        lineStyle: {
           color: '#00A8FF'
        },
        
     },
      }
      ],
      series: [
          {
      name: "贯通率",
      type: "line",
      smooth: true,
      showAllSymbol: true,
      symbol: "emptyCircle",
      symbolSize: 8,
      yAxisIndex: 1,
      itemStyle: {
        normal: {
          color: "rgba(242, 157, 59, 1)",
        },
      },
        data: [12, 21, 24, 61, 121, 0, 11],
    },
      {
         data: [2, 1, 4, 6, 1, 0, 1],
         label: {
            show: true,
            position: "top",
            distance: 0,
            color: "#D3E4FE",
            formatter: "{c}",
            offset:[0,-5]
         },
         name: '球星',
         //图表类型
         //折线图line,饼图pie，散点图scatter等等
         type: 'bar',
         barWidth: 20,
         itemStyle: {
            barBorderRadius: [20, 20, 0, 0],
            color: {
               x: 0,  //右
               y: 0,  //下
               x2: 0,  //左
               y2: 1,  //上
               colorStops: [
                  {
                     offset: 0.1,
                     color: 'rgba(48, 238, 255, 1)' // 0% 处的颜色
                  },
                  {
                     offset: 1,
                     color:'rgba(0, 152, 175, 1)'  // 100% 处的颜色
                  }
               ]
            }
         }
      },
           {
         data: [2, 1, 4, 6, 1, 0, 1],
         label: {
            show: true,
            position: "top",
            distance: 0,
            color: "#D3E4FE",
            formatter: "{c}",
            offset:[0,-5]
         },
         name: '经纪人',
         //图表类型
         //折线图line,饼图pie，散点图scatter等等
         type: 'bar',
         barWidth: 20,
         itemStyle: {
            barBorderRadius: [20, 20, 0, 0],
            color: {
               x: 0,  //右
               y: 0,  //下
               x2: 0,  //左
               y2: 1,  //上
               colorStops: [
                  {
                     offset: 0,
                     color:'rgba(59, 175, 255, 1)'  // 0% 处的颜色
                  },
                  {
                     offset: 1,
                     color:  'rgba(0, 72, 200, 1)' // 100% 处的颜色
                  }
               ]
            }
         }
      }
      ]
   }
   
  });
  let echartsMapel = ref("");
  let opt = null;
  const echartsMap = (e) => (echartsMapel.value = e);
  const init = () => {
    let myChart = echarts.init(echartsMapel.value);
    myChart.setOption(state.option);
    const setOption = (dataObj) => {
      let opt = myChart.getOption();
      Object.assign(opt, dataObj);
      myChart.setOption(opt);
    };
    return setOption;
  };
  
  onMounted(() => {
    init();
  });
  <\/script>
  
  <style scoped >
  .content {
    position: relative;
    width: 100%;
    box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  }
  #mainChina {
    width: 100%;
    height: 600px;
    background-color: #00184F;
  }
  </style>
  
  
    
  
  
    
  
    `,ee=()=>`


    <template>
  <div>
    <div :ref="echartsMap" id="mainChina"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick, onMounted } from "vue";
import "echarts";
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
let dataList = [
  {
    name: "南海诸岛",
    value: 100,
    eventTotal: 100,
    specialImportant: 10,
    import: 10,
    compare: 10,
    common: 40,
    specail: 20,
  },
  {
    name: "海南省",
    value: 100,
    eventTotal: 100,
    specialImportant: 10,
    import: 10,
    compare: 10,
    common: 40,
    specail: 20,
  },
  {
    name: "北京市",
    value: 540,
  },
  {
    name: "天津市",
    value: 130,
  },
  {
    name: "上海市",
    value: 400,
  },
  {
    name: "重庆市",
    value: 750,
  },
  {
    name: "河北省",
    value: 130,
  },
  {
    name: "河南省",
    value: 830,
  },
  {
    name: "云南省",
    value: 110,
  },
  {
    name: "辽宁省",
    value: 19,
  },
  {
    name: "黑龙江省",
    value: 150,
  },
  {
    name: "湖南省",
    value: 690,
  },
  {
    name: "安徽省",
    value: 60,
  },
  {
    name: "山东省",
    value: 39,
  },
  {
    name: "新疆维吾尔自治区",
    value: 4,
  },
  {
    name: "江苏省",
    value: 31,
  },
  {
    name: "浙江省",
    value: 104,
  },
  {
    name: "江西省",
    value: 36,
  },
  {
    name: "湖北省",
    value: 52,
  },
  {
    name: "广西壮族自治区",
    value: 33,
  },
  {
    name: "甘肃省",
    value: 7,
  },
  {
    name: "山西省",
    value: 5,
  },
  {
    name: "内蒙古自治区",
    value: 778,
  },
  {
    name: "陕西省",
    value: 22,
  },
  {
    name: "吉林省",
    value: 4,
  },
  {
    name: "福建省",
    value: 18,
  },
  {
    name: "贵州省",
    value: 5,
  },
  {
    name: "广东省",
    value: 98,
  },
  {
    name: "青海省",
    value: 1,
  },
  {
    name: "西藏自治区",
    value: 0,
  },
  {
    name: "四川省",
    value: 44,
  },
  {
    name: "宁夏回族自治区",
    value: 4,
  },

  {
    name: "台湾省",
    value: 3,
  },
  {
    name: "香港省",
    value: 5,
  },
  {
    name: "澳门省",
    value: 555,
  },
];
let echartsMapel: any = ref("");
const echartsMap = (e: any) => (echartsMapel.value = e);
const init = (china) => {
  // 基于准备好的dom，初始化echarts实例
  echarts.registerMap("china", china as any);
  var myChart = echarts.init(echartsMapel.value);
  // 指定图表的配置项和数据
  var options: any = {
    series: [
      {
        type: "map",
        roam: true,
        zoom: 1.2,
        map: "china",
        top: 100,
        left:200,
        tooltip: {
          padding: 8,
          borderWidth: 1,
          borderColor: "#409eff",
          backgroundColor: "rgba(255,255,255,0.7)",
          textStyle: {
            color: "#000000",
            fontSize: 13,
          },
          formatter: function (e, t, n) {
            let data = e.data;
            //模拟数据
            data.specialImportant = (Math.random() * 1000) | 0;
            data.import = (Math.random() * 1000) | 0;
            data.compare = (Math.random() * 1000) | 0;
            data.common = (Math.random() * 1000) | 0;
            data.specail = (Math.random() * 1000) | 0;

            let context = "<div> <p><b style='font-size:15px;'>"+data.name+"</b>(2020年第一季度)</p> ";
            return context;
          },
        },
      },
    ],

    tooltip: {
      trigger: "item",
    },

    visualMap: {
      //地图图例
      show: true,
      right:226,
      bottom:210,
      showLabel: true,
      textStyle:{
           color:"rgba(211, 228, 254, 1)",
      },
      pieces: [
        //根据数据大小，各省显示不同颜色
        {
          gte: 100,
          label: ">= 1000",
          color: "rgba(0, 110, 221, 1)",
        },
         {
          gte: 50,
          lt: 100,
          label: "500 - 999",
          color: "rgba(69, 184, 232, 1)",
        },
        {
          gte: 30,
          lt: 50,
          label: "500 - 999",
          color: "rgba(69, 155, 232, 1)",
        },
        {
          gte: 20,
          lt: 30,
          label: "100 - 499",
          color: "rgba(122, 189, 240, 1)",
        },
        {
          gte: 10,
          lt: 20,
          label: "10 - 99",
          color: "rgba(167, 218, 246, 1)",
        },
        {
          lt: 10,
          label: "<10",
          color: "rgba(211, 228, 254, 1)",
        },
      ],
    },
  };
  options.series[0]["data"] = dataList;
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(options);
};
const state = reactive({});
onMounted(() => {
  fetch("/vue.example/echarts/100000_full.json").then(function (response) {
    //response.status表示响应的http状态码
    if (response.status === 200) {
        // json是返回的response提供的一个方法,
        // 会把返回的json字符串反序列化成对象,也被包装成一个Promise了
     return response.json()
        //
    } else {
        return {};
    }
})    .then(function (data) {
        //响应的内容
        console.log(data);
         init(data);
        // 响应数据格式化
    });
 
});
<\/script>
  
  <style scoped >
  .content {
    position: relative;
    width: 100%;
    box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  }
  #mainChina {
    width: 100%;
    height: 600px;
    background-color: #00184F;
  }
  </style>
  
  
    
  
  
    
    
  
  
    
    `,te=()=>`






    <template>
  <div>
    <div :ref="echartsMap" id="mainChina"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick, onMounted } from "vue";
import "echarts";
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value 104.1276279°，纬度30.5370628°
*/
var geoCoordMap = {'阿富汗':[67.709953,33.93911],'安哥拉':[17.873887,-11.202692],'阿尔巴尼亚':[20.168331,41.153332],'阿联酋':[53.847818,23.424076],'阿根廷':[-63.61667199999999,-38.416097],'亚美尼亚':[45.038189,40.069099],'法属南半球和南极领地':[69.348557,-49.280366],'澳大利亚':[133.775136,-25.274398],'奥地利':[14.550072,47.516231],'阿塞拜疆':[47.576927,40.143105],'布隆迪':[29.918886,-3.373056],'比利时':[4.469936,50.503887],'贝宁':[2.315834,9.30769],'布基纳法索':[-1.561593,12.238333],'孟加拉国':[90.356331,23.684994],'保加利亚':[25.48583,42.733883],'巴哈马':[-77.39627999999999,25.03428],'波斯尼亚和黑塞哥维那':[17.679076,43.915886],'白俄罗斯':[27.953389,53.709807],'伯利兹':[-88.49765,17.189877],'百慕大':[-64.7505,32.3078],'玻利维亚':[-63.58865299999999,-16.290154],'巴西':[-51.92528,-14.235004],'文莱':[114.727669,4.535277],'不丹':[90.433601,27.514162],'博茨瓦纳':[24.684866,-22.328474],'中非共和国':[20.939444,6.611110999999999],'加拿大':[-106.346771,56.130366],'瑞士':[8.227511999999999,46.818188],'智利':[-71.542969,-35.675147],
'中国':[88.8946661,37.0731642],'象牙海岸':[-5.547079999999999,7.539988999999999],'喀麦隆':[12.354722,7.369721999999999],'刚果民主共和国':[21.758664,-4.038333],'刚果共和国':[15.827659,-0.228021],'哥伦比亚':[-74.297333,4.570868],'哥斯达黎加':[-83.753428,9.748916999999999],'古巴':[-77.781167,21.521757],'北塞浦路斯':[33.429859,35.126413],'塞浦路斯':[33.429859,35.126413],'捷克共和国':[15.472962,49.81749199999999],'德国':[10.451526,51.165691],'吉布提':[42.590275,11.825138],'丹麦':[9.501785,56.26392],'多明尼加共和国':[-70.162651,18.735693],'阿尔及利亚':[1.659626,28.033886],'厄瓜多尔':[-78.18340599999999,-1.831239],'埃及':[30.802498,26.820553],'厄立特里亚':[39.782334,15.179384],'西班牙':[-3.74922,40.46366700000001],'爱沙尼亚':[25.013607,58.595272],'埃塞俄比亚':[40.489673,9.145000000000001],'芬兰':[25.748151,61.92410999999999],'斐':[178.065032,-17.713371],'福克兰群岛':[-59.523613,-51.796253],'法国':[2.213749,46.227638],'加蓬':[11.609444,-0.803689],'英国':[-3.435973,55.378051],'格鲁吉亚':[-82.9000751,32.1656221],'加纳':[-1.023194,7.946527],'几内亚':[-9.696645,9.945587],'冈比亚':[-15.310139,13.443182],'几内亚比绍':[-15.180413,11.803749],'赤道几内亚':[10.267895,1.650801],'希腊':[21.824312,39.074208],'格陵兰':[-42.604303,71.706936],'危地马拉':[-90.23075899999999,15.783471],'法属圭亚那':[-53.125782,3.933889],'圭亚那':[-58.93018,4.860416],'洪都拉斯':[-86.241905,15.199999],'克罗地亚':[15.2,45.1],'海地':[-72.285215,18.971187],'匈牙利':[19.503304,47.162494],'印尼':[113.921327,-0.789275],
'印度':[78.5553853,12.0201385],'爱尔兰':[-8.24389,53.41291],'伊朗':[53.688046,32.427908],'伊拉克':[43.679291,33.223191],'冰岛':[-19.020835,64.963051],'以色列':[34.851612,31.046051],'意大利':[12.56738,41.87194],'牙买加':[-77.297508,18.109581],'约旦':[36.238414,30.585164],
'日本':[142.1364432,44.8147265 ],
'新加坡':[101.7727739,-0.0589018],
'哈萨克斯坦':[66.923684,48.019573],'肯尼亚':[37.906193,-0.023559],'吉尔吉斯斯坦':[74.766098,41.20438],'柬埔寨':[104.990963,12.565679],'韩国':[127.766922,35.907757],'科索沃':[20.902977,42.6026359],'科威特':[47.481766,29.31166],'老挝':[102.495496,19.85627],'黎巴嫩':[35.862285,33.854721],'利比里亚':[-9.429499000000002,6.428055],'利比亚':[17.228331,26.3351],'斯里兰卡':[80.77179699999999,7.873053999999999],'莱索托':[28.233608,-29.609988],'立陶宛':[23.881275,55.169438],'卢森堡':[6.129582999999999,49.815273],'拉脱维亚':[24.603189,56.879635],'摩洛哥':[-7.092619999999999,31.791702],'摩尔多瓦':[28.369885,47.411631],'马达加斯加':[46.869107,-18.766947],'墨西哥':[-102.552784,23.634501],'马其顿':[21.745275,41.608635],'马里':[-3.996166,17.570692],'缅甸':[95.956223,21.913965],'黑山':[19.37439,42.708678],'蒙古':[103.846656,46.862496],'莫桑比克':[35.529562,-18.665695],'毛里塔尼亚':[-10.940835,21.00789],'马拉维':[34.301525,-13.254308],'马来西亚':[101.975766,4.210484],'纳米比亚':[18.49041,-22.95764],'新喀里多尼亚':[165.618042,-20.904305],'尼日尔':[8.081666,17.607789],'尼日利亚':[8.675277,9.081999],'尼加拉瓜':[-85.207229,12.865416],'荷兰':[5.291265999999999,52.132633],'挪威':[8.468945999999999,60.47202399999999],'尼泊尔':[84.12400799999999,28.394857],'新西兰':[174.885971,-40.900557],'阿曼':[55.923255,21.512583],'巴基斯坦':[69.34511599999999,30.375321],'巴拿马':[-80.782127,8.537981],'秘鲁':[-75.015152,-9.189967],'菲律宾':[121.774017,12.879721],'巴布亚新几内亚':[143.95555,-6.314992999999999],'波兰':[19.145136,51.919438],'波多黎各':[-66.590149,18.220833],'北朝鲜':[127.510093,40.339852],'葡萄牙':[-8.224454,39.39987199999999],'巴拉圭':[-58.443832,-23.442503],'卡塔尔':[51.183884,25.354826],'罗马尼亚':[24.96676,45.943161],'俄罗斯':[105.318756,61.52401],'卢旺达':[29.873888,-1.940278],'西撒哈拉':[-12.885834,24.215527],'沙特阿拉伯':[45.079162,23.885942],'苏丹':[30.217636,12.862807],'南苏丹':[31.3069788,6.876991899999999],'塞内加尔':[-14.452362,14.497401],'所罗门群岛':[160.156194,-9.64571],'塞拉利昂':[-11.779889,8.460555],'萨尔瓦多':[-88.89653,13.794185],'索马里兰':[46.8252838,9.411743399999999],'索马里':[46.199616,5.152149],'塞尔维亚共和国':[21.005859,44.016521],'苏里南':[-56.027783,3.919305],'斯洛伐克':[19.699024,48.669026],'斯洛文尼亚':[14.995463,46.151241],'瑞典':[18.643501,60.12816100000001],'斯威士兰':[31.465866,-26.522503],'叙利亚':[38.996815,34.80207499999999],'乍得':[18.732207,15.454166],'多哥':[0.824782,8.619543],'泰国':[100.992541,15.870032],'塔吉克斯坦':[71.276093,38.861034],'土库曼斯坦':[59.556278,38.969719],'东帝汶':[125.727539,-8.874217],'特里尼达和多巴哥':[-61.222503,10.691803],'突尼斯':[9.537499,33.886917],'土耳其':[35.243322,38.963745],'坦桑尼亚联合共和国':[34.888822,-6.369028],'乌干达':[32.290275,1.373333],'乌克兰':[31.16558,48.379433],'乌拉圭':[-55.765835,-32.522779],'美国':[-95.712891,37.09024],'乌兹别克斯坦':[64.585262,41.377491],'委内瑞拉':[-66.58973,6.42375],'越南':[108.277199,14.058324],'瓦努阿图':[166.959158,-15.376706],'西岸':[35.3027226,31.9465703],'也门':[48.516388,15.552727],'南非':[22.937506,-30.559482],'赞比亚':[27.849332,-13.133897],'津巴布韦':[29.154857,-19.015438]};
var data_tmp = [
    { name: '法国', value: 42 },
       { name: '新加坡', value: 42 },
         { name: '澳大利亚', value: 42 },
      { name: '美国', value: 42 },
     { name: '墨西哥', value: 42 },
    { name: '日本', value: 81 }];
var max = 480,
    min = 9; // todo
var maxSize4Pin = 100,
    minSize4Pin = 20;

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                color:"#c48"
            });
        }
    }
    return res;
};
let echartsMapel: any = ref("");
const echartsMap = (e: any) => (echartsMapel.value = e);
const init = (china) => {
  // 基于准备好的dom，初始化echarts实例
  echarts.registerMap("world", china as any);
  var myChart = echarts.init(echartsMapel.value);
  // 指定图表的配置项和数据
  var options: any = {
        geo: {
        map: 'world',
        zoom: 1,
        show: true,
        roam: true,
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false,
            },
        },
        itemStyle: {
            normal: {
                areaColor: '#01B7F9',
              //  borderColor: '#01B7F9', //线
                shadowColor: '#01B7F9', //外发光
                shadowBlur: 1,
            },
            emphasis: {
                areaColor: '#01B7F9', //悬浮区背景
            },
        },
    },
    series: [
      {
        type: 'map',
        mapType: 'world',
        itemStyle: {
            areaColor: '#01B7F9',
        },
        emphasis: {
            itemStyle: {
                areaColor: '#E8D3E3'
            }
        },
        data: [{
        name: "中国",
        itemStyle: {
            borderColor: '#68FAFF',
            areaColor:'#68FAFF',
        },
        emphasis: {
            itemStyle: {
                areaColor: '#2585a6'
            },
            label: {
                show: true,
                color: '#fff',
            }
        },
    }]
    },
         {
            symbolSize: 5,
            label: {
                normal: {
                    position: 'top',
                    show: true,//是否显示地名
                                
                              formatter: function(params) {
                                console.log(params)
                        return '{a| '+params.name+':'+params.value[2]+'}';
                      },
                      rich: {
                        a: {
                          color: "#FFF",
                          fontSize: 12,
                          align: "center",
                         padding:[5,8],
                          backgroundColor:"#F29100",
                           borderRadius:5,
                          fontWeight: 600,
                        }, 
                    
                      },
                },
                emphasis: {
                    show: true,
                },
            },
            itemStyle: {
                normal: {
                   borderColor:"#FFF",
                    color: 'rgba(242, 145, 0, 1)',
                },
            },
            name: 'light',
            type: 'scatter',
            coordinateSystem: 'geo',
            data:convertData(data_tmp),
        },
    ],

    tooltip: {
      show:false,
      trigger: "item",
    },

  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(options);
};
const state = reactive({});
onMounted(() => {
  fetch("/vue.example/echarts/ChinaCenterWorld.json").then(function (response) {
    //response.status表示响应的http状态码
    if (response.status === 200) {
        // json是返回的response提供的一个方法,
        // 会把返回的json字符串反序列化成对象,也被包装成一个Promise了
     return response.json()
        //
    } else {
        return {};
    }
})    .then(function (data) {
        //响应的内容
         init(data);
        // 响应数据格式化
    });
 
});
<\/script>
  
  <style scoped >
  .content {
    position: relative;
    width: 100%;
    box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  }
  #mainChina {
    width: 100%;
    height: 600px;
    background-color: #00184F;
  }
  </style>
  

    `,ae=()=>`


    <template>
    <div
      class="content"
   
    >
     <div :ref="echartsMap" id="mainChina"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, nextTick, onMounted, watch } from "vue";
  import "echarts";
  import "echarts-liquidfill";
const value = 0.5;
  const state = reactive({
    option:  {
   backgroundColor: '#0F224C', //背景色
   series: [
      {
         name: '预估量',
         type: 'liquidFill',
         radius: '60%',
         center: ['50%', '50%'],
         backgroundStyle: {
            color: 'transparent',
         },
         data: [value, value],
         amplitude: 20, //水波振幅
         label: {
            //标签设置
            position: ['50%', '45%'],
            formatter: '50%', //显示文本,
            textStyle: {
               fontSize: '52px', //文本字号,
               color: '#fff',
            },
         },
         outline: {
            borderDistance: 3,
            itemStyle: {
               borderWidth: 2,
               borderColor: {
                  type: 'linear',
                  x: 1,
                  y: 0,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                     {
                        offset: 0,
                        color: '#007DFF',
                     },
                     {
                        offset: 0.6,
                        color: 'rgba(45, 67, 114, 1)',
                     },
                     {
                        offset: 1,
                        color: 'rgba(45, 67, 114, 1)',
                     },
                  ],
                  globalCoord: false,
               },
            },
         },
         itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
               {
                  offset: 1,
                  color: 'rgba(31, 222, 225, 1)',
               },
               {
                  offset: 0.85,
                  color: '#007DFF80',
               },
               {
                  offset: 0.35,
                  color: '#004a99',
               },
               {
                  offset: 0,
                  color: 'rgba(31, 222, 225, 1)',
               },
            ]),
         },
      },
   ],
}
  });
  let echartsMapel = ref("");
  let opt = null;
  const echartsMap = (e) => (echartsMapel.value = e);
  const init = () => {
    let myChart = echarts.init(echartsMapel.value);
    myChart.setOption(state.option);
    const setOption = (dataObj) => {
      let opt = myChart.getOption();
      Object.assign(opt, dataObj);
      myChart.setOption(opt);
    };
    return setOption;
  };
  
  onMounted(() => {
    init();
  });
  <\/script>
  
  <style scoped >
  .content {
    position: relative;
    width: 100%;
    box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  }
  #mainChina {
    width: 100%;
    height: 600px;
    background-color: #00184F;
  }
  </style>
  
  
    
    
  
    
    `,oe=()=>`

    <template>
    <div
      class="content"
   
    >
     <div :ref="echartsMap" id="mainChina"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, nextTick, onMounted, watch } from "vue";
  import "echarts";
  let value = 20.66;
let title = '%';
  const state = reactive({
    option:{
    series: [
        {
            name: '内层数据刻度',
            type: 'gauge',
            radius: '80%',
            center: ['50%', '50%'],
            axisLine: {
              roundCap :false,
                lineStyle: {
                    width: 30,
                    color: [

                        [1,new echarts.graphic.LinearGradient(
                  0,0, 1, 0, [
                  {
                     offset: 0,
                     color: '#1D71EF',
                  },
                  {
                     offset: 1,
                     color:'#4FD2FD',
                  }
                  ]
                )]
                    ],
                    
                }
            },
            splitLine: {
                length: 25,
                 distance:-30,
                lineStyle: {
                    width: 5,
                    color: '#ffffff'
                }
            },
            axisTick: {
               
              distance:-30,
                lineStyle: {
                    width: 2,
                    color: '#ffffff'
                }
            },
            axisLabel: {
                color: '#AAC0EE',
                distance: 40,
                fontSize: 20,
            },
            title: { //标题
                show: true,
                offsetCenter: [0, 84], // x, y，单位px
                textStyle: {
                    color: "red",
                    fontSize: 14, //表盘上的标题文字大小
                }
            },
            detail: {
                show: true,
                offsetCenter: ['0','90%'],
                fontSize: 20,
                color: '#26C0C8'
            },
            itemStyle: {
                normal: {
                    color: '#0EB6CC'
                }
            },
            pointer: {
                width: 6,
                length: '55%',
                itemStyle:{
                  color:"#E1F5FF"
                }
            },
           
            data: [
            {
                name: "",
                value: 30
            },
              
            ],
            silent: false
        },
  
    ]
}
    
  });
  let echartsMapel = ref("");
  let opt = null;
  const echartsMap = (e) => (echartsMapel.value = e);
  const init = () => {
    let myChart = echarts.init(echartsMapel.value);
    myChart.setOption(state.option);
    const setOption = (dataObj) => {
      let opt = myChart.getOption();
      Object.assign(opt, dataObj);
      myChart.setOption(opt);
    };
    return setOption;
  };
  
  onMounted(() => {
    init();
  });
  <\/script>
  
  <style scoped >
  .content {
    position: relative;
    width: 100%;
    box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  }
  #mainChina {
    width: 100%;
    height: 600px;
    background-color: #00184F;
  }
  </style>
  
  
    
    
  
  
    
    
    
  
  
    
    `,ie=()=>`

    <template>
    <div>
      <div :ref="echartsMap" id="mainChina"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive, nextTick, onMounted } from "vue";
  import "echarts";
  /*
    基本数据类型
    引用数据类型（复杂类型） 个人建议 ref初始化变量 
    ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
    ref定义的数据访问的时候要多一个.value 104.1276279°，纬度30.5370628°
    */
  var geoCoordMap = {
    阿富汗: [67.709953, 33.93911],
    安哥拉: [17.873887, -11.202692],
    阿尔巴尼亚: [20.168331, 41.153332],
    阿联酋: [53.847818, 23.424076],
    阿根廷: [-63.61667199999999, -38.416097],
    亚美尼亚: [45.038189, 40.069099],
    法属南半球和南极领地: [69.348557, -49.280366],
    澳大利亚: [133.775136, -25.274398],
    奥地利: [14.550072, 47.516231],
    阿塞拜疆: [47.576927, 40.143105],
    布隆迪: [29.918886, -3.373056],
    比利时: [4.469936, 50.503887],
    贝宁: [2.315834, 9.30769],
    布基纳法索: [-1.561593, 12.238333],
    孟加拉国: [90.356331, 23.684994],
    保加利亚: [25.48583, 42.733883],
    巴哈马: [-77.39627999999999, 25.03428],
    波斯尼亚和黑塞哥维那: [17.679076, 43.915886],
    白俄罗斯: [27.953389, 53.709807],
    伯利兹: [-88.49765, 17.189877],
    百慕大: [-64.7505, 32.3078],
    玻利维亚: [-63.58865299999999, -16.290154],
    巴西: [-51.92528, -14.235004],
    文莱: [114.727669, 4.535277],
    不丹: [90.433601, 27.514162],
    博茨瓦纳: [24.684866, -22.328474],
    中非共和国: [20.939444, 6.611110999999999],
    加拿大: [-106.346771, 56.130366],
    瑞士: [8.227511999999999, 46.818188],
    智利: [-71.542969, -35.675147],
    中国: [88.8946661, 37.0731642],
    象牙海岸: [-5.547079999999999, 7.539988999999999],
    喀麦隆: [12.354722, 7.369721999999999],
    刚果民主共和国: [21.758664, -4.038333],
    刚果共和国: [15.827659, -0.228021],
    哥伦比亚: [-74.297333, 4.570868],
    哥斯达黎加: [-83.753428, 9.748916999999999],
    古巴: [-77.781167, 21.521757],
    北塞浦路斯: [33.429859, 35.126413],
    塞浦路斯: [33.429859, 35.126413],
    捷克共和国: [15.472962, 49.81749199999999],
    德国: [10.451526, 51.165691],
    吉布提: [42.590275, 11.825138],
    丹麦: [9.501785, 56.26392],
    多明尼加共和国: [-70.162651, 18.735693],
    阿尔及利亚: [1.659626, 28.033886],
    厄瓜多尔: [-78.18340599999999, -1.831239],
    埃及: [30.802498, 26.820553],
    厄立特里亚: [39.782334, 15.179384],
    西班牙: [-3.74922, 40.46366700000001],
    爱沙尼亚: [25.013607, 58.595272],
    埃塞俄比亚: [40.489673, 9.145000000000001],
    芬兰: [25.748151, 61.92410999999999],
    斐: [178.065032, -17.713371],
    福克兰群岛: [-59.523613, -51.796253],
    法国: [2.213749, 46.227638],
    加蓬: [11.609444, -0.803689],
    英国: [-3.435973, 55.378051],
    格鲁吉亚: [-82.9000751, 32.1656221],
    加纳: [-1.023194, 7.946527],
    几内亚: [-9.696645, 9.945587],
    冈比亚: [-15.310139, 13.443182],
    几内亚比绍: [-15.180413, 11.803749],
    赤道几内亚: [10.267895, 1.650801],
    希腊: [21.824312, 39.074208],
    格陵兰: [-42.604303, 71.706936],
    危地马拉: [-90.23075899999999, 15.783471],
    法属圭亚那: [-53.125782, 3.933889],
    圭亚那: [-58.93018, 4.860416],
    洪都拉斯: [-86.241905, 15.199999],
    克罗地亚: [15.2, 45.1],
    海地: [-72.285215, 18.971187],
    匈牙利: [19.503304, 47.162494],
    印尼: [113.921327, -0.789275],
    印度: [78.5553853, 12.0201385],
    爱尔兰: [-8.24389, 53.41291],
    伊朗: [53.688046, 32.427908],
    伊拉克: [43.679291, 33.223191],
    冰岛: [-19.020835, 64.963051],
    以色列: [34.851612, 31.046051],
    意大利: [12.56738, 41.87194],
    牙买加: [-77.297508, 18.109581],
    约旦: [36.238414, 30.585164],
    日本: [142.1364432, 44.8147265],
    新加坡: [101.7727739, -0.0589018],
    哈萨克斯坦: [66.923684, 48.019573],
    肯尼亚: [37.906193, -0.023559],
    吉尔吉斯斯坦: [74.766098, 41.20438],
    柬埔寨: [104.990963, 12.565679],
    韩国: [127.766922, 35.907757],
    科索沃: [20.902977, 42.6026359],
    科威特: [47.481766, 29.31166],
    老挝: [102.495496, 19.85627],
    黎巴嫩: [35.862285, 33.854721],
    利比里亚: [-9.429499000000002, 6.428055],
    利比亚: [17.228331, 26.3351],
    斯里兰卡: [80.77179699999999, 7.873053999999999],
    莱索托: [28.233608, -29.609988],
    立陶宛: [23.881275, 55.169438],
    卢森堡: [6.129582999999999, 49.815273],
    拉脱维亚: [24.603189, 56.879635],
    摩洛哥: [-7.092619999999999, 31.791702],
    摩尔多瓦: [28.369885, 47.411631],
    马达加斯加: [46.869107, -18.766947],
    墨西哥: [-102.552784, 23.634501],
    马其顿: [21.745275, 41.608635],
    马里: [-3.996166, 17.570692],
    缅甸: [95.956223, 21.913965],
    黑山: [19.37439, 42.708678],
    蒙古: [103.846656, 46.862496],
    莫桑比克: [35.529562, -18.665695],
    毛里塔尼亚: [-10.940835, 21.00789],
    马拉维: [34.301525, -13.254308],
    马来西亚: [101.975766, 4.210484],
    纳米比亚: [18.49041, -22.95764],
    新喀里多尼亚: [165.618042, -20.904305],
    尼日尔: [8.081666, 17.607789],
    尼日利亚: [8.675277, 9.081999],
    尼加拉瓜: [-85.207229, 12.865416],
    荷兰: [5.291265999999999, 52.132633],
    挪威: [8.468945999999999, 60.47202399999999],
    尼泊尔: [84.12400799999999, 28.394857],
    新西兰: [174.885971, -40.900557],
    阿曼: [55.923255, 21.512583],
    巴基斯坦: [69.34511599999999, 30.375321],
    巴拿马: [-80.782127, 8.537981],
    秘鲁: [-75.015152, -9.189967],
    菲律宾: [121.774017, 12.879721],
    巴布亚新几内亚: [143.95555, -6.314992999999999],
    波兰: [19.145136, 51.919438],
    波多黎各: [-66.590149, 18.220833],
    北朝鲜: [127.510093, 40.339852],
    葡萄牙: [-8.224454, 39.39987199999999],
    巴拉圭: [-58.443832, -23.442503],
    卡塔尔: [51.183884, 25.354826],
    罗马尼亚: [24.96676, 45.943161],
    俄罗斯: [105.318756, 61.52401],
    卢旺达: [29.873888, -1.940278],
    西撒哈拉: [-12.885834, 24.215527],
    沙特阿拉伯: [45.079162, 23.885942],
    苏丹: [30.217636, 12.862807],
    南苏丹: [31.3069788, 6.876991899999999],
    塞内加尔: [-14.452362, 14.497401],
    所罗门群岛: [160.156194, -9.64571],
    塞拉利昂: [-11.779889, 8.460555],
    萨尔瓦多: [-88.89653, 13.794185],
    索马里兰: [46.8252838, 9.411743399999999],
    索马里: [46.199616, 5.152149],
    塞尔维亚共和国: [21.005859, 44.016521],
    苏里南: [-56.027783, 3.919305],
    斯洛伐克: [19.699024, 48.669026],
    斯洛文尼亚: [14.995463, 46.151241],
    瑞典: [18.643501, 60.12816100000001],
    斯威士兰: [31.465866, -26.522503],
    叙利亚: [38.996815, 34.80207499999999],
    乍得: [18.732207, 15.454166],
    多哥: [0.824782, 8.619543],
    泰国: [100.992541, 15.870032],
    塔吉克斯坦: [71.276093, 38.861034],
    土库曼斯坦: [59.556278, 38.969719],
    东帝汶: [125.727539, -8.874217],
    特里尼达和多巴哥: [-61.222503, 10.691803],
    突尼斯: [9.537499, 33.886917],
    土耳其: [35.243322, 38.963745],
    坦桑尼亚联合共和国: [34.888822, -6.369028],
    乌干达: [32.290275, 1.373333],
    乌克兰: [31.16558, 48.379433],
    乌拉圭: [-55.765835, -32.522779],
    美国: [-95.712891, 37.09024],
    乌兹别克斯坦: [64.585262, 41.377491],
    委内瑞拉: [-66.58973, 6.42375],
    越南: [108.277199, 14.058324],
    瓦努阿图: [166.959158, -15.376706],
    西岸: [35.3027226, 31.9465703],
    也门: [48.516388, 15.552727],
    南非: [22.937506, -30.559482],
    赞比亚: [27.849332, -13.133897],
    津巴布韦: [29.154857, -19.015438],
  };
  var data_tmp = [
    { name: "法国", value: 42 },
    { name: "新加坡", value: 42 },
    { name: "澳大利亚", value: 42 },
    { name: "美国", value: 42 },
    { name: "墨西哥", value: 42 },
    { name: "日本", value: 81 },
  ];
  var data_tmp2 = [
    [
      {
        name: "澳大利亚",
        value: 9100,
      },
      {
        name: "日本",
      },
    ],
    [
      {
        name: "日本",
        value: 9100,
      },
      {
        name: "新加坡",
      },
    ],
    [
      {
        name: "法国",
        value: 9100,
      },
      {
        name: "新加坡",
      },
    ],
    [
      {
        name: "美国",
        value: 9100,
      },
      {
        name: "日本",
      },
    ],
    [
      {
        name: "法国",
        value: 9100,
      },
      {
        name: "墨西哥",
      },
    ],
  ];
  var convertLinesData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[0].value,
        });
      }
    }
    return res;
  };
  var max = 480,
    min = 9; // todo
  var maxSize4Pin = 100,
    minSize4Pin = 20;
  
  var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value),
        });
      }
    }
    return res;
  };
  let echartsMapel: any = ref("");
  const echartsMap = (e: any) => (echartsMapel.value = e);
  const init = (china) => {
    // 基于准备好的dom，初始化echarts实例
    echarts.registerMap("world", china as any);
    var myChart = echarts.init(echartsMapel.value);
    // 指定图表的配置项和数据
    var options: any = {
      geo: {
        map: "world",
        zoom: 1,
        show: true,
        roam: true,
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
        itemStyle: {
          normal: {
            areaColor: "#00D0FF",
            borderColor: "transparent", //线
            shadowColor: "#00D0FF", //外发光
            shadowBlur: 1,
            areaColor: {
              type: "pattern",
              image: "/vue.example/static/dian.png", //配置图片
              repeat: "repeat", //可选值repeat、no-repeat、repeat-x、repeat-y
            },
          },
          emphasis: {
            areaColor: "#00D0FF", //悬浮区背景
          },
        },
      },
      series: [
        {
          name: "背景",
          type: "lines",
          zlevel: 2,
  
          lineStyle: {
            normal: {
              color: "#00EEF4",
              // 线条宽度
              width: 2,
  
              curveness: 0.4,
              type: [2, 2],
            },
          },
          label: {
            normal: {
              show: false,
              position: "middle",
              formatter: "{b}",
            },
          },
          data: convertLinesData(data_tmp2),
        },
        {
          label: {
            normal: {
              position: "left",
              color: "#FFF",
              show: true, //是否显示地名
              formatter: function(params) {
                return params.name;
              },
            },
            emphasis: {
              show: true,
            },
          },
          zlevel: 2,
          rippleEffect: {
            //涟漪特效
            period: 4, //动画时间，值越小速度越快
            brushType: "fill", //波纹绘制方式 stroke, fill
            scale: 6, //波纹圆环最大限制，值越大波纹越大
          },
          symbol: "circle",
          symbolSize: 4,
          itemStyle: {},
          color: "#00FFF6",
          type: "effectScatter",
          coordinateSystem: "geo",
          data: convertData(data_tmp),
        },
      ],
  
      tooltip: {
        show: false,
        trigger: "item",
      },
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(options);
  };
  const state = reactive({});
  onMounted(() => {
    fetch("/vue.example/echarts/custom.geo.json")
      .then(function(response) {
        //response.status表示响应的http状态码
        if (response.status === 200) {
          // json是返回的response提供的一个方法,
          // 会把返回的json字符串反序列化成对象,也被包装成一个Promise了
          return response.json();
          //
        } else {
          return {};
        }
      })
      .then(function(data) {
        //响应的内容
        init(data);
        // 响应数据格式化
      });
  });
  <\/script>
  
  <style scoped>
  .content {
    position: relative;
    width: 100%;
    box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  }
  #mainChina {
    width: 100%;
    height: 600px;
    background-color: #00184f;
  }
  </style>
  
    `,re=()=>`
    <template>
    <div>
      <div :ref="echartsMap" id="mainChina"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive, nextTick, onMounted } from "vue";
  import "echarts";
  /*
  基本数据类型
  引用数据类型（复杂类型） 个人建议 ref初始化变量 
  ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
  ref定义的数据访问的时候要多一个.value
  */
  
  let dataList = [
    {
      name: "城关街道",
      value: [113.8107088, 35.4712497],
    },
    {
      name: "百泉镇",
      value: [113.795698, 35.4919147],
    },
    {
      name: "常村镇",
      value: [113.874372, 35.4956782],
    },
    {
      name: "北云门镇",
      value: [113.7461485, 35.441079],
    },
    {
      name: "薄壁镇",
      value: [113.5174156, 35.4518768],
    },
    {
      name: "高庄乡",
      value: [113.7638632, 35.5620524],
    },
    {
      name: "洪洲乡",
      value: [113.6938631, 35.5435154],
    },
    {
      name: "胡桥街道",
      value: [113.7968256, 35.4541455],
    },
    {
      name: "黄水乡",
      value: [113.6997486, 35.6046011],
    },
    {
      name: "冀屯镇",
      value: [113.6273246, 35.4022835],
    },
    {
      name: "孟庄镇",
      value: [113.8413238, 35.4384611, 33],
    },
    {
      name: "南村镇",
      value: [113.7517609, 35.6803057],
    },
    {
      name: "南寨镇",
      value: [113.7173013, 35.7773932],
    },
    {
      name: "拍石头乡",
      value: [113.813395, 35.6046644],
    },
    {
      name: "沙窑乡",
      value: [113.6623586, 35.7516994],
    },
    {
      name: "上八里镇",
      value: [113.6138788, 35.5452658],
    },
    {
      name: "吴村镇",
      value: [113.515562, 35.3705911],
    },
    {
      name: "西平罗乡",
      value: [113.7293585, 35.7251279],
    },
    {
      name: "峪河镇",
      value: [113.6011711, 35.3705153],
    },
    {
      name: "占城镇",
      value: [113.6976327, 35.3832827],
    },
    {
      name: "张村乡",
      value: [113.9066528, 35.5367755],
    },
    {
      name: "赵固乡",
      value: [113.6880663, 35.4486989],
    },
  ];
  
  var countrys = function(name, color, value) {
    return {
      name: name,
      value: value,
    };
  };
  
  let echartsMapel: any = ref("");
  const echartsMap = (e: any) => (echartsMapel.value = e);
  const init = (china) => {
    // 基于准备好的dom，初始化echarts实例
  
    var countryData = [];
    var names = [];
    china.features.forEach((res) => {
      countryData.push(countrys(res.properties.name, "#ff5428", 10));
      names.push(res.properties.name);
    });
    console.log(names);
    echarts.registerMap("新乡辉县", china as any);
    var myChart = echarts.init(echartsMapel.value);
    // 指定图表的配置项和数据
    var options: any = {
      geo: {
        map: "新乡辉县",
        zoom: 1,
        show: true,
        roam: true,
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
      },
      series: [
        {
          name: "",
          type: "map",
          geoIndex: 2,
          map: "新乡辉县",
          mapType: "world",
          //    layoutCenter: ["50%", "50%"], //地图位置
          //    layoutSize: "160%",
          roam: true,
          itemStyle: {
            borderColor: "#fff",
            areaColor: "#ff5428",
          },
  
          label: {
            show: true,
            formatter: function(params) {
              return params.data.name;
            },
            color: "#fff",
            fontSize: 10,
          },
          select: {
            itemStyle: {
              areaColor: "#7f1100",
            },
            label: {
              show: true,
              color: "#fff",
            },
          },
          emphasis: {
            itemStyle: {
              areaColor: "#7f1100",
            },
            label: {
              show: true,
              color: "#fff",
            },
          },
          data: countryData,
        },
        {
          label: {
            normal: {
              position: "left",
              color: "#FFF",
              show: false, //是否显示地名
              formatter: function(params) {
                return params.name;
              },
            },
            emphasis: {
              show: true,
            },
          },
          zlevel: 2,
          rippleEffect: {
            //涟漪特效
            period: 4, //动画时间，值越小速度越快
            brushType: "fill", //波纹绘制方式 stroke, fill
            scale: 6, //波纹圆环最大限制，值越大波纹越大
          },
          symbol: "circle",
          symbolSize: 4,
          symbolSize: function(val) {
            return val[2] / 3;
          },
          itemStyle: {},
          color: "#FFD768",
          type: "effectScatter",
          coordinateSystem: "geo",
          data: dataList.map((res) => {
            res.value.push(22);
            return res;
          }),
        },
      ],
  
      tooltip: {
        trigger: "item",
      },
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(options);
  };
  const state = reactive({});
  onMounted(() => {
    fetch("/vue.example/echarts/hui_xian.json")
      .then(function(response) {
        //response.status表示响应的http状态码
        if (response.status === 200) {
          // json是返回的response提供的一个方法,
          // 会把返回的json字符串反序列化成对象,也被包装成一个Promise了
          return response.json();
          //
        } else {
          return {};
        }
      })
      .then(function(data) {
        //响应的内容
        init(data);
        // 响应数据格式化
      });
  });
  <\/script>
  
  <style scoped>
  .content {
    position: relative;
    width: 100%;
    box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  }
  #mainChina {
    width: 100%;
    height: 600px;
    background-color: #00184f;
  }
  </style>
  
    `,ne=()=>`

    

    <template>
    <div
      class="content"
   
    >
     <div :ref="echartsMap" id="mainChina"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, nextTick, onMounted, watch } from "vue";
  import "echarts";
  const data = [
                    {value: 20, name: 'name1'
                
                    },
                    {value: 40, name: 'name2'},
                    {value: 60, name: 'name3'},
                    {value: 80, name: 'name4'},
                    {value: 100, name: 'name5'}
                ]
  const state = reactive({
    option:  {

       color:["rgba(3, 28, 255, 1)","rgba(3, 72, 255, 1)","rgba(3, 129, 255, 1)","rgba(3, 171, 255, 1)"
    ,"rgba(3, 221, 255, 1)"],
        "legend": {
           show:false
        },
        "grid": {
            "top": "24%",
            left:"10"
        },
        series: [
            {
        name: "",
        type: "funnel",
           min: 0,
         max: 100,
         sort: 'ascending', //金字塔形:'ascending', 漏斗图形:'descending'
         type: 'funnel',
         left: '15%',
         top: 40,
           width: '30%',
        label: {
          formatter: function(params) {
            console.log(params);
            return (
              "{a| " +
              params.name +
              "} {b| " +
              params.value +
              "个 (" +
              params.percent +
              "%)}"
            );
          },
          rich: {
            a: {
              color: "rgba(211, 228, 254, 1)",
              fontSize: 16,
              align: "center",
              lineHeight: 25,
              fontWeight: 600,
            },
            b: {
              color: "rgba(0, 205, 222, 1)",
              fontSize: 16,
              align: "center",
              lineHeight: 25,
              fontWeight: 600,
            },
          },
          emphasis: {
            position: "left",
            formatter: "{c}%",
          },
        },
        labelLine: {
          normal: {
            length: 200,
            position: "left",

            lineStyle: {
              width: 1,
            },
          },
        },
        itemStyle: {
          opacity: 1,
          borderWidth: 0,
          shadowBlur: 5,
          shadowOffsetX: 0,
          shadowOffsetY: 2,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
   data:data
      },
      {
        data,
        name: "",
        type: "funnel",
        top: 0,
        gap: 10,
        label: {
          normal: {
            position: "inside",
            formatter: "转化率：({c}%)",
            textStyle: {
              color: "#fff",
            },
          },
        },
        labelLine: {
          normal: {},
        },
        itemStyle: {
          normal: {
            color: "transparent",
            borderWidth: 0,
            opacity: 0,
          },
        },
      
      },
        ]
    }
    
  });
  let echartsMapel = ref("");
  let opt = null;
  const echartsMap = (e) => (echartsMapel.value = e);
  const init = () => {
    let myChart = echarts.init(echartsMapel.value);
    myChart.setOption(state.option);
    const setOption = (dataObj) => {
      let opt = myChart.getOption();
      Object.assign(opt, dataObj);
      myChart.setOption(opt);
    };
    return setOption;
  };
  
  onMounted(() => {
    init();
  });
  <\/script>
  
  <style scoped >
  .content {
    position: relative;
    width: 100%;
    box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  }
  #mainChina {
    width: 100%;
    height: 600px;
    background-color: #00184F;
  }
  </style>
  
  
    
    
    
    `,se=()=>`
   
  
   
  
   
   
  
   
    <template>
    <div
      class="content"
   
    >
     <div :ref="echartsMap" id="mainChina"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, nextTick, onMounted, watch } from "vue";
  import "echarts";
  let barData1 = [19, 9, 17, 19, 9, 17] //全停
let barData3 = [400, 300, 100, 400, 300, 100]//停运机组容量
  const state = reactive({
    option: {
  legend: {
    textStyle: {
      color: "#B4B4B4",
    },
    left: "7%",
    top:10,
  },
      //图表离容器的距离
      grid: {
         left: "10%",
         top: "10%",
         right: "10%",
         bottom: "10%",
      },
        tooltip: {
    trigger: "axis",
    backgroundColor: "rgba(255,255,255,1)",
    axisPointer: {
      type: "shadow",
      label: {
        show: true,
        backgroundColor: "#7B7DDC",
      },
    },
  },
      //X轴
      xAxis: {
         data: ['库里', '科比', '詹姆斯', '乔丹', '杜兰特', '欧文', '威少'],
         axisLabel: {
            textStyle: {
               color: '#D3E4FE',
               fontSize: 16
            }
         },
         axisTick: {
            show: false //隐藏X轴刻度尺
         },
  
      axisLine: {
        show: true,
        lineStyle: {
           color: '#00A8FF'
        }
     },
      },
      //y轴
      yAxis:[
    
       {
        name:"(次)", 
        nameTextStyle: {
            color:"#97B2E0",
            padding:[0,0,-530,-10]
        },
        axisLabel: {
          textStyle: {
             color: '#D3E4FE',
             fontSize: 16
          }
       },
        axisTick:{
          show:false
      },
      splitLine: {
        show: false,
       
        },
      axisLine: {
        show: true,
        lineStyle: {
           color: '#00A8FF'
        },
        
     },
      },
         {
        name:"(%)", 
         position: 'right', // 右侧 Y 轴
        nameTextStyle: {
            color:"#97B2E0",
            padding:[0,0,-530,-10]
        },
        axisLabel: {
          textStyle: {
             color: '#D3E4FE',
             fontSize: 16
          }
       },
        axisTick:{
          show:false
      },
      splitLine: {
        show: false,
       
        },
      axisLine: {
        show: true,
        lineStyle: {
           color: '#00A8FF'
        },
        
     },
      },
      ],
      series: [
   
     {
      //最低下的圆片左
      name: '全停厂站',
      yAxisIndex:0,
      type: 'pictorialBar',
      symbolSize: [15, 5],
      symbolOffset: [-9, 2],
      z: 0,
      tooltip:{
        show:false,
      },
      legend:{
        show:false,
      },
      itemStyle: {
        //lenged文本
        color: 'rgba(59, 175, 255, 1)',
      },

      data: barData1,
    },
    {
      //最低下的圆片右
      name: '停运机组容量',
        yAxisIndex:0, tooltip:{
        show:false,
      },
         legend:{
        show:false,
      },
      type: 'pictorialBar',
      symbolSize: [15, 5],
      symbolOffset: [9, 2],
      z: 12,
      itemStyle: {
        //lenged文本
        color: 'rgba(48, 238, 255, 0.32)',
      },

      data: barData1,
    },
    {
      name: '全停', //中间头部1
      type: 'pictorialBar', tooltip:{
        show:false,
      },
         legend:{
        show:false,
      },
      symbolSize: [15, 5],
        yAxisIndex:0,
      symbolOffset: [-9, -2],
      symbolPosition: 'end',

      z: 17,
      itemStyle: {
        //lenged文本
        color: 'rgba(59, 175, 255, 1)',
      },
      data: barData1,
    },
    {
        yAxisIndex:0,
         tooltip:{
        show:false,
      },
     
      name: '停运机组容量', //中间头部2
      type: 'pictorialBar',
      symbolSize: [15, 5],
      symbolOffset: [9, -2],
      symbolPosition: 'end',

      z: 17,
      itemStyle: {
        //lenged文本
        color: 'rgba(48, 238, 255, 1)',
      },
      data: barData3,
      yAxisIndex: 0, // 关联右边的第二个yAxis
    },

    {
      name: '全停',
        yAxisIndex:0,
     
      type: 'bar',
      barWidth: 15,
      stack: '停电厂数',
      data: barData1,
      itemStyle: {
        //lenged文本
        color: 'rgba(59, 175, 255, 0.30)',
      },
    },
   
    {
      name: '停运机组容量',
        yAxisIndex:0,
      type: 'bar',
      barWidth: 15,
      stack: '停运机组容量',
      data: barData3,
     
      itemStyle: {
        //lenged文本

        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(48, 238, 255, 0.32)', // 起始颜色
            },
            {
              offset: 0.5,
              color: 'rgba(48, 238, 255, 0.32)', // 结束颜色
            },
            {
              offset: 1,
              color: 'rgba(48, 238, 255, 0.32)', // 起始颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
    },

           {
      name: "贯通率",
      yAxisIndex:1,
      type: "line",
      smooth: true,
      showAllSymbol: true,
      symbol: "emptyCircle",
      symbolSize: 8,
      yAxisIndex: 1,
      itemStyle: {
        normal: {
          color: "rgba(96, 255, 128, 1)",
        },
      },
        data: [12, 21, 24, 61, 121, 0, 11],
    },
      ]
   }
   
  });
  let echartsMapel = ref("");
  let opt = null;
  const echartsMap = (e) => (echartsMapel.value = e);
  const init = () => {
    let myChart = echarts.init(echartsMapel.value);
    myChart.setOption(state.option);
    const setOption = (dataObj) => {
      let opt = myChart.getOption();
      Object.assign(opt, dataObj);
      myChart.setOption(opt);
    };
    return setOption;
  };
  
  onMounted(() => {
    init();
  });
  <\/script>
  
  <style scoped >
  .content {
    position: relative;
    width: 100%;
    box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  }
  #mainChina {
    width: 100%;
    height: 600px;
    background-color: #00184F;
  }
  </style>
  
  
    
  
  
    
  
    
    
    
    
    
    `,le=()=>`
 
 
  <template>
  <div
    class="content"
    :style="{
      height: height,
      width: width,
    }"
  >
    <div id="huikuan-echarts"></div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import "echarts";
const props = defineProps({
  width: {
    //列数据
    type: String,
    default: "930px",
  },
  height: {
    type: String,
    default: "492px",
  },
});
onMounted(() => {
  getEcharts();
});

const getEcharts = () => {
const colorList1 = ['#00e4ff', '', '#1f77ee', '', '#f7b31d', '',]
const colorList2 = ['#0db0c3', '', '#0e51ab', '', '#ab7a0e', '',]
const colorList3 = ['#098c9c', '', '#084290', '', '#906508', '',]
let total = 0
let dataList = []
const moduleContent = { '村务': 204, '财务': 310, '党务': 84 }
let sum = 0
const chartdata = []
for (const i in moduleContent) {
   chartdata.push({
      name: i,
      value: moduleContent[i] || 1
   })
   sum += Number(moduleContent[i] || 0)
}
total = sum
dataList = chartdata
const data1 = []
chartdata.forEach((item) => {
   const _item = { ...item }
   if (!_item.value) {
      _item.value = sum / 100
   }
   data1.push(_item, {
      name: '',
      value: sum / 100,
      label: { show: false },
      itemStyle: {
         color: 'transparent'
      }
   })
})

  let myChart = echarts.init(document.getElementById("huikuan-echarts"));
  let option ={
   backgroundColor: '#00266b',
   title: {
      text: '608',
      subtext: \`总数\`,
      top: '46%',
      left: 'center',
      itemGap: 15,
      textStyle: {
         color: '#ffffff',
         fontSize: 30,
         fontWeight: 400
      },
      subtextStyle: {
         color: 'rgba(211, 228, 254, 1)',
         fontSize: 14,
         fontWeight: 400
      }
   },
   series: [
      {
         type: 'pie',
         radius: ['45%', '60%'],
         center: ['50%', '50%'],
         minAngle: 5,
         labelLine: {
            show: false
         },
         label: {
            show: true,
            alignTo: 'labelLine',
            position: 'outside',

            rich: {
               name: {
                  color: '#ffffff',
                  fontSize: 12,
                  fontWeight: 400,
                  padding: [0, 0, 0, 10]
               },
               zb: {
                  color: '#fff',
                  fontWeight: 400,
                  fontSize: 12,
                  align: 'left',
                  padding: [14, 0, 0, 24]
               },
               dot: {
                  backgroundColor: 'auto',
                  width: 14,
                  height: 14,
                  padding: [0, 0, 0, 0],
                  verticalAlign: 'top'
               }
            },
            formatter: (params) => {
               const x = params.dataIndex
               return '{dot|}' + '{name|' + params.data.name + '}' + '\\n' + '{zb|' + params.data.value + '}'
            }
         },
         itemStyle: {
            normal: {
               color: function (params) {
                  return colorList1[params.dataIndex]
               }
            }
         },
         data: data1,
         z: 666
      },
      {
         type: 'pie',
         radius: ['45%', '35%'],
         center: ['50%', '50%'],
         hoverAnimation: false,
         minAngle: 5,
         emphasis: { scale: false },
         label: {
            show: false
         },
         itemStyle: {
            normal: {
               color: function (params) {
                  return colorList2[params.dataIndex]
               }
            }
         },
         data: data1,
         z: 1
      },
      {
         type: 'pie',
         radius: ['25%', '35%'],
         center: ['50%', '50%'],
         hoverAnimation: false,
         minAngle: 5,
         emphasis: { scale: false },
         label: {
            show: false
         },
         itemStyle: {
            normal: {
               color: function (params) {
                  return colorList3[params.dataIndex]
               }
            }
         },
         data: data1,
         z: 1
      }
   ]
}

  myChart.setOption(option);
};
const count = ref(0);
<\/script>

<style scoped>
.content {
  position: relative;
  background-color: #022b66;
  box-shadow: 0px 3px 50px 1px rgba(0, 101, 175, 0.4);
  border: 1px solid rgba(19, 127, 212, 0.6);
}
#huikuan-echarts {
  width: 100%;
  height: 100%;
}
</style>

  
  
  
  `,pe=T(),ce=B(),de=j(),he=W(),me=_(),ue=X(),fe=le(),xe=$(),ge=H(),ve=V(),ye=Y(),be=G(),Se=Z(),we=U(),Ce=N(),Me=K(),De=J(),Fe=Q(),Ee=ee(),ke=te(),Ae=ae(),Oe=oe(),ze=ie(),Pe=re(),Le=ne(),Ie=se(),Re=q(),Te=Object.freeze(Object.defineProperty({__proto__:null,FunnelPlot1:Me,FunnelPlot2:Le,Pie1:me,Pie2:ue,Pie3:fe,Pie3D1:pe,Pie3D2:ce,Pie3D3:de,Pie3D4:he,Pie4:xe,Progress1:De,WaterPolo:Ae,bar1:ge,barY:ve,dimensionalBar:ye,dimensionalBar2:Re,filletCorner:be,filletCornerAndLine:Fe,filletCornerAndLine2:Ie,line:Se,linewaterfall:we,map1:Pe,mapGradient:Ee,pointerEcharts:Oe,taperBar:Ce,worldMap1:ke,worldMap2:ze},Symbol.toStringTag,{value:"Module"})),Be=`
/**
 * 
 * @param {*} startRatio 表示扇形起始角度在弧度下的比例（范围从0到1）。
 * @param {*} endRatio 表示扇形结束角度在弧度下的比例（范围从0到1）。
 * @param {*} isSelected 一个布尔值，表示扇形是否被选中，这会影响x轴和y轴上的位移。
 * @param {*} isHovered 一个布尔值，表示扇形是否正处于悬停状态，此时会按照一定比例放大尺寸。
 * @param {*} k 影响沿v轴方向曲率的一个可选参数（默认为1/3）。
 * @param {*} h z轴方向高度因子。
 * @returns 
 */
export const getParametricEquation = (
  startRatio,
  endRatio,
  isSelected,
  isHovered,
  k,
  h
) => {
  // 计算
  let midRatio = (startRatio + endRatio) / 2;

  let startRadian = startRatio * Math.PI * 2;
  let endRadian = endRatio * Math.PI * 2;
  let midRadian = midRatio * Math.PI * 2;

  // 如果只有一个扇形，则不实现选中效果。
  if (startRatio === 0 && endRatio === 1) {
    isSelected = false;
  }
  // isSelected = false;
  // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
  k = typeof k !== "undefined" ? k : 1 / 3;

  // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
  let offsetX = isSelected ? Math.cos(midRadian) * 0.6 : 0;
  let offsetY = isSelected ? Math.sin(midRadian) * 0.6 : 0;
  let offsetZ = isSelected ? 2 : 0;
  // 计算高亮效果的放大比例（未高亮，则比例为 1）
  let hoverRate = isSelected ? 1 : 1;
// let hoverRate =1 
  // 返回曲面参数方程
  return {
    u: {
      min: -Math.PI,
      max: Math.PI * 3,
      step: Math.PI / 32,
    },

    v: {
      min: 0,
      max: Math.PI * 2,
      step: Math.PI / 20,
    },

    x: function (u, v) {
      if (u < startRadian) {
        return (
          offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate
        );
      }
      if (u > endRadian) {
        return (
          offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate
        );
      }
      return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
    },

    y: function (u, v) {
      if (u < startRadian) {
        return (
          offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate
        );
      }
      if (u > endRadian) {
        return (
          offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate
        );
      }
      return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
    },

    // z: function (u, v) {
    //   if (u < -Math.PI * 0.5) {
    //     return  Math.sin(u);
    //   }
    //   if (u > Math.PI * 2.5) {
    //     return Math.sin(u) * h * 0.1;
    //   }
    //   return Math.sin(v) > 0 ? 1 * h * 0.1 : -1;
    // },
    z: function(u, v) {
        if (u < -Math.PI * 0.5) {
            return offsetZ + Math.sin(u);
        }
        if (u > Math.PI * 2.5) {
            return offsetZ + Math.sin(u);
        }
        // 调整扇形高度
        return offsetZ + (Math.sin(v) > 0 ? 0.1 * h : -1);
    }
  };
};

/**
 *
 * @param {*} pieData 饼状图数据
 * @param {*} internalDiameterRatio 内径比 默认 是 1/3
 */
export const getSeriesPie3D = ({
  pieData, internalDiameterRatio = 1 / 3,pieHeight
})  => {
  // echart series 数据
  let series = [];
  //所有值的总和 用来计算 饼状图半径
  let sumValue = 0;
  // 饼状图起始值
  let startValue = 0;
  // 饼状图结束值
  let endValue = 0;
  // echart legend 数据
  let legendData = [];
  
  let linesSeries = []; // line3D模拟label指示线

  for (let i in pieData) {
    legendData.push(pieData[i].name)
}
  // 内径比
  let k =
    typeof internalDiameterRatio !== "undefined"
      ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio)
      : 1 / 3;
  // 初始化饼状图数据 用来生成3d图做准备
  for (let index = 0; index < pieData.length; index++) {
    const element = pieData[index];
    sumValue += element.value;
    let seriesItem = {
      name: typeof element.name === "undefined" ? 'series'+i : element.name,
      type: "surface",
      parametric: true,
      shading: "realistic",
      wireframe: {
        show: false,
      },
      // colorMaterial:{
      //     textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
      //     detailTexture:"https://copyright.bdstatic.com/vcg/creative/cc9c744cf9f7c864889c563cbdeddce6.jpg@h_1280"
      // },
      label: {
        show: true,
      },
      //保存数据使用
      pieData: element,
      //饼状图状态
      pieStatus: Object.assign({
        selected:false,
        hovered: false,
        k: k,
      }, element.pieStatus?element.pieStatus:{}),
    };
    // 保证代码健壮性
    if (typeof element.itemStyle != "undefined") {
      let itemStyle = {};

      typeof element.itemStyle.color != "undefined"
        ? (itemStyle.color = element.itemStyle.color)
        : null;
      typeof element.itemStyle.opacity != "undefined"
        ? (itemStyle.opacity = element.itemStyle.opacity)
        : null;

      seriesItem.itemStyle = itemStyle;
    }
    series.push(seriesItem);
  }
  // 生成3d饼状图
  for (let i = 0; i < series.length; i++) {
    // 计算饼状图 结束位置
    endValue = startValue + series[i].pieData.value;
    // 获取开始比例 起始值
    series[i].pieData.startRatio = startValue / sumValue;
    // 获取结束比例 终始值
    series[i].pieData.endRatio = endValue / sumValue;
    // 曲面的参数方程。在data没被设置的时候，可以通过 parametricEquation 去声明参数参数方程。在 parametric 为true时有效。
    series[i].parametricEquation = getParametricEquation(
      series[i].pieData.startRatio,
      series[i].pieData.endRatio,
      series[i].pieStatus.selected,
      series[i].pieStatus.hovered,
      series[i].pieStatus.k,
      pieHeight?pieHeight:series[i].pieData.value
    );

    startValue = endValue;
    // 计算label指示线的起始和终点位置
    let midRadian =
      (series[i].pieData.endRatio + series[i].pieData.startRatio) * Math.PI;
    let posX = Math.cos(midRadian) * (1.4 + Math.cos(Math.PI / 2));
    let posY = Math.sin(midRadian) * (1 + Math.cos(Math.PI / 2));
    let posZ = Math.log(Math.abs(series[i].pieData.value + 1)) * 0.13;
    let flag =
      (midRadian >= 0 && midRadian <= Math.PI / 2) ||
      (midRadian >= (3 * Math.PI) / 2 && midRadian <= Math.PI * 2)
        ? 1
        : -1;
    let color = pieData[i].itemStyle.color;
    let turningPosArr = [
        posX*1.4, 
        posY * (1.8) + (i * 0.1 * flag) + (flag < 0 ? -0.5 : 0), 
        posZ * (8)
    ]
    let endPosArr = [
        posX * (2) + (i * 0.1 * flag) + (flag < 0 ? -0.5 : 0), 
        posY * (1.9) + (i * 0.1 * flag) + (flag < 0 ? -0.5 : 0), 
        posZ * (9)
    ]
    linesSeries.push(
      {
        name: "mouseoutSeries",
        type: "line3D",
        lineStyle: {
          color: color,
        },
        data: [[posX, posY, posZ], turningPosArr, endPosArr],
      },
      {
        type: "scatter3D",
        name: "mouseoutSeries",
        label: {
          show: true,
          distance: 0,
          position: "center",
          textStyle: {
            color: color,
            //    backgroundColor: color,
            borderWidth: 2,
            fontSize: 16,
            padding: 10,
            borderRadius: 4,
          },
          formatter: "{b}",
        },
        symbolSize: 0,
        data: [
          {
            name: series[i].name +""+  series[i].pieData.value,
            value: endPosArr,
          },
        ],
      }
    );
  }
  series = series.concat(linesSeries);

  return series;
};


`,je={class:"white-bg"},We={class:"renderEcharts jcfend"},t="/vue.example",_e=S({__name:"renderEcharts",setup(Xe){y();const l=b();e("");const m=()=>{var c=document.getElementById("repl");const i=c.querySelector("iframe");var r=i.contentDocument||i.contentWindow.document;console.log("iframeElement :>> ",o);var o=r.getElementById("app");I(o).then(v=>{L.saveAs(v,`${l.params.text}.png`)})},{importMap:a,vueVersion:u,productionMode:f}=w({runtimeProd:t+"/js/runtime-dom.3.4.19.esm-browser.prod.js",serverRenderer:t+"/js/server-renderer.3.4.19.esm-browser.js"}),x=e({welcomeSFC:Te[l.params.text]});e("index.vue");const g=e({"src/tool.js":new P("src/tool.js",Be,!1)});a.value.imports["echarts-liquidfill"]=t+"/js/echarts-liquidfill.3.1.0.min.js",a.value.imports.echarts=t+"/js/echarts.5.5.0.min.js",a.value.imports["echarts-gl"]=t+"/js/echarts-gl.2.0.9.min.js";const p=C({vueVersion:u,builtinImportMap:a,template:x,files:g});return f.value=!0,e(!0),M({}),D(()=>{console.log("store :>> ",p)}),(c,i)=>{const r=d("el-button"),o=d("el-scrollbar");return F(),E("div",je,[n(o,{class:"renderEchartsEdit"},{default:h(()=>[n(s(k),{theme:"dark",layout:"1111",store:s(p),class:"repl",editor:s(A),id:"repl"},null,8,["store","editor"]),O("div",We,[n(r,{type:"primary",onClick:m},{default:h(()=>[z("下载图片")]),_:1})])]),_:1})])}}}),yt=R(_e,[["__scopeId","data-v-be11eec2"]]);export{yt as default};

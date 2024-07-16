import"./vue-C5dO_luG.js";import{u as b,a as y}from"./vue-router-BozZHOWV.js";import{d as k,r as o,bS as C,bW as D,bT as T,v as z,f as M,h as u,o as B,c as F,i as n,j as h,u as r,bU as E,bV as _,a as I,m as W}from"./@vue-CEwL1emF.js";import{F as S}from"./file-saver-BBbes1LX.js";import{t as j}from"./html-to-image-BMEuJ5ne.js";import{_ as N}from"./index-BlbMRq7A.js";import"./ace-builds-BgbZLK3Y.js";import"./vuex-Ba7ek5fU.js";import"./path-browserify-CtykbOjM.js";import"./@vueuse-DfzPTH68.js";import"./axios-DHSC6jYe.js";import"./js-cookie-Cz0CWeBA.js";import"./element-plus-DMVJK10x.js";import"./lodash-es-WEemOz_S.js";import"./@element-plus-DNaH03KG.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-CdRyolhI.js";import"./async-validator-D3FX-SGt.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-CtcGg-6p.js";import"./nprogress-DI8p4ty5.js";/* empty css                    */import"./element-easy-form-4sEWskrm.js";import"./mockjs-DBNDAG0j.js";import"./vuedraggable-CHX8LlEE.js";import"./sortablejs-Df4VMxQp.js";import"./vue3-ace-editor-D2yfFFZ4.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./uuid-D8aEg3BZ.js";const R=()=>({"App.vue":`
     

     

      <template>
      <div
        class="content"
      >
      <stepsCard :data="data" />
      </div>
    </template>
    
    <script setup>
    import { ref, reactive, nextTick, onMounted, watch } from "vue";
    import stepsCard from "./stepsCard.vue";
        const data = [
      {
        name: "第一步",
        active: true,
        time: "12:00:00",
        date: "2021-01-01 ",
      },
      {
        name: "第二步",
        active: true,
        time: "12:00:00",
        date: "2021-01-01 ",
      },
      {
        name: "第三步",
        active: false,
        time: "12:00:00",
        date: "2021-01-01 ",
      },
    ];
    
    onMounted(() => {
    });
    <\/script>
    
    <style scoped >
    .content{
      width: 100%;
      background:#042C67;
      padding-top:300px;
      height: 492px; display: flex;justify-content: center;
    }
    </style>
    
    
      
      
    
    
      
      
    
    
      `,"src/stepsCard.vue":`

      <template>
      <div
        class="stepsCard "
        :style="{
          width: stepsWidth + 'px',
        }"
      >
        <template v-for="(item, index) in props.data" :key="index">
          <div :class="['defaultStep']">
            <div
              class="active"
              v-if="index == active"
              :style="{ width: stepCurrentWidth + 'px' }"
            ></div>
            <div class="stepTop" v-if="item.active">
              <div>
                {{ item.date }}
              </div>
              <div>
                {{ item.time }}
              </div>
            </div>
            <div class="title">
              {{ item.name }}
            </div>
          </div>
        </template>
        <div
          class="stepsActiveBox"
          v-for="(item, index) in active"
          :key="item"
          :style="{
            left: stepWidth * (index + 1) - 12 + 'px',
            background: \`linear-gradient(82deg, \${getCurrentColor(index + 1)[0]} 0%,
                      \${getCurrentColor(index + 1)[1]} 100%)\`,
          }"
        ></div>
      </div>
    </template>
    
    <script setup>
    import {
      ref,
      reactive,
      defineEmits,
      onMounted,
      onUpdated,
      computed,
    } from "vue";
    const props = defineProps({
      data: {
        type: Array,
        default: () => [],
      },
      stepsWidth: {
        type: Number,
        default: 500,
      },
    });
    
    /*
        基本数据类型
        引用数据类型（复杂类型） 个人建议 ref初始化变量 
        ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
        ref定义的数据访问的时候要多一个.value
        */
    const stepsWidth = computed(() => {
      return props.stepsWidth;
    });
    const state = reactive({});
    const stepNum = computed(() => {
      return props.data.length - 1;
    });
    
    const stepWidth = computed(() => {
      return stepsWidth.value / stepNum.value;
    });
    const active = computed(() => {
      let num = props.data.filter((item) => item.active);
      console.log("num :>> ", num);
      return num.length - 1;
    });
    
    const stepCurrentWidth = computed(() => {
      return stepWidth.value * active.value;
    });
    
    const getColors = (steps) => {
      function hexToRgb(hex) {
        if (hex.length !== 7 || hex[0] !== "#") {
          throw new Error("请输入正确的16进制颜色值，格式为：#RRGGBB");
        }
    
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
    
        return [r, g, b];
      }
      function rgbToHex(rgbColor) {
        // 将RGB值转换为16进制颜色值
        return (
          "#" +
          rgbColor
            .map(function(value) {
              return value.toString(16).padStart(2, "0");
            })
            .join("")
        );
      }
    
      function interpolateColors(startColor, endColor, steps) {
        // 计算两个颜色之间的渐变色
        var startRgb = hexToRgb(startColor);
        var endRgb = hexToRgb(endColor);
        var diffRgb = startRgb.map(function(start, i) {
          return (endRgb[i] - start) / steps;
        });
        var colors = [];
        for (var step = 0; step <= steps; step++) {
          var colorRgb = startRgb.map(function(start, i) {
            return Math.round(start + diffRgb[i] * step);
          });
          colors.push(rgbToHex(colorRgb));
        }
        return colors;
      }
    
      // 示例用法
      var startColor = "#016eea";
      var endColor = "#2fd3fe";
      var gradientColors = interpolateColors(startColor, endColor, steps);
      return gradientColors;
    };
    /**
     * 获取当前节点背景色
     */
    const getCurrentColor = (steps) => {
      console.log("stepWidth.value :>> ", stepWidth.value);
      let data = [];
      if (steps != active.value) {
        data.push(
          getColors(stepCurrentWidth.value)[Math.floor(stepWidth.value * steps)]
        );
        data.push(
          getColors(stepCurrentWidth.value)[
            Math.floor(stepWidth.value * steps + 26)
          ]
        );
      } else {
        data.push(
          getColors(stepCurrentWidth.value)[Math.floor(stepWidth.value * steps)]
        );
        data.push(
          getColors(stepCurrentWidth.value)[Math.floor(stepWidth.value * steps)]
        );
      }
      return data;
    };
    
    onUpdated(() => {});
    <\/script>
    
    <style scoped>
    .stepsCard {
      width: 100%;
      height: 12px;
      background: rgba(59, 130, 253, 0.2);
      position: relative;
      align-items: center;
      justify-content: space-between;
      display: flex;
    }
    .stepsCard:before {
      content: "";
      position: absolute;
      width: 26px;
      height: 26px;
      background: #016eea;
      border-radius: 50%;
      bottom: -9px;
      left: -14px;
    
      z-index: 2;
    }
    
    .defaultStep {
      position: relative;
      height: 12px;
      background: transparent;
    }
    .defaultStep::before {
      content: "";
      position: absolute;
      width: 26px;
      height: 26px;
      background: #0d377e;
      border-radius: 50%;
      bottom: -8px;
      right: -12px;
    }
    .active {
      width: 100%;
      height: 12px;
      position: absolute;
      transform: translateX(-100%);
      background: linear-gradient(82deg, #016eea 0%, #2fd3fe 100%);
    }
    
    .title {
      position: absolute;
      white-space: nowrap;
      bottom: -40px;
      left: 0;
      transform: translateX(-50%);
      font-size: 12px;
      font-weight: 500;
      font-size: 14px;
      color: #d3e4fe;
    }
    .stepTop {
      position: absolute;
      white-space: nowrap;
      top: -60px;
      text-align: center;
      left: 0;
      transform: translateX(-50%);
      font-size: 12px;
      font-weight: 500;
      font-size: 14px;
      color: #d3e4fe;
    }
    .stepsActiveBox {
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 26px;
      height: 26px;
      background: #0d377e;
      border-radius: 50%;
    }
    </style>
    
      
      `}),X=()=>({"App.vue":`

      <template>
      <div
        class="content"
      >
      <show1   />
      </div>
    </template>
    
    <script setup>
    import { ref, reactive, nextTick, onMounted, watch } from "vue";
    import show1 from "./show1.vue";
  
    
    onMounted(() => {
    });
    <\/script>
    
    <style scoped >
  .content{
        width: 100%;
        padding-top:100px;
        background:#042C67;
        height: 492px; display: flex;justify-content: center;
  }
    </style>
    
    
      
      
    
    
      
      
    
    
      
    
      
      
    
    
      
      
    
    
      `,"src/show1.vue":`


      <template>
      <div
        class="show1Box"
      :style="{
        width:width+'px',
        height:height+'px',
      }"
      >
      <img src="/vue.example/static/show1.png"
    class="image1"
       alt="" />
             <img src="/vue.example/static/card1.png"
    class="showIcon"
       alt="" />
       <div class="title">{{item.title}}</div>
         <div class="subTitle">{{item.subTitle}}</div>
      </div>
    </template>
    
    <script setup>
    import {
      ref,
      reactive,
      defineEmits,
      onMounted,
      onUpdated,
      computed,
    } from "vue";
  const props =  defineProps({
     width:{
        type:Number,
        default:162 
      },
        height:{
        type:Number,
        default:199
      },
      item:{
        type:Object,
        default:()=>{
          return {
            icon:"/vue.example/static/card1.png",
            title:"3200",
            subTitle:"已回款(万元)"
          }
        }
      }
});

 
    
    onUpdated(() => {});
    <\/script>
    
    <style scoped>
    .show1Box{
      position: relative;
    }
    .image1{
        width:100%;
  height: 100%;
    }
    .title{
        z-index: 1;
  position: absolute;
  left:50%;
   transform: translateX(-50%);
   bottom:55px;
font-weight: 800;
font-size: 24px;
color: #0BF9FE;
    }

        .subTitle{
        z-index: 1;
  position: absolute;
  left:50%;
   transform: translateX(-50%);  
   bottom:35px;
font-weight: 400;
font-size: 14px;
color: #FFFFFF;
    }
    .showIcon{
              z-index: 1;
  position: absolute;
  left:50%;
   transform: translateX(-50%);  
   top:35px;
   width:40px;
   height:40px;
    }
    </style>
    
      
      
    
      
      `}),P=()=>({"App.vue":`

      <template>
      <div class="content">
        <show2 />
      </div>
    </template>
    
    <script setup>
    import { ref, reactive, nextTick, onMounted, watch } from "vue";
    import show2 from "./show2.vue";
    
    onMounted(() => {});
    <\/script>
    
    <style scoped>
    .content {
      width: 100%;
      padding-top: 100px;
      background: #042c67;
      height: 492px;
      display: flex;
      justify-content: center;
    }
    </style>
    
    
    
      `,"src/show2.vue":`

      <template>
      <div
        class="show2Box"
        :style="{
          width: width + 'px',
          height: '100%',
        }"
      >
        <div class="rotateBox">
          <div class="rotateContent">
            <div class="rotateItem">
              <div class="routeText1">
                1022
              </div>
              <div class="routeText2">
              购物车数量
              </div>
            </div>
            <div class="rotateItem">
              <div class="routeText1">
                860
              </div>
              <div class="routeText2">
              购物车数量
              </div>
            </div>
            <div class="rotateItem">
              <div class="routeText1">
                1022
              </div>
              <div class="routeText2">
              购物车数量
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    
    <script setup>
    import {
      ref,
      reactive,
      defineEmits,
      onMounted,
      onUpdated,
      computed,
    } from "vue";
    const props = defineProps({
      width: {
        type: Number,
        default: 600,
      },
      height: {
        type: Number,
        default: 600,
      },
      item: {
        type: Object,
        default: () => {
          return {
            icon: "/vue.example/static/card1.png",
            title: "3200",
            subTitle: "已回款(万元)",
          };
        },
      },
    });
    
    onUpdated(() => {});
    <\/script>
    
    <style scoped>
    .show2Box {
      position: relative;
    }
    
    .rotateBox {
      width: 600px;
      margin: 100px auto;
      height: 136px;
      background-image: url(/vue.example/static/yuanpan.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      position: relative;
    }
    .rotateContent {
      height: 100%;
      position: relative;
      width: 100%;
    }
    .rotateItem {
      height: 137px;
      width: 142px;
      position: absolute;
      top: 0;
      left: 230px;
    }
    
    .routeText1 {
      font-weight: 800;
      font-size: 30px;
      color: #ffffff;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      position: absolute;
    }
    .routeText2 {
      font-weight: 500;
      font-size: 16px;
      color: #d3e4fe;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%) translateY(150%);
      position: absolute;
      white-space: nowrap;
    }
    
    .rotateContent .rotateItem:nth-child(1) {
      transform: translateX(-250px) scale(0.85);
      background-image: url(/vue.example/static/feipan.png);
      background-repeat: no-repeat;
      background-position: center;
      top: -30px;
      background-size: 100% 100%;
    }
    
    .rotateContent .rotateItem:nth-child(2) {
      transform: translateX(0) scale(1);
      background-image: url(/vue.example/static/feipan.png);
      background-repeat: no-repeat;
      background-position: center;
      top: 30px;
      background-size: 100% 100%;
    }
    
    .rotateContent .rotateItem:nth-child(3) {
      background-image: url(/vue.example/static/feipan.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      top: -30px;
      transform: translateX(250px) scale(0.85);
    }
    </style>
    
      
      
    
      
      `}),A=()=>({"App.vue":`


      <template>
      <div class="content">
        <show3 />
      </div>
    </template>
    
    <script setup>
    import { ref, reactive, nextTick, onMounted, watch } from "vue";
    import show3 from "./show3.vue";
    
    onMounted(() => {});
    <\/script>
    
    <style scoped>
    .content {
      width: 100%;
      background: #03286D;
      height: 492px;
      display: flex;
      justify-content: center;
    }
    </style>
    
    
    
      
    
    
      `,"src/show3.vue":`

      <template>
      <div
        class="show3Box"
        :style="{
          width: width + 'px',
          height: '100%',
        }"
      >
             <div class="rotateContent">
        <div class="rotateContentText">
          {{title}}
        </div>
            <div v-for="(item,index) in getNums" :key="index" class="rotateItem">
          {{item}}
        </div>
          </div>
      </div>
    </template>
    
    <script setup>
    import {
      ref,
      reactive,
      defineEmits,
      onMounted,
      onUpdated,
      computed,
    } from "vue";
    const props = defineProps({
      width: {
        type: Number,
        default: 600,
      },
      height: {
        type: Number,
        default: 600,
      },
      number: {
        type: Number,
        default: 1392,
      },
        title: {
        type: String,
        default:"装配时长(天)",
      },
    });
    const getNums = computed(()=>{
      let data = String(props.number).split('');
      return data
    })
    onUpdated(() => {});
    <\/script>
    
    <style scoped>
    .show3Box {
      position: relative;
    }
    .rotateContent {
      height: 100%;
      position: relative;
        display: flex;
      align-items: center;
      width: 100%;
    }
    .rotateContentText{
    font-weight: bold;
    font-size: 20px;
    color: #D3E4FE;
    line-height: 60px;
    text-align: center;
    margin-right:10px;
    }
    .rotateItem {
      height: 60px;
      width: 44px;
      margin-right:10px;
      background-image: url(/vue.example/static/numbg.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      font-weight: bold;
    font-size: 34px;
    color: #D3E4FE;
    line-height: 60px;
    text-align: center;
    font-style: normal;
    text-transform: none;
    }
    </style>
    
      
    
      
      `}),U=()=>({"App.vue":`




      <template>
      <div class="content">
        <show4>
              <template #img>
      <img src="/vue.example/static/show4.png"
    class="image1"
       alt="" />
    </template>
        <template #title>
            <div class="text1">
              发料单据数量
            </div>
    </template>
     <template #value>
  <div class="text2">
              1321
            </div>
    </template>
          </show4>
      </div>
    </template>
    
    <script setup>
    import { ref, reactive, nextTick, onMounted, watch } from "vue";
    import show4 from "./show4.vue";
    
    onMounted(() => {});
    <\/script>
    
    <style scoped>
    .content {
      width: 100%;
      background: #03286D;
      height: 492px;
      display: flex;
      justify-content: center;
    }
    .image1{
      width:99.26px;
      height:121.13px;
    }
    .text1{
font-weight: 400;
font-size: 16px;
color: #D3E4FE;
    }
        .text2{
font-weight: bold;
font-size: 24px;
color: #C5C1FF;
text-shadow: 0px 3px 6px #1900FF;
    }
    </style>
    
    
    
      
    
    
      
    
      `,"src/show4.vue":`

      

      <template>
      <div
        class="show4Box"
   
      >
            <slot name="img">

            </slot>
            <div class="show4Left" :style="styles">
               <div >
               <slot name="title">

            </slot>
            </div>
             <div>
               <slot name="value">

            </slot>
            </div>
            </div>
      </div>
    </template>
    
    <script setup>
    import {
      ref,
      reactive,
      defineEmits,
      onMounted,
      onUpdated,
      computed,
    } from "vue";
    const props = defineProps({
      styles:{
        type:{
          type:Object,
          defaule:()=>{
            return {
              
            }
          }
        }
      }
    });
    const getNums = computed(()=>{
      let data = String(props.number).split('');
      return data
    })
    onUpdated(() => {});
    <\/script>
    
    <style scoped>
    .show4Box {
      position: relative;
        display: flex;
          align-items: center;
    }
    .show4Left{
        margin-left: 16px;
    }
    </style>
    
      
    
      
      
      
      `}),L=()=>({"App.vue":`

      <template>
      <div
        class="content"
      >
      <show5   />
      </div>
    </template>
    
    <script setup>
    import { ref, reactive, nextTick, onMounted, watch } from "vue";
    import show5 from "./show5.vue";
  
    
    onMounted(() => {
    });
    <\/script>
    
    <style scoped >
  .content{
        width: 100%;
        padding-top:100px;
        background:#042C67;
        height: 492px; display: flex;justify-content: center;
  }
    </style>
    
    
      
      
    
    
      
      
    
    
      
    
      
      
    
    
      
      
    
    
      `,"src/show5.vue":`



      <template>
      <div
        class="show5Box"
      :style="{
        width:width+'px',
        height:height+'px',
      }"
      >
      <img src="/vue.example/static/show5.png"
    class="image1"
       alt="" />
      
       <div class="title">{{item.title}}</div>
         <div class="subTitle">{{item.subTitle}}</div>
      </div>
    </template>
    
    <script setup>
    import {
      ref,
      reactive,
      defineEmits,
      onMounted,
      onUpdated,
      computed,
    } from "vue";
  const props =  defineProps({
     width:{
        type:Number,
        default:162 
      },
        height:{
        type:Number,
        default:199
      },
      item:{
        type:Object,
        default:()=>{
          return {
            icon:"/vue.example/static/card1.png",
            title:"3200",
            subTitle:"已回款(万元)"
          }
        }
      }
});

 
    
    onUpdated(() => {});
    <\/script>
    
    <style scoped>
    .show5Box{
      position: relative;
    }
    .image1{
        width:100%;
  height: 100%;
    }
    .title{
        z-index: 1;
  position: absolute;
  left:50%;
   transform: translateX(-50%);
   top:25px;
font-weight: 800;
font-size: 24px;
color: rgba(11, 249, 254, 1);
    }

        .subTitle{
        z-index: 1;
  position: absolute;
  left:50%;
   transform: translateX(-50%);  
   bottom:10px;
font-weight: 400;
font-size: 14px;
color: #FFFFFF;
    }
    .showIcon{
              z-index: 1;
  position: absolute;
  left:50%;
   transform: translateX(-50%);  
   top:35px;
   width:40px;
   height:40px;
    }
    </style>
    
      
      
    
      
      
    
      
      `}),$=()=>({"App.vue":`



      <template>
      <div
        class="content"
      >
      <show6   />
      </div>
    </template>
    
    <script setup>
    import { ref, reactive, nextTick, onMounted, watch } from "vue";
    import show6 from "./show6.vue";
  
    
    onMounted(() => {
    });
    <\/script>
    
    <style scoped >
  .content{
        width: 100%;
        padding-top:100px;
        background:#03306B;
        height: 492px; display: flex;justify-content: center;
  }
    </style>
    
    
      
      
    
    
      
      
    
    
      
    
      
      
    
    
      
      
    
    
      
    
      
      
    
    
      
    
      
      
    
    
      
      
    
    
      `,"src/show6.vue":`





      <template>
      <div
        class="show6Box"
      :style="{
        width:width+'px',
        height:height+'px',
      }"
      >
      <img src="/vue.example/static/show6.png"
    class="image1"
       alt="" />
      
       <div class="title">{{item.title}}</div>
         <div class="subTitle">{{item.subTitle}}</div>
      </div>
    </template>
    
    <script setup>
    import {
      ref,
      reactive,
      defineEmits,
      onMounted,
      onUpdated,
      computed,
    } from "vue";
  const props =  defineProps({
     width:{
        type:Number,
        default:120
      },
        height:{
        type:Number,
        default:100
      },
      item:{
        type:Object,
        default:()=>{
          return {
            icon:"/vue.example/static/card1.png",
            title:"3200",
            subTitle:"已回款(万元)"
          }
        }
      }
});

 
    
    onUpdated(() => {});
    <\/script>
    
    <style scoped>
    .show6Box{
      position: relative;
    }
    .image1{
        width:100%;
  height: 100%;
    }
    .title{
        z-index: 1;
  position: absolute;
  left:50%;
   transform: translateX(-50%);
   top:-5px;
 white-space: nowrap;

width: 68px;
height: 40px;
font-weight: 800;
font-size: 28px;
color: #83D7FF;
    }

        .subTitle{
        z-index: 1;
  position: absolute;
  left:50%;
   transform: translateX(-50%);  
   bottom:-15px;
font-weight: 400;
font-size: 16px;
 white-space: nowrap;
color: #FFFFFF;
    }
    .showIcon{
              z-index: 1;
  position: absolute;
  left:50%;
   transform: translateX(-50%);  
   top:35px;
   width:40px;
   height:40px;
    }
    </style>
    
      
      
    
      
      
    
      
      
    
      
      `}),O=()=>({"App.vue":`



      <template>
      <div
        class="content"
      >
      <show7   />
      </div>
    </template>
    
    <script setup>
    import { ref, reactive, nextTick, onMounted, watch } from "vue";
    import show7 from "./show7.vue";
  
    
    onMounted(() => {
    });
    <\/script>
    
    <style scoped >
  .content{
        width: 100%;
        padding-top:100px;
        background:#03306B;
        height: 492px; display: flex;justify-content: center;
  }
    </style>
    
    
      
      
    
    
      
      
    
    
      
    
      
      
    
    
      
      
    
    
      
    
      
      
    
    
      
    
      
      
    
    
      
      
    
    
      `,"src/show7.vue":`








      <template>
      <div
        class="show7Box"
      :style="{
        width:width+'px',
        height:height+'px',
      }"
      >
      <img src="/vue.example/static/show7.png"
    class="image1"
       alt="" />
      
       <div class="title" :style="styles">{{item.title}}</div>
         <div class="subTitle">{{item.subTitle}}</div>
      </div>
    </template>
    
    <script setup>
    import {
      ref,
      reactive,
      defineEmits,
      onMounted,
      onUpdated,
      computed,
    } from "vue";
  const props =  defineProps({
     width:{
        type:Number,
        default:120
      },
        height:{
        type:Number,
        default:100
      },
        styles:{
        type:Object,
        default:()=>{
          return {
           
          }
        }
      },
      item:{
        type:Object,
        default:()=>{
          return {
            title:"3200",
            subTitle:"已回款(万元)"
          }
        }
      }
});

 
    
    onUpdated(() => {});
    <\/script>
    
    <style scoped>
    .show7Box{
      position: relative;
    }
    .image1{
        width:100%;
  height: 100%;
    }
    .title{
        z-index: 1;
  position: absolute;
  left:50%;
   transform: translateX(-50%);
   top:-10px;
 white-space: nowrap;

width: 68px;
height: 40px;
font-weight: 800;
font-size: 30px;
color: #83D7FF;
    }

        .subTitle{
        z-index: 1;
  position: absolute;
  left:50%;
   transform: translateX(-50%);  
   bottom:-30px;
font-weight: 400;
font-size: 16px;
 white-space: nowrap;
color: #D3E4FE;
    }
    .showIcon{
              z-index: 1;
  position: absolute;
  left:50%;
   transform: translateX(-50%);  
   top:35px;
   width:40px;
   height:40px;
    }
    </style>
    
      
      
    
      
      
    
      
      
    
      
      
      
    
      
      `}),H=()=>({"App.vue":`
     

     

      <template>
      <div
        class="content"
      >
      <ProgressBarCard :data="data" />
      </div>
    </template>
    
    <script setup>
    import { ref, reactive, nextTick, onMounted, watch } from "vue";
    import ProgressBarCard from "./ProgressBarCard.vue";
        const data = [
      {
        name: "第一步",
        active: true,
        time: "12:00:00",
        date: "2021-01-01 ",
      },
      {
        name: "第二步",
        active: true,
        time: "12:00:00",
        date: "2021-01-01 ",
      },
   
    ];
    
    onMounted(() => {
    });
    <\/script>
    
    <style scoped >
    .content{
      width: 100%;
      background:#042C67;
      padding-top:300px;
      height: 492px; display: flex;justify-content: center;
    }
    </style>
    
    
      
      
    
    
      
      
    
    
      `,"src/ProgressBarCard.vue":`

      <template>
      <div
        class="stepsCard "
        :style="{
          width: stepsWidth + 'px',
        }"
      >
        <template v-for="(item, index) in props.data" :key="index">
          <div :class="['defaultStep']">
       
            <div class="stepTop" >
              <div>
                {{ item.date }}
              </div>
              <div>
                {{ item.time }}
              </div>
            </div>
            <div class="title">
              {{ item.name }}
            </div>
          </div>
        </template>
             <div
              class="active"
              v-if="resultWidth"
              :style="{ 
                
                width: resultWidth*stepsWidth + 'px' }"
            ></div>
        <div
          class="stepsActiveBox"
       
        >
        {{resultWidth}}
        </div>
      </div>
    </template>
    
    <script setup>
    import {
      ref,
      reactive,
      defineEmits,
      onMounted,
      onUpdated,
      computed,
      watch,
    } from "vue";
    const props = defineProps({
      data: {
        type: Array,
        default: () => [],
      },
      stepsWidth: {
        type: Number,
        default: 500,
      },
    });
    
    /*
        基本数据类型
        引用数据类型（复杂类型） 个人建议 ref初始化变量 
        ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
        ref定义的数据访问的时候要多一个.value
        */
    const stepsWidth = computed(() => {
      return props.stepsWidth;
    });
    // JavaScript Date utility functions
    
    // 计算两个日期之间的天数（不包含小时分钟秒）
    function countDaysBetween(date1, date2) {
      const startDate = new Date(date1);
      const endDate = new Date(date2);
      return Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    }
    
    // 获取当前日期
    function getCurrentDate() {
      return new Date();
    }
    
    // 主要函数：计算当前时间距离结束时间的天数，以及开始和结束时间总共有多少天
    function calculateDaysBetweenDates(startDateStr, endDateStr, currentDate = null) {
      if (!currentDate) {
        currentDate = getCurrentDate();
      }
      
      const startDate = new Date(startDateStr);
      const endDate = new Date(endDateStr);
      const daysToEndDate = countDaysBetween(currentDate, endDate);
      const totalDays = countDaysBetween(startDate, endDate);
    
      return {
        daysToEndDate: daysToEndDate,
        totalDays: totalDays,
      };
    }
    
    // 使用示例
    const resultDay = computed(() => {
      if(props.data.length >= 2){
          const startDateString = props.data[0].date;
    const endDateString = props.data[1].date;
    return calculateDaysBetweenDates(startDateString, endDateString)
    }else{
      return {
        daysToEndDate: 0,
        totalDays: 0,
      }
    }
    
      
    });
    const resultWidth = computed(() => {
     
    if(props.data.length >= 2){
        
    const {totalDays,daysToEndDate} = resultDay.value;
    //计算 开始时间到当前时间过去多少天
    console.log(daysToEndDate,totalDays, (1 - (daysToEndDate / totalDays)) );
    return daysToEndDate<0?1:  (1 - (daysToEndDate / totalDays)) 
    }else{
      return false
    }
      
    });
     
    
    <\/script>
    
    <style scoped>
    .stepsCard {
      width: 100%;
      height: 12px;
      background: rgba(59, 130, 253, 0.2);
      position: relative;
      align-items: center;
      justify-content: space-between;
      display: flex;
    }
    .stepTop {
      position: absolute;
      white-space: nowrap;
      top: -60px;
      text-align: center;
      left: 0;
      transform: translateX(-50%);
      font-size: 12px;
      font-weight: 500;
      font-size: 14px;
      color: #d3e4fe;
    }
    .stepsCard:before {
      content: "";
      position: absolute;
      width: 26px;
      height: 26px;
      background: rgba(59, 130, 253, 1);
      border-radius: 50%;
      bottom: -9px;
      left: -14px;
    
      z-index: 2;
    }
    
    .defaultStep {
      position: relative;
      height: 12px;
      background: transparent;
    }
    .defaultStep::before {
      content: "";
      position: absolute;
      width: 26px;
      height: 26px;
      background: #0d377e;
      border-radius: 50%;
      bottom: -8px;
      right: -12px;
    }
    .active {
      width: 100%;
      height: 12px;
      position: absolute;
      background: rgba(59, 130, 253, 1);
    }
    
    .title {
      position: absolute;
      white-space: nowrap;
      bottom: -40px;
      left: 0;
      transform: translateX(-50%);
      font-size: 12px;
      font-weight: 500;
      font-size: 14px;
      color: #d3e4fe;
    }

    .stepsActiveBox {
      position: absolute;
      bottom: -8px;
      right: -12px;
      width: 26px;
      height: 26px;
      background: rgba(59, 130, 253, 1);
      border-radius: 50%;
    }
    </style>
    
      
      `}),V=()=>({"App.vue":`

      

      

      <template>
      <div
        class="content"
      >
        <div style="height:900px;width:100%">
          <h1 style="color:#FFF;text-align:center">滑动体验懒加载图片案例</h1>
        </div>
      <lazyLoaded1 style="height:300px;width:100%">
        <image1 />
        </lazyLoaded1>
      </div>
    </template>
    
    <script setup>
    import { ref, reactive, nextTick, onMounted, watch } from "vue";
    import lazyLoaded1 from "./lazyLoaded1.vue";
    import image1 from "./image1.vue";
    
    onMounted(() => {
    });
    <\/script>
    
    <style scoped >
  .content{
        width: 100%;
        padding-top:100px;
        background:#042C67;
        overflow-y: auto;
        height: 492px; 
  }
    </style>
      
      
      
      `,"src/image1.vue":`
      <template>
        <img class="image" src="/vue.example/echarts/FunnelPlot2.png" />
    </template>
    
    <script setup>
    import { ref, reactive, nextTick, onMounted, watch } from "vue";
    onMounted(() => {});
 
    <\/script>
    
    <style scoped>
    .image{
      width: 100%;
      height: 100%;
    }
    </style>
    
      
      `,"src/lazyLoaded1.vue":`
    <template>
    <div  class="contentLazy" ref="lazyLoaded">
          <slot v-if="show"></slot>
    
          <!-- 蒙层 加载动画 -->
           <div class="loadingBox" v-if="show&&loading">
            <div class="loading">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
           </div>
        </div>
    </template>
    
    <script setup>
    import { ref, reactive, nextTick, onMounted, watch } from "vue";
    onMounted(() => {});
    const show = ref(false);
    const lazyLoaded = ref();
    const props = defineProps({
      // 定义props
      loading: {
        type: Boolean,
        default: false,
      },
    });
    // 定义回调函数
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        // entry 对象包含了目标元素的信息
        if (entry.isIntersecting) {
          // 如果元素进入了视口，则执行相应操作
        //   console.log("如果元素进入了视口，则执行相应操作");
          show.value = true;
           observer.unobserve(entry.target);
          // 在这里执行比如加载图片、动画开始等操作
        } else {
          // 如果元素离开了视口，也可以执行相应操作
        //   console.log("如果元素离开了视口，也可以执行相应操作");
        }
      });
    };
    
    // 定义配置对象
    const options = {
      root: null, // 默认值，表示相对于视口计算交叉状态
      rootMargin: "0px", // 可以添加额外的外边距来扩大或缩小根元素的边缘
      threshold: 0.5, // 数组形式的阈值，元素至少有多少比例在视口内时触发回调
      // 例如：[0, 0.25, 0.5, 1] 表示从0%到100%都会触发回调
    };
    
    // 创建 IntersectionObserver 实例
    const observer = new IntersectionObserver(callback, options);
    onMounted(() => {
      nextTick(() => {
        observer.observe(lazyLoaded.value);
      });
    });
    <\/script>
    
    <style scoped>
    .contentLazy {
      /* width: 100%;
      height: 100%; */
      position: relative;
    }
    .loadingBox{
         position: absolute;
         width: 100%;
         height: 100%;
         top: 0;
         left: 0;
         z-index: 99999999;
         background-color: #00175A;
    }
         /* 设置位置 */
            .loading {
                position: absolute;
                /* 居中 */
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                /* 高度 */
                height: 40px;
                /* 弹性布局 */
                display: flex;
                /* 设置子项在y轴方向居中，应该是设置起点在中间，非常有用，不然动画很怪 */
                align-items: center;
            }
    
            /* 小竖条 */
            .item {
                height: 50px;
                width: 5px;
                background: #D3E4FE;
                /* 加margin，使竖条之间有空隙 */
                margin: 0px 3px;
                /* 圆角 */
                border-radius: 10px;
                /* 动画：名称、时间、循环 */
                animation: loading 1s infinite;
            }
    
            /* 设置动画 */
            @keyframes loading {
                0% {
                    height: 0px;
                }
    
                50% {
                    height: 50px;
                }
    
                100% {
                    height: 0px;
                }
            }
    
            /* 为每一个竖条设置延时 */
            .item:nth-child(2) {
                animation-delay: 0.1s;
            }
    
            .item:nth-child(3) {
                animation-delay: 0.2s;
            }
    
            .item:nth-child(4) {
                animation-delay: 0.3s;
            }
    
            .item:nth-child(5) {
                animation-delay: 0.4s;
            }
    
            .item:nth-child(6) {
                animation-delay: 0.5s;
            }
    
            .item:nth-child(7) {
                animation-delay: 0.6s;
            }
    
            .item:nth-child(8) {
                animation-delay: 0.7s;
            }
    </style>
    
      
      `}),G=()=>({"App.vue":`



  



      <template>
      <div
        class="content"
      >
        	<span class="start-taste-line">
					<view v-for="(item,index) in recordList" :key="index" :class="['Record']" :style="{
						 transform:\`scaleY(\${item.height})\`,
					 }" />
					
				</span>
      </div>
    </template>
    
    <script setup>
    import { ref, reactive, nextTick, onMounted, watch } from "vue";
    const	recordList= ref([{
						"id": 1,
						"height": 0
					},
					{
						"id": 2,
						"height": 0
					},
					{
						"id": 3,
						"height": 0
					},
					{
						"id": 4,
						"height": 0
					},
					{
						"id": 5,
						"height": 0
					},
					{
						"id": 6,
						"height": 0
					},
					{
						"id": 7,
						"height": 0
					},
					{
						"id": 8,
						"height": 0
					},
					{
						"id": 9,
						"height": 0
					},
					{
						"id": 10,
						"height": 0
					},
					{
						"id": 11,
						"height": 0
					},
					{
						"id": 12,
						"height": 0
					},
					{
						"id": 13,
						"height": 0
					},
					{
						"id": 14,
						"height": 0
					},
					{
						"id": 15,
						"height": 0
					},
					{
						"id": 16,
						"height": 0
					},
					{
						"id": 17,
						"height": 0
					},
					{
						"id": 18,
						"height": 0
					},
					{
						"id": 19,
						"height": 0
					},
					{
						"id": 20,
						"height": 0
					}
				])
                function getRandomInt(min, max) {
					min = Math.ceil(min);
					max = Math.floor(max);
					return Math.floor(Math.random() * (max - min + 1)) + min;
				}
    function  		getHeightComputed(num, total) {
				const t = total / 2 //获取 一般有多少
				const arr = [t + 1]
				// console.log(t);
				for (var i = 0; i < t; i++) {
					arr.push((t - i))
				}
				let totals = []
				for (var i = t; i < total; i++) {
					totals.push(i)
				}
				// console.log(arr);
				if (num > t) {
					//说明靠后 6
                    let max =totals.findIndex((res => res == num)) != -1 ? arr[totals.findIndex((res => res == num))] : 1
					return getRandomInt(t,max) 
				} else if (num < t) {
					//说明靠前
                    return getRandomInt(num,t) 
				} else {
					return t
				}
			}
		function	updataHeight(time) {
				 recordList.value.forEach((res, index) => {
            //time+ Math.sin(this.getHeightComputed(index,20) * this.height)
					res.height =  getHeightComputed(index, 20) *	time 
				})
				// t += speed;
			}
    onMounted(() => {
      let max = 5;
			let min = 0
     
			setInterval(() => {
			

				updataHeight(getRandomInt(min, max))
			}, 234)
    });
    <\/script>
    
    <style scoped >
  .content{
        padding-top:100px;
        background:#042C67;
        height: 492px; display: flex;justify-content: center;
  }
  	.Record {

				background-color: red; 
				width: 3px;
				height: 1px;
				display: inline-block;
				border: none;
				animation-iteration-count: infinite;
				animation-direction: alternate;
			}

    </style>
    
      
    
      
      
    
      `}),Y=R(),q=X(),J=P(),K=A(),Q=U(),Z=L(),tt=$(),et=O(),ot=H(),it=V(),st=G(),at=Object.freeze(Object.defineProperty({__proto__:null,ProgressBar:ot,animation1:st,lazyLoaded1:it,show1:q,show2:J,show3:K,show4:Q,show5:Z,show6:tt,show7:et,steps:Y},Symbol.toStringTag,{value:"Module"})),nt={class:"white-bg"},rt={class:"renderEcharts jcfend"},pt=k({__name:"render",setup(dt){b();const p=y();o("");const m=()=>{var t=document.getElementById("repl");const e=t.querySelector("iframe");var s=e.contentDocument||e.contentWindow.document,a=s.getElementById("app");j(a).then(w=>{S.saveAs(w,`${p.params.text}.png`)})},{importMap:v,vueVersion:f,productionMode:g}=C({}),i=at[p.params.text],d=o({welcomeSFC:""}),l=o("App.vue"),c=o({});d.value.welcomeSFC=i[l.value];for(const t in i)if(Object.hasOwnProperty.call(i,t)){const e=i[t];t!=l.value&&(c.value[t]=new D(t,e,!1))}const x=T({vueVersion:f,builtinImportMap:v,template:d,files:c});return g.value=!0,o(!0),z({}),M(()=>{}),(t,e)=>{const s=u("el-button"),a=u("el-scrollbar");return B(),F("div",nt,[n(a,{class:"renderEchartsEdit"},{default:h(()=>[n(r(E),{theme:"dark",layout:"1111",store:r(x),class:"repl",editor:r(_),id:"repl"},null,8,["store","editor"]),I("div",rt,[n(s,{type:"primary",onClick:m},{default:h(()=>[W("下载图片")]),_:1})])]),_:1})])}}}),Ut=N(pt,[["__scopeId","data-v-1a68650b"]]);export{Ut as default};

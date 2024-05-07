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
            name: series[i].name +  series[i].pieData.value,
            value: endPosArr,
          },
        ],
      }
    );
  }
  series = series.concat(linesSeries);

  return series;
};


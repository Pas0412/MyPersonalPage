<template>
  <div class="map-container">
    <div ref="mapContainer" style="width: 80%; height: 900px; background-color: transparent;"></div>
  </div>
  
</template>

<script setup>
import * as echarts from "echarts";
import "@/assets/china.js"; // Import the China map data
import { onMounted, ref } from "vue";
import { getCityPosition } from "@/assets/cityPosition";

const mapContainer = ref(null);

const provinceData = getCityPosition();

const selectedProvinces = ref([]);

const trace = [
  {
    name: "福建",
    itemStyle: {
      areaColor: "#f2be45",
      opacity: 0.8,
    },
  },
  {
    name: "广东",
    itemStyle: {
      areaColor: "#f2be45",
      opacity: 0.8,
    },
  },
  {
    name: "广西",
    itemStyle: {
      areaColor: "#f2be45",
      opacity: 0.8,
    },
  },
  {
    name: "湖北",
    itemStyle: {
      areaColor: "#f2be45",
      opacity: 0.8,
    },
  },
  {
    name: "上海",
    itemStyle: {
      areaColor: "#f2be45",
      opacity: 0.8,
    },
  },
  {
    name: "香港",
    itemStyle: {
      areaColor: "#f2be45",
      opacity: 0.8,
    },
  },
  {
    name: "浙江",
    itemStyle: {
      areaColor: "#f2be45",
      opacity: 0.8,
    },
  },
  {
    name: "北京",
    itemStyle: {
      areaColor: "#f2be45",
      opacity: 0.8,
    },
  },
  {
    name: "江苏",
    itemStyle: {
      areaColor: "#f2be45",
      opacity: 0.8,
    },
  },
  {
    name: "陕西",
    itemStyle: {
      areaColor: "#f2be45",
      opacity: 0.8,
    },
  },
  {
    name: "山东",
    itemStyle: {
      areaColor: "#f2be45",
      opacity: 0.8,
    },
  }
];

const initChart = () => {
  const chart = echarts.init(mapContainer.value);
  const option = {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "item",
      formatter: function (params) {
        return params.name;
      },
    },
    series: [
      // {
      //   type: "map",
      //   map: "china",
      //   roam: false,
      //   label: {
      //     show: false,
      //     color: "black",
      //     fontSize: "8px",
      //   },
      //   itemStyle: {
      //     areaColor: "#F0F8FF", // 主色设置为浅蓝色
      //     borderColor: "#ccc",
      //     borderWidth: 1,
      //   },
      //   emphasis: {
      //     label: {
      //       show: false,
      //     },
      //     itemStyle: {
      //       areaColor: "#87CEFA",
      //     },
      //   },
      // },
      {
        type: "effectScatter",
        coordinateSystem: "geo",
        data: provinceData,
        showEffectOn: "render",
        rippleEffect: {
          //涟漪特效相关配置
          brushType: "fill", //波纹的绘制方式，可选 'stroke' 和 'fill'
        },
        hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果
        label: {
          //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等，
          normal: {
            formatter: "{b}",
            position: "right",
            show: true,
          },
        },
        itemStyle: {
          //图形样式，normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时
          normal: {
            color: "#ADD8E6", //散点的颜色
            shadowBlur: 10,
            shadowColor: 20,
            fontSize: "8px",
          },
        },
        zlevel: 1,
        symbol: "circle", // 设置标点符号为圆形，还可以是'rect'（矩形）等其他类型，按需选择
        symbolSize: 5,
      },
    ],
    geo: [
      {
        map: "china",
        aspectScale: 1,
        zoom: 1.1,
        layoutCenter: ["50%", "50%"],
        layoutSize: "100%",
        show: true,
        roam: false,
        regions: trace,
        label: {
          show: false, // 各个省市县的名字
          color: "#fff",
        },
        itemStyle: {
          // 每块的样式
          areaColor: {
            type: "linear",
            x: 1200,
            y: 0,
            x2: 0,
            y2: 0,
            colorStops: [
              // 设置地图的渐变颜色
              {
                offset: 0,
                color: "rgba(3,27,78,0.75)",
                // color: 'rgba(0,63,142,.2)'
              },
              {
                offset: 1,
                color: "rgba(58,149,253,0.75)",
                // color: 'rgba(0,63,142,.82)'
              },
            ],
            global: true, // 缺省为 false
          },
          // borderColor: '#c0f3fb',
          borderColor: "rgba(192,243,251,0.5)",
          borderWidth: 0.8,
        },
        emphasis: {
          itemStyle: {
            show: false,
            color: "#fff",
            areaColor: "rgba(0,254,233,0.6)",
          },
          label: {
            show: true,
            color: "#fff",
          },
        },
      },
      // 重影
      {
        type: "map",
        map: "china",
        zlevel: -1,
        aspectScale: 1,
        zoom: 1.1,
        layoutCenter: ["50%", "51%"],
        layoutSize: "100%",
        roam: false,
        silent: true,
        itemStyle: {
          borderWidth: 1,
          borderColor: "rgba(58,149,253,0.8)",
          shadowColor: "rgba(172, 122, 255,0.5)",
          shadowOffsetY: 5,
          shadowBlur: 15,
          areaColor: "rgba(5,21,35,0.1)",
        },
        regions: [
          {
            name: "南海诸岛",
            show: false,
            itemStyle: {
              // 隐藏地图
              normal: {
                opacity: 0, // 为 0 时不绘制该图形
              },
            },
            label: {
              show: false, // 隐藏文字
            },
          },
        ],
      },
      {
        type: "map",
        map: "china",
        zlevel: -2,
        aspectScale: 1,
        zoom: 1.1,
        layoutCenter: ["50%", "52%"],
        layoutSize: "100%",
        roam: false,
        silent: true,
        itemStyle: {
          borderWidth: 5,
          borderColor: "rgba(5,9,57,0.8)",
          shadowColor: "rgba(29, 111, 165,0.8)",
          shadowOffsetY: 15,
          shadowBlur: 10,
          areaColor: "rgba(5,21,35,0.1)",
        },
        regions: [
          {
            name: "南海诸岛",
            show: false,
            itemStyle: {
              // 隐藏地图
              normal: {
                opacity: 0, // 为 0 时不绘制该图形
              },
            },
            label: {
              show: false, // 隐藏文字
            },
          },
        ],
      },
    ],
  };

  chart.setOption(option);

  // 点击省会等区域的事件处理
  chart.on("click", function (params) {
    if (params.componentType === "series" && params.seriesType === "map") {
      const clickedProvince = params.name;
      if (selectedProvinces.value.includes(clickedProvince)) {
        const index = selectedProvinces.value.indexOf(clickedProvince);
        selectedProvinces.value.splice(index, 1);
      } else {
        selectedProvinces.value.push(clickedProvince);
      }
      chart.setOption({
        series: [
          {
            data: getUpdatedProvinceData(),
          },
        ],
      });
    }
  });
};

const getUpdatedProvinceData = () => {
  // 这里可以根据selectedProvinces重新整理数据，比如设置不同样式等
  return [provinceData];
};

onMounted(() => {
  initChart();
});
</script>

<style scoped>
.map-container {
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

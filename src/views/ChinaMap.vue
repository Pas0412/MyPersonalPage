<template>
  <div ref="mapContainer" style="width: 1300px; height: 900px"></div>
</template>

<script setup>
import * as echarts from "echarts";
import "@/assets/china.js"; // Import the China map data
import { onMounted, ref } from "vue";
import { getCityPosition } from "@/assets/cityPosition";


const mapContainer = ref(null);

// const provinceData = mapdata.features.map((feature) => {
//   const { name, center } = feature.properties;
//   return {
//     name,
//     value: center,
//   };
// });

const provinceData = getCityPosition();

const selectedProvinces = ref([]);

const initChart = () => {
  const chart = echarts.init(mapContainer.value);
  const option = {
    backgroundColor: "#f5f5f5",
    tooltip: {
      trigger: "item",
      formatter: function (params) {
        return params.name;
      },
    },
    series: [
      {
        type: "map",
        map: "china",
        roam: false,
        label: {
          show: false,
          color: "black",
          fontSize: "8px",
        },
        itemStyle: {
          areaColor: "#F0F8FF", // 主色设置为浅蓝色
          borderColor: "#ccc",
          borderWidth: 1,
        },
        emphasis: {
          label: {
            show: false,
          },
          itemStyle: {
            areaColor: "#87CEFA",
          },
        },
      },
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
    geo: {
      map: "china",
      roam: false,
      itemStyle: {
        areaColor: "#F0F8FF", // 主色设置为浅蓝色
        borderColor: "#ccc",
        borderWidth: 1,
        // 重点：设置整个地图最外圈轮廓的阴影样式，只在下方显示阴影
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 5,
      },
      label: {
        show: false,
        color: "black",
        fontSize: "8px",
      },
    },
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
.container {
  background-color: lightblue;
}
</style>

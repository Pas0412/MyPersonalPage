<template>
    <div ref="mapContainer" style="width: 800px; height: 600px;"></div>
  </template>
  
  <script setup>
  import * as echarts from 'echarts';
  import { onMounted, ref } from 'vue';
  
  // 创建一个ref来保存地图容器的DOM元素引用
  const mapContainer = ref(null);
  
  const trace = [
  {
    name: "France",
    itemStyle: {
      areaColor: "#f2be45",
      opacity: 0.8,
    },
  },
  {
    name: "Spain",
    itemStyle: {
      areaColor: "#f2be45",
      opacity: 0.8,
    },
  },
  {
    name: "Germany",
    itemStyle: {
      areaColor: "#f2be45",
      opacity: 0.8,
    },
  },
]

  // 在组件挂载完成后执行初始化地图操作
  onMounted(() => {
    const myChart = echarts.init(mapContainer.value);
    const option = {
      series: [
        {
          type: 'map',
          map: 'europe',  // 假设使用echarts内置欧洲地图标识，若用自定义数据按对应配置来
          label: {
            show: true,
            formatter: '{b}'
          },
          data: []  // 可添加业务数据，用于如颜色区分国家相关指标等情况
        }
      ],
      geo: [
      {
        map: "europe",
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
      },]
    };
    myChart.setOption(option);
  });
  </script>
  
  <style scoped>
  /* 可以在这里添加组件相关的样式 */
  </style>
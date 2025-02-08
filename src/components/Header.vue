<template>
  <header class="header">
    <div class="header-left">
      <n-dropdown trigger="hover" :options="options" @select="handleSelect">
        <img src="../assets/app.png" alt="homepage-app" />
      </n-dropdown>
      <span>Yonghui's Blog</span>
    </div>
    <div class="header-right">
      <n-gradient-text :size="18" type="info"> 访问次数 </n-gradient-text>
      <n-gradient-text
        :size="14"
        :gradient="{
          from: 'rgb(85, 85, 85)',
          to: 'rgb(170, 170, 170)',
        }"
      >
        {{ views }}次
      </n-gradient-text>
      <n-gradient-text :size="18" type="info"> 建站天数 </n-gradient-text>
      <n-gradient-text
        :size="14"
        :gradient="{
          from: 'rgb(85, 85, 85)',
          to: 'rgb(170, 170, 170)',
        }"
      >
        {{ dateCount }} 天
      </n-gradient-text>
      <n-button @click="handleClick">网站日志</n-button>
      <n-drawer v-model:show="active" :width="502">
        <n-drawer-content title="网站日志" closable>
          <n-timeline>
            <n-timeline-item
              v-for="log in logs"
              :key="log.id"
              type="success"
              :title="log.title"
              :content="log.detail"
              :time="log.date"
            />
          </n-timeline>
        </n-drawer-content>
      </n-drawer>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  NButton,
  NDrawer,
  NDrawerContent,
  NGradientText,
  NTimeline,
  NTimelineItem,
  NDropdown,
} from "naive-ui";
import { getViews, getLogs } from "@/api/statistic";

let dateCount = ref(new Date());
let views = ref(0);
let active = ref(false);
let logs = ref([]);
const handleClick = () => {
  // 这里可以添加按钮点击后的逻辑，例如显示一个消息
  // alert('按钮被点击啦！');
  active.value = true;
};

const options = [
  {
    label: "返回导航页",
    key: "go back to navigate",
  },
  {
    label: "返回主页",
    key: "go back to homepage",
  },
  {
    label: "前往实用区",
    key: "go to utility zone",
  },
  {
    label: "关于我",
    key: "about me",
  },
];

function getDaysSinceLaunch() {
  const launchDate = new Date("2022-07-04");
  const currentDate = new Date();
  const oneDay = 24 * 60 * 60 * 1000; // 一天的毫秒数
  const diffDays = Math.floor((currentDate - launchDate) / oneDay);
  return diffDays;
}

onMounted(async () => {
  // 这里可以添加页面加载后的逻辑，例如显示一个消息
  // alert('页面加载完成啦！');
  dateCount.value = getDaysSinceLaunch();
  views.value = await getViews();
  logs.value = await getLogs();
});
</script>

<style>
.header {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 10px;
  box-sizing: border-box;
}

.header-left {
  font-size: 24px;
  display: flex;
  align-items: center;
}

.header-left img {
  height: 1.5rem;
  padding: 0.5rem;
  margin-right: 10px;
  filter: invert(1);
  cursor: pointer;
  border-radius: 1rem;
}

.header-left img:hover {
  filter: invert(0);
  background-color: black;
}

.n-gradient-text {
  margin-right: 1rem;
}
</style>

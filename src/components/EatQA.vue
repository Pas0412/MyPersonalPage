<template>
  <div>
    <n-input v-model="inputValue" placeholder="请输入后端数组的信息（例如，以逗号分隔的字符串）" />
    <n-button @click="startStop" :loading="loading">{{ buttonText }}</n-button>
    <div v-if="result" class="result-container">
      <span class="prefix">就吃这个：</span>
      <span class="result" :class="{blink: blinking}">{{ result }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';
import { NInput, NButton } from 'naive-ui';

const inputValue = ref('');
const result = ref('');
const loading = ref(false);
const blinking = ref(false);
const buttonText = ref('开始');
let intervalId = null;

const startStop = () => {
  if (buttonText.value === '开始') {
    start();
  } else {
    stop();
  }
};

const start = () => {
  loading.value = true;
  buttonText.value = '停止';
  const array = inputValue.value.split(',').filter(item => item.trim()!== '');
  if (array.length === 0) {
    loading.value = false;
    buttonText.value = '开始';
    return;
  }
  // 使用原生的 setInterval 实现定时功能
  intervalId = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * array.length);
    result.value = array[randomIndex];
    blinking.value = true;
  }, 100);
};

const stop = () => {
  loading.value = false;
  buttonText.value = '开始';
  if (intervalId) {
    // 清除定时器
    clearInterval(intervalId);
    intervalId = null;
    blinking.value = false;
  }
};

onUnmounted(() => {
  if (intervalId) {
    // 组件卸载时清除定时器
    clearInterval(intervalId);
  }
});
</script>

<style scoped>
.result-container {
  margin-top: 20px;
  display: flex;
  align-items: center;
}
.prefix {
  font-weight: bold;
  margin-right: 10px;
}
.result {
  font-size: 20px;
  animation: blink-animation 1s steps(5, start) infinite;
}
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
.blink {
  animation: blink-animation 1s steps(5, start) infinite;
}
</style>
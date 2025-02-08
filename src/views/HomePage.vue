<template>
  <div class="homepage-container">
    <Header />
    <div class="matrix-container">
      <!-- 外层循环遍历列 -->
      <div
        v-for="(col, colIndex) in 19"
        :key="colIndex"
        class="matrix-column"
        :style="{ transform: `translateY(-${getTranslateY(colIndex)}px)` }"
      >
        <!-- 内层循环遍历行 -->
        <!-- <div v-for="(row, rowIndex) in 9" :key="rowIndex" class="matrix-icon" :class="{ 'hidden': isHidden(colIndex, rowIndex) }"></div>
        <img :src="imageUrl" alt="Random Image" v-for="imageUrl in shuffledImages" :key="imageUrl"> -->
        <img
          v-for="(row, rowIndex) in 9"
          :key="rowIndex"
          class="matrix-icon"
          :class="{ hidden: isHidden(colIndex, rowIndex) }"
          :src="getImageSrc(colIndex, rowIndex)"
          alt="Matrix Image"
        />
      </div>
    </div>
    <div class="homepage-avatar">
      <img src="../assets/avatar.jpg" alt="Random Image" class="avatar-icon" />
      <h1>Pas0412</h1>
    </div>
    <kinesis-container event="scroll">
      <kinesis-element
        tag="img"
        :transformOrigin="sunOrigin"
        :strength="100"
        type="rotate"
      />
      <kinesis-element
        :transformOrigin="earthmoonOrigin"
        :strength="800"
        type="rotate"
      >
        <img :src="earth" />
        <kinesis-element
          tag="img"
          :src="moon"
          :transformOrigin="moonOrigin"
          :strength="1200"
          type="rotate"
        />
      </kinesis-element>
      <kinesis-element
        tag="img"
        :src="mars"
        :transformOrigin="marsOrigin"
        :strength="500"
        type="rotate"
      />
    </kinesis-container>
    <Footer />
    <n-back-top :right="100" />
  </div>
</template>

<script setup>
// 导入 ref 函数用于响应式数据
import { ref, onMounted } from "vue";
import { NBackTop } from "naive-ui";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { KinesisContainer, KinesisElement} from 'vue-kinesis'
// 定义图标的大小
const iconSize = ref(75);

const imageFiles = [
  "alicloud.png",
  "gemma.png",
  "ollama.png",
  "Midjourney.png",
  "deepseek.png",
  "css.png",
  "docker.png",
  "kimi-icon.png",
  "discord.png",
  "django.png",
  "github.png",
  "Figma.png",
  "Chat-GPT.png",
  "icon_claude.png",
  "html.png",
  "flask.png",
  "java.png",
  "js.png",
  "llama.png",
  "Vue.png",
  "Mistral.png",
  "Mysql.png",
  "linux.png",
  "postman.png",
  "Python.png",
  "wenxin.png",
  "react.png",
  "sourcetree.png",
  "spring.png",
  "ElementUI.png",
  "Vscode.png",
  "MarsCode.png",
  "qwen.png",
  "cpp.png",
  "navicat.png",
];

// 计算每列的垂直偏移量
const getTranslateY = (colIndex) => {
  const centerIndex = 9; // 中间列的索引
  const offset = Math.abs(colIndex - centerIndex) * ((iconSize.value * 3) / 5);
  return offset;
};

// 判断图标是否需要隐藏
const isHidden = (colIndex, rowIndex) => {
  const centerIndex = 9; // 中间列的索引
  const maxVisibleCols = [
    2, 3, 4, 4, 4, 4, 4, 4, 4, 11, 4, 4, 4, 4, 4, 4, 4, 3, 2,
  ]; // 每列可见图标的数量

  // 中间列最下方隐藏两个图标
  if (colIndex === centerIndex && rowIndex >= 3) {
    return true;
  }

  // 根据列的位置隐藏图标
  return rowIndex >= maxVisibleCols[colIndex];
};

// 获取图片源的函数
const getImageSrc = (colIndex, rowIndex) => {
  // 简单示例：通过索引取模获取图片文件名
  const imageIndex = (colIndex * 8 + rowIndex) % imageFiles.length;
  return `/app/${imageFiles[imageIndex]}`;
};
</script>

<style scoped>
.homepage-container {
  width: 100vw;
  min-height: 100vh;
  /* background: linear-gradient(to bottom, lightblue, white); */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.matrix-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2rem;
  gap: 20px; /* 列之间的间距 */
  width: 100vw;
}

.header {
  background-color: grey !important;
  opacity: 1;
  z-index: 1;
  width: 100vw;
  padding-left: 10rem;
  padding-right: 10rem;
  position: fixed;
  top: 0;
}

.matrix-column {
  display: flex;
  flex-direction: column;
  gap: 20px; /* 行之间的间距 */
}

.matrix-icon {
  width: 90px;
  height: 90px;
  background-color: transparent; /* 图标背景颜色 */
  border-radius: 1rem;
}

.avatar-icon {
  width: 150px;
  height: 150px;
  border-radius: 2rem;
}

.hidden {
  display: none; /* 隐藏图标 */
}

.homepage-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  flex-direction: column;
}
.footer {
  width: 100%;
}
</style>

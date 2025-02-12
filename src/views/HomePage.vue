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
      <kinesis-container>
        <kinesis-element :strength="20">
          <img
            src="../assets/avatar.jpg"
            alt="Random Image"
            class="avatar-icon"
          />
        </kinesis-element>
      </kinesis-container>
      <h1>Pas0412</h1>
    </div>
    <kinesis-container>
      <div class="k-container">
        <kinesis-element :strength="20"
          ><div class="bg-red"></div
        ></kinesis-element>
        <kinesis-element :strength="-25"
          ><div class="bg-pink"></div
        ></kinesis-element>
        <kinesis-element :strength="15"
          ><div class="bg-yellow"></div
        ></kinesis-element>
        <kinesis-element :strength="-20"
          ><div class="bg-purple"></div
        ></kinesis-element>
        <kinesis-element :strength="-30"
          ><div class="bg-green"></div
        ></kinesis-element>
        <kinesis-element :strength="20"
          ><div class="bg-blue"></div
        ></kinesis-element>

        <div class="k-center">
          <kinesis-element :strength="20" type="rotate"
            ><h1>W</h1></kinesis-element
          >

          <kinesis-element :strength="10"><h1>e</h1></kinesis-element>

          <kinesis-element :strength="-20" type="rotate"
            ><h1>l</h1></kinesis-element
          >

          <kinesis-element :strength="10"><h1>c</h1></kinesis-element>

          <kinesis-element :strength="-10"><h1>o</h1></kinesis-element>

          <kinesis-element :strength="20" type="rotate"
            ><h1>m</h1></kinesis-element
          >

          <kinesis-element :strength="-10"><h1>e</h1></kinesis-element>
        </div>
      </div>
    </kinesis-container>
    <div class="homepage-text">
      <div>
        <h1 class="text-gradient" id="typing-text"></h1>
      </div>
    </div>
    <img
      src="../assets/avatar.jpg"
      alt="test"
      v-animate-onscroll="'animate__animated animate__fadeInUp'"
      class="test"
    />
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
import { KinesisContainer, KinesisElement } from "vue-kinesis";
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

let text = "欢迎来到我的个人网站"; // 要打印的文本
let pointer = 0; // 当前打印到的字符位置

const type = () => {
  let span = document.getElementById("typing-text");
  if (pointer < text.length) {
    span.innerHTML += text.charAt(pointer);
    pointer++;
    setTimeout(type, 200); // 延迟100毫秒再次调用type函数
  } else {
    setTimeout(() => {
      pointer = 0;
      span.innerHTML = "";
      type();
    }, 5000);
  }
};

onMounted(() => {
  type();
});
</script>

<style scoped>
.homepage-container {
  width: 100vw;
  min-height: 100vh;
  /* background: linear-gradient(to bottom, lightblue, white); */
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
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

.k-container {
  margin: 10rem 0 15rem 0;
  display: flex;
  height: 10rem;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  position: relative;
  flex-direction: row;
}

.bg-red {
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  transform: translate(-50%, -100%);
  background-color: pink;
  opacity: 0.5;
}

.bg-pink {
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  transform: translate(50%, 100%);
  background-color: burlywood;
  opacity: 0.2;
}

.bg-pink::before {
  content: "";
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 5.5rem;
  width: 5.5rem;
  position: absolute;
  background-color: white;
}

.bg-yellow {
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  transform: translate(-100%, -150%);
  background-color: #ffcc00;
  opacity: 0.2;
}

.bg-purple {
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  transform: translate(25%, 0);
  background-color: plum;
  opacity: 0.2;
}

.bg-purple::before {
  content: "";
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 8rem;
  width: 8rem;
  position: absolute;
  background-color: white;
}

.bg-blue {
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  transform: translate(50%, -100%);
  background-color: #3399ff;
  opacity: 0.2;
}

.bg-green {
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  transform: translate(-25%, 300%);
  background-color: #33cc33;
  opacity: 0.2;
}

.k-center {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  position: absolute; /* 绝对定位 */
  top: 50%; /* 相对于容器顶部50% */
  left: 50%; /* 相对于容器左侧50% */
  transform: translate(-50%, -50%); /* 居中 */
}

.text-gradient {
  font-size: 30px;
  margin-top: 100px;
}

.test {
  /* animation: swing 3s ease-in-out; */
  height: 5rem;
  margin-bottom: 10rem;
}

@keyframes swing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.footer {
  width: 100%;
}
</style>

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

    <!-- <div class="box"></div> -->
    <div class="section">
      <div class="section-wrapper">
        <div class="section-content">
          <div class="homepage-card" style="opacity: 0">
            <div>
              <h1 class="text-gradient" id="typing-text">Hi</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-card-view">
      <div class="sticky-wrapper">
        <div class="sticky-content">
          <div class="section-wrapper">
            <div class="section-card">
              <div class="section-card-content">123</div>
            </div>
            <div class="section-card">
              <div class="section-card-content">234</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="occupied"></div>
    <Footer />
    <div class="scroll-down-indicator">向下滑动</div>
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

onMounted(() => {
  // 获取 scroll-down-indicator 元素
  const scrollDownIndicator = document.querySelector(".scroll-down-indicator");

  // 监听窗口滚动事件
  window.addEventListener("scroll", function () {
    // 计算距离页面底部的距离
    const distanceToBottom =
      document.documentElement.scrollHeight -
      (window.scrollY + window.innerHeight);

    // 当距离页面底部小于 200 像素时隐藏指示器
    if (distanceToBottom < 200) {
      scrollDownIndicator.style.display = "none";
    } else {
      scrollDownIndicator.style.display = "block";
    }
  });
  gsap.registerPlugin(ScrollTrigger);
  // gsap.to(".box", {
  //   x: 400,
  //   y: 50,
  //   rotation: 180,
  //   duration: 3,
  //   repeat: 2,
  //   scrollTrigger: { trigger: ".box", scrub: true },
  // });
  gsap.to(".homepage-card", {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".homepage-card",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });
  const sections = document.querySelectorAll(".section-card-view");
  const cards = document.querySelectorAll(".section-card");

  sections.forEach((section) => {
    const wrapper = section.querySelector(".section-wrapper");
    const stickyWrapper = section.querySelector(".sticky-wrapper");

    const screenWidth = document.documentElement.clientWidth;
    const cardWidth = cards[0].clientWidth;
    const cardMargin = Number(
      window
        .getComputedStyle(cards[1])
        .getPropertyValue("margin-left")
        .slice(0, -2)
    );
    const cardsNumber = cards.length;

    const swiperOffset =
      // 距离页面左侧的宽度 * 2
      wrapper.getBoundingClientRect().left * 2 +
      // 每个卡片宽度 * 卡片数量
      cardWidth * cardsNumber +
      // 卡片的左侧距离 * (卡片数量 - 1)
      cardMargin * (cardsNumber - 1) -
      // 屏幕的宽度
      screenWidth;

    gsap.to(wrapper, {
      duration: 5,
      scrollTrigger: {
        trigger: stickyWrapper,
        start: "top 65",
        end: "bottom 100%",
        scrub: 0,
      },
      ease: "none",
      x: -swiperOffset,
    });

    const cardScroll = cardWidth + cardMargin;
    const stickyTop = 65;

    cards.forEach(function (card, index) {
      if (index > 0) {
        const startTrigger = stickyTop - cardScroll * (index - 1);

        gsap.to(card.querySelector(".section-card-content"), {
          scrollTrigger: {
            trigger: card,
            start: "top " + startTrigger,
            end: "+=" + cardScroll / 3,
            scrub: 0,
          },
          ease: "none",
          filter: "blur(0px)",
          scale: 1,
        });
      }
    });
  });
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
  /* overflow-x: hidden; */
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

.box {
  /* animation: swing 3s ease-in-out; */
  height: 5rem;
  margin-bottom: 10rem;
  background-color: #3399ff;
  width: 5rem;
}

.section {
  width: 100vw;
  display: flex;
}

.section-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.homepage-card {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 80vw;
  height: 30rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
}

.sticky-wrapper {
  margin-top: 100px;
  min-height: 100vh;
}

.sticky-content {
  position: sticky;
  width: 100%;
  height: auto;
  top: 200px;
  overflow: hidden;
}
.section-wrapper {
  position: relative;
  display: flex;
  width: 70.833333vw;
  margin: 0 auto;
}
.section-card {
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 20vh;
  background-color: grey;
}
.section-card + .section-card {
  margin-left: 3.125vw;
}

.section-card + .section-card .section-card-content {
  transform: scale(0.8);
  transform-origin: left;
  filter: blur(10px);
}

.occupied {
  width: 100vw;
  height: 100vh;
}

.footer {
  width: 100%;
}

.scroll-down-indicator {
  position: fixed;
  bottom: 0.1rem;
  left: 50%;
  transform: translateX(-10%);
  font-size: 1rem;
  color: black;
  background-color: transparent;
  padding: 10px 20px;
  border-radius: 5px;
  /* 应用透明度动画 */
  animation: fadeInOut 2s ease-in-out infinite;
  /* 应用上下浮动动画 */
  animation: float 2s ease-in-out infinite alternate;
}
/* 定义透明度动画 */
@keyframes fadeInOut {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 0.1;
  }
}
/* 定义上下浮动动画 */
@keyframes float {
  0% {
    transform: translateX(-50%) translateY(0);
  }
  100% {
    transform: translateX(-50%) translateY(-20px);
  }
}
</style>

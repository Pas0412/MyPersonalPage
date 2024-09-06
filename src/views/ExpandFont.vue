<template>
  <div class="container" ref="container">
    <div class="span-container">
      <span>Welcome to My Page</span>
    </div>
    <div class="main-structure">
      <div class="content">
        <div>
          <text>FRONTEND DEVELOPER</text>
        </div>
        <div>
          <span class="text-gradient" id="typing-text"></span>
        </div>
      </div>
      <div class="rotate-button">
        <img src="/rotate-button.jpg" alt="" :style="getImageStyle" />
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    var text = "Yonghui HUANG"; // 要打印的文本
    var pointer = 0; // 当前打印到的字符位置
    function type() {
      var span = document.getElementById("typing-text");
      if (pointer < text.length) {
        span.innerHTML += text.charAt(pointer);
        pointer++;
        setTimeout(type, 200); // 延迟100毫秒再次调用type函数
      }
    }

    const container = ref(null); // 容器元素的引用
    const windowSize = computed(() => ({
      width: window.innerWidth,
      height: window.innerHeight,
    })); // 窗口尺寸的计算属性
    const circleRadius = computed(() => windowSize.value.height / 4); // 圆形半径的计算属性
    const scrollPosition = ref(0); // 页面滚动的距离

    // 监听滚动事件，更新scrollPosition的值
    const handleScroll = () => {
      scrollPosition.value = window.pageYOffset||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
        rotateImg();
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      type();
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    // 计算每张图片的位置和旋转角度
    const getImageStyle = () => {
      const angle = (scrollPosition.value / 10) % 360; // 旋转角度
      return `rotate(${angle}deg)`;
    };

    

    function rotateImg() {
      const rotate = document.querySelector(".rotate-button img");
      rotate.style.transform = `translate(50%, -50%) rotate(${(scrollPosition.value)/2 - 110}deg)`;
    }


    return {
      text,
      pointer,
      container,
      circleRadius,
      getImageStyle,
    };
  },
};
</script>
<style scoped>
.container {
  width: 100vw;
  min-height: 100vh;
  background-color: #000;
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
}
.main-structure {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  align-items: flex-end;
  padding-top: 100px;
}
.span-container {
  filter: contrast(30);
}
.span-container span:first-child {
  width: 100%;
  display: inline-block;
  color: white;
  font-size: 50px;
  margin-top: 200px;
  animation: letter 3s forwards;
  white-space: nowrap;
}

.container text {
  display: inline-block;
  color: #fff;
  font-size: 30px;
  margin-top: 200px;
  position: relative;
}
.container text::before {
  content: "FRONTEND DEVELOPER";
  background: linear-gradient(to right, red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: absolute;
  border-right: 3px solid blue;
  filter: drop-shadow(0 0 10px linear-gradient(to right, red, blue));
  animation: shine 3s linear forwards;
  white-space: nowrap;
  overflow: hidden;
  width: 50px;
}
.text-gradient {
  background: linear-gradient(to right, red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 30px;
  margin-top: 100px;
}

.rotate-button {
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
}

.rotate-button img {
  position: absolute;
  top: 50%;
  height: 50vw;
  width: 50vw;
  border-radius: 50%;
  transform: translate(50%, -50%) rotate(-110deg);
}

@keyframes shine {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
    border-right: 0;
  }
}
@keyframes letter {
  0% {
    letter-spacing: -30px;
    filter: blur(10px);
  }
  100% {
    letter-spacing: 20px;
    filter: blur(0px);
  }
}
</style>

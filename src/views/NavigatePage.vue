<template>
  <div class="main-container">
    <div class="main-title">Personal Page</div>
    <div class="button-bar">
      <button class="navigate-button" @click="gotoHome">进入首页</button>
      <button class="navigate-button" @click="gotoDashBoard">跳过首页进入面板</button>
    </div>
    <div class="description">
      <p>
        欢迎来到我的个人主页！这里是一个展示我的作品和项目的地方。
      </p>
      <p>
        在这里，你可以浏览我的作品，了解我的技能和经验。
      </p>
      <p>
        如果你对我的作品感兴趣，或者想了解更多关于我的信息，请随时联系我。
      </p>
      <p>
        请注意：首页是一个可以跳过的页面，由于视频背景资源加载缓慢，如果你想直接进入面板，请点击“跳过首页进入面板”按钮。
      </p>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const gotoHome = () => {
  router.push("/home");
};
const gotoDashBoard = () => {
//   router.push("/dashboard");
};
</script>
<style scoped>

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  background-image: url("../assets/back.jpg") !important;
  font-family: "Finlandica", sans-serif !important;
}

.main-title {
  font-size: 5rem;
  display: inline-block;
  text-decoration: none;
  color: white;
  transition: 0.2s;
  width: 100%;
  translate: 0 -5rem;
}

.main-title:hover {
  transform: scale(1.05);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.button-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 2rem;
}

.button-bar .navigate-button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 10px;
  cursor: pointer;
  width: 20rem;
  transition: 0.2s;
  font-family: "Finlandica", sans-serif !important;
}

.button-bar .navigate-button:hover {
  transform: scale(1.05);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  background-color: aliceblue;
  color: black;
}

.description {
  font-size: 0.8rem;
  margin-top: 20px;
  color: white;
  width: 80%;
  text-align: center;
}
</style>

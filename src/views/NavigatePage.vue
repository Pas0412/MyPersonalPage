<template>
  <div>
    <div class="main-content">
      <div class="name-wrapper">
        <span class="first-name">Yonghui</span>
        <span class="last-name">HUANG</span>
      </div>
      <div class="job-title">Software Engineer</div>
    </div>
    <div class="button-bar">
      <img class="side-button left-button" @click="gotoHome" src="../assets/home.png" alt="home"/>
      <img class="center-button" @click="gotoDashBoard" src="../assets/enter.png" alt="enter"/>
      <img class="side-button right-button" src="../assets/app.png" alt="app"/>
    </div>
    <div class="footer-divider"></div>
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
  router.push("/chinamap");
};
</script>
<style scoped>
.main-content {
  margin: 0;
  padding: 0;
  /* 设置背景图片 */
  background-image: url('../assets/bigsur.jpg');
  background-size: cover;
  background-position: center;
  /* 设置半透明蒙版 */
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
}

.main-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 黑色半透明，可调整透明度值 */
  z-index: 0;
}

.name-wrapper {
  display: flex;
  align-items: center;
  user-select: none;
}

.first-name {
  color: #808080;
  font-family: "SimHei";
  font-size: 72px;
  margin-right: 5px;
  z-index: 2;
}

.last-name {
  color: white;
  font-family: "SimHei";
  font-size: 72px;
  z-index: 2;
}

.job-title {
  margin-top: 10px;
  font-family: "SimHei";
  color: #ccc;
  z-index: 2;
  user-select: none;
}

.button-bar {
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 1;
}

.side-button,
.center-button {
  /* background-color: transparent; */
  border: none;
  cursor: pointer;
  padding: 10px;
  transition: transform 0.3s ease;
}

.side-button {
  height: 2rem;
}

.center-button {
  height: 3rem;
}

.side-button:hover,
.center-button:hover {
  transform: translateY(-5px);
}

.footer-divider {
  position: fixed;
  bottom: 1rem;
  left: 0;
  right: 0;
  background-color: white;
  width: 10%;
  margin: auto;
  height: 0.2rem;
  border-radius: 5px;
}
</style>

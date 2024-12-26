<template>
  <div class="dashboard-bg">
    <div class="dashboard-mask"></div>
    <div class="dashboard-panel">
      <div class="side-bar">
        <div class="avatar">
          <img src="../assets/logo.png" alt="avatar" />
        </div>
        <div class="user-info">
          <div>
            <img
              class="user-info-icon"
              src="../assets/location.png"
              alt="location"
            />China, Xiamen
          </div>
          <div>
            <img
              class="user-info-icon"
              src="../assets/email.png"
              alt="email"
            />huangyh__123@163.com
          </div>
        </div>
        <div
          class="nav-option"
          v-for="(option, index) in navOptions"
          :key="index"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave(index)"
        >
          {{ option }}
        </div>
      </div>
      <div class="panel-content">
        <div class="intro-wrapper">
          <div class="intro">Hi, I'm Yonghui HUANG</div>
          <div class="description">
            <div>
              <img
                class="intro-icon"
                src="../assets/work.png"
                alt="work"
              />Software Engineer
            </div>
            <div>
              <img
                class="intro-icon"
                src="../assets/batman.png"
                alt="batman"
              />Hey I have my flashlight with me!
            </div>
          </div>
          <div class="button-bar">
            <div class="button">
              <a href="https://github.com/Pas0412"
                ><img src="../assets/github-fill.svg" alt=""
              /></a>
            </div>
            <div class="button">
              <a href="https://www.linkedin.com/in/yonghui-huang-b2706a15b/"
                ><img src="../assets/linkedin-box-fill.svg" alt=""
              /></a>
            </div>
            <div class="button">
              <a
                href="https://pas0412.github.io/MyPersonalPage/static/resume.pdf"
                download="简历-黄永辉.pdf"
              >
                <img src="../assets/resume.png" alt="resume"
              /></a>
            </div>
          </div>
        </div>
        <div class="card-title">
          <img src="../assets/link.png" alt="link" />Interesting Front-end
          implementations
        </div>
        <CardList />
      </div>
    </div>
    <div class="divider"></div>
    <TimeLine />
    <div class="map-title">WHERE I HAVE BEEN</div>
    <TrackInChina />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CardList from "@/components/CardList.vue";
import TimeLine from "@/components/TimeLine.vue";
import TrackInChina from "@/components/TrackInChina.vue";

const navOptions = ref(["待添加", "待添加", "待添加", "待添加"]);
const hoverIndex = ref(-1);

const handleMouseEnter = (index) => {
  hoverIndex.value = index;
};

const handleMouseLeave = () => {
  hoverIndex.value = -1;
};
</script>

<style scoped>
.dashboard-bg {
  background-color: black;
  background-image: url("../assets/bigsur.jpg"); /* 替换为实际的图片地址，这里先黑色代替 */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100vw;
  min-height: 100vh;
  position: absolute;
}

.dashboard-mask {
  background-color: rgba(0, 0, 0, 0.6); /* 半透明黑色蒙版 */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.dashboard-panel {
  width: 80%;
  margin: 0 auto;
  display: flex;
  position: relative;
  margin-top: 5rem;
}

.side-bar {
  width: 20%;
  background-color: transparent;
  color: white;
  padding: 10px;
}

.side-bar .avatar {
  /* 宽度和高度设置为相同值，决定圆形的大小 */
  width: 100px;
  height: 100px;
  /* 将元素设置为圆形，通过border-radius属性，设置为宽度或高度的一半 */
  border-radius: 50%;
  /* 以下是一些其他常用的样式设置示例，可按需修改或删除 */
  overflow: hidden; /* 防止图片等内容超出圆形范围 */
  background-color: #ccc; /* 可以设置默认背景色，若头像加载失败等情况展示 */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto; /* 水平居中，可根据布局情况调整 */
}

/* 如果头像通过img标签引入，可添加以下样式来让图片填满圆形 */
.side-bar .avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.side-bar .user-info {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgba(128, 128, 128, 0.4);
  margin: 1rem;
  border-radius: 10px;
  flex-direction: column;
}

.side-bar .user-info:hover {
  background: linear-gradient(
    to bottom,
    rgba(130, 130, 130, 0.4),
    rgba(128, 128, 128, 0.4)
  );
  box-shadow: 0 0 5px #add8e6;
  cursor: pointer;
}

.side-bar .user-info div {
  color: white;
  margin: 0.5rem;
  opacity: 1;
  font-size: 0.7rem;
  font-family: "San Francisco";
}

.side-bar .user-info div .user-info-icon {
  width: 0.7rem;
  height: 0.7rem;
  margin-right: 0.5rem;
}

.side-bar .nav-option {
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 0.7rem;
  font-family: "San Francisco";
  transition: all 0.3s ease;
  background-color: rgba(128, 128, 128, 0.4);
}

.side-bar .nav-option:hover {
  background: linear-gradient(
    to bottom,
    rgba(130, 130, 130, 0.4),
    rgba(128, 128, 128, 0.4)
  );
  box-shadow: 0 0 5px #add8e6;
}

.panel-content {
  width: 75%;
  background-color: transparent;
  padding: 10px;
}

.panel-content .intro-wrapper {
  height: 12rem;
  margin-top: 1rem;
}

.panel-content .intro-wrapper .intro {
  color: #add8e6;
  font-size: 3rem;
  margin-bottom: 1rem;
}

.panel-content .intro-wrapper .description div {
  color: white;
  font-size: 0.8rem;
  font-family: "San Francisco";
}

.panel-content .intro-wrapper .description div .intro-icon {
  width: 1.2rem;
  height: 1rem;
  margin-right: 0.5rem;
}

.panel-content .intro-wrapper .button-bar {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 1rem;
}

.panel-content .intro-wrapper .button-bar .button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.2rem 0.1rem 0.2rem;
  background-color: rgba(128, 128, 128, 0.4);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.panel-content .intro-wrapper .button-bar .button a img {
  width: 1.3rem;
  filter: invert(1);
}

.panel-content .intro-wrapper .button-bar .button:hover {
  transform: translateY(-3px);
}

.panel-content .card-title {
  color: white;
  font-size: 24px;
  margin: 1rem 0;
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.panel-content .card-title img {
  width: 1.5rem;
  margin-right: 0.5rem;
}

.divider {
  width: 100%;
  height: 10px;
  background-color: transparent;
  margin: 20px 0;
}

.map-title {
  color: #add8e6;
  font-size: 36px;
  margin: 5rem 0 2rem 0;
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

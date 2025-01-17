<template>
  <div class="app-container">
    <Header />
    <div class="content-container">
      <!-- 这里可以添加页面的主要内容 -->
      <div class="tool-bar">
        <n-card title="小工具" hoverable @click="toLunar"> 生辰八字计算工具 </n-card>
      </div>
      <router-view></router-view>
      <n-result
        status="404"
        title="此页面还在建设中，看点别的吧"
        description="生活总归带点荒谬"
        v-if="$route.path === '/domain'"
      >
        <template #footer>
          <n-button @click="backToNavigate">看点别的吧</n-button>
        </template>
      </n-result>
    </div>
    <Footer />
    <n-back-top :right="100" />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { NCard, NResult, NButton } from "naive-ui";
import { useRouter } from "vue-router";
const router = useRouter();

const toLunar = () => {
  router.push("/lunar");
};

const backToNavigate = () => {
  window.location.href = "/navigate";
};
</script>

<style scoped>
.app-container {
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(to bottom, lightblue, white);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-container {
  width: 80%;
  flex: 1;
  background-color: transparent;
  padding: 20px;
  box-sizing: border-box;
}

.n-card {
  max-width: 300px;
  cursor: pointer;
}

.tool-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 5rem;
}

.footer {
  width: 100%;
}
</style>

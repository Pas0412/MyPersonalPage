<template>
  <div class="card-list">
    <div class="card" v-for="(card, index) in cards" :key="index" @click="onClick(card.url)">
      {{ card.title }}
    </div>
  </div>
</template>

<script setup>
import router from '@/router';


const cards = [
    {
      title: "Matrix",
      url: "/matrix",
    },
    {
      title: "ExpandFont",
      url: "/expandfont",
    },
    {
      title: "ChinaMap",
      url: "/chinamap",
    },
];

const onClick = (url) => {
  router.push(url);
};
</script>

<style scoped>
.card-list {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(200px, 1fr)
  ); /* 根据浏览器宽度自适应每行卡片数量 */
  gap: 10px;
}

.card {
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: rgba(128, 128, 128, 0.4);
  color: white;
  font-family: "San Francisco";
  font-size: 0.7rem;
}

.card:hover {
  background: linear-gradient(
    to bottom,
    rgba(130, 130, 130, 0.4),
    rgba(128, 128, 128, 0.4)
  );
  box-shadow: 0 0 5px #add8e6;
}
</style>

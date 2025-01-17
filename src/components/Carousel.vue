<template>
  <n-carousel
    effect="card"
    prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
    next-slide-style="transform: translateX(50%) translateZ(-800px);"
    style="height: 400px; margin-top: 5rem;"
    :show-dots="false"
  >
    <n-carousel-item
      v-for="(index, num) in 10"
      :key="num"
      :style="{ width: '60%' }"
    >
      <img class="carousel-img" :src="require(`../assets/carousel${num + 1}.jpg`)" :alt="`${num}`"/>
    </n-carousel-item>
  </n-carousel>
</template>
<script setup>
import { NCarousel, NCarouselItem } from "naive-ui";
</script>
<style scoped>
.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

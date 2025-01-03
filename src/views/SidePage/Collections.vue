<template>
  <div class="collections-container">
    <div class="card-panel">
      <div class="card-title">
        <img src="../../assets/link.png" alt="link" />收藏夹
      </div>
    </div>
    <CollectionList />
  </div>
</template>
<script setup>
import CollectionList from "@/components/CollectionList.vue";
</script>
<style scoped>
.collections-container {
  margin: 0 auto;
  width: 80%;
}
.card-panel {
  margin: 0 auto;
}

.card-title {
  color: white;
  font-size: 24px;
  padding: 0.4rem 0.3rem;
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  border-radius: 0.5rem;
}

.card-title img {
  width: 1.5rem;
  margin-right: 0.5rem;
}
</style>

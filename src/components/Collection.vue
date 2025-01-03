<template>
  <div class="article-item">
    <div class="article-title">{{ article.title }}</div>
    <div class="article-meta">
      <!-- <span class="article-category">{{ article.category }}</span> -->
      <n-tag
        v-for="tag in article.tags"
        :key="tag"
        class="article-tag"
        type="info"
        >{{ tag }}</n-tag
      >
      <n-tag round :bordered="false">
      分类：工具
      <template #icon>
        <n-icon :component="Tag" />
      </template>
    </n-tag>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { NTag } from "naive-ui";
import { Tag } from "@vicons/tabler";

// 接收父组件传递的文章对象数据
const props = defineProps({
  article: Object,
});
</script>

<style scoped>
.article-item {
  width: 100%;
  padding: 1rem;
  margin-bottom: 10px;
  padding-left: 1rem;
  font-family: "San Francisco";
  border-radius: 0.5rem;
  background-color: rgba(128, 128, 128, 0.4);
}

.article-item:hover {
  background: linear-gradient(
    to bottom,
    rgba(130, 130, 130, 0.4),
    rgba(128, 128, 128, 0.4)
  );
  box-shadow: 0 0 5px #add8e6;
  cursor: pointer;
}
.article-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  color: white;
  font-size: 1.5rem;
  font-family: "San Francisco";
  margin-bottom: 0.5rem
}
.article-meta {
  display: flex;
  align-items: center;
  gap: 5px;
}
.article-tag {
  font-size: 0.7rem;
}
</style>

<template>
  <div class="article-item">
    <div class="article-left">
      <div class="article-title" @click="onClick">{{ article.title }}</div>
      <div class="article-meta">
        <!-- <span class="article-category">{{ article.category }}</span> -->
        <n-tag
          v-for="tag in article.tags"
          :key="tag"
          class="article-tag"
          type="info"
          ># {{ tag }}</n-tag
        >
      </div>
    </div>
    <div class="article-right">
      <n-tag round :bordered="false">
        分类：{{ article.category }}
        <template #icon>
          <n-icon :component="Tag" />
        </template>
      </n-tag>
      <n-button text @click="onThumbsUp">
        <template #icon>
          <n-icon>
            <ThumbUp />
          </n-icon>
        </template>
        {{ article.thumbs }}
      </n-button>
    </div>
  </div>
</template>

<script setup>
import { NTag, NIcon, NButton } from "naive-ui";
import { Tag, ThumbUp } from "@vicons/tabler";
import { thumbsUp } from "@/api/note";
import { ref } from "vue";

let hasThumbsUp = ref(false);

// 接收父组件传递的文章对象数据
const props = defineProps({
  article: Object,
});

const onThumbsUp = () => {
  if (!hasThumbsUp.value) {
    props.article.thumbs++;
    thumbsUp(props.article.id);
  }
  hasThumbsUp.value = true;
};

const onClick = () => {
  // 跳转到文章详情页
  window.open(props.article.url, "_blank");
};
</script>

<style scoped>
.article-item {
  width: 100%;
  max-width: 70rem;
  padding: 1rem;
  margin-bottom: 10px;
  padding-left: 1rem;
  font-family: "San Francisco";
  border-radius: 0.5rem;
  background-color: rgba(128, 128, 128, 0.4);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  overflow: hidden;
  text-overflow: ellipsis;
  /* max-width: 100%; */
  color: white;
  font-size: 1.5rem;
  font-family: "San Francisco";
  margin-bottom: 0.5rem;
  overflow-x: hidden;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 5px;
}
.article-tag {
  font-size: 0.7rem;
}

.article-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

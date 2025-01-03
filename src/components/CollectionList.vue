<template>
  <div class="article-list-container">
    <div class="search-container">
      <input
        type="text"
        placeholder="搜索文章标题"
        v-model="searchText"
        class="search-input"
      />
    </div>
    <div class="article-panel">
      <div class="sidebar">
        <div
          v-for="category in categories"
          :key="category"
          class="sidebar-item"
          @click="filterByCategory(category)"
        >
          {{ category }}
        </div>
      </div>
      <div class="article-content">
        <Collection
          v-for="article in filteredArticles"
          :key="article.id"
          :article="article"
        />
      </div>
    </div>
    <n-pagination
      :display-order="['quick-jumper', 'pages', 'size-picker']"
      :page-count="100"
      show-quick-jumper
      show-size-picker
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Collection from "./Collection.vue";
import { NPagination } from "naive-ui";

// 模拟从后端获取的文章数据
const articles = ref([
  {
    id: 1,
    title: "精彩的Vue 3文章一",
    category: "技术分享",
    tags: ["Vue", "前端开发"],
    url: "article1-url",
  },
  {
    id: 2,
    title: "Vue 3的实用技巧",
    category: "技术分享",
    tags: ["Vue", "技巧"],
    url: "article2-url",
  },
]);

// 模拟从后端获取的分类数据
const categories = ref(["技术分享", "经验总结", "其他分类"]);

// 当前搜索的文本内容
const searchText = ref("");
// 当前选中的分类
const currentCategory = ref("");

// 根据分类筛选文章列表的函数
const filterByCategory = (category) => {
  currentCategory.value = category;
};

// 计算属性，根据搜索文本和当前分类筛选出要展示的文章列表
const filteredArticles = computed(() => {
  let result = articles.value;
  if (currentCategory.value) {
    result = result.filter(
      (article) => article.category === currentCategory.value
    );
  }
  if (searchText.value) {
    result = result.filter((article) =>
      article.title.includes(searchText.value)
    );
  }
  return result;
});
</script>

<style scoped>
.article-list-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
}

.search-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.search-input {
  width: 300px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: transparent
}

.article-panel {
  display: flex;
  flex-direction: row;
  flex: 1;
}

.sidebar {
  width: 150px;
  height: 100%;
  border-right: 1px solid #ccc;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sidebar-item {
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 4px;
  color: white;
  background-color: rgba(128, 128, 128, 0.4);
  font-family: "San Francisco";
}

.sidebar-item:hover {
  background: linear-gradient(
    to bottom,
    rgba(130, 130, 130, 0.4),
    rgba(128, 128, 128, 0.4)
  );
  box-shadow: 0 0 5px #add8e6;
  cursor: pointer;
}

.article-content {
  flex: 1;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>

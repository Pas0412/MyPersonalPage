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
        <n-empty description="这里啥也没有" v-if="filteredArticles.length === 0">
          <template #extra>
            <n-button size="small" @click="onViewOthers"> 看看别的分类 </n-button>
          </template>
        </n-empty>
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
import { ref, computed, onMounted } from "vue";
import Collection from "./Collection.vue";
import { NPagination, NEmpty, NButton } from "naive-ui";
import { useStore } from "vuex";

const store = useStore();
let articles = computed(() => store.state.collection.collectionList);

// 从后端获取的文章数据
onMounted(async () => {
  await store.dispatch("collection/fetchCollectionList");
});

// 模拟从后端获取的分类数据
const categories = ref(["全部", "教程", "工具", "Bug"]);

// 当前搜索的文本内容
const searchText = ref("");
// 当前选中的分类
const currentCategory = ref("");

// 根据分类筛选文章列表的函数
const filterByCategory = (category) => {
  if (category === "全部") {
    currentCategory.value = "";
    return;
  }
  currentCategory.value = category;
};

const onViewOthers = () => {
  currentCategory.value = "";
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
  console.log(result);
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
  background-color: transparent;
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

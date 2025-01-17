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
        <ListItem
          v-for="article in filteredArticles"
          :key="article.id"
          :article="article"
        />
        <n-spin v-if="loading"></n-spin>
        <n-empty
          description="这里啥也没有"
          v-if="filteredArticles.length === 0 && !loading"
        >
          <template #extra>
            <n-button size="small" @click="onViewOthers">
              看看别的分类
            </n-button>
          </template>
        </n-empty>
      </div>
    </div>
    <div class="pagination">
      <n-pagination
        :display-order="['quick-jumper', 'pages', 'size-picker']"
        v-model:page="currentPage"
        :page-count="Math.ceil(articles.length / pageSize)"
        show-quick-jumper
        show-size-picker
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import ListItem from "./ListItem.vue";
import { NPagination, NEmpty, NButton, NSpin } from "naive-ui";
import { useStore } from "vuex";

const store = useStore();
let articles = computed(() => store.state.note.noteList);

let loading = ref(true);

// 每页显示的数据量
const pageSize = ref(10);

// 当前页码
const currentPage = ref(1);
// 从后端获取的文章数据
onMounted(async () => {
  await store.dispatch("note/fetchNoteList");
});

// 模拟从后端获取的分类数据
const categories = ref(["全部"]);

// 当前搜索的文本内容
const searchText = ref("");
// 当前选中的分类
const currentCategory = ref("");

// 根据分类筛选文章列表的函数
const filterByCategory = (category) => {
  currentCategory.value = category;
};

const onViewOthers = () => {
  currentCategory.value = "";
};

// 计算属性，根据搜索文本和当前分类筛选出要展示的文章列表
const filteredArticles = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  let result = articles.value.slice(start, end);
  if (currentCategory.value) {
    if (currentCategory.value !== "全部") {
      result = result.filter(
        (article) => article.category === currentCategory.value
      );
    }
  }
  if (searchText.value) {
    result = result.filter((article) =>
      article.title.includes(searchText.value)
    );
  }
  console.log(result);
  categories.value = [...new Set(articles.value.map((obj) => obj.category))];
  categories.value.unshift("全部");
  if (result.length > 0) {
    loading.value = false;
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
  background-color: transparent;
}

.article-panel {
  display: flex;
  flex-direction: row;
  flex: 1;
}

.sidebar {
  min-width: 13rem;
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
  min-height: 2rem;
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

.pagination {
  display: flex;
  justify-content: flex-end;
}
</style>

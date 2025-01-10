import { getCount } from '@/api/statistic.js';
import { ref } from 'vue';

const state = {
  friend: 0, // 存储朋友数量，初始为 0
  circle: 0, // 存储朋友圈帖子数量，初始为 0
  collection: ref(0), // 存储收藏夹数量，初始为 0
  article: 0, // 存储学习区文章数量，初始为 0
  isLoading: false, // 用于标识是否正在发起请求，如加载朋友列表等操作时的加载状态，初始为 false
  error: null // 存储请求过程中出现的错误信息，初始为 null
};

const mutations = {
  // 设置朋友数量的 mutation，用于更新friend数量
  SET_FRIEND(state, friend) {
    state.friend = friend;
  },
  // 设置朋友圈帖子数量的 mutation，用于更新circle数量
  SET_CIRCLE(state, circle) {
    state.circle = circle;
  },
  // 设置收藏夹数量的 mutation，用于更新collection数量
  SET_COLLECTION(state, collection) {
    state.collection = collection;
  },
  // 设置学习区文章数量的 mutation，用于更新article数量
  SET_ARTICLE(state, article) {
    state.article = article;
  },
  // 设置加载状态的 mutation，用于更新isLoading的值
  SET_LOADING(state, isLoading) {
    state.isLoading = isLoading;
  },
  // 设置错误信息的 mutation，用于更新error的值
  SET_ERROR(state, error) {
    state.error = error;
  },
};

const actions = {
  // 获取所有统计信息的 action，调用接口获取数据并根据结果更新状态
  async fetchStatistics({ commit }) {
    try {
      const statistics = await getCount();
      commit('SET_FRIEND', statistics.friend);
      commit('SET_COLLECTION', statistics.collection);
      commit('SET_CIRCLE', statistics.circle);
      commit('SET_ARTICLE', statistics.article);
      commit('SET_ERROR', null);
    } catch (error) {
      console.log(error);
      commit('SET_ERROR', error.message);
    } finally {
      commit('SET_LOADING', false);
    }
  },
};

const getters = {
  // 获取朋友列表的 getter，用于在组件中获取当前存储的朋友列表数据
  getFriend: state => state.friend,
  // 获取单个朋友详细信息的 getter，用于获取单个朋友详细信息
  getFriendDetails: state => state.friendDetails,
  // 获取加载状态的 getter，用于判断当前是否正在加载数据
  isLoading: state => state.isLoading,
  // 获取错误信息的 getter，用于在组件中展示错误提示信息
  getError: state => state.error
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
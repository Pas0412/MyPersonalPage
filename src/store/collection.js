import { getAllCollections, getCollections } from '@/api/collection';

const state = {
  collectionList: [], // 存储收藏夹数量，初始为 0
  isLoading: false, // 用于标识是否正在发起请求，如加载朋友列表等操作时的加载状态，初始为 false
  error: null // 存储请求过程中出现的错误信息，初始为 null
};

const mutations = {
  // 设置收藏夹数量的 mutation，用于更新collection数量
  SET_COLLECTION(state, collection) {
    state.collectionList = collection;
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
  async fetchCollectionList({ commit }) {
    try {
      // const collection = await getAllCollections();
      const collection = await getCollections();
      commit('SET_COLLECTION', collection);
    } catch (error) {
      console.log(error);
      commit('SET_ERROR', error.message);
    } finally {
      commit('SET_LOADING', false);
    }
  },
};

const getters = {
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
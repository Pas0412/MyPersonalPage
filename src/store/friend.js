import { getFriends, addFriend, getFriendById, updateFriend, deleteFriendById } from '@/api/friend.js';

const state = {
  friends: [], // 存储所有朋友信息的数组，初始为空
  friendDetails: null, // 存储单个朋友详细信息，初始为 null
  isLoading: false, // 用于标识是否正在发起请求，如加载朋友列表等操作时的加载状态，初始为 false
  error: null // 存储请求过程中出现的错误信息，初始为 null
};

const mutations = {
  // 设置朋友列表数据的 mutation，用于更新friends数组
  SET_FRIENDS(state, friends) {
    state.friends = friends;
  },
  // 设置单个朋友详细信息的 mutation，用于更新friendDetails
  SET_FRIEND_DETAILS(state, friendDetails) {
    state.friendDetails = friendDetails;
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
  // 获取所有朋友信息的 action，调用接口获取数据并根据结果更新状态
  async fetchFriends({ commit }) {
    try {
      commit('SET_LOADING', true);
      const friends = await getFriends();
      commit('SET_FRIENDS', friends);
      commit('SET_ERROR', null);
    } catch (error) {
      commit('SET_ERROR', error.message);
    } finally {
      commit('SET_LOADING', false);
    }
  },
  // 根据 id 获取单个朋友信息的 action，调用接口获取数据并更新相应状态
  async fetchFriendById({ commit }, id) {
    try {
      commit('SET_LOADING', true);
      const friendDetails = await getFriendById(id);
      commit('SET_FRIEND_DETAILS', friendDetails);
      commit('SET_ERROR', null);
    } catch (error) {
      commit('SET_ERROR', error.message);
    } finally {
      commit('SET_LOADING', false);
    }
  },
  // 添加朋友信息的 action，调用接口添加数据并更新相关状态
  async addNewFriend({ commit }, friendData) {
    try {
      commit('SET_LOADING', true);
      const newFriend = await addFriend(friendData);
      commit('SET_FRIENDS', [...state.friends, newFriend]);
      commit('SET_ERROR', null);
    } catch (error) {
      commit('SET_ERROR', error.message);
    } finally {
      commit('SET_LOADING', false);
    }
  },
  // 根据 id 更新朋友信息的 action，调用接口更新数据并更新相关状态
  async updateFriendById({ commit }, { id, updatedFriendData }) {
    try {
      commit('SET_LOADING', true);
      const updatedFriend = await updateFriend(id, updatedFriendData);
      const updatedFriends = state.friends.map(friend => friend.id === id? updatedFriend : friend);
      commit('SET_FRIENDS', updatedFriends);
      commit('SET_FRIEND_DETAILS', updatedFriend);
      commit('SET_ERROR', null);
    } catch (error) {
      commit('SET_ERROR', error.message);
    } finally {
      commit('SET_LOADING', false);
    }
  },
  // 根据 id 删除朋友信息的 action，调用接口删除数据并更新相关状态
  async deleteFriendById({ commit }, id) {
    try {
      commit('SET_LOADING', true);
      await deleteFriendById(id);
      const updatedFriends = state.friends.filter(friend => friend.id!== id);
      commit('SET_FRIENDS', updatedFriends);
      commit('SET_ERROR', null);
    } catch (error) {
      commit('SET_ERROR', null);
    } finally {
      commit('SET_LOADING', false);
    }
  },
};

const getters = {
  // 获取朋友列表的 getter，用于在组件中获取当前存储的朋友列表数据
  getFriends: state => state.friends,
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
import instance from './index.js';

// 获取所有朋友信息的接口请求函数
export const getFriends = async () => {
  try {
    const response = await instance.get('/friends');
    return response;
  } catch (error) {
    throw error;
  }
};

// 添加朋友信息的接口请求函数
export const addFriend = async (friendData) => {
  try {
    const response = await instance.post('/friends', friendData);
    return response;
  } catch (error) {
    throw error;
  }
};

// 根据 id 查询朋友信息的接口请求函数
export const getFriendById = async (id) => {
  try {
    const response = await instance.get(`/friends/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

// 根据 id 更新朋友信息的接口请求函数
export const updateFriend = async (id, updatedFriendData) => {
  try {
    const response = await instance.put(`/friends/${id}`, updatedFriendData);
    return response;
  } catch (error) {
    throw error;
  }
};

// 根据 id 删除朋友信息的接口请求函数
export const deleteFriendById = async (id) => {
  try {
    const response = await instance.delete(`/friends/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};
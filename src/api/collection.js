import instance from "./index.js";

// 获取所有收藏的接口请求函数
export const getAllCollections = async () => {
  try {
    const response = await instance.post("/get-all-collections");
    return response;
  } catch (error) {
    throw error;
  }
};

export const getCollections = async () => {
  try {
    const response = await instance.post("/get-collections");
    return response;
  } catch (error) {
    throw error;
  }
};

export const thumbsUp = async (articleId) => {
  try {
    const response = await instance.post("/thumbs-up", null, {
      params: { id: articleId },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

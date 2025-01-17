import instance from "./index.js";

// 获取所有笔记的接口请求函数
export const getNotes = async () => {
  try {
    const response = await instance.post("/get-notes");
    return response;
  } catch (error) {
    throw error;
  }
};

export const thumbsUp = async (articleId) => {
    try {
      const response = await instance.post("/note-thumbs-up", null, {
        params: { id: articleId },
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
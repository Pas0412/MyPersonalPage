import instance from './index.js';

// 获取所有统计信息的接口请求函数
export const getCount = async () => {
  try {
    const response = await instance.get('/count');
    return response;
  } catch (error) {
    throw error;
  }
};
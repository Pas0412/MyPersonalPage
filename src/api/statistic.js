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

// 获取网站信息的接口请求函数
export const getViews = async () => {
  try {
    const response = await instance.get('/get-views');
    return response;
  } catch (error) {
    throw error;
  }
};

// 获取网站日志信息的接口请求函数
export const getLogs = async () => {
  try {
    const response = await instance.get('/get-all-logs');
    return response;
  } catch (error) {
    throw error;
  }
};
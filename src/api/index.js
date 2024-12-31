import axios from 'axios';

// 基础的后端接口 URL，根据实际情况调整
const baseURL = 'http://47.122.59.39:8081';

// 创建 axios 实例，方便配置公共的请求头、拦截器等
const instance = axios.create({
  baseURL,
});

// 请求拦截器，可添加例如添加请求头、显示加载状态等操作（这里简单示意）
instance.interceptors.request.use(
  config => {
    // 例如显示加载动画等，这里简单示意
    console.log('发起请求，显示加载状态');
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器，针对后端通用返回类格式进行统一处理
instance.interceptors.response.use(
  response => {
    const { code, message, data } = response.data;
    if (code === 200) {
      return data;
    } else {
      // 若后端返回的不是成功状态码，抛出错误，方便在调用处统一处理
      return Promise.reject(new Error(message));
    }
  },
  error => {
    // 统一处理网络请求等其他错误情况，也抛出错误方便调用处处理
    return Promise.reject(new Error('网络请求失败，请稍后再试'));
  }
);

// 导出配置好的 axios 实例，供其他接口模块使用
export default instance;
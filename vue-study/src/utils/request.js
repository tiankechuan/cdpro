import axiosTemp from 'axios'

const axios = axiosTemp.create();
// 请求拦截
axios.interceptors.request.use(function (config) {
    // 请求前
    return config;
}, function (error) {
    // 请求出错
    return Promise.reject(error);
});

// 响应拦截
axios.interceptors.response.use(function (response) {
    // 响应后
    return response;
}, function (error) {
    // 响应出错
    return Promise.reject(error);
});

export default axios;


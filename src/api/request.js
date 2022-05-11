//对于axios进行二次封装，用于发送请求
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
//console.log(nprogress);
//引入进度条样式
import "nprogress/nprogress.css";

//1.利用axios对象的方法create,去创建一个axios实例
//2.requests就是axios，只是经过了一些配置
const requests = axios.create({
    //配置对象
    //基础路径：当发送请求时，路径默认加上api
    baseURL:"/api",
    //请求超过时间5s
    timeout:5000,
});
//请求拦截器：在发送请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
    //config:配置对象，其有个属性headers请求头很重要
    nprogress.start();
    return config;
})

//响应拦截器：在响应之后可以做一些事情
requests.interceptors.response.use((res)=>{
    //成功的回调函数：获取响应回来的服务器的数据
    nprogress.done();
    return res.data;
},(error)=>{
    //响应失败的回调函数, 终止promise链
    return Promise.reject(new Error('false'));
})
//对外暴露
export default requests;
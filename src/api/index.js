//当前该模块：对API进行统一管理
import requests from "./request";

//完成三级联动接口的请求
///api/product/getBaseCategoryList  get  无参数
//发请求：axios发请求返回结果Promise对象

//export const reqCategoryList = ()=>requests({url:'product/getBaseCategoryList', method:'get'});

//暴露方法，可以供其他模块来调用
export const reqCategoryList = ()=>{
    //发请求，axios发请求返回的是promise对象
    return requests({url:'product/getBaseCategoryList', method:'get'});
}
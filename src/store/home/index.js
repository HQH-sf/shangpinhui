import  {reqCategoryList} from "@/api";
//home模块的小仓库

const state = {
    //state的数据的初始值是根据服务器返回的值的类型来进行初始化的
    categoryList:[],
};
const mutations = {
    CATEGORYLIST(state, categoryList){
        state.categoryList = categoryList;
    }
};
const actions = {
    //通过API里面的接口函数进行调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        console.log(result);   
        console.log("123");
        
        // if(result.code == 200){
        //     commit("CATEGORYLIST", result.data)
        // }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}




//  store文件夹与vuex相关
import Vue from 'vue';
import Vuex from 'vuex';

//需要使用插件一次
Vue.use(Vuex);

//vuex模块式开发
//引入小仓库
import home from './home';
import search from './search';

export default new Vuex.Store({
    //实现Vuex仓库模块式开发存储数据
    modules:{
        home,
        search
    }
})

/*
//state:仓库存储数据的地方
const state = {
    count: 1,
};
//mutations:修改state的唯一手段
const mutations = {
    ADD(state){
        state.commit++;
    }
};
//action:处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
    //这里可以书写业务逻辑，但不能修改state
    add({commit}){
        commit("ADD");
    }
    
};
//getters:理解为计算属性，用于简化仓库数据，使组件获取仓库的数据更方便
const getters = {};

//对外暴露Store类的一个实例
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
*/
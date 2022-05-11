import Vue from 'vue'
import App from './App.vue'


//引入路由
import router from '@/router';
//引入仓库
import store from '@/store';
//引入全局组件
import TypeNav from '@/components/TypeNav';
Vue.component(TypeNav.name, TypeNav);

import {reqCategoryList} from '@/api';  //表示将该函数引入
reqCategoryList();


new Vue({
  render: h => h(App),
  //注册路由[写法：kv一致省略v]
  router,
  //注册仓库:组件实例的身上会多一个$store属性
  store,
}).$mount('#app')

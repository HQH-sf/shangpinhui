//配置路由的地方(相当于node中的一个模块)

//1.引入vue和vue-router并赋值给相应的Vue和VueRouter
import Vue from 'vue';
import VueRouter from 'vue-router';
//2.使用插件
Vue.use(VueRouter);

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

//--1先将VueRouter原型对象的push方法保存一份
let originPush = VueRouter.prototype.push;
//console.log(originPush);

//--2.重写push | replace
//第一个参数location:告诉原来的push方法，往哪里跳转
//第二个参数：成功回调
//第三个参数: 失败回调

 VueRouter.prototype.push = function(location, resolve, reject){
    //call | apply区别
    // 相同点： 都可以调用函数一次，都可以篡改函数上下文一次
    //不同点: call 与apply传递参数：call传递参数可以用逗号隔开， apply方法执行，传递数组
    if(resolve && reject){
        originPush.call(this, location, resolve, reject);  //
    }else{
        originPush.call(this, location, ()=>{}, ()=>{});
    }
 }
//3.配置路由
export default new VueRouter({
    routes: [
        //特别注意：组件对应的vue文件是否大小写
        {
            path: "/Home",
            component: Home,
            meta:{show:true}
        },
        {
            path: "/Search/:keyword?",
            component: Search,
            meta:{show:true},
            name:'search',
            //路由组件能不能传递props数据？
            //布尔值写法：params参数可以作为路由组件身上的属性
            //props:true,
            //写法二：对象写法
            //props:{a:1,b:2}
            //写法三：函数写法
            props:($route)=>({keyword:$route.params.keyword, k:$route.query.k})
            
        },
        {
            path: "/Login",
            component: Login,
            meta:{show:false}
        },
        {
            path: "/Register",
            component: Register,
            meta:{show:false}
        },

        //重定向，在项目跑起来时，访问/,可以立马将其重定向到首页
        {
            path: "*",
            redirect: "/Home"

        }
    ]
})
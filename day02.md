1:编程式路由跳转到当前路由（参数不变），多次执行会抛出NavigationDuplicated的警告错误？
--路由跳转有两种形式：声明式导航、编程式导航
--声明式导航没有这类问题，因为vue-router底层已经处理好了

1.1为什么编程式导航进行路由跳转的时候，会出现那这样的错误？
"vue-router": "^3.5.2" 最新的vue-router引入promise
1.2通过给push方法返回promise，而promise需要传递相应的成功、失败的回调函数，可以捕获到当前的错误

可以将push方法理解成：
function push(){
    return new Promise((resolve,reject)=>{

    })
}
例如：
this.$router.push({name:"search", params:{keyword:this.keyword}, query:{k:this.keyword.toUpperCase()}},()=>{},()=>{});
但这种写法治标不治本，之后再别的组件当中使用push|replace，编程式导航还是会存在同样的错误

1.3 分析
this: 当前组件实例(search)
this.$router属性：属性值是VueRouter类的一个实例。当再入口文件注册路由的时候，给组件实例添加了$router | $route属性
push:VueRouter类的一个实例

function VueRouter(){

}
//原型对象的方法
VueRouter.prototype.push = function(){
    //函数上下文为VueRouter类的一个实例
}

let $router = new VueRouter();
this.$router.push();

2:Home模块组件的拆分
--先完成静态页面
--拆分出静态组件
--获取服务器的数据进行显示
--动态业务

3：三级组件的完成  注意：当某一个组件在多个页面都被使用时，可以将其置为一个全局组件
---分析：三级联动在Home、Search、Detail中有使用，可以把三级联动组件注册为全局组件
全局组件的好处是：只需要注册一次，就可以在项目的任意地方使用

4: POSTMAN 测试接口
--若服务器返回的数据code字段为200，则代表服务器返回数据是成功的
--整个项目当中，接口前缀都有/api字样

5: axios二次封装(包括创建axios实例，设置请求拦截器和响应拦截器)
XMLHttpRequest、 fetch、JQ、axios
--为什么需要进行二次封装axios
请求拦截器、响应拦截器：请求拦截器发送请求之前可以处理一些业务，响应拦截器：当服务器数据返回之后，可以处理一些事情

6：接口的统一管理
小项目： 完全可以在组件的生命周期函数中发请求
大项目：若像在小项目中那样：axios.get('xxx'),如果后期接口地址发生改变，则会造成更改上的繁琐

--- 跨域问题 （服务器地址写在webpack.js文件当中（即这里的vue.config.js文件），尤其注意，配置文件需要重新运行才能生效）
什么是跨域： 协议、域名、端口号不同的请求，称之为跨域
http://localhost:8080/#/Home   ----前端项目本地服务器
http://gmall-h5-api.atguigu.cn          ----后台服务器

解决跨域问题方法：
JSONP、CROS、代理服务器作为第三方，将前端发出请求的URL（含有api的，转换成服务器可以接受的URL）
服务器之间不存在跨域问题，浏览器和服务器之间是存在跨域的

7.nprogress进度条的使用

start 进度条的开始
done  进度条的结束
进度条的颜色可以通过进度条的样式进行修改

8.vuex管理库
-- 1.vuex是什么？
  vuex是官方提供的一个插件，状态管理库，集中式管理项目中组件共用的数据
  注意：并不是每个项目都需要vuex，如果项目很小，就不需要Vuex; 当项目很大，组件很多、数据很多时，数据维护很费劲，才需要vuex来管理数据

  vuex的几个核心概念
  state
  mutations
  actions
  getters
  modules

--2.vuex 的基本使用
  1.仓库store存储数据(e.g:count)
  组件可以通过辅助函数{mapState}获取   import {mapState} from 'vuex'
  2.computed:{
    ..mapState(['count'])
  }
  3.之后组件中template模板上就可以使用count数据

  4.通过事件修改count数据的值：
  在组件当中的methods{
    this.$store.dispath('methodA')   //派发actions
  }
  5.在store.js中 在actions中commit();  在mutations中定义方法{
    methodA(state)
  }

--3.vuex实现模块式开发
若项目过大，组件、接口和数据也很多时，可以让Vuex实现模块式开发
模拟state存储数据
{
  count:1,
  search:{a:1},
  detail:{...}
  pay:{...}
}

模块式开发，将大仓库拆分成多个小仓库
详见Vuex文档
{
  home,
  search
}

9.完成三级联动TypeNav数据的显示


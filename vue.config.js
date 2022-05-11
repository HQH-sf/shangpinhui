//相当于webpack的webpack.js文件，用于知道webpack

//对外暴露对象
module.exports = {
 //关闭eslint
 lintOnSave: false,
 //代理跨域
 devServer:{
    proxy: {
        "/api": {
          target: "http://gmall-h5-api.atguigu.cn",  //需要获取数据的那台服务器的地址
          //pathRewrite: {"^/api" : ""}
        }
      }
 }
 
}

/*
 * @Author: your name
 * @Date: 2020-10-16 11:18:36
 * @LastEditTime: 2020-11-09 08:59:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pytest\src\router\index.js
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Login",
    component: resolve => require(["@/Views/Login"], resolve)
  },
  {
    path: "/reister",
    name: "Register",
    component: resolve => require(["@/Views/Register"], resolve)
  },
  {
    path: "/index",
    name: "index",
    component: resolve => require(["@/Views/Index"], resolve),

    redirect: "/hello",
    children: [
      {
        path: "/hello",
        name: "HelloWorld",
        title: "你好",
        component: resolve => require(["@/Views/HelloWorld"], resolve)
      },
      {
        path: "/userlist",
        name: "UserList",
        title: "用户管理",
        component: resolve => require(["@/Views/UserList"], resolve)
      },
      {
        path: "/shoplist",
        name: "ShopList",
        title: "商品列表",
        component: resolve => require(["@/Views/ShopList"], resolve)
      },
      {
        path: "/addshop",
        name: "AddShop",
        title: "添加商品",
        component: resolve => require(["@/Views/AddShop"], resolve)
      },
      {
        path: "/test",
        name: "test",
        title: "测试",
        component: resolve => require(["@/Views/test"], resolve)
      },
    ]
  }
];
export default new Router({
  mode: "history",
  routes: [...routes]
});

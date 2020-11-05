/*
 * @Author: your name
 * @Date: 2020-10-16 11:18:36
 * @LastEditTime: 2020-11-05 15:43:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pytest\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ShopList from '@/components/ShopList'


Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/reister',
    name: 'Register',
    component: Register
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    redirect:"/hello",
    children: [
      {
        path: '/hello',
        name: 'HelloWorld',
        title: "你好",
        component: HelloWorld,
      },
      {
        path: '/test',
        name: 'Test',
        title: "用户管理",
        component: Test
      },
      {
        path: '/shoplist',
        name: 'ShopList',
        title: "商品列表",
        component: ShopList
      },
    ]
  },


]
export default new Router({
  mode: "history",
  routes: [...routes]
})

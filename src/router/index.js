/*
 * @Author: your name
 * @Date: 2020-10-16 11:18:36
 * @LastEditTime: 2020-11-03 20:27:40
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


Vue.use(Router)

export default new Router({
  // base: '/',
  mode:"history",
  routes: [
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index
    // },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    
  ]
})

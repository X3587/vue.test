/*
 * @Author: your name
 * @Date: 2020-10-16 11:18:36
 * @LastEditTime: 2020-10-20 11:48:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pytest\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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

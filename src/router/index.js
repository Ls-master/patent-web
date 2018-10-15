import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/containers/home'
import main from '@/containers/main'

import technical from '@/containers/technical'
import claim from '@/containers/claim'
import implementation from '@/containers/implementation'
import instructions from '@/containers/instructions'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          name: 'main',
          component: main
        },
        {
          path: 'technical',
          name: 'technical',
          component: technical
        },
        { 
          // 权利要求书
          path: 'claim',
          name: 'claim',
          component: claim
        },
        {
          // 具体实施方式
          path: 'implementation',
          name: 'implementation',
          component: implementation
        },
        {
          // 说明书附图
          path: 'instructions',
          name: 'instructions',
          component: instructions
        }
      ]
    }
  ]
})

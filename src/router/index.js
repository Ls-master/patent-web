import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/containers/home'
import main from '@/containers/main'
import claim from '@/containers/claim'
import implementation from '@/containers/implementation'
import instructions from '@/containers/instructions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children: [
        {
          path: 'claim',
          name: '权利要求书',
          component: claim
        },
        {
          path: 'implementation',
          name: '具体实施方式',
          component: implementation
        },
        {
          path: 'instructions',
          name: '说明书附图',
          component: instructions
        }
      ]
    }
  ]
})

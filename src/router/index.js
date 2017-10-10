import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello/Hello'
import Pro from '@/components/product/Pro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/product',
      name: 'Product',
      component: Pro
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import user from '@/components/device/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/index'
    },
    {
      path:'/index',
      name:'index',
      component:index,
      children:[
        {
          path:'/device/user',
          name:'user',
          component:user
        }
      ]
    }
  ]
})

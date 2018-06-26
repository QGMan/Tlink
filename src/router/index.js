import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import user from '@/components/device/user'
import device from '@/components/device/device'
import deviceDisplay from '@/components/device/deviceDisplay'
import device_1 from '@/components/device/device_1'
import device_0 from '@/components/device/device_0'
import deviceDelet from '@/components/device/deviceDelet'
import deviceadd from '@/components/device/deviceadd'
import deviceMap from '@/components/device/deviceMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/device/user'
    },
    {
      path:'/index',
      name:'index',
      component:index,
      children:[
        {
          path:'/device/user',
          name:'user',
          component:user,
        },
        {
          path:'/device/device',
          name:'device',
          component:device,
          children:[
            {
              path: '/device/deviceDisplay',
              name: 'deviceDisplay',
              component: deviceDisplay
            },
            {
              path: '/device/device_1',
              name: 'device_1',
              component: device_1
            },
            {
              path: '/device/device_0',
              name: 'device_0',
              component: device_0
            },
            {
              path: '/device/deviceDelet',
              name: 'deviceDelet',
              component: deviceDelet
            },
            {
              path: '/device/deviceadd',
              name: 'deviceadd',
              component: deviceadd
            }
          ]
        },
        {
          path:'/device/deviceMap',
          name:'deviceMap',
          component:deviceMap
        }
      ]
    }
  ]
})

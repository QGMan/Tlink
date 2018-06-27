import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import user from '@/components/device/user'
import device from '@/components/device/device'
import deviceedit from '@/components/device/deviceedit'
import deviceDisplay from '@/components/device/deviceDisplay'
import device_1 from '@/components/device/device_1'
import device_0 from '@/components/device/device_0'
// 已删除设备
import deviceDelet from '@/components/device/deviceDelet'
import deviceadd from '@/components/device/deviceadd'
import deviceMap from '@/components/device/deviceMap'
// 触发器
import alairms from '@/components/device/alairms'
import triggerAll from '@/components/device/triggerAll'
import trigger_1 from '@/components/device/trigger_1'
import trigger_0 from '@/components/device/trigger_0'
import triggerAdd from '@/components/device/triggerAdd'
// 用户中心
import userinfo from '@/components/user/userinfo'
import contact from '@/components/user/contact'
import noterecord from '@/components/user/noterecord'
import noteshop from '@/components/user/noteshop'
import passward from '@/components/user/passward'
import userAll from '@/components/user/userAll'
import userapi from '@/components/user/userapi'
import usersetting from '@/components/user/usersetting'
import weixinlist from '@/components/user/weixinlist'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'default',
      redirect: '/device/user'
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [{
          path: '/device/user',
          name: 'user',
          component: user,
        },
        {
          path: '/device/device',
          name: 'device',
          component: device,
          children: [{
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
            },
            {
              path: '/device/deviceedit',
              name: 'deviceedit',
              component: deviceedit
            }
          ]
        },
        {
          path: '/device/deviceMap',
          name: 'deviceMap',
          component: deviceMap
        },
        {
          path: '/device/alairms',
          name: 'alairms',
          component: alairms,
          children: [{
              path: '/device/triggerAll',
              name: 'triggerAll',
              component: triggerAll
            },
            {
              path: '/device/trigger_1',
              name: 'trigger_1',
              component: trigger_1
            },
            {
              path: '/device/trigger_0',
              name: 'trigger_0',
              component: trigger_1
            },
            {
              path: '/device/triggerAdd',
              name: 'triggerAdd',
              component: triggerAdd
            }
          ]
        },
        {
          path:'/user/userinfo',
          name:'userinfo',
          component:userinfo,
          children:[
            {
              path:'/user/usersetting',
              name: 'usersetting',
              component: usersetting
            },
            {
              path:'/user/userAll',
              name: 'userAll',
              component: userAll
            },
            {
              path: '/user/contact',
              name: 'contact',
              component: contact
            },
            {
              path: '/user/noterecord',
              name: 'noterecord',
              component: noterecord
            },
            {
              path: '/user/noteshop',
              name: 'noteshop',
              component: noteshop
            },
            {
              path: '/user/passward',
              name: 'passward',
              component: passward
            },
            {
              path: '/user/userapi',
              name: 'userapi',
              component: userapi
            },
            {
              path: '/user/weixinlist',
              name: 'weixinlist',
              component: weixinlist
            }
          ]
        },
        
      ]
    }
  ]
})

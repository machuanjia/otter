/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 16:12:45
 * @LastEditTime: 2021-10-26 14:30:25
 * @FilePath: /otter/src/routes/async.tsx
 * @Description:
 */
import { lazy } from 'react'

// import i18n from 'i18next'

const routes = [
  {
    path: '/dashboard',
    meta: {
      key: 'Dashboard',
      name: 'dashboard',
      icon: 'dashboard',
      permission: 'dashboard*',
    },
    component:lazy(() => import('@/views/Dashboard')),
  },
  {
    path: '/counter',
    meta: {
      key: 'Counter',
      name: '计数器',
      icon: 'counter',
      permission: 'counter*',
    },
    component:lazy(() => import('@/layouts/Route')),
    children: [
      {
        path: '/counter/index',
        meta: {
          key: 'Counter.counter',
          name: 'home',
          icon: '',
          permission: 'counter*.counter',
        },
        component: lazy(() => import('@/views/Counter')),
      },
    ],
  },
  {
    path: '/home',
    meta: {
      key: 'Home',
      name: 'home',
      icon: 'home',
      permission: 'home',
    },
    component: lazy(() => import('@/views/Home')),
  },
  {
    path: '/data',
    component: lazy(() => import('@/views/App')),
    meta: {
      key: 'otterData',
      name: 'app',
      icon: 'data',
      permission: 'home',
      redirect: '/data/home'
    },
  },
]

export default routes

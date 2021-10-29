/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 15:49:54
 * @LastEditTime: 2021-10-29 18:26:03
 * @FilePath: /otter/src/routes/static.tsx
 * @Description:
 */
import { lazy } from 'react'

import asyncRoute from './async'

// import i18n from 'i18next'

const routes = [
  {
    path: '/login',
    meta: {
      key: 'Login',
      name: '登录', //i18n.t('router.login'),
      isHidden: true,
    },
    component: lazy(() => import('@/views/Login')),
  },
  {
    path: '/',
    meta: {
      key: 'Main',
      name: '主页', //i18n.t('router.login'),
      isHidden: true,
    },
    component: lazy(() => import('@/layouts/Main')),
    children: asyncRoute
  },
]

export default routes

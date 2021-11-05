/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 16:12:45
 * @LastEditTime: 2021-11-04 17:41:12
 * @FilePath: /otter/src/routes/async.tsx
 * @Description:
 */
import { lazy } from 'react'

import i18n from 'i18next'

const routes = [
  {
    path: '/dashboard',
    meta: {
      key: 'Dashboard',
      name: i18n.t('dashboard'),
      icon: 'dashboard',
      permission: 'dashboard*',
    },
    component: lazy(() => import('@/views/Dashboard'))
  },
  {
    path: '/data',
    component: lazy(() => import('@/views/App')),
    meta: {
      key: 'otterData',
      name: i18n.t('data'),
      container: 'otterData',
      icon: 'data',
      permission: 'home',
    },
    children: [{
      path: '/data/lake',
      component: lazy(() => import('@/views/App')),
      meta: {
        key: 'otterDataLake',
        name: i18n.t('dataLake'),
        container: 'otterData',
        icon: 'data',
        permission: 'dataLake*',
      }
    }, {
      path: '/data/set',
      component: lazy(() => import('@/views/App')),
      meta: {
        key: 'otterDataSet',
        name: i18n.t('dataSet'),
        container: 'otterData',
        icon: 'data',
        permission: 'dataSet*',
      }
    }, {
      path: '/data/remark',
      component: lazy(() => import('@/views/App')),
      meta: {
        key: 'otterDataRemark',
        name: i18n.t('dataTask'),
        container: 'otterData',
        icon: 'data',
        permission: 'dataRemark*',
      }
    }]
  }
]

export default routes

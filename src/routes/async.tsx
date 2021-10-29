/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 16:12:45
 * @LastEditTime: 2021-10-29 18:15:42
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
    component: lazy(() => import('@/views/Dashboard')),
  },
  {
    path: '/data',
    component: lazy(() => import('@/views/App')),
    meta: {
      key: 'otterData',
      container: 'otterData',
      name: '数据',
      icon: 'data',
      permission: 'home',
    },
    children: [{
      path: '/data/lake/index',
      component: lazy(() => import('@/views/App')),
      meta: {
        key: 'otterDataLake',
        container: 'otterData',
        name: '数据湖',
        icon: 'data',
        permission: 'dataLake*',
      }
    }, {
      path: '/data/set/index',
      component: lazy(() => import('@/views/App')),
      meta: {
        key: 'otterDataSet',
        container: 'otterData',
        name: '数据集',
        icon: 'data',
        permission: 'dataSet*',
      }
    }, {
      path: '/data/remark/index',
      component: lazy(() => import('@/views/App')),
      meta: {
        key: 'otterDataRemark',
        container: 'otterData',
        name: '标注任务',
        icon: 'data',
        permission: 'dataRemark*',
      }
    }]
  }
]

export default routes

/*
 * @Author: D.Y.M
 * @Date: 2021-10-26 14:27:41
 * @LastEditTime: 2021-11-12 08:59:35
 * @FilePath: /otter/src/views/Dashboard/index.tsx
 * @Description:
 */
import { Component } from 'react'

import { ContentLayout } from 'otter-pro'

import { RouteDecorator } from '@/decorators'

@RouteDecorator()
class Dashboard extends Component {
  render() {
    return (
      <ContentLayout>
        dashboard
      </ContentLayout>
    )
  }
}
export default Dashboard

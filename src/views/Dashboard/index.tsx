/*
 * @Author: D.Y.M
 * @Date: 2021-10-26 14:27:41
 * @LastEditTime: 2021-11-04 15:20:57
 * @FilePath: /otter/src/views/Dashboard/index.tsx
 * @Description:
 */
import { Component, Fragment } from 'react'

import { ContentLayout } from 'otter-pro'

import { RouteDecorator } from '@/decorators'

@RouteDecorator()
class Dashboard extends Component {
  render() {
    return (
      <ContentLayout>
        <Fragment key="main">dashboard</Fragment>
      </ContentLayout>
    )
  }
}
export default Dashboard

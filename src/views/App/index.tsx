/*
 * @Author: D.Y
 * @Date: 2021-04-28 10:16:50
 * @LastEditTime: 2021-10-26 19:50:09
 * @LastEditors: Please set LastEditors
 * @FilePath: /otter/src/views/App/index.tsx
 * @Description:
 */
import { Component } from 'react'

type State = unknown
class AppView extends Component<any, State> {
  containers = ['otter', 'otterData', 'otterExperiment', 'otterModel', 'otterTest', 'otterPublish']
  componentDidMount() {
    const { route } = this.props
    if (route.meta && route.meta.redirect) {
      this.props.history.push(route.meta.redirect)
      this.containers.map((id: string) => {
        if (id === route.meta.key) {
          document.getElementById(id).className = route.meta.key === 'otter' ? 'flex-1' : 'app-wrap'
        } else {
          document.getElementById(id).className = 'flex-1 hidden'
        }
      })
    }
  }
  componentWillUnmount() {
    const { route } = this.props
    if (route.meta) {
      this.containers.map((id: string) => {
        if (id === 'otter') {
          document.getElementById(id).className = 'flex-1'
        } else {
          document.getElementById(id).className = 'app-wrap hidden'
        }
      })
    }
  }
  render() {
    return null
  }
}
export default AppView

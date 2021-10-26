/*
 * @Author: D.Y
 * @Date: 2021-03-29 16:11:49
 * @LastEditTime: 2021-10-26 09:55:38
 * @LastEditors: Please set LastEditors
 * @FilePath: /otter/src/register.ts
 * @Description:
 */
import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'otterData',
    entry: '//localhost:10000',
    container: '#otterData',
    activeRule: '/data',
  },
])
// eslint-disable-next-line no-debugger
start({
  sandbox: { experimentalStyleIsolation: true },
})
// setDefaultMountApp('/app/pherusa')

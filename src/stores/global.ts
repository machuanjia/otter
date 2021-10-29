/*
 * @Author: D.Y.M
 * @Date: 2021-10-29 15:03:27
 * @LastEditTime: 2021-10-29 16:04:19
 * @FilePath: /otter/src/stores/global.ts
 * @Description:
 */
import { initGlobalState } from 'qiankun'

import type { MicroAppStateActions } from 'qiankun'

const appState = {}
const globalActions: MicroAppStateActions = initGlobalState(appState)

globalActions.onGlobalStateChange((state, prev) => {
  console.log('main:', state, prev)
})
// globalActions.setGlobalState({
//   token: '121323213123123123',
// })
// globalActions.offGlobalStateChange();
export default globalActions

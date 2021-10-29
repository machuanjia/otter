/*
 * @Author: D.Y.M
 * @Date: 2021-10-25 14:38:42
 * @LastEditTime: 2021-10-29 18:57:59
 * @FilePath: /otter/src/stores/app/app.service.ts
 * @Description:
 */

import { createAsyncThunk } from '@reduxjs/toolkit'

import { getUserInfo, signIn } from '@/apis'
import { getPermissionsRouters } from '@/routes'
import asyncRoutes from '@/routes/async'

import globalActions from '../global'

const AppService = {
  getInfo: createAsyncThunk('app/fetchInfo', async () => {
    const data: any = await getUserInfo()
    const routes = getPermissionsRouters(asyncRoutes, data.permissions)
    return {...data,routes}
  }),
  signIn : createAsyncThunk('app/signIn', async () => {
    const token = await signIn()
    globalActions.setGlobalState({
      token
    })
    return token
  }),
}
export default AppService

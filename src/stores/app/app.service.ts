/*
 * @Author: D.Y.M
 * @Date: 2021-10-25 14:38:42
 * @LastEditTime: 2021-10-29 18:06:46
 * @FilePath: /otter/src/stores/app/app.service.ts
 * @Description:
 */

import { createAsyncThunk } from '@reduxjs/toolkit'

import { getUserInfo, signIn } from '@/apis'

import globalActions from '../global'

const AppService = {
  getInfo: createAsyncThunk('app/fetchInfo', async () => {
    return await getUserInfo()
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

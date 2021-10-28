/*
 * @Author: D.Y.M
 * @Date: 2021-10-25 14:38:42
 * @LastEditTime: 2021-10-28 10:59:13
 * @FilePath: /otter/src/stores/app/app.service.ts
 * @Description:
 */

import { createAsyncThunk } from '@reduxjs/toolkit'

import { getUserInfo } from '@/apis'

const AppService = {
  getInfo: createAsyncThunk('app/fetchInfo', async () => {
    return await getUserInfo()
  }),
}
export default AppService

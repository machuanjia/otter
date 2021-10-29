/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 19:09:37
 * @LastEditTime: 2021-10-29 18:03:57
 * @FilePath: /otter/src/stores/app/index.ts
 * @Description:
 */

import { createSlice } from '@reduxjs/toolkit'
import { STATUS } from 'otter-pro'

import type { IRoute } from '@/models'

import AppService from './app.service'

import type { RootState } from '../store'

export interface AppState {
  value: number
  token: string
  permissions: string[]
  status: STATUS.IDLE | STATUS.LOADING | STATUS.FAILED
  signInStatus: STATUS.IDLE | STATUS.LOADING | STATUS.FAILED
  routes: IRoute[]
  isProjectVisible: boolean
  isTeamVisible: boolean
}

const initialState: AppState = {
  value: 0,
  token: '',
  permissions: [],
  status: STATUS.LOADING,
  signInStatus: STATUS.LOADING,
  routes: [],
  isProjectVisible: false,
  isTeamVisible: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setRoutes: (state, action) => {
      state.routes = action.payload
    },
    setProjectVisible: (state, action) => {
      state.isProjectVisible = action.payload
    },
    setTeamVisible: (state, action) => {
      state.isTeamVisible = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AppService.getInfo.pending, (state) => {
        state.status = STATUS.LOADING
      })
      .addCase(AppService.getInfo.fulfilled, (state, action) => {
        // @ts-ignore
        state.permissions = action.payload.permissions
        // state.permissionRoutes = action.payload.permissionRoutes
        // state.routes = action.payload.routes
        state.status = STATUS.IDLE
      })
      .addCase(AppService.signIn.pending,(state)=>{
        state.signInStatus = STATUS.LOADING
      })
      .addCase(AppService.signIn.fulfilled,(state,action)=>{
        // @ts-ignore
        state.token = action.payload
        state.signInStatus = STATUS.IDLE
      })
  },
})
export const { setRoutes, setProjectVisible, setTeamVisible } = appSlice.actions
export const selectAppToken = (state: RootState) => state.app.token
export const selectAppPermissions = (state: RootState) => state.app.permissions
export const selectAppRoutes = (state: RootState) => state.app.routes
export const selectAppStatus = (state: RootState) => state.app.status
export const selectAppProjectVisible = (state: RootState) => state.app.isProjectVisible
export const selectAppTeamVisible = (state: RootState) => state.app.isTeamVisible
export default appSlice.reducer

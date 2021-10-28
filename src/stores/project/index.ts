/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 19:09:37
 * @LastEditTime: 2021-10-28 11:05:50
 * @FilePath: /otter/src/stores/project/index.ts
 * @Description:
 */

import { createSlice } from '@reduxjs/toolkit'
import { STATUS } from 'otter-pro'

import type { IProject } from '@/models'

import ProjectService from './project.service'

import type { RootState } from '../store'

export interface ProjectState {
  status: STATUS.IDLE | STATUS.LOADING | STATUS.FAILED
  projects: IProject[]
}

const initialState: ProjectState = {
  status: STATUS.LOADING,
  projects: [],
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(ProjectService.getProjects.pending, (state) => {
        state.status = STATUS.LOADING
      })
      .addCase(ProjectService.getProjects.fulfilled, (state, action) => {
        // @ts-ignore
        state.projects = action.payload
        state.status = STATUS.IDLE
      })
  },
})
export const { } = projectSlice.actions
export const selectProjectStatus = (state: RootState) => state.project.status
export const selectProjects = (state: RootState) => state.project.projects
export default projectSlice.reducer

/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 19:09:37
 * @LastEditTime: 2021-10-28 11:39:53
 * @FilePath: /otter/src/stores/team/index.ts
 * @Description:
 */

import { createSlice } from '@reduxjs/toolkit'
import { STATUS } from 'otter-pro'

import type { ITeam } from '@/models'

import TeamService from './team.service'

import type { RootState } from '../store'

export interface TeamState {
  status: STATUS.IDLE | STATUS.LOADING | STATUS.FAILED
  teams: ITeam[]
}

const initialState: TeamState = {
  status: STATUS.LOADING,
  teams: [],
}

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(TeamService.getTeams.pending, (state) => {
        state.status = STATUS.LOADING
      })
      .addCase(TeamService.getTeams.fulfilled, (state, action) => {
        // @ts-ignore
        state.teams = action.payload
        state.status = STATUS.IDLE
      })
  },
})
export const { } = teamSlice.actions
export const selectTeamStatus = (state: RootState) => state.team.status
export const selectTeams = (state: RootState) => state.team.teams
export default teamSlice.reducer

/*
 * @Author: D.Y.M
 * @Date: 2021-10-28 10:56:26
 * @LastEditTime: 2021-10-28 11:36:54
 * @FilePath: /otter/src/stores/team/team.service.ts
 * @Description: 
 */
import { createAsyncThunk } from '@reduxjs/toolkit'

import { getTeams } from '@/apis'

const TeamService = {
  getTeams: createAsyncThunk('team/getTeams', async () => {
    return await getTeams()
  }),
}
export default TeamService
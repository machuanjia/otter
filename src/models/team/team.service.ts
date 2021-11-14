/*
 * @Author: D.Y.M
 * @Date: 2021-11-14 15:24:41
 * @LastEditTime: 2021-11-14 15:39:55
 * @FilePath: /otter/src/models/team/team.service.ts
 * @Description: 
 */
import { getTeams } from '@/apis'

export const useTeamService = () => {
  const getList = async (params={}) => {
    return await getTeams(params)
  }
  return [getList]
}

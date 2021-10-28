/*
 * @Author: D.Y.M
 * @Date: 2021-10-28 11:36:08
 * @LastEditTime: 2021-10-28 11:36:08
 * @FilePath: /otter/src/apis/team.ts
 * @Description: 
 */
import { request } from '@/utils'
/**
 * @description: 获取用团队列表
 * @param {*} params
 * @return {*}
 */
export const getTeams = (params = {}) => {
  return request({
    url: '/teams',
    method: 'get',
    params,
  })
}

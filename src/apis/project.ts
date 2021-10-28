/*
 * @Author: D.Y.M
 * @Date: 2021-10-28 10:56:48
 * @LastEditTime: 2021-10-28 10:58:11
 * @FilePath: /otter/src/apis/project.ts
 * @Description:
 */
import { request } from '@/utils'
/**
 * @description: 获取用项目列表
 * @param {*} params
 * @return {*}
 */
export const getProjects = (params = {}) => {
  return request({
    url: '/projects',
    method: 'get',
    params,
  })
}

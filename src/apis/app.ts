/*
 * @Author: D.Y.M
 * @Date: 2021-10-25 14:57:16
 * @LastEditTime: 2021-10-29 15:56:25
 * @FilePath: /otter/src/apis/app.ts
 * @Description:
 */
import { request } from '@/utils'

/**
 * @description: 登录获取token
 * @param {*} params
 * @return {*}
 */
export const signIn = (params = {}) => {
  return request({
    url: '/signIn',
    method: 'get',
    params,
  })
}

/**
 * @description: 获取用户信息，权限
 * @param {*} params
 * @return {*}
 */
export const getUserInfo = (params = {}) => {
  return request({
    url: '/user/info',
    method: 'get',
    params,
  })
}

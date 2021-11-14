/*
 * @Author: D.Y.M
 * @Date: 2021-11-14 15:24:41
 * @LastEditTime: 2021-11-14 15:59:53
 * @FilePath: /otter/src/models/app/app.service.ts
 * @Description: 
 */
import { getUserInfo, signIn } from '@/apis'

export const useAppService = () => {
  const getInfo = async (params={}) => {
    return await getUserInfo(params)
  }
  const login = async ()=>{
    return await signIn()
  }
  return [getInfo,login]
}

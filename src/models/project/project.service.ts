/*
 * @Author: D.Y.M
 * @Date: 2021-11-14 15:24:41
 * @LastEditTime: 2021-11-14 15:36:05
 * @FilePath: /otter/src/models/project/project.service.ts
 * @Description: 
 */
import { getProjects } from '@/apis'

export const useProjectService = () => {
  const getList = async (params={}) => {
    return await getProjects(params)
  }
  return [getList]
}

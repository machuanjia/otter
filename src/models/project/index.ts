/*
 * @Author: D.Y.M
 * @Date: 2021-11-14 11:58:41
 * @LastEditTime: 2021-11-14 15:48:23
 * @Description:
 */
import { useState } from 'react'

import { createModel } from 'hox'

import { useProjectService } from './project.service'

function useProject() {
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState(null)
  const [isProjectVisible, setIsProjectVisible] = useState(false)

  const [getList] = useProjectService()

  const getProjects = async (params = {}) => {
    const data = await getList(params)
    setList(data)
    setLoading(false)
  }

  return {
    isProjectVisible, 
    setIsProjectVisible,
    list,
    setList,
    loading,
    setLoading,
    getProjects,
  }
}

export default createModel(useProject)

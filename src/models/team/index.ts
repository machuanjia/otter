/*
 * @Author: D.Y.M
 * @Date: 2021-11-14 11:58:41
 * @LastEditTime: 2021-11-14 15:45:05
 * @Description:
 */
import { useState } from 'react'

import { createModel } from 'hox'

import { useTeamService } from './team.service'

function useTeam() {
  const [isTeamVisible, setIsTeamVisible] = useState(false)
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState(null)
  const [getList] = useTeamService()

  const getTeams = async (params = {}) => {
    const data = await getList(params)
    setList(data)
    setLoading(false)
  }

  return {
    isTeamVisible,
    setIsTeamVisible,
    list,
    setList,
    loading,
    setLoading,
    getTeams,
  }
}

export default createModel(useTeam)

/*
 * @Author: D.Y.M
 * @Date: 2021-10-28 10:56:26
 * @LastEditTime: 2021-10-28 10:59:25
 * @FilePath: /otter/src/stores/project/project.service.ts
 * @Description: 
 */
import { createAsyncThunk } from '@reduxjs/toolkit'

import { getProjects } from '@/apis'

const ProjectService = {
    getProjects: createAsyncThunk('project/getProjects', async () => {
    return await getProjects()
  }),
}
export default ProjectService
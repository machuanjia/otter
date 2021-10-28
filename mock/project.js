/*
 * @Author: D.Y.M
 * @Date: 2021-10-28 11:22:34
 * @LastEditTime: 2021-10-28 11:35:09
 * @FilePath: /otter/mock/project.js
 * @Description: 
 */
const proxy = {
    'GET /api/v1/projects': {
      code:200,
      data:[{
        id:'1',
        name:'紫金矿业',
        status: 1,
        description:'卓越、有爱'
      },{
        id:'2',
        name:'中国银行',
        status: 1,
        description:'卓越、有爱'
      },{
        id:'3',
        name:'上海一汽',
        status: 1,
        description:'卓越、有爱'
      }]
    }
  }
  module.exports = proxy;
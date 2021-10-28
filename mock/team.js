/*
 * @Author: D.Y.M
 * @Date: 2021-10-28 11:31:15
 * @LastEditTime: 2021-10-28 11:34:53
 * @FilePath: /otter/mock/team.js
 * @Description: 
 */
const proxy = {
    'GET /api/v1/teams': {
      code: 200,
      data: [{
        id:'1',
        name:'来也科技',
        status: 1,
        description:'卓越、有爱'
      },{
        id:'2',
        name:'中国移动',
        status: 1,
        description:'更快、更强'
      }]
    },
  }
  module.exports = proxy;
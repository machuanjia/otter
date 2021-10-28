/*
 * @Author: D.Y.M
 * @Date: 2021-10-28 11:31:15
 * @LastEditTime: 2021-10-28 11:34:57
 * @FilePath: /otter/mock/app.js
 * @Description: 
 */
const proxy = {
    'GET /api/v1/user/info': {
      code: 200,
      data: {
        uid: '1232131231',
        name: 'zs',
        username: 'kenny',
        sex: 6,
        status: 1,
        permissions:['counter*','counter*.counter','home','dashboard*','dataLake*', 'dataSet*', 'dataRemark*']
      }
    },
  }
  module.exports = proxy;
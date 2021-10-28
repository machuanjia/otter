/*
 * @Author: D.Y.M
 * @Date: 2021-10-25 15:10:01
 * @LastEditTime: 2021-10-28 11:15:06
 * @FilePath: /otter/mock/index.js
 * @Description: 
 */
const proxy = {
  // =====================
  'GET /api/v1/user/info': {
    code: 200,
    data: {
      uid: '1232131231',
      name: 'zs',
      username: 'kenny',
      sex: 6,
      permissions:['counter*','counter*.counter','home','dashboard*','dataLake*', 'dataSet*', 'dataRemark*']
    }
  },
  'GET /api/v1/projects': {
    code:200,
    data:[{
      id:'1',
      name:'紫金矿业',
    },{
      id:'2',
      name:'中国银行',
    },{
      id:'3',
      name:'上海一汽',
    }]
  }
}
module.exports = proxy;
/*
 * @Author: D.Y.M
 * @Date: 2021-10-25 15:10:01
 * @LastEditTime: 2021-11-15 11:28:21
 * @FilePath: /otter/mock/index.js
 * @Description: 
 */
const proxy = {
  ...require('./app'),
  ...require('./project'),
  ...require('./team'),
  ...require('./set'),
  ...require('./remark')
}
module.exports = proxy;
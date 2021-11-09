/*
 * @Author: D.Y.M
 * @Date: 2021-10-25 15:10:01
 * @LastEditTime: 2021-11-08 11:04:59
 * @FilePath: /otter/mock/index.js
 * @Description: 
 */
const proxy = {
  ...require('./app'),
  ...require('./project'),
  ...require('./team'),
  ...require('./set')
}
module.exports = proxy;
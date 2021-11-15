/*
 * @Author: D.Y.M
 * @Date: 2021-11-15 09:46:39
 * @LastEditTime: 2021-11-15 11:28:10
 * @FilePath: /otter/mock/remark.js
 * @Description: 
 */
const proxy = {
    'GET /api/v1/remarks': {
      code: 200,
      data: {
        total: 200,
        page_size: 20,
        page_index: 1,
        value: [
          {
            id: '1',
            name: '任务一',
            status: 1,
            description: '这个数据集是将身份证数据集打印后手动拍照构造',
          },
          {
            id: '2',
            name: '身份证拍摄扫描2',
            status: 1,
            description: '这个数据集是将身份证数据集打印后手动拍照构造',
          },
          {
            id: '3',
            name: '身份证拍摄扫描3',
            status: 1,
            description: '这个数据集是将身份证数据集打印后手动拍照构造',
          },{
            id: '4',
            name: '身份证拍摄扫描3',
            status: 1,
            description: '这个数据集是将身份证数据集打印后手动拍照构造',
          },{
            id: '5',
            name: '身份证拍摄扫描3',
            status: 1,
            description: '这个数据集是将身份证数据集打印后手动拍照构造',
          },{
            id: '6',
            name: '身份证拍摄扫描3',
            status: 1,
            description: '这个数据集是将身份证数据集打印后手动拍照构造',
          },{
            id: '7',
            name: '身份证拍摄扫描3',
            status: 1,
            description: '这个数据集是将身份证数据集打印后手动拍照构造',
          },{
            id: '8',
            name: '身份证拍摄扫描3',
            status: 1,
            description: '这个数据集是将身份证数据集打印后手动拍照构造',
          },
        ],
      },
    },
    'GET /api/v1/remarks/:id': {
      code: 200,
      data: {
        id: '11',
        name: '身份证拍摄扫描11',
        status: 1,
        description: '这个数据集是将身份证数据集打印后手动拍照构造',
      }
    },
  }
  module.exports = proxy
/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 16:43:46
 * @LastEditTime: 2021-11-14 15:42:26
 * @FilePath: /otter/src/index.tsx
 * @Description:
 */
import React from 'react'

import { ConfigProvider } from 'antd'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { getAntdLocal } from '@/i18n'
import '@/styles/index.less'

import App from './App'
import reportWebVitals from './reportWebVitals'
import './register'

ReactDOM.render(
    <ConfigProvider locale={getAntdLocal()} componentSize="middle">
      <Router>
        <App />
      </Router>
    </ConfigProvider>
  ,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

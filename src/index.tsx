/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 16:43:46
 * @LastEditTime: 2021-10-26 09:15:11
 * @FilePath: /otter/src/index.tsx
 * @Description:
 */
import React from 'react'

import { ConfigProvider } from 'antd'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { getAntdLocal } from '@/i18n'
import '@/styles/index.less'

import App from './App'
import reportWebVitals from './reportWebVitals'
import { store } from './stores'
import './register'

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={getAntdLocal()} componentSize="middle">
      <Router>
        <App />
      </Router>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 15:09:45
 * @LastEditTime: 2021-10-29 18:08:35
 * @FilePath: /otter/src/views/Login/index.tsx
 * @Description:
 */
import { useEffect } from 'react'

import { Button } from 'antd'
import { useHistory } from 'react-router-dom'

import { selectAppToken, useAppDispatch, useAppSelector } from '@/stores'
import AppService from '@/stores/app/app.service'
const Login = () => {
  const token = useAppSelector(selectAppToken)
  
  const dispatch = useAppDispatch()
  const history = useHistory()
  useEffect(() => {
    if(token){
      history.push('/dashboard')
    }
  }, [token])
  const handleLogin = () => {
    dispatch(AppService.signIn())
  }
  return (
    <div>
      <Button onClick={handleLogin}>login</Button>
    </div>
  )
}
export default Login

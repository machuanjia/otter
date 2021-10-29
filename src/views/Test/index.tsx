/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 15:09:45
 * @LastEditTime: 2021-10-29 16:17:00
 * @FilePath: /otter/src/views/Test/index.tsx
 * @Description:
 */
import { Button } from 'antd'

import { selectAppToken, useAppDispatch, useAppSelector } from '@/stores'
import AppService from '@/stores/app/app.service'
const Login = (props) => {
  const token = useAppSelector(selectAppToken)
  const dispatch = useAppDispatch()
  if(token){
    props.history.push('/')
  }
  const handleLogin = () => {
    dispatch(AppService.signIn())
  }
  return (
    <div>
      <Button onClick={handleLogin}>lo222gin</Button>
    </div>
  )
}
export default Login

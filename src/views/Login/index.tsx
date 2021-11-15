/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 15:09:45
 * @LastEditTime: 2021-11-15 08:58:42
 * @FilePath: /otter/src/views/Login/index.tsx
 * @Description:
 */
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

const Login = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Button>login{t('home')}</Button>
    </div>
  )
}
export default Login

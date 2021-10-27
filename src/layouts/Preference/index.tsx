/*
 * @Author: D.Y.M
 * @Date: 2021-10-21 16:00:25
 * @LastEditTime: 2021-10-26 20:16:05
 * @FilePath: /otter/src/layouts/Preference/index.tsx
 * @Description:
 */
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Popover, Menu } from 'antd'

import styles from './index.module.less'

const Content = () => {
  return <section>
    <header >macj</header>
    <Menu>
      <Menu.Item key="5">Option 5</Menu.Item>
      <Menu.Item key="6">Option 6</Menu.Item>
    </Menu>
    <footer >logout</footer>
  </section>
}

const Preference = () => {
  return (
    <div className=" w-14 h-14 flex flex-col items-center justify-center border-t border-solid border-divider">
      <Popover placement="rightBottom" title={null} content={<Content />} trigger="click">
        <Avatar
          className={`${styles.preference} cursor-pointer opacity-60 hover:opacity-100`}
          icon={<UserOutlined />}
        />
      </Popover>
    </div>
  )
}

export default Preference

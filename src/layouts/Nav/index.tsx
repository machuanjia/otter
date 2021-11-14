/*
 * @Author: D.Y.M
 * @Date: 2021-10-21 17:06:46
 * @LastEditTime: 2021-11-14 15:48:42
 * @FilePath: /otter/src/layouts/Nav/index.tsx
 * @Description:
 */
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

import { useAppModel, useProjectModel } from '@/models'

import icons from '../../icons'
import styles from './index.module.less'

const { SubMenu } = Menu
const Nav = () => {
  const { routes } = useAppModel()
  const { setIsProjectVisible } = useProjectModel()
  const getMenu = (menus) => {
    if (menus && menus.length > 0) {
      return menus.map((item) => {
        if (item.meta.isHidden) {
          return null
        }
        if (item.children && item.children.length > 0) {
          return (
            <SubMenu
              key={item.meta.key}
              title={
                <>
                  {icons[item.meta.icon]}
                  <span className={styles['nav-text']}>{item.meta.name}</span>
                </>
              }
            >
              {getMenu(item.children)}
            </SubMenu>
          )
        }
        return (
          <Menu.Item key={item.meta.key} title={item.meta.name}>
            <Link to={item.path} className=" flex items-center">
              {icons[item.meta.icon]}
              <span className={styles['nav-text']}>{item.meta.name}</span>
            </Link>
          </Menu.Item>
        )
      })
    }
    return []
  }
  const selectNav = () => {
    setIsProjectVisible(false)
  }
  return (
    <div>
      <Menu inlineCollapsed={true} mode="inline" className={styles.nav} onClick={selectNav}>
        {getMenu(routes)}
      </Menu>
    </div>
  )
}
export default Nav

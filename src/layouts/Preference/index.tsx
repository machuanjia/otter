/*
 * @Author: D.Y.M
 * @Date: 2021-10-21 16:00:25
 * @LastEditTime: 2021-10-28 10:49:25
 * @FilePath: /otter/src/layouts/Preference/index.tsx
 * @Description:
 */

import { CloseOutlined, UserOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Avatar, Popover, Drawer } from 'antd'

import { useAppDispatch, useAppSelector } from '@/stores'
import { selectTeamVisible, setTeamVisible } from '@/stores/app'

import styles from './index.module.less'
import { Content } from './PreferencePop'

const Preference = () => {
  const isVisible = useAppSelector(selectTeamVisible)
  const dispatch = useAppDispatch()
  const onClose = () => {
    dispatch(setTeamVisible(false))
  }
  const teamSelect = () => {
    dispatch(setTeamVisible(true))
  }

  return (
    <div
      className=" w-14 h-14 flex flex-col items-center justify-center border-t border-solid border-divider"
    >
      <Popover
        placement="rightBottom"
        title={null}
        content={<Content teamAction={teamSelect} />}
        overlayClassName={styles['avatar-pop']}
      >
        <Avatar
          className={`${styles.preference} cursor-pointer opacity-60 hover:opacity-100`}
          icon={<UserOutlined />}
        />
      </Popover>
      <Drawer
        title={null}
        placement="left"
        closable={false}
        width={260}
        onClose={onClose}
        visible={isVisible}
        mask={false}
        className="project-wrap"
      >
        <section className=" h-full flex flex-col">
          <header className="border-b border-solid border-divider flex flex-row items-center p-2 pl-4 pr-4">
            <div className=" flex-1 flex-nowrap flex items-center">
              <Avatar>U</Avatar>
              <span className="ml-2 text-secondary">默认团队</span>
            </div>
            <div className=" w-6 h-6 hover:bg-hover flex justify-center items-center">
              {' '}
              <CloseOutlined
                onClick={() => {
                  dispatch(setTeamVisible(false))
                }}
                className="text-secondary hover:text-primary cursor-pointer"
              />
            </div>
          </header>
          <div className=" flex-1" />
          <footer className="border-t border-solid border-divider p-2 flex justify-center items-center text-secondary cursor-pointer hover:text-primary">
            <PlusCircleOutlined className=" mr-1" /> 新建团队
          </footer>
        </section>
      </Drawer>
    </div>
  )
}

export default Preference

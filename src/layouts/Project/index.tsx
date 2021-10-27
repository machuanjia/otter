/*
 * @Author: D.Y.M
 * @Date: 2021-10-21 15:09:49
 * @LastEditTime: 2021-10-27 10:35:53
 * @FilePath: /otter/src/layouts/Project/index.tsx
 * @Description:
 */

import { CloseOutlined, PlusCircleOutlined, ProjectOutlined } from '@ant-design/icons'
import { Avatar, Drawer } from 'antd'

import { useAppDispatch, useAppSelector } from '@/stores'
import { selectProjectVisible, setProjectVisible } from '@/stores/app'

import styles from './index.module.less'

const Project = () => {
  const isVisible = useAppSelector(selectProjectVisible)
  const dispatch = useAppDispatch()
  const onClose = () => { }
  return (
    <>
      <div
        className="w-14 h-14 flex justify-center items-center bg-primary relative overflow-hidden opacity-90 cursor-pointer hover:opacity-100"
        onClick={() => {
          dispatch(setProjectVisible(true))
        }}
      >
        <Avatar className={styles.avatar} icon={<ProjectOutlined />} />
        {isVisible && <div className={styles.arrow} />}
      </div>
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
          <header className="border-b border-solid border-divider flex flex-row items-center p-2">
            <div className=" flex-1 flex-nowrap flex items-center">
              <Avatar>U</Avatar>
              <span className="ml-2 text-secondary">紫金矿业</span>
            </div>
            <CloseOutlined
              onClick={() => {
                dispatch(setProjectVisible(false))
              }}
              className="text-secondary hover:text-primary cursor-pointer"
            />
          </header>
          <div className=" flex-1">
            <div>sdsdasda</div>
          </div>
          <footer className="border-t border-solid border-divider p-2 flex justify-center items-center text-secondary cursor-pointer hover:text-primary">
            <PlusCircleOutlined className=" mr-1" /> 新建项目
          </footer>
        </section>
      </Drawer>
    </>
  )
}

export default Project

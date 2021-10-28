/*
 * @Author: D.Y.M
 * @Date: 2021-10-21 15:09:49
 * @LastEditTime: 2021-10-28 11:15:35
 * @FilePath: /otter/src/layouts/Project/index.tsx
 * @Description:
 */

import { useEffect } from 'react'

import { CloseOutlined, EllipsisOutlined, PlusCircleOutlined, ProjectOutlined } from '@ant-design/icons'
import { Avatar, Drawer } from 'antd'

import { useAppDispatch, useAppSelector } from '@/stores'
import { selectProjectVisible, setProjectVisible, setTeamVisible } from '@/stores/app'
import { selectProjects } from '@/stores/project'
import ProjectService from '@/stores/project/project.service'

import styles from './index.module.less'

const List = ({ list, selected = '' }) => {
  return <>{list.map((n: any) => {
    return (
      <div className={`${styles['list-item']} ${n.id === selected ? 'bg-active' : 'bg-white'}`}>
        <div className={styles['list-text']}>{n.name}</div>
        <div className={styles['list-action']}><EllipsisOutlined /></div>
      </div>
    );
  })}</>
}

const Project = () => {
  const isVisible = useAppSelector(selectProjectVisible)
  const dispatch = useAppDispatch()
  const projects = useAppSelector(selectProjects)
  useEffect(() => {
    dispatch(ProjectService.getProjects())
  }, [])
  return (
    <>
      <div
        className="w-14 h-11 flex justify-center items-center bg-primary relative overflow-hidden opacity-90 cursor-pointer hover:opacity-100"
        onClick={() => {
          dispatch(setProjectVisible(true))
          dispatch(setTeamVisible(false))
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
        visible={isVisible}
        mask={false}
        className="project-wrap"
      >
        <section className=" h-full flex flex-col">
          <header className="border-b border-solid border-divider flex flex-row items-center p-2 pl-4 pr-4">
            <div className=" flex-1 flex-nowrap flex items-center">
              <Avatar>U</Avatar>
              <span className="ml-2 text-secondary">紫金矿业</span>
            </div>
            <div className=" w-6 h-6 hover:bg-hover flex justify-center items-center"> <CloseOutlined
              onClick={() => {
                dispatch(setProjectVisible(false))
              }}
              className="text-secondary hover:text-primary cursor-pointer"
            /></div>
          </header>
          <div className=" flex-1">
            <List list={projects} />
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

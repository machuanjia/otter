/*
 * @Author: D.Y.M
 * @Date: 2021-10-21 15:09:49
 * @LastEditTime: 2021-11-14 15:54:16
 * @FilePath: /otter/src/layouts/Project/index.tsx
 * @Description:
 */

import { useEffect } from 'react'

import {
  CloseOutlined,
  EllipsisOutlined,
  PlusCircleOutlined,
  ProjectOutlined,
} from '@ant-design/icons'
import { Avatar, Drawer } from 'antd'
import { DRAWER_SIZE, SimpleList } from 'otter-pro'

import { useProjectModel, useTeamModel } from '@/models'

import styles from './index.module.less'

const Project = () => {
  const { setIsProjectVisible, getProjects, isProjectVisible, list } = useProjectModel()
  const { setIsTeamVisible } = useTeamModel()
  useEffect(() => {
    getProjects()
  }, [])
  const handleProject = () => {}
  const SuffixItem = ({ entity }) => {
    const handleSuffix = () => {
      console.log(entity)
    }
    return <EllipsisOutlined onClick={handleSuffix} />
  }
  return (
    <>
      <div
        className="w-14 h-11 flex justify-center items-center bg-primary relative overflow-hidden opacity-90 cursor-pointer hover:opacity-100"
        onClick={() => {
          setIsProjectVisible(true)
          setIsTeamVisible(false)
        }}
      >
        <Avatar className={styles.avatar} icon={<ProjectOutlined />} />
        {isProjectVisible && <div className={styles.arrow} />}
      </div>
      <Drawer
        title={null}
        placement="left"
        closable={false}
        width={DRAWER_SIZE.SM}
        visible={isProjectVisible}
        mask={false}
        className="project-wrap"
      >
        <section className=" h-full flex flex-col">
          <header className="border-b border-solid border-divider flex flex-row items-center p-2 pl-4 pr-4">
            <div className=" flex-1 flex-nowrap flex items-center">
              <Avatar>U</Avatar>
              <span className="ml-2 text-secondary">紫金矿业</span>
            </div>
            <div className=" w-6 h-6 hover:bg-hover flex justify-center items-center">
              {' '}
              <CloseOutlined
                onClick={() => {
                  setIsProjectVisible(false)
                }}
                className="text-secondary hover:text-primary cursor-pointer"
              />
            </div>
          </header>
          <div className=" flex-1">
            <SimpleList
              list={list}
              onItemClick={handleProject}
              Suffix={SuffixItem}
              className={styles['project-list']}
            />
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

/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 16:35:49
 * @LastEditTime: 2021-11-14 15:33:41
 * @FilePath: /otter/src/layouts/Main/index.tsx
 * @Description:
 */
import React, { useEffect } from 'react'

import { GlobalLoading } from 'otter-pro'

import { useRoute } from '@/hooks'
import { useAppModel } from '@/models'
import { RouteViewer } from '@/routes'

import Bread from '../Bread'
import Help from '../Help'
import Logo from '../Logo'
import Nav from '../Nav'
import Notice from '../Notice'
import Preference from '../Preference'
import Project from '../Project'
import styles from './index.module.less'

const Main = ({ route }) => {
  const { getUserInfo, loading } = useAppModel()
  useRoute()
  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <>
      {loading ? (
        <div className=" h-full w-full flex justify-center items-center absolute">
          <GlobalLoading description="卓越、有爱" className="" />
        </div>
      ) : (
        <section className="h-screen flex flex-row">
          <nav className={`${styles['main-nav']} flex flex-col items-center`}>
            <header className=" pt-2 flex flex-col items-center">
              <Logo />
              <Project />
            </header>
            <div className=" flex-1">
              <Nav />
            </div>
            <footer className=" flex flex-col justify-center items-center">
              <Notice />
              <Help />
              <Preference />
            </footer>
          </nav>
          <div id="otter" className={`flex-1 flex flex-col`}>
            <header className=" flex flex-row items-center p-4 border-b border-solid border-divider">
              <Bread />
            </header>
            <div className={` flex-1 bg-main ${styles['main-body']}`}>
              <RouteViewer routers={route.children} />
            </div>
          </div>
        </section>
      )}
    </>
  )
}
export default Main

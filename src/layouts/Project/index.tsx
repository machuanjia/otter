/*
 * @Author: D.Y.M
 * @Date: 2021-10-21 15:09:49
 * @LastEditTime: 2021-10-26 15:16:02
 * @FilePath: /otter/src/layouts/Project/index.tsx
 * @Description:
 */
import { ProjectOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'

import styles from './index.module.less'

const Project = () => {
  return <div className="border-l-2 border-solid border-primary bg-hover w-14 flex justify-center items-center shadow-inner"><Avatar className={styles.avatar} icon={<ProjectOutlined />} /></div>
}

export default Project

/*
 * @Author: D.Y.M
 * @Date: 2021-10-27 17:46:33
 * @LastEditTime: 2021-10-28 14:16:22
 * @FilePath: /otter/src/layouts/Preference/PopContent.tsx
 * @Description:
 */

import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { SimpleList } from 'otter-pro'

export const Content = ({ teamAction }) => {
    const list = [
        {
            id: 'account',
            name: '账号设置',
        },
        {
            id: 'cost',
            name: '配额与计费',
        },
        {
            id: 'team',
            name: '切换团队',
        },
    ]
    return (
        <section className=" w-52">
            <header className=" border-b border-solid border-divider p-2 pl-4 pr-4 flex flex-row items-center">
                <div className=" mr-2">
                    <Avatar className="flex flex-col justify-center items-center" icon={<UserOutlined />} />
                </div>
                <div className=" flex-1 text-secondary">
                    <div className=" font-bold">machuanjia</div>
                    <div className=" text-xs">卓越、有爱</div>
                </div>
            </header>
            <div>
                <SimpleList list={list} onItemClick={teamAction} />
            </div>
            <footer className=" border-t border-solid border-divider p-2  pl-4 pr-4 flex items-center text-secondary cursor-pointer hover:text-primary">
                <LogoutOutlined className=" mr-1" /> 退出
            </footer>
        </section>
    )
}

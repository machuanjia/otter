/*
 * @Author: D.Y.M
 * @Date: 2021-10-27 17:46:33
 * @LastEditTime: 2021-10-28 10:38:05
 * @FilePath: /otter/src/layouts/Preference/PreferencePop.tsx
 * @Description:
 */

import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'

export const List = ({ list, selectAction }) => {
    const itemAction = (e,n)=>{
        e.stopPropagation()
        selectAction(n)
    }
    return (
        <div>
            {list.map((n: any, index) => {
                return (
                    <div
                        key={index}
                        onClick={(e) => { itemAction(e,n) }}
                        className={`text-secondary cursor-pointer hover:bg-hover p-2 pl-4 pr-4`}
                    >
                        {n.name}
                    </div>
                )
            })}
        </div>
    )
}

export const Content = ({teamAction}) => {
    const list = [
        {
            id: '1',
            name: '账号设置',
        },
        {
            id: '2',
            name: '配额与计费',
        },
        {
            id: '1',
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
                <List list={list} selectAction={teamAction} />
            </div>
            <footer className=" border-t border-solid border-divider p-2  pl-4 pr-4 flex items-center text-secondary cursor-pointer hover:text-primary">
                <LogoutOutlined className=" mr-1" /> 退出
            </footer>
        </section>
    )
}

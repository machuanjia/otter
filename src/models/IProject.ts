/*
 * @Author: D.Y.M
 * @Date: 2021-10-28 11:00:25
 * @LastEditTime: 2021-10-28 11:38:05
 * @FilePath: /otter/src/models/IProject.ts
 * @Description: 
 */

export interface IProject {
    id: string;
    name: string;
    status: number;
    description?: string;
}
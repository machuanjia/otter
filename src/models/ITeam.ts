/*
 * @Author: D.Y.M
 * @Date: 2021-10-28 11:37:43
 * @LastEditTime: 2021-10-28 11:38:18
 * @FilePath: /otter/src/models/ITeam.ts
 * @Description: 
 */
export interface ITeam {
    id: string;
    name: string;
    status: number;
    description?: string;
}
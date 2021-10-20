/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 19:07:00
 * @LastEditTime: 2021-10-19 19:07:38
 * @FilePath: /otter/src/stores/hooks.ts
 * @Description: 
 */
import { useDispatch, useSelector } from 'react-redux'

import type { RootState, AppDispatch } from './store'
import type { TypedUseSelectorHook} from 'react-redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

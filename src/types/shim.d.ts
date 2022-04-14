/*
 * @Author       : frank
 * @Date         : 2022-04-14 13:38:47
 * @LastEditTime : 2022-04-14 13:38:47
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
import { AttributifyAttributes } from 'windicss/types/jsx';

declare module 'react' {
  type HTMLAttributes<T> = AttributifyAttributes;
}
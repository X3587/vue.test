/*
 * @Author: your name
 * @Date: 2020-10-20 08:48:21
 * @LastEditTime: 2020-10-20 09:44:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pytest\src\request\api.js
 */
/**   
 * api接口统一管理
 */
import { get, post } from './http'

export const userList = p => post('newapp/index', p);
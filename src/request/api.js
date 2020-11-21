/*
 * @Author: your name
 * @Date: 2020-10-20 08:48:21
 * @LastEditTime: 2020-11-04 15:35:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pytest\src\request\api.js
 */
/**   
 * api接口统一管理
 */
import { get, post } from './http'
//列表
export const userList = p => post('newapp/index/', p);
//登录
export const login = p => post('user/login/', p);
//注册
export const register = p => post('user/register/', p);


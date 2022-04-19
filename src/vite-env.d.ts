/*
 * @Author       : frank
 * @Date         : 2022-04-14 10:50:48
 * @LastEditTime : 2022-04-19 11:24:45
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // 自定义的环境变量
  readonly VITE_IMG_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

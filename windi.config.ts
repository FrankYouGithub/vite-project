/*
 * @Author       : frank
 * @Date         : 2022-04-14 13:35:19
 * @LastEditTime : 2022-04-14 13:53:57
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
import { defineConfig } from 'vite-plugin-windicss';
export default defineConfig({
  // 开启 attributify attributify，翻译过来就是属性化，也就是说我们可以用 props 的方式去定义样式属性
  attributify: {
    prefix: 'w:',
  },
  shortcuts: {
    "flex-c": "flex justify-center items-center",
  }
})
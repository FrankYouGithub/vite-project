/*
 * @Author       : frank
 * @Date         : 2022-04-18 12:27:18
 * @LastEditTime : 2022-04-19 11:22:06
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
const start = () => {
  let count = 0;
  setInterval(() => {
    // 给主线程传值
    postMessage(++count);
  }, 2000);
};

start();

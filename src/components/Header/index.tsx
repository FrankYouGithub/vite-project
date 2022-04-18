/*
 * @Author       : frank
 * @Date         : 2022-04-14 12:34:32
 * @LastEditTime : 2022-04-18 12:28:48
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
import styles from './index.module.scss';
import { devDependencies } from "../../../package.json";
import Worker from "./example.js?worker";

const worker = new Worker();
worker.addEventListener('message', (e) => {
  console.log(e)
})

export function Header() {
  return (
    <div className="p-20px text-center">
      <h1 className="font-bold text-2xl mb-2">
        vite version: {devDependencies.vite}
      </h1>
      <button 
        // w:bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
        // w:text="sm white"
        // w:font="mono light"
        // w:p="y-2 x-4"
        // w:border="2 rounded blue-200"
      >
        Button
      </button>
    </div>
  );
}
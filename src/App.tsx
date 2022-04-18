/*
 * @Author       : frank
 * @Date         : 2022-04-14 10:50:48
 * @LastEditTime : 2022-04-18 11:35:57
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
import { useState } from 'react'
import logo from '@assets/logo.svg';
import './App.css'
import {Header} from './components/Header'
import { version } from '../package.json';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React this
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs {version}
          </a>
        </p>
      </header>
    </div>
  )
}

export default App

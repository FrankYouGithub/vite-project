/*
 * @Author       : frank
 * @Date         : 2022-04-14 10:50:48
 * @LastEditTime : 2022-05-14 17:18:48
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
import logo from '@assets/logo.svg';
import { useState } from 'react';
import { version } from '../package.json';
import './App.css';
import { Header } from './components/Header';
import SvgIcon from './components/SvgIcon';
// import Logo1 from '@assets/icons/logo-1.svg';
// import Logo2 from '@assets/icons/logo-2.svg';
// import Logo3 from '@assets/icons/logo-3.svg';
// import Logo4 from '@assets/icons/logo-4.svg';
// import Logo5 from '@assets/icons/logo-5.svg';
const icons = import.meta.globEager('./assets/icons/logo-*.svg');
const iconUrls = Object.values(icons).map(mod => {
  // 如 ../../assets/icons/logo-1.svg -> logo-1
  const fileName = mod.default.split('/').pop();
  const [svgName] = fileName.split('.');
  return svgName;
});
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      {iconUrls.map(item => (
        <SvgIcon name={item} key={item} width="50" height="50" />
      ))}
      <Header />
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="app-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React this
          </a>
          {' | '}
          <a
            className="app-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer">
            Vite Docs {version}
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;

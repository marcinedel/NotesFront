import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { StickyNav } from 'react-js-stickynav'
import UserInfoProvider from './contexts/userInfoProvider';

//Routes imports
import Login from './routes/login'
import AddNote from './routes/addNote';

const style = () => {
  return (
    <style jsx>{`
      .nav {
        transition: all 0.1s linear;
        position: fixed;
        z-index: 2000;
        padding: 20px;
        width: 100%;
        border-style: groove;
        background: white;
      }
      .scrollNav {
        transition: all 0.5s ease-in;
        z-index: 2000;
        background: #ffffff;
        width: 100%;
        border-bottom: 1px solid #dddddd;
      }
      .styl {
        padding-top: 80px;
        min-height: 100vh;
        background: #c33764; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #c33764, #1d2671); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #c33764, #1d2671); /
      }
    `}</style>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <UserInfoProvider>
      <div>
        {style()}
        <div>
        <StickyNav>
          <Navbar />
        </StickyNav>
        </div>
        <div className='styl'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
              <Route path="/addNote" element={<AddNote/>} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </UserInfoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

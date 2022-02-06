import './App.css';
import {useState, useContext} from 'react'
import { UserInfoContext } from './contexts/userInfoProvider.js';

function App() {
  const {userInfo, setUserInfo} = useContext(UserInfoContext)
  let content
  if (userInfo == undefined) {
    content = <div>Not logged</div>
  } else {
    content = <div>{userInfo.email}</div>
  }
  return (
    <div className="App">
     {content} 
    </div>
  );
}

export default App;

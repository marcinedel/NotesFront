import { UserInfoContext } from '../contexts/userInfoProvider.js';
import { useContext } from 'react';

export default function Navbar() {
    const { userInfo, setUserInfo } = useContext(UserInfoContext)
    
    const logoutHandler = (e) => {
        setUserInfo(undefined)
        localStorage.removeItem('token')
    }
    let content
    if (userInfo == undefined) {
        content = <div className='d-flex flex-row-reverse w-100'>
            <a href="/login">Login</a>
        </div>
    } else {
        content =
            <div className='d-flex flex-row-reverse w-100'>
                <div className='ms-2'>
                    <a onClick={logoutHandler} href='/login'>Logout</a>
                </div>
                <div>
                    {userInfo.email}
                </div>
            </div>
    }
    return (
        content
    )
}

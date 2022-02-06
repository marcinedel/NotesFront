import { useContext, useEffect, useState } from 'react'
import { useNavigate }  from 'react-router-dom'
import LoginBox from '../components/LoginBox.js'
import jwt_decode from 'jwt-decode';
import { UserInfoContext } from '../contexts/userInfoProvider.js';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const {userInfo, setUserInfo} = useContext(UserInfoContext)
    const loginUser = async () => {
        console.log(userInfo)
        try {
            const response = await fetch('http://localhost:3000/authentication/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email, password: password })
            })
            if (response.status == 200) {
                const responseJson = await response.json()
                const token = responseJson.token
                localStorage.setItem('token', token)
                const jwtDecoded = jwt_decode(token)
                setUserInfo(jwtDecoded)
                navigate('/')
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='container d-flex justify-content-center vh-100'>
            <div className='align-self-center' style={{ height: 'fit-content' }}>
                <LoginBox setEmail={setEmail} setPassword={setPassword} loginUser={loginUser} />
            </div>

        </div>
    )
}
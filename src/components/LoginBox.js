import React from 'react'

const LoginBox = ({ setEmail, setPassword, loginUser }) => {
    const emailInputHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordInputHandler = (e) => {
        setPassword(e.target.value)
    }

    const loginButtonHandler = (e) => {
        loginUser()
    }

    return (
        <div className='border border-primary border-4 rounded p-3 form-group'>
            <label htmlFor="email">Email: </label><br />
            <input type="text" id="email" className='form-control' onChange={emailInputHandler} /><br />
            <label htmlFor="password">Password</label><br />
            <input type="password" id="password" className='form-control' onChange={passwordInputHandler} /><br /><br />
            <button className='btn btn-primary' onClick={loginButtonHandler}>Login</button>
        </div>
    )
}

export default LoginBox
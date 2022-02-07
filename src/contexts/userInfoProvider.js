import React, { createContext, useState } from 'react'
import jwt_decode from 'jwt-decode';

export const UserInfoContext = createContext()

const UserInfoProvider = ({ children }) => {
    const token = localStorage.getItem('token')
    let jwtDecoded
    if (token) {
        jwtDecoded = jwt_decode(token)
    }
    const [userInfo, setUserInfo] = useState(jwtDecoded)

    const values = {userInfo, setUserInfo}

    return <UserInfoContext.Provider value={values}>{children}</UserInfoContext.Provider>
}

export default UserInfoProvider
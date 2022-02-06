import React, { createContext, useState } from 'react'

export const UserInfoContext = createContext()

const UserInfoProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState()

    const values = {userInfo, setUserInfo}

    return <UserInfoContext.Provider value={values}>{children}</UserInfoContext.Provider>
}

export default UserInfoProvider
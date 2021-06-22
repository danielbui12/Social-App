import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import { AuthContext } from './AuthProvider'
import { auth } from '../Constant/firebase'
const Routes = () => {
    const {user, setUser} = useContext(AuthContext)
    const [initialize, setInitialize] = useState(true)
    
    const onAuthStateChanged = (user) => {
        setUser(user)
        setInitialize(false)
    }

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged(onAuthStateChanged)

        return unsubcribe
    }, [])

    if(initialize) return null

    return(
        <NavigationContainer>
           {user? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    )
}

export default Routes
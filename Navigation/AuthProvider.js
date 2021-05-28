import React, { createContext, useState } from 'react'
import { auth } from '../Constant/firebase'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [name, setName] = useState(null)
    
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login:  (email, password) =>{ 
                    try {
                         auth.signInWithEmailAndPassword(email, password)
                    } catch(err) {
                        console.log(err)
                    }
                },
                logOut: () => {
                    try {
                        auth.signOut()
                    } catch (err) {
                        console.log(err)
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider


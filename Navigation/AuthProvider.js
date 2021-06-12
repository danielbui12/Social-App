import React, { createContext, useState } from 'react'
import { Alert } from 'react-native'
import { auth, db } from '../Constant/firebase'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [deleting, setDeleting] = useState(false)
    
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
                },
                deletePost: (postId) => {
                    Alert.alert("Warning!!!", "Do you wanna to delete this post??", 
                      [
                        {
                          text: "No",
                        },
                        { 
                          text: "Yes", 
                          onPress: () => {
                            setDeleting(true)
                            db.collection("posts")
                              .doc(postId)
                              .delete()
                              .then(() => {
                                Alert.alert("Deleted!")
                                setDeleting(false)
                              })},
                        }
                      ])
              
                  }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider


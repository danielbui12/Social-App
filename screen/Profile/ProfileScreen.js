import React, { useContext, useState, useEffect } from 'react'
import { Button, SafeAreaView, ScrollView } from 'react-native'
import { db } from '../../Constant/firebase'
import {AuthContext} from '../../Navigation/AuthProvider'
import Post from '../../Components/Post'

function ProfileScreen() {
    const [userPosts, setUserPosts] = useState([])
    const [isLoading, setIsloading] = useState(true)

    const { logOut } = useContext(AuthContext)

    // useEffect(() => {
    //     let List = []
    //     const unsubcribe = db.collection('posts').orderBy('postTime', 'desc').where().get().then(snapshot => {
    //       snapshot.forEach(doc => {
    //         const { 
    //           post, 
    //           postImg, 
    //           userId,
    //           userName,
    //           postTime,
    //           likes,
    //           comments,
    //           userImg,
    //           liked
    //         } = doc.data()
  
    //         List.push({
    //           id: doc.id,
    //           name: userName,
    //           userImg: userImg,
    //           userId: userId,
    //           caption: post,
    //           img: postImg,
    //           active: postTime,
    //           likes: likes,
    //           liked: liked,
    //           comment: comments
    //         })
    //       })
    //       setListPost(List)
    //       if(isLoading) setIsloading(false)
    //     })
  
    //     // return unsubcribe
    //   },[userPosts])

    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ScrollView>
            
            {userPosts.map(( item ) => (
                <Post key={item.id} item={item} onDeletePost={deletePost}/>
            ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen

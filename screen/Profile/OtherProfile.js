import React, { useContext, useState, useEffect, useLayoutEffect } from 'react'
import { Button, SafeAreaView, ScrollView } from 'react-native'
import { db } from '../../Constant/firebase'
import {AuthContext} from '../../Navigation/AuthProvider'
import Post from '../../Components/Post'
import LoadingProfile from '../../Components/LoadingProfile'
import Profile from '../../Components/Profile'

function OtherProfile({ navigation, route }) {
    const [userPosts, setUserPosts] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const { logOut, deletePost, deleting } = useContext(AuthContext)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: route.params.userName,
            headerTitleStyle: { fontSize: 24 }
        })
    }, [navigation])

    useEffect(() => {
        let List = []
        const unsubcribe = 
            db.collection('posts')
            .where("userId", "==", `${route.params.uid}`)
            .orderBy('postTime', 'desc')
            .get()
            .then(snapshot => {
          snapshot.forEach(doc => {
            const { 
              post, 
              postImg, 
              userId,
              userName,
              postTime,
              likes,
              comments,
              userImg,
              liked
            } = doc.data()
  
            List.push({
              id: doc.id,
              name: userName,
              userImg: userImg,
              userId: userId,
              caption: post,
              img: postImg,
              active: postTime,
              likes: likes,
              liked: liked,
              comment: comments
            })
          })
          setUserPosts(List)
          if(isLoading) setIsloading(false)
        })
    
      },[userPosts])

    if(isLoading)   return (
        <LoadingProfile />
    )

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <ScrollView>
                <Profile 
                    photoURL={route.params.photoURL}
                    name={route.params.userName}
                    uid={route.params.uid}
                    length={userPosts.length}
                />
                {userPosts.map(( item ) => (
                    <Post key={item.id} item={item} onDeletePost={deletePost}/>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default OtherProfile

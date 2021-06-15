import React, { useContext, useState, useEffect } from 'react'
import { Alert, SafeAreaView, ScrollView } from 'react-native'
import { db } from '../../Constant/firebase'
import {AuthContext} from '../../Navigation/AuthProvider'
import Post from '../../Components/Post'
import LoadingProfile from '../../Components/LoadingProfile'
import Profile from '../../Components/Profile'


function ProfileScreen({ navigation }) {
    const [userPosts, setUserPosts] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const { logOut, deletePost, user } = useContext(AuthContext)

    useEffect(() => {
        let List = []
        const unsubcribe = 
            db.collection('posts')
                .where('userId', "==", `${user.uid}`)
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
        }).catch(err => console.log(err))
  
        // return unsubcribe
      },[])

    const editProfile = () => {
        navigation.navigate("Edit")
    }

    if(isLoading)   return (
        <LoadingProfile />
    )

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
            <ScrollView>
                <Profile 
                    photoURL={user.photoURL}
                    name={user.displayName}
                    uid={user.uid}
                    editProfile={editProfile}
                    logOut={logOut}
                    length={userPosts.length}
                />
                {userPosts.map(( item ) => (
                    <Post key={item.id} item={item} onDeletePost={deletePost}/>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen

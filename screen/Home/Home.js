import React, {useEffect, useState, useContext} from 'react'
import {
    Container,
    UserStatus,
    Avartar,
    TextStatusWrapper,
    TextStatus
 } from '../styled/styledHome'
import { ScrollView, ActivityIndicator } from 'react-native'
import Post from "../../Components/Post"
import { auth, db } from '../../Constant/firebase'
import { Ionicons } from 'react-native-vector-icons'
import Loading from '../../Components/Loading'
import { AuthContext } from '../../Navigation/AuthProvider'


export default HomeScreen = ({ navigation }) => {
    const [listPost, setListPost] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const { deleting, deletePost } = useContext(AuthContext)

    useEffect(() => {
      let List = []
      const unsubcribe = db.collection('posts').orderBy('postTime', 'desc').get().then(snapshot => {
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
        setListPost(List)
        if(isLoading) setIsloading(false)
      })

      // return unsubcribe
    },[listPost])

    const onSeeProfile = () => {
      navigation.navigate("OtherProfile", {
        userName: "SADASDASD",
      })
    }

    if(isLoading) {
      return (
        <Loading />
      )
    }

    return (
      <Container>
          

        {deleting  && 
          <ActivityIndicator 
          style={{
            position: 'absolute', 
            zIndex: 2, 
            bottom: 10, 
            alignSelf: 'center'
            }} size={100} color="#3485e4"/>
        }

        <ScrollView style={{width: "90%"}} showsVerticalScrollIndicator={false}>
          <UserStatus>
            <Avartar source={{ uri: auth.currentUser.photoURL }} />
            <TextStatusWrapper onPress={() => navigation.navigate("Post")}>
              <TextStatus>What's on your mind ... ?</TextStatus>
              <Ionicons name="send" size={24} color="#346eeb"/>
          </TextStatusWrapper>
          </UserStatus>
          {
            listPost.map((item) => (
              <Post key={item.id} item={item} onDeletePost={deletePost} onSeeProfile={onSeeProfile}/>
            ))
          }
        </ScrollView>
      </Container>
    )
  };
  
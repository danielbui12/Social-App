import React, {useEffect, useState, useCallback} from 'react'
import {
    Container,
    UserStatus,
    Avartar,
    TextStatusWrapper,
    TextStatus
 } from '../styled/styledHome'
import { Alert, FlatList, ActivityIndicator } from 'react-native'
import Post from "../../Components/Post"
import { auth, db } from '../../Constant/firebase'
import { Ionicons } from 'react-native-vector-icons'

export default HomeScreen = ({ navigation }) => {
    const [listPost, setListPost] = useState([])
    const [deleting, setDeleting] = useState(false)
    const [isLoading, setIsloading] = useState(false)

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
      })

      // return unsubcribe
    },[listPost])

    const deletePost = (postId) => {
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

    return (
      <Container>
        <UserStatus>
          <Avartar source={{ uri: auth.currentUser.photoURL }} />
          <TextStatusWrapper onPress={() => navigation.navigate("Post")}>
            <TextStatus>What's on your mind ... ?</TextStatus>
            <Ionicons name="send" size={24} color="#346eeb"/>
          </TextStatusWrapper>

        </UserStatus>

        {(deleting || isLoading) && <ActivityIndicator style={{position: 'absolute', zIndex: 2, bottom: 10, alignSelf: 'center'}} size={100} color="#3485e4"/>}
        
        <FlatList
          data={listPost}
          renderItem={({ item }) => <Post item={item} onDeletePost={deletePost}/>}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          style={{flexGrow: 0, width: "90%"}}
        />
      </Container>
    )
  };
  
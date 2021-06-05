import React from 'react'
import {
    Container,
    UserStatus,
    Avartar,
    TextStatusWrapper,
    TextStatus
 } from '../styled/styledHome'
import { FlatList } from 'react-native'
import Post from "../../Components/Post"

export default HomeScreen = ({ navigation }) => {
    const User = [
      {
        id: 0,
        name: "Jenny Doe",
        active: "4 hours ago",
        caption: "Hi there !",
        img: 'none',
        liked: false,
        likes: "0",
        comment: "4"
      },
      {
        id: 1,
        name: "Martin John",
        active: "1 hours ago",
        caption: "Hi friends!",
        img: require("../images/1.jpg"),
        liked: false,
        likes: "2",
        comment: "0"
      },
      {
        id: 2,
        name: "Denis Bucu",
        active: "3 hours ago",
        caption: "Hello mother f*cker!",
        img: 'none',
        liked: true,
        likes: "0",
        comment: "0"
      },
    ];
  
    return (
      <Container>
        <UserStatus>
          <Avartar source={{uri: auth?.currentUser?.photoURL}} />
          <TextStatusWrapper onPress={() => navigation.navigate("Post")}>
            <TextStatus>What's on your mind ... ?</TextStatus>
          </TextStatusWrapper>
        </UserStatus>
        <FlatList
          data={User}
          renderItem={({ item }) => <Post item={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          style={{flexGrow: 0, width: "90%"}}
        />
      </Container>
    )
  };
  
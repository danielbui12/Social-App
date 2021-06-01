import React, { useState } from "react";
import Post from "../Components/Post";
import { FlatList, View } from "react-native";
import { 
  Avartar, 
  Container, 
  TextStatus, 
  UserStatus, 
  TextStatusWrapper, 
  StatusWrapper, 
  buttonWrapper
} from "./styled/styledComponent";
import { auth } from '../Constant/firebase'

const StoryScreen = () => {
  const [isPostStt, setIsPostStt] = useState(false)
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

  if(!isPostStt) {
    return (
        <Container>
          <UserStatus>
            <Avartar source={require('../images/default-avartar.png')} />
            <TextStatusWrapper onPress={() => setIsPostStt(true)}>
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
    );
  } else {
    return (
      <StatusWrapper>
        <buttonWrapper>
          
        </buttonWrapper>
      </StatusWrapper>
    )
  }
};

export default StoryScreen;

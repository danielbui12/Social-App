import React from "react";
import Post from "../Components/Post";
import { FlatList } from "react-native";
import { Container } from "./styled/styledComponent";

const StoryScreen = () => {
  const User = [
    {
      id: 0,
      name: "Jenny Doe",
      active: "4 hours ago",
      caption: "Hi there asdasdasdasdasdbas!",
      img: 'none',
      liked: false,
      likes: '0',
      comment: '0'
    },
    {
      id: 1,
      name: "Martin John",
      active: "1 hours ago",
      caption: "Hi friends!",
      img: require("../images/1.jpg"),
      liked: false,
      likes: '0',
      comment: '0'
    },
    {
      id: 2,
      name: "Denis Bucu",
      active: "3 hours ago",
      caption: "Hello mother f*cker!",
      img: 'none',
      liked: true,
      likes: '0',
      comment: '0'
    },
  ];

  return (
    <Container>
      <FlatList
        data={User}
        renderItem={({ item }) => <Post item={item} />}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default StoryScreen;

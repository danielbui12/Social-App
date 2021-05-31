import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  Card,
  UserActive,
  UserImg,
  UserInfo,
  UserName,
  UserText,
  Caption,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divided
} from "../screen/styled/styledComponent";

const Post = ({ item }) => {
  return (
    <Card>
      <UserInfo>
        <UserImg source={require("../images/1.jpg")} />
        <UserText>
          <UserName>{item.name}</UserName>
          <UserActive>{item.active}</UserActive>
        </UserText>
      </UserInfo>

      <Caption>{item.caption}</Caption>

      <PostImg source={item.img} />

      <InteractionWrapper>
        <Interaction active>
          <Ionicons name="heart" size={22} color={"#2e64e5"} />
          <InteractionText active>Like</InteractionText>
        </Interaction>

        <Interaction>
          <Ionicons name="md-chatbubble-outline" size={22} />
          <InteractionText>Comment</InteractionText>
        </Interaction>
      </InteractionWrapper>
    </Card>
  );
};

export default Post;

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
} from "../screen/styled/styledHome";

const Post = ({ item }) => {
  let liked = item.liked ? "heart" : "heart-outline"
  let isPostPic
  var likes = ''

  if(item.img == "none") {
    isPostPic = false
  } else {
    isPostPic = true
  }

  if(item.likes == 1) {
    likes = "1 Like"
  } else if(item.likes > 1) {
    likes = item.likes + ' Likes'
  } else {
    likes = "Like"
  }

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

      {isPostPic ? <PostImg source={item.img} /> : <Divided/>}

      <InteractionWrapper>
        <Interaction>
          <Ionicons name={liked} size={22} />
          <InteractionText>{likes}</InteractionText>
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

import React, {useContext} from "react";
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
import { AuthContext } from '../Navigation/AuthProvider'
import moment from 'moment'

const Post = ({ item, onDeletePost }) => {
  const { user } = useContext(AuthContext)

  let liked = item.liked ? "heart" : "heart-outline"
  let isPostPic
  var likes = ''

  if(item.img == null) {
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
        <UserImg source={{uri: item.userImg}} />
        <UserText>
          <UserName>{item.name}</UserName>
          
          <UserActive>{moment(item.active).fromNow()}</UserActive>
        </UserText>
      </UserInfo>

      <Caption>{item.caption}</Caption>

      {isPostPic ? <PostImg source={{uri: item.img}} /> : <Divided/>}

      <InteractionWrapper>
        <Interaction>
          <Ionicons name={liked} size={22} />
          <InteractionText>{likes}</InteractionText>
        </Interaction>

        <Interaction>
          <Ionicons name="md-chatbubble-outline" size={22} />
          <InteractionText>Comment</InteractionText>
        </Interaction>
        {user.uid == item.userId &&
          <Interaction onPress={() => onDeletePost(item.id)}>
            <Ionicons name="md-trash-bin" size={22} />
          </Interaction>
        }
      </InteractionWrapper>
    </Card>
  );
};

export default Post;

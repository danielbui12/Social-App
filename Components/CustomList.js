import React from 'react'
import {Card, 
    UserInfo, 
    UserImgWrapper, 
    UserImg, 
    TextSection,
    UserInfoText,
    UserName,
    PostTime,
    MessageText
} from '../screen/styled/styledChat'
import moment from 'moment'

const CustomList = ({chatName, time, id, enterChat}) => {
    return (
        <Card key={id} onPress={() => enterChat(id, chatName)}>
            <UserInfo>
                <UserImgWrapper>
                    <UserImg source={require('../images/default-avartar.png')} />
                </UserImgWrapper>
                <TextSection>
                    <UserInfoText>
                        <UserName>{chatName}</UserName>
                        <PostTime>{moment(time).fromNow()}</PostTime>
                    </UserInfoText>
                    <MessageText>New message !</MessageText>
                </TextSection>
            </UserInfo>
        </Card>
    )
}

export default CustomList

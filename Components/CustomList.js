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

const CustomList = ({chatName, id, enterChat}) => {
    return (
        <Card key={id} onPress={() => enterChat(id, chatName)}>
            <UserInfo>
                <UserImgWrapper>
                    <UserImg source={require('../images/default-avartar.png')} />
                </UserImgWrapper>
                <TextSection>
                    <UserInfoText>
                        <UserName>{chatName}</UserName>
                        <PostTime>4 hours ago</PostTime>
                    </UserInfoText>
                    <MessageText>Last message ....</MessageText>
                </TextSection>
            </UserInfo>
        </Card>
    )
}

export default CustomList

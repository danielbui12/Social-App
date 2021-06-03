import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { 
    Container, 
    Card, 
    UserInfo, 
    UserImgWrapper, 
    UserImg, 
    TextSection,
    UserInfoText,
    UserName,
    PostTime,
    MessageText
} from './styled/styledChat'
import { FlatList } from 'react-native'

const Stack = createStackNavigator()

let uri = require('../images/default-avartar.png')

const MessageScreen = ({ navigation }) => {
    const Message = [
        {
            id: 0,
            userName: "Jenny Doe",
            userImg: uri,
            messageTime: '4 hours ago',
            messageText: 'Hi, this is test',
        },
        {
            id: 4,
            userName: "David Guitar",
            userImg: uri,
            messageTime: '4 hours ago',
            messageText: 'Hi, this is test',
        },
        {
            id: 3,
            userName: "Bích Phương",
            userImg: uri,
            messageTime: '4 hours ago',
            messageText: 'Hi, this is test',
        },
        {
            id: 2,
            userName: "Ca sĩ Ố",
            userImg: uri,
            messageTime: '4 hours ago',
            messageText: 'Hi, this is test',
        },
        {
            id: 1,
            userName: "Augustus Flynn",
            userImg: uri,
            messageTime: '4 hours ago',
            messageText: 'Hi, this is test',
        },
    ]

    return(
        <Container>
            <FlatList 
                data={Message}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return(
                        <Card onPress={() => navigation.navigate("Chat", {userName: item.userName})}>
                            <UserInfo>
                                <UserImgWrapper>
                                    <UserImg source={item.userImg} />
                                </UserImgWrapper>
                                <TextSection>
                                    <UserInfoText>
                                        <UserName>{item.userName}</UserName>
                                        <PostTime>{item.messageTime}</PostTime>
                                    </UserInfoText>
                                    <MessageText>{item.messageText}</MessageText>
                                </TextSection>
                            </UserInfo>
                        </Card>
                    )
                }}

            />
        </Container>
    )
} 

const UserChat = () => {
    return (
        <UserName>Hello</UserName>
    )
}

function ChatScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Messages" component={MessageScreen}/>
            <Stack.Screen 
                name="Chat" 
                component={UserChat}
                options={({ route }) => ({
                    title: route.params.userName,
                    headerBackTitleVisible: false,
                })}
            />
        </Stack.Navigator>
    )
}

export default ChatScreen
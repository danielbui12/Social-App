import React, { useState, useLayoutEffect } from 'react'
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
    MessageText,
    UserImg1,
    UserStatusWrapper,
    HandlerUserMedia,
    ChatBar
} from './styled/styledChat'
import { 
    FlatList, 
    ScrollView, 
    View, 
    Text, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    Keyboard
} from 'react-native'
import {FontAwesome, Ionicons} from 'react-native-vector-icons'
import { auth, db } from '../Constant/firebase'
import firebase from 'firebase'

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

const UserChat = ({ navigation, route }) => {
    const [input, setInput] = useState(null);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Chat",
            headerBackTitleVisible: false,
            headerTitleAlign: "left",
            headerTitle: () => (
                <View style={{flexDirection: 'row', alignItems: 'center' }}>
                    <UserImg1 source={uri}/>
                    <UserStatusWrapper>
                        <UserName>{route.params.userName}</UserName>
                        <Text>Active ....</Text>
                    </UserStatusWrapper>
                </View>
            ),
            headerRight: () => (
                <HandlerUserMedia>
                    <TouchableOpacity>
                        <FontAwesome name="video-camera" size={24} color={"#346eeb"}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="call" size={24} color={"#346eeb"}/>
                    </TouchableOpacity>
                </HandlerUserMedia>
            )
        })
    }, [navigation] )

    const sendMessage = () => {
        Keyboard.dismiss()
        db.collection('chats').doc(route.params.id).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoUrl: auth.currentUser.photoURL,
        })

        setInput('')
    }

    return (
        <KeyboardAvoidingView behavior={'height'} keyboardVerticalOffset={90} style={{flex: 1}}>
            <ScrollView>{/* chat here */}</ScrollView>
            <View style={{flexDirection: "row", alignItems: 'center', padding: 16}}>
                <ChatBar 
                    value={input}
                    onChangeText={(text) => setInput(text)}
                    placeholder="Type ..."
                />
                <TouchableOpacity activeOpacity={0.7} onPress={sendMessage}>
                    <Ionicons name="send" size={24} color="#346eeb"/>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

function ChatScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Messages" component={MessageScreen}/>
            <Stack.Screen 
                name="Chat" 
                component={UserChat}
            />
        </Stack.Navigator>
    )
}

export default ChatScreen
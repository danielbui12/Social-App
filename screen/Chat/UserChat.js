import React, { useState, useLayoutEffect, useEffect } from 'react'
import {
    UserImg1,
    UserStatusWrapper,
    HandlerUserMedia,
    ChatBar,
    UserName,
    UserChatWrapper,
    UserChatText,
    User2ChatWrapper,
    User2ChatText
} from '../styled/styledChat'
import { 
    Text, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    ScrollView,
    View,
    Keyboard,
    Alert,
    FlatList
} from 'react-native'
import { Ionicons, FontAwesome } from 'react-native-vector-icons'
import { auth, db } from '../../Constant/firebase'

let uri = require('../../images/default-avartar.png')

const UserChat = ({ navigation, route }) => {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])

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
        if(input.trim().length == 0) return

        Keyboard.dismiss()
        
        db.collection('chats').add({
            timestamp: Date.now(),
            message: input,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoUrl: auth.currentUser.photoURL,
        })

        setInput('')
    }

    useEffect(() => {            
        const unsubcriber = db
          .collection('chats')
          .orderBy('timestamp')
          .onSnapshot(snapshot => {
            const data = snapshot.docs.map(doc => ({
              ...doc.data(),
              id: doc.id
            }))
          setMessages(data)
        })
        
        return unsubcriber
      }, [])

    return (
        <KeyboardAvoidingView behavior={'height'} keyboardVerticalOffset={90} style={{flex: 1}}>
            <ScrollView>
                {
                    messages.map((message, i) => (
                        message.email == auth.currentUser.email ? (
                            <UserChatWrapper key={i}>
                                 <UserChatText>{message.message}</UserChatText>
                            </UserChatWrapper>
                       ) : (
                           <User2ChatWrapper key={i}>
                               <User2ChatText>{message.message}</User2ChatText>
                           </User2ChatWrapper>
                       )
                    ))
                }
            </ScrollView>

            <View style={{flexDirection: "row", alignItems: 'center', padding: 16}}>
                <ChatBar 
                    value={input}
                    onChangeText={(text) => setInput(text)}
                    placeholder="Type ..."
                />
                <TouchableOpacity activeOpacity={0.7} onPress={sendMessage} style={{padding: 16}}>
                    <Ionicons name="send" size={24} color="#346eeb"/>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}


export default UserChat

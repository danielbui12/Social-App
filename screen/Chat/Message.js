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
    User2ChatText,
    User2Img,
    User2ChatTextWrapper
} from '../styled/styledChat'
import { 
    Text, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    ScrollView,
    View,
    Keyboard,
    Platform
} from 'react-native'
import { Ionicons, FontAwesome } from 'react-native-vector-icons'
import { auth, db } from '../../Constant/firebase'

let uri = require('../../images/default-avartar.png')

const Message = ({ navigation, route }) => {
    const  {id, userName}  = route.params
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
        
        db
            .collection('chats')
            .doc(id)
            .collection('messages')
            .add({
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
          .doc(id)
          .collection('messages')
          .orderBy('timestamp')
          .onSnapshot(snapshot => setMessages(
            snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }))
          )
        )
        
        return unsubcriber
      }, [route])

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? 'padding' :'height'} keyboardVerticalOffset={90} style={{flex: 1}}>
            <ScrollView>
                {
                    messages.map(({ id, data }) => (
                        data.email == auth.currentUser.email ? (
                            <UserChatWrapper key={id}>
                                <UserChatText>{data.message}</UserChatText>
                            </UserChatWrapper>
                       ) : (
                           <User2ChatWrapper key={id}>
                               <User2Img source={uri}/>
                               <User2ChatTextWrapper>
                                <User2ChatText>{data.message}</User2ChatText>
                               </User2ChatTextWrapper>
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


export default Message

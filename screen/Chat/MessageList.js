import React, { useLayoutEffect, useEffect, useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { Container, UserName } from '../styled/styledChat'
import { auth, db } from '../../Constant/firebase'
import { SimpleLineIcons as Icon } from 'react-native-vector-icons'
import CustomList from '../../Components/CustomList'

const MessageList = ({ navigation }) => {
    const [messageList, setMessageList] = useState([])

    useEffect(() => {
        const unsubcribe = db.collection('chats').onSnapshot(snapshot => (
            setMessageList(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))

        return unsubcribe
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleStyle: { fontSize: 22 },
            headerBackTitleVisible: false,
            headerRight: () => (
                <TouchableOpacity 
                    style={{marginRight: 16, padding: 8}}
                    onPress={() => navigation.navigate("AddChat")}
                >
                    <Icon name="pencil" size={20} color="black"/>
                </TouchableOpacity>
            )
        })
    }, [])

    const enterChat = (id, chatName) => {
        navigation.navigate("Chat", {
            id: id,
            userName: chatName
        })
    }

    return(
        <Container>
            <ScrollView>
                { 
                    messageList[0] ? messageList.map(({ id, data: { chatName, timestamp }}) => (
                        <CustomList key={id} id={id} chatName={chatName} time={timestamp} enterChat={enterChat}/>
                    )) : (
                        <View style={{alignSelf: 'center', top: 100}}>
                            <UserName>Add some new chats ?</UserName>
                        </View>
                    )
                }
            </ScrollView>
        </Container>
    )
} 

export default MessageList

import React from 'react'
import {
    UserImg1,
    UserStatusWrapper,
    HandlerUserMedia,
    ChatBar,
    UserName
} from './styled/styledChat'
import { 
    Text, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    ScrollView,
    View,
    Keyboard
} from 'react-native'
import { Ionicons, FontAwesome } from 'react-native-vector-icons'
import { auth, db } from '../../Constant/firebase'


let uri = require('../../images/default-avartar.png')

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


export default UserChat

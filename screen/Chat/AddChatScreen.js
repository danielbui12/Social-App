import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome as Icon } from 'react-native-vector-icons'
import { db } from '../../Constant/firebase'

const AddChatScreen = ({ navigation }) => {
    const [input, setInput] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new chat",
            headerTitleStyle: { fontSize: 20 },
            headerBackTitleVisible: false
        })
    },[navigation])

    const createChat = async () => {
        await db.collection("chats").add({
            chatName: input
        }).then(() => {
            navigation.goBack()
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={{marginHorizontal: 16}}>
                    <Icon name="comments" size={32}/>
                </View>
                <View style={styles.InputWrapper}>
                    <TextInput
                        placeholder="Enter a chat name"
                        value={input}
                        onChangeText={(text) => setInput(text)}
                        onSubmitEditing={createChat}
                    />
                </View>
            </View>

            <TouchableOpacity onPress={createChat} style={styles.button}>
                <Text style={styles.text}>Create a new Chat</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop: 32,
    },
    button: {
        backgroundColor: '#3986db',
        marginTop: 24,
        width: "80%",
        alignItems: 'center',
        alignSelf: 'center',
    },
    text: {
        fontSize: 16,
        color: "#fff",
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 16
    },
    row: {
        flexDirection: 'row'
    },
    InputWrapper:{ borderBottomWidth: 1, flex: 1, marginRight: 16}

})

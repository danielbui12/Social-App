import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MessageList from './MessageList'
import Message from './Message'
import AddChatScreen from './AddChatScreen'


const Stack = createStackNavigator()

function ChatScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Messages" 
                component={MessageList}
            />
            <Stack.Screen 
                name="Chat" 
                component={Message}
            />
            <Stack.Screen 
                name="AddChat" 
                component={AddChatScreen}
            />
        </Stack.Navigator>
    )
}

export default ChatScreen
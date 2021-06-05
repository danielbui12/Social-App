import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Message from './Message'
import UserChat from './UserChat'


const Stack = createStackNavigator()

function ChatScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Messages" component={Message}/>
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
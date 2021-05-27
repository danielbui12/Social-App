import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../screen/HomeScreen'

const Stack = createStackNavigator()

export default AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    )
}
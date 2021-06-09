import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './Home'
import PostScreen from './Post'

const Stack = createStackNavigator()

const StoryScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Post" component={PostScreen} options={{headerBackTitleVisible: false}}/>
    </Stack.Navigator>
  )
}


export default StoryScreen;
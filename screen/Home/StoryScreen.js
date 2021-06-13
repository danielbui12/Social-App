import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './Home'
import PostScreen from './PostScreen'
import OtherProfile from '../Profile/OtherProfile'

const Stack = createStackNavigator()

const StoryScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          headerTitleStyle: { fontWeight: "bold", fontSize: 24}
        }}
      />
      <Stack.Screen name="Post" component={PostScreen} options={{headerBackTitleVisible: false}}/>
      <Stack.Screen name="OtherProfile" component={OtherProfile} options={{headerBackTitleVisible: false}}/>
    </Stack.Navigator>
  )
}


export default StoryScreen;
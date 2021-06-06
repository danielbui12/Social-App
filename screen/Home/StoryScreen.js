import React from "react"
import { TouchableOpacity, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './Home'
import PostScreen from './Post'

const Stack = createStackNavigator()

const StoryScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen 
        name="Post" 
        component={PostScreen}
        options={{
          headerBackTitleVisible: false,
          headerRight: () => (
            <TouchableOpacity style={{width: 80, backgroundColor: "#3086fb", alignItems: 'center'}}>
              <Text style={{fontSize: 16, fontWeight: "bold", color: "#fff"}}>Post</Text>
            </TouchableOpacity>
          )
        }}
        />
    </Stack.Navigator>
  )
}


export default StoryScreen;
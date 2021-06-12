import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from './ProfileScreen'
import EditScreen from "./EditScreen"

const Stack = createStackNavigator()

const SettingScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen name="Edit" component={EditScreen} options={{headerBackTitleVisible: false}}/>
    </Stack.Navigator>
  )
}


export default SettingScreen
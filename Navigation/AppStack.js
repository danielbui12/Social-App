import * as React from 'react'
import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs' 
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
import ChatScreen from '../screen/Chat/ChatScreen'
import SettingScreen from '../screen/Profile/SettingScreen';
import StoryScreen from '../screen/Home/StoryScreen'

import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { auth, db } from '../Constant/firebase';
import { AuthContext } from './AuthProvider';

const Tab = createBottomTabNavigator()

export default function AppStack() {
  const { setUserData } = React.useContext(AuthContext)

  const getTabBarVisible = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route)
    if(routeName == "Chat" || routeName == "Post")
      return false
    return true
  }
  
  const getUser = async () => {
    await db
    .collection("users")
    .doc(auth.currentUser.uid)
    .get().then(snapshot => {
        if(snapshot.exists) {
            setUserData(snapshot.data())
        }
      })
    }

  React.useEffect(() => {
    getUser()
  }, [])

  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarVisible: getTabBarVisible(route),
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Story') {
              iconName = focused
                ? 'clock-time-two'
                : 'clock-time-two-outline';
            } else if (route.name === 'Profile') {
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
            } else if(route.name =="Chat") {
              iconName = focused
                ? 'message'
                : 'message-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#346eeb',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Story" component={StoryScreen} options={{tabBarLabel:() => null}} />
        <Tab.Screen name="Chat" component={ChatScreen}  options={{tabBarLabel:() => null}} />
        <Tab.Screen name="Profile" component={SettingScreen} options={{tabBarLabel:() => null}}  />
      </Tab.Navigator>
  );
}
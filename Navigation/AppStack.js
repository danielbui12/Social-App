import React from 'react'
import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs' 
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
import ChatScreen from '../screen/ChatScreen'
import SettingScreen from '../screen/SettingScreen';
import StoryScreen from '../screen/StoryScreen'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator()

export default function AppStack() {
  const getTabBarVisible = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route)
    if(routeName == "Chat" || routeName == "Post")
      return false
    return true
  }

  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarVisible: getTabBarVisible(route),
          tabBarIcon: ({ focused, color, size }) => {
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
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#346eeb',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Story" component={StoryScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profile" component={SettingScreen} />
      </Tab.Navigator>
  );
}
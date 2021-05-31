import React from 'react'
import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs' 
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
import ChatScreen from '../screen/ChatScreen'
import SettingScreen from '../screen/SettingScreen';

const Tab = createBottomTabNavigator()

export default function AppStack() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Chat') {
              iconName = focused
                ? 'home-variant'
                : 'home-variant-outline';
            } else if (route.name === 'Profile') {
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profile" component={SettingScreen} />
      </Tab.Navigator>
  );
}
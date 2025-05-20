import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import PostScreen from './PostScreen';
import ReelsScreen from './ReelsScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home';
              break;
            case 'Search':
              iconName = focused ? 'search' : 'search';
              break;
            case 'Post':
              iconName = focused ? 'plus-square' : 'plus-square-o';
              break;
            case 'Reels':
              iconName = focused ? 'film' : 'film';
              break;
            case 'Profile':
              iconName = focused ? 'user' : 'user-o';
              break;
            default:
              iconName = 'circle';
          }

          return <FontAwesome name={iconName} size={focused ? 28 : 24} color={color} />;
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Reels" component={ReelsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      

    </Tab.Navigator>
  );
};

export default HomeTabs;

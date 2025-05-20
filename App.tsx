import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import PostScreen from './screens/PostScreen';
import ReelsScreen from './screens/ReelsScreen';
import ProfileScreen from './screens/ProfileScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import MessagesScreen from './screens/MessageScreen';
import HomeTabs from './screens/HomeTabs';
import StoryViewScreen from './screens/StoryViewScreen';
import 'react-native-gesture-handler';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  HomeTabs: undefined;
  Notifications: undefined;
  Messages: undefined;
  StoryView: { stories: { uri: string; user: string }[]
    initialIndex: number; };
};

export type HomeTabsParamList = {
  Home: undefined;
  Search: undefined;
  Post: undefined;
  Reels: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{headerShown:false}} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen name="StoryView" component={StoryViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

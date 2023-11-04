import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import UserTypeScreen from '../screens/UserTypeScreen';
import GenderDormitoryScreen from '../screens/GenderDormScreen';
import SchoolProgram from '../screens/SchoolProgram';
import DormitoryName from '../screens/DormitoryName';
import MBTI from '../screens/MBTI';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="UserType" component={UserTypeScreen} />
        <Stack.Screen name="Gender" component={GenderDormitoryScreen} />
        <Stack.Screen name="Program" component={SchoolProgram} />
        <Stack.Screen name="Dormitory" component={DormitoryName} />
        <Stack.Screen
          name="MBTI"
          component={MBTI}
          options={{headerShown: false}}
        />
        {/* Add more screens */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

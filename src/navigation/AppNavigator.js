import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/first_part/WelcomeScreen';
import LoginScreen from '../screens/first_part/LoginScreen';
import UserTypeScreen from '../screens/first_part/UserTypeScreen';
import GenderDormitoryScreen from '../screens/first_part/GenderDormScreen';
import SchoolProgram from '../screens/first_part/SchoolProgram';
import DormitoryName from '../screens/first_part/DormitoryName';
import MBTI from '../screens/first_part/MBTI';
import {LifeSSNavigator} from './LifeSSNavigator';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="UserType"
        component={UserTypeScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Gender"
        component={GenderDormitoryScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Program"
        component={SchoolProgram}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Dormitory"
        component={DormitoryName}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="MBTI"
        component={MBTI}
        options={{headerShown: true}}
      />
      {LifeSSNavigator.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
      {/* Add more screens */}
    </Stack.Navigator>
  );
}

export default AppNavigator;

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import UserTypeScreen from './src/screens/UserTypeScreen';
import GenderDormitoryScreen from './src/screens/GenderDormScreen';
import SchoolProgram from './src/screens/SchoolProgram';
import SchoolDormitory from './src/screens/DormitoryName';
import MBTI from './src/screens/MBTI';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserType"
          component={UserTypeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Gender"
          component={GenderDormitoryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Program"
          component={SchoolProgram}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dormitory"
          component={SchoolDormitory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MBTI"
          component={MBTI}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/Components/Login';
import Register from './src/Components/Registro';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default function Navigation(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}
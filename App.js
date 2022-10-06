import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';
import Menu from './components/Menu';
import Register from './components/Register';
import Test from './utils/Test'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          />
          <Stack.Screen
          name='Register'
          component={Register}
        />
        <Stack.Screen
          name='Menu'
          component={Menu}
        />
        <Stack.Screen
          name='Test'
          component={Test}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}


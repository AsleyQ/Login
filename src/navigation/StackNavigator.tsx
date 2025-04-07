import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SplashScreen from '../screens/SplashScreen';

//Creamos el stack de navegación
const Stack= createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName= "Splash" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginScreen} 
            options={{title:'Iniciar Sesion'}}/> 

        <Stack.Screen name='Register' component={RegisterScreen}
        options={{title:'Registro'}} />

        <Stack.Screen name='Splash' component={SplashScreen}/> 

        <Stack.Screen name="Home" component={HomeScreen} 
            options={{title:'Bienvenido'}}/>
    </Stack.Navigator>
  )
}

export default StackNavigator

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import StackNavigator from './src/navigation/StackNavigator'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App
import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from '../../screens/Home'

const StackNavigator = () => {

const Stack = createNativeStackNavigator()
  return (
      <Stack.Navigator
          screenOptions={
              {
                  headerShown: false
              }
      }>
          <Stack.Screen
              name='homeScreen'
              component={Home}
          />
              
   
  </Stack.Navigator>
  )
}

export default StackNavigator
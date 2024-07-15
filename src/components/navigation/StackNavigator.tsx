import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from '../../screens/Home'
import RideRequestSreen from '../../screens/RideRequestSreen'
import { mainStackParamList } from '../../../utils/types'
import DestinationScreen from '../../screens/DestinationScreen'

const StackNavigator = () => {

const Stack = createNativeStackNavigator<mainStackParamList>()
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

        <Stack.Screen
              name='rideRequestScreen'
              component={RideRequestSreen}
          />

        <Stack.Screen
              name='destinationScreen'
              component={DestinationScreen}
          />

               
  </Stack.Navigator>
  )
}

export default StackNavigator
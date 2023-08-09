import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator,  TransitionPresets } from '@react-navigation/stack'
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen'
const RestaurantStack = createStackNavigator()
export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
    }}>
        <RestaurantStack.Screen 
            name='Restaurants'
        component={RestaurantsScreen}/>
        <RestaurantStack.Screen 
            name='RestaurantDetail'
        component={() => <Text>Restaurant Detail</Text>}/>
    </RestaurantStack.Navigator>
  )
}




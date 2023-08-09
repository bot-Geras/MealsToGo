import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { RestaurantNavigator } from './restaurant.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
const Tab = createBottomTabNavigator();
const TAB_ICON = {
    Restaurants: "restaurant-sharp",
    Maps: "map",
    Settings: "settings",
  };
  const SettingScreen = () => {
    return (
      <SafeArea>
        <Text>hi</Text>
      </SafeArea>
    );
  };
 
  
  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
        headerShown: false,
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
      tabBarStyle: [
        {
          display: "flex",
        },
        null,
      ],
    };
  };
export const AppNavigator = () => {
  return (
    <NavigationContainer >
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen name="Restaurant" component={RestaurantNavigator} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingScreen} />
              </Tab.Navigator>
            </NavigationContainer>
  )
}


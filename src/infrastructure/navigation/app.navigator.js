import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';
import { Ionicons } from "@expo/vector-icons";
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
  const MapScreen = () => {
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
    <NavigationContainer>
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingScreen} />
              </Tab.Navigator>
            </NavigationContainer>
  )
}


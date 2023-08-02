import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import {  useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import {  useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/components/utils/safe-area.component";
import { Ionicons, Entypo } from '@expo/vector-icons';
const Tab = createBottomTabNavigator()

const SettingScreen = () => { return <SafeArea><Text>hi</Text></SafeArea>}
const MapScreen = () => { return <SafeArea><Text>hi</Text></SafeArea>}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
        <Tab.Navigator
          screenOptions={
            ({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName
                if(route.name === "Restaurant") {
                  iconName = "md-restaurant"
                   
                } else if(route.name === "Map") {
                  iconName = "map"
                    
                } else if(route.name === "Settings") {
                  iconName = "settings"
                    
                }

                return <Ionicons name={iconName} size={size} color={color} />
              }
            })
          }
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        
        >
          <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingScreen} />
        </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}

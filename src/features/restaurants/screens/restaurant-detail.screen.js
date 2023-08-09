import { View, Text } from "react-native";
import React from "react";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurants-info-card.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};

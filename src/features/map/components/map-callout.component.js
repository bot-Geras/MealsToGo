import { Text } from "react-native";
import { View } from "react-native";
import React from "react";
import { styled } from "styled-components/native";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info";
const MyText = styled.Text``;
export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo isMap restaurant={restaurant} />;
};

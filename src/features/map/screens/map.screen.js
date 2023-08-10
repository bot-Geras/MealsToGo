import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import { styled } from "styled-components/native";
import { Search } from "../components/search.component";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
    const [latDelta, setLatDelta] = useState(0)
    const { lat, lng, viewport } = location;
   // console.log(viewport.northeast);
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat)
  }, [location, viewport])
  return (
    <>
      <Search />
      <Map
        region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
            return null
        })}
      </Map>
    </>
  );
};

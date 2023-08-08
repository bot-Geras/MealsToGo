import React, { useContext, useState, useEffect } from "react";

import { styled } from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Search = () => {
  const { search, keyword } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  //console.log(searchKeyword);
  useEffect(() => {
    search(searchKeyword);
  }, []);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
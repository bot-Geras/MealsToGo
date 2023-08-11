import { View, Text, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import { styled } from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import { FavouritesContext } from '../../services/favourites/favourites.context'


const FavouriteButton = styled(TouchableOpacity)`

        position: absolute;
        top: 10px;
        right: 10px;
        
        z-index: 9;
`
export const Favourite = () => {
    const {addTofavourties, Favourites, removeFromFavourites} = useContext(FavouritesContext)
  return (
   <FavouriteButton>
    <AntDesign name='heart' size={24}
     color={'red'} />
   </FavouriteButton>
  )
}
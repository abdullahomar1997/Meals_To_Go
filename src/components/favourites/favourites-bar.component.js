import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'
import { CompactRestaurantInfo } from '../../features/map/components/compact-restaurant-info.component'
import { Spacer } from '../spacer.component'
import { Text } from '../typography/text.components'

const FavouritesWrapper = styled.View`
    padding:10px;
`

export const FavouritesBar = ({ favourites, onNavigate }) => {
    if (!favourites.length) {
        return null;
    }
    return (
        <FavouritesWrapper>
            <Spacer variant="left.large" >
                <Text variant="caption" >Favourites</Text>
            </Spacer>
            <ScrollView horizontal showHorizontalScrollIndicator={false} >
                {
                    favourites.map((restaurant) => {
                        const key = restaurant.name.split("").join("");
                        return (
                            <Spacer key={key} position="left" size="medium">
                                <TouchableOpacity onPress={() => onNavigate("RestaurantDetail", {
                                    restaurant
                                })}>
                                    <CompactRestaurantInfo restaurant={restaurant} />
                                </TouchableOpacity>
                            </Spacer>
                        )
                    })
                }
            </ScrollView>
        </FavouritesWrapper>
    )
}


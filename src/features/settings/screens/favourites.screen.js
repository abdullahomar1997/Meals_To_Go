import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import styled from 'styled-components/native'
import { Spacer } from '../../../components/spacer.component'
import { SafeArea } from '../../../components/utils/safe-area.components2'
import { FavouritesContext } from '../../../services/favourites/favourites.context'
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.components'
import { RestaurantList } from '../../restaurants/components/restuarant-list.styles'

const NoFavouritesArea = styled(SafeArea)`
    align-items: center;
    justify-content: center;
`
export const FavouritesScreen = ({ navigation }) => {

    const { favourites } = useContext(FavouritesContext)

    return favourites.length ? (
        <SafeArea>
            <RestaurantList
                data={favourites}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {
                            restaurant: item
                        })}>
                            <Spacer position="bottom" size="large" >
                                <RestaurantInfoCard restaurant={item} />
                            </Spacer>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    ) : (
        <NoFavouritesArea>
            <Text center>No Favourites Yet</Text>
        </NoFavouritesArea>
    )

    return (
        <div>favourites.screen</div>
    )
}

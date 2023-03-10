import React, { useContext, useState } from 'react'
import { View, SafeAreaView, TouchableOpacity, Pressable, FlatList, StatusBar } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.components';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer.component';
import { SafeArea } from '../../../components/utils/safe-area.components.';
import { RestaurantsContext } from '../../../services/restaurant/restaurants.context';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Search } from '../components/search.components';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`

const LoadingContainer = styled.View`
    position: absolute;
    top:50%;
    left:50%;
`

export const RestaurantsScreen = ({ navigation }) => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext);
    const { favourites } = useContext(FavouritesContext);
    const [isToggled, setIsToggled] = useState();
    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading animating={true} color="##0000ff" />
                </LoadingContainer>
            )}
            <Search isFavouritesToggled={isToggled} onFavouritesToggle={() => setIsToggled(!isToggled)} />
            {isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />}
            <RestaurantList
                data={restaurants}
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
    )
}
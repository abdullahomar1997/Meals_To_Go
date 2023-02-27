import React, { useContext } from 'react'
import { View, SafeAreaView, FlatList, StatusBar } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.components';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer.component';
import { SafeArea } from '../../../components/utils/safe-area.components.';
import { RestaurantsContext } from '../../../services/restaurant/restaurants.context';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Search } from '../components/search.components';


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

export const RestaurantsScreen = () => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext);
    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading animating={true} color="##0000ff" />
                </LoadingContainer>
            )}
            <Search />
            <RestaurantList
                data={restaurants}
                renderItem={({ item }) => {
                    return (
                        <Spacer position="bottom" size="large" >
                            <RestaurantInfoCard restaurant={item} />
                        </Spacer>
                    )
                }
                }
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    )
}
import React, { useContext } from 'react'
import { SafeAreaView, FlatList, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.components';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer.component';
import { SafeArea } from '../../../components/utils/safe-area.components.';
import { RestaurantsContext } from '../../../services/restaurant/restaurants.context';

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[2]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

export const RestaurantsScreen = () => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext);
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
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
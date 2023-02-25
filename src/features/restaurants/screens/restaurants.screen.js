import React, { useState } from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.components';
import styled from 'styled-components/native';

const SafeArea = styled(SafeAreaView)`
    flex:1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}; 
`

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
    flex: 1;
`;

export const RestaurantsScreen = () => {

    console.log("aaaa", StatusBar.currentHeight)

    const [restaurant, setRestaurant] = useState("");

    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            <RestaurantListContainer>
                <RestaurantInfoCard restaurant={restaurant} />
            </RestaurantListContainer>
        </SafeArea>
    )
}
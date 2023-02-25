import React, { useState } from 'react'
import { SafeAreaView, FlatList, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.components';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer.component';
import { SafeArea } from '../../../components/utils/safe-area.components.';


const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[2]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

export const RestaurantsScreen = () => {

    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            <RestaurantList
                data={[
                    { name: 1 },
                    { name: 2 },
                    { name: 3 },
                    { name: 4 },
                    { name: 5 },
                    { name: 6 },
                    { name: 7 },
                    { name: 8 },
                    { name: 9 },
                    { name: 10 },
                    { name: 11 },
                    { name: 12 },
                ]}
                renderItem={() => <>
                    <Spacer position="bottom" size="large" >
                        <RestaurantInfoCard />
                    </Spacer>
                </>
                }
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    )
}
import React from 'react'
import { SafeArea } from '../../../components/utils/safe-area.components.';
import { RestaurantInfoCard } from '../components/restaurant-info-card.components';

export const RestaurantDetailScreen = ({ route, navigation }) => {
    const { restaurant } = route.params;

    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant} />
        </SafeArea>
    )
}
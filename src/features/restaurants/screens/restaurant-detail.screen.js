import React from 'react'
import { SafeArea } from '../../../components/utils/safe-area.components.';
import { RestaurantAccordion } from '../components/restaurant-accordion.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.components';

export const RestaurantDetailScreen = ({ route, navigation }) => {
    const { restaurant } = route.params;

    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant} />
            <RestaurantAccordion />
        </SafeArea>
    )
}
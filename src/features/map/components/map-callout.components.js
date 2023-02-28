import React from 'react'
import styled from 'styled-components/native'
import { CompactRestaurantInfo } from './compact-restaurant-info.component'

const MapCallout = ({ restaurant }) => {
    return (
        <CompactRestaurantInfo restaurant={restaurant} />
    )
}

export default MapCallout
import React, { useState, useContext, useEffect } from "react"
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";
import { RestaurantDetailScreen } from "../../restaurants/screens/restaurant-detail.screen";
import MapCallout from "../components/map-callout.components";
import { Search } from "../components/search.components";

const Map = styled(MapView)`
    height:100%;
    width:100%;
`
export const MapScreen = ({ navigation }) => {

    const { location } = useContext(LocationContext)
    const { restaurants = [] } = useContext(RestaurantsContext)

    const [latDelta, setLatDelta] = useState(0);

    const { lat, lng, viewport } = location;

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        setLatDelta(northeastLat - southwestLat)
    }, [location, viewport])

    return (
        <>
            <Search />
            <Map
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02,
                }}
            >
                {restaurants.map((restaurant) => {
                    return (
                        <MapView.Marker
                            key={restaurant.name}
                            title={restaurant.name}
                            coordinate={{
                                latitude: restaurant.geometry.location.lat,
                                longitude: restaurant.geometry.location.lng,
                            }}
                        >
                            <MapView.Callout onPress={() => navigation.navigate("RestaurantDetail", { restaurant })}>

                            </MapView.Callout>
                            <MapCallout />
                        </MapView.Marker>
                    );
                })}
            </Map>
        </>
    )
}
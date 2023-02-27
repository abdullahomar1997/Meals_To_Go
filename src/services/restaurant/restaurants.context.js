import React, { useState, createContext, useContext, useEffect, useMemo } from 'react'
import { LocationContext } from '../location/location.context';
import { restaurantsRequest, restaurantsTransform } from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {

    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState()
    const { location } = useContext(LocationContext)

    const retrieveRestaurants = (loc) => {
        setIsLoading(true);
        setRestaurants([])
        setTimeout(() => {
            restaurantsRequest(loc).then(restaurantsTransform).then((restaurant) => {
                setIsLoading(false);
                setRestaurants(restaurant);
            }).catch((err) => {
                setIsLoading(false);
                setError(err);
            })
        }, 2000)
    }
    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location.lng}`
            retrieveRestaurants(locationString);
        }
    }, [location])

    return (
        <RestaurantsContext.Provider
            value={{
                restaurants,
                isLoading,
                error
            }}>
            {children}
        </RestaurantsContext.Provider>
    )
}
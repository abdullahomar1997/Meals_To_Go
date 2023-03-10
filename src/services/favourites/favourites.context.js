import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react'

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant])
    }

    const remove = (restaurant) => {
        setFavourites(favourites.filter((x) => x.placeId != restaurant.placeId))
    }

    const saveFavourites = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@favourites', jsonValue)
        } catch (e) {
            console.log("error storing", e)
        }
    }


    const loadFavourites = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@favourites')
            return jsonValue != null ? setFavourites(JSON.parse(jsonValue)) : null;
        } catch (e) {
            // error reading value]
            console.log("error loading", e)

        }
    }

    useEffect(() => {
        saveFavourites(favourites)
    }, [favourites])

    useEffect(() => {
        loadFavourites();
    }, [])

    return (
        <FavouritesContext.Provider

            value={{
                favourites,
                addToFavourites: add,
                removeFromFavourites: remove
            }}
        >
            {children}
        </FavouritesContext.Provider>
    )
}


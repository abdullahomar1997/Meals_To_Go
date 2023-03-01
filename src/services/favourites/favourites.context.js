import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, createContext, useEffect, useState } from 'react'
import { AuthenticationContext } from '../authentication/authentication.context';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {

    const { user } = useContext(AuthenticationContext)

    const [favourites, setFavourites] = useState([]);

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant])
    }

    const remove = (restaurant) => {
        setFavourites(favourites.filter((x) => x.placeId != restaurant.placeId))
    }

    const saveFavourites = async (value, uid) => {
        try {
            const jsonValue = JSON.stringify(value)
            console.log("storing favourites", jsonValue)
            await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue)
        } catch (e) {
            console.log("error storing", e)
        }
    }


    const loadFavourites = async (uid) => {
        try {
            const jsonValue = await AsyncStorage.getItem(`@favourites-${uid}`)
            console.log("loading favourites", jsonValue)
            if (jsonValue !== null) {
                setFavourites(JSON.parse(jsonValue))
            }
        } catch (e) {
            // error reading value]
            console.log("error loading", e)

        }
    }

    useEffect(() => {
        if (user && user.uid) {
            loadFavourites(user.uid);
        }
    }, [user])

    useEffect(() => {
        if (user && user.id && favourites.length) {
            saveFavourites(favourites, user.uid)
        }
    }, [favourites, user])

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


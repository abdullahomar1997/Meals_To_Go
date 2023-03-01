import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react'
import { ThemeProvider } from 'styled-components/native';
import { theme } from "./src/infastructure/theme/"
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { RestaurantsContextProvider } from './src/services/restaurant/restaurants.context'
import { LocationContextProvider } from './src/services/location/location.context';
import { Navigation } from './src/infastructure/navigation/index';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBTt0yqW_Zjpo9JO8yHXPSgIemyWDUi_wI",
  authDomain: "mealstogo-e266b.firebaseapp.com",
  projectId: "mealstogo-e266b",
  storageBucket: "mealstogo-e266b.appspot.com",
  messagingSenderId: "892997312152",
  appId: "1:892997312152:web:40aa721f0a833d2e7c3aed"
};

if (!firebase.apps.length) {
  const app = initializeApp(firebaseConfig);
}

export default function App() {

  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!latoLoaded || !oswaldLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}

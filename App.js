import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react'
import { Text } from 'react-native-paper';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from "./src/infastructure/theme/"
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from './src/components/utils/safe-area.components.';
import { Ionicons } from '@expo/vector-icons';
import { restaurantRequests } from './src/services/restaurant/restaurants.service';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurant: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings"
}

const createScreenOptions = ({ route }) => {

  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  }
}

const Settings = () => <SafeArea><Text>Settings</Text></SafeArea>
const Map = () => <SafeArea><Text>Map</Text></SafeArea>

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
        <NavigationContainer>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}
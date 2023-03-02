import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { FavouritesScreen } from '../../features/settings/screens/favourites.screen';
import { SettingsScreen } from '../../features/settings/screens/settings.screen';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
    return (
        <SettingsStack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <SettingsStack.Screen

                options={{
                    header: () => null,
                }}
                name="Settings"
                component={SettingsScreen}
            >

            </SettingsStack.Screen>

            <SettingsStack.Screen
                name="Favourites"
                component={FavouritesScreen}
            >

            </SettingsStack.Screen>

        </SettingsStack.Navigator>
    )
}


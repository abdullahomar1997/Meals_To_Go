import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Button, Text } from 'react-native';
import { SafeArea } from '../../components/utils/safe-area.components2';
import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
import { AuthenticationContext } from '../../services/authentication/authentication.context';

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
        headerShown: false,
    }
}

const Settings = () => {
    const { onLogout } = useContext(AuthenticationContext)
    return (
        <SafeArea>
            <Text>Settnhhhings</Text>
            <Button title="logout" onPress={() => onLogout()} />
        </SafeArea>
    )
}

export const AppNavigator = () => (
    <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurant" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
)

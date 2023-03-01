import { createStackNavigator } from "@react-navigation/stack"
import React from "react"

const Stack = createStackNavigator();

export const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Main" component={() => null} />
        <Stack.Screen name="Login" component={() => null} />
    </Stack.Navigator>
)
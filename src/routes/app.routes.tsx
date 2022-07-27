import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Register } from "../screens/Register";
import { Details } from "../screens/Details";
import React from "react";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator>
            <Screen name="home" component={Home} />
            <Screen name="new" component={Register} />
            <Screen name="details" component={Details} />
        </Navigator>
    )
}
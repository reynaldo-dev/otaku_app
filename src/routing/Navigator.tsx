import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Details from "../screens/Details";
import { RootStackParamList } from "./route.params.types";


const RootStack = createNativeStackNavigator<RootStackParamList>();


export const Navigator = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Home" >
                <RootStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <RootStack.Screen name="Details" component={Details} options={{ headerShown: false }} />
                <RootStack.Screen name="Favorites" component={Favorites} options={{ headerShown: false }} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
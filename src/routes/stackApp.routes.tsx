import  { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Breed } from "@screens/Breed";
import { Favorites } from "@screens/Favorites";
import { Home } from "@screens/Home";


const  { Navigator, Screen } = createNativeStackNavigator();

export function StackAppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false}} initialRouteName="breeds">
            <Screen name="breeds" component={Home}/>
            <Screen name="favorites" component={Favorites}/>
            <Screen name="breed" component={Breed}/>
        </Navigator>
    )
}
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Breed } from '@screens/Breed';
import { Favorites } from '@screens/Favorites';
import { Home } from '@screens/Home';
import { StackAppRoutes } from './stackApp.routes';

const Tab = createBottomTabNavigator();

export function TabAppRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false}}>
      <Tab.Screen name="breeds" component={Home} />
      <Tab.Screen name="favorites" component={Favorites} />
      <Tab.Screen name="stack" component={StackAppRoutes} />
    </Tab.Navigator>
  );
}
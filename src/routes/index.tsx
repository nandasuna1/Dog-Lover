import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackAppRoutes } from './stackApp.routes';
import { BreedProvider } from '@context/favoriteBreedsContext';



export function Routes() {
    return (
        <View style={{flex:1, paddingTop: 50, backgroundColor: 'antiquewhite'}}>
            <BreedProvider>
                <NavigationContainer >
                    <StackAppRoutes />
                </NavigationContainer>
            </BreedProvider>
        </View>
    )
};

import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { TabAppRoutes } from './tabApp.routes';
import { StackAppRoutes } from './stackApp.routes';



export function Routes() {
    const {COLORS} = useTheme();
    return (
        <View style={{flex:1, paddingTop: 50, backgroundColor: 'antiquewhite'}}>
            <NavigationContainer >
                {/* <TabAppRoutes /> */}
                <StackAppRoutes />
            </NavigationContainer>
        </View>
    )
};

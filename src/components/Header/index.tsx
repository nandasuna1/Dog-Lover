import theme from "@theme/index";
import { Text, View } from "react-native";
import {Dog, Heart} from 'phosphor-react-native'
import { Button, Container, FavorietsIcon, HomeIcon, Title } from "./styled";
import { useNavigation } from "@react-navigation/native";
export function Header() {
    const navigation = useNavigation()
    return(
        <Container>
            <Button onPress={() => navigation.navigate('breeds')}>
                <HomeIcon />
            </Button>
            <Title style={{textAlign: 'center'}}>DogLover</Title>
            <Button onPress={() => navigation.navigate('favorites')}>
                <FavorietsIcon />
            </Button>
        </Container>
    )
}
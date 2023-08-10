import styled from "styled-components/native";
import {Dog, Heart} from 'phosphor-react-native'

export const HomeIcon = styled(Dog).attrs(() => ({
    size: 50,
    color: '#0bff'
}))``;

export const FavorietsIcon = styled(Heart).attrs(() => ({
    size: 50,
    color: '#0bff'
}))``;

export const Container = styled.View`
    width: 100%;
    height: 50px;
    margin-bottom: 20px;

    background-color: antiquewhite;
    display: flex; 
    flex-direction: row;
    align-items: center; 
    justify-content: space-around;
`

export const Title = styled.Text`
    font-size: 32px;
    color: #0bff
`

export const Button = styled.TouchableOpacity``
import styled from "styled-components/native"

export const Card = styled.TouchableOpacity`
    width: 80%;
    height: 60px;
    margin-bottom: 5px;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
    border-radius: 5px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    padding: 15px;
`
export const CardText = styled.Text`
    text-align: center;
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.WHITE};
`

export const Button = styled.TouchableOpacity``

export const Detail = styled.TouchableOpacity``
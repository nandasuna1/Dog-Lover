import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: antiquewhite;
`
export const ListBox = styled.View`
    width: 100%;
`
export const Input = styled(TextInput)`
    min-height: 56px;
    max-height: 56px;
    width: 90%;
    display: flex;
    align-self: center;
    ${({theme}) => css`
        color: ${theme.COLORS.WHITE};
        
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}

    border-radius: 5px;
    padding: 6px;

    margin: 20px 0;

    background-color: #0bff;
`
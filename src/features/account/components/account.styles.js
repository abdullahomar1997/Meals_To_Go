import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`
export const AccountBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/home_bg.jpg")
})`

    flex: 1;
    justify-content: 'center';
    justify-content: center;

`

export const Texts = styled.Text`
     color: 'white';
     font-size: 42;
     line-height: 84;
     font-weight: 'bold';
     text-align: 'center';
     background-color: '#000000c0';
`
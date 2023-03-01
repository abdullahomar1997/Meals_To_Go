import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';

export const AccountBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/home_bg.jpg")
})`

    flex: 1;
    justify-content: 'center';
    justify-content: center;

`

export const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.3);

`
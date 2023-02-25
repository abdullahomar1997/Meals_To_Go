import React from 'react'
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg'
import { Text, View, Image } from "react-native"

import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer.component';

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
    padding:${(props) => props.theme.space[3]};
`;

const RatingAndStatus = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
    justify-content: space-between;
`;

const Status = styled.View`
    flex-direction: row;
`;

const Rating = styled.View`
    flex-direction: row;
`;

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {

    const {
        name = "Some Restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://s2.glbimg.com/TLSi-Skh-SyW_zL3qXKaqas1NNA=/620x413/smart/e.glbimg.com/og/ed/f/original/2021/09/02/predio-tombado-de-1940-em-sao-paulo-recebe-novo-restaurante-italiano_5.jpg"
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5} >
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <RatingAndStatus>
                    <Rating>
                        {
                            ratingArray.map(() => (
                                <SvgXml xml={star} width={20} height={20} />
                            ))
                        }
                    </Rating>
                    <Status>
                        {
                            isClosedTemporarily && (
                                <Text variant="label" style={{ color: "red" }}>
                                    CLOSED TEMPORARILY
                                </Text>
                            )
                        }
                        <Spacer position="left" size="large">
                            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        </Spacer>
                        <Spacer position="left" size="large" >
                            <Image source={{ uri: icon }} style={{ width: 15, height: 15 }}></Image>
                        </Spacer>
                    </Status>
                </RatingAndStatus>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    )
}
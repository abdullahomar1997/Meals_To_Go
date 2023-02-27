import React from 'react'
import { SvgXml } from 'react-native-svg'
import { Text } from '../../../components/typography/text.components';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer.component';
import { Address, Icon, Info, Rating, RatingAndStatus, RestaurantCard, RestaurantCardCover, Status } from './restaurant-info-card.styles';

export const RestaurantInfoCard = ({ restaurant }) => {

    const {
        name = "Some Restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://s2.glbimg.com/TLSi-Skh-SyW_zL3qXKaqas1NNA=/620x413/smart/e.glbimg.com/og/ed/f/original/2021/09/02/predio-tombado-de-1940-em-sao-paulo-recebe-novo-restaurante-italiano_5.jpg"
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
        placeId 
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5} >
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Text variant="label">{name}</Text>
                <RatingAndStatus>
                    <Rating>
                        {
                            ratingArray.map((_, i) => (
                                <SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20} />
                            ))
                        }
                    </Rating>
                    <Status>
                        {
                            isClosedTemporarily && (
                                <Text variant="error">
                                    CLOSED TEMPORARILY
                                </Text>
                            )
                        }
                        <Spacer position="left" size="large">
                            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        </Spacer>
                        <Spacer position="left" size="large" >
                            <Icon source={{ uri: icon }}></Icon>
                        </Spacer>
                    </Status>
                </RatingAndStatus>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    )
}
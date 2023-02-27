import React, { useContext, useEffect, useState } from "react"
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[2]};
`;

export const Search = () => {

    const { keyword, search } = useContext(LocationContext)

    const [searchKeyword, setSearchKeyword] = useState(keyword);

    // useEffect(() => {
    //     search(searchKeyword)
    // }, [])
    // console.log(keyword)

    return (
        <SearchContainer>
            <Searchbar
                placeholder="Search for the location"
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword);
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text)
                }}
            />
        </SearchContainer>
    )
}
import React, {useEffect} from 'react';
import styled from 'styled-components'
import axios from "axios";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../../redux/search/slice";
import GridList from "../../shared/components/List/GridList";
import PhotoItem from "../../shared/components/Item/PhotoItem";

const SearchContainer = () => {

    const {query} = useParams();
    const dispatch = useDispatch();
    const {photos} = useSelector(state => state.search);

    const searchPhotos = async () => {
        const result = await axios({
            url : `https://api.unsplash.com/search/`,
            method : 'get',
            headers : {
                Authorization: 'Client-ID 6_2N9-xx9qq8gNRcyVQgQmNVMmbSRuaIqMc1KQYpwYA'
            },
            params : {
                page : 1,
                query
            }
        })
        dispatch(Action.Creators.setSearchResults(result.data))
    }
    useEffect(() => {
        searchPhotos();
    },[query])

    const renderItem = (item) => <PhotoItem item={item}/>
    console.log(photos)
    return(
        <Container>
            검색결과 {photos.total}개가 검색됨
            <GridList
                data={photos.results}
                renderItem={renderItem}
            />
        </Container>
    )
};

const Container = styled.div`

`;

export default SearchContainer;
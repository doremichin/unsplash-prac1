import React, {useEffect} from 'react';
import styled from 'styled-components'
import Visual from "../components/Visual";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../../redux/main/slice";
import GridList from "../../shared/components/List/GridList";
import PhotoItem from "../../shared/components/Item/PhotoItem";

const MainContainer = () => {

    const dispatch = useDispatch();
    const {photos} = useSelector(state => state.main);
    console.log(photos)

    const getPhotos = async () => {
        const result = await axios({
            url : `https://api.unsplash.com/photos`,
            method : 'get',
            headers : {
                Authorization: 'Client-ID 6_2N9-xx9qq8gNRcyVQgQmNVMmbSRuaIqMc1KQYpwYA'
            },
            params : {
                page : 1,
                per_page : 10,
            }
        })
        console.log(result)
        dispatch(Action.Creators.setPhotos(result.data))
    }

    useEffect(() => {
        getPhotos();
    },[])
    const renderItem = (item) => <PhotoItem item={item}/>
    return(
        <Container>
            <Visual/>
            <GridList data={photos} renderItem={renderItem}/>
        </Container>
    )
};

const Container = styled.div`

`;

export default MainContainer;
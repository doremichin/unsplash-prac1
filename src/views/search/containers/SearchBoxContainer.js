import React from 'react';
import styled from 'styled-components'
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../../redux/search/slice";
import SearchBox from "../../shared/components/SearchBox";

const SearchBoxContainer = ({shape}) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const {searchQuery} = useSelector((state) => state.search);

    const onChange = (e) => {
        dispatch(Action.Creators.setSearchQuery(e.target.value))
    }

    const onSubmit = (e) => {
        history.push(`/search/photos/${searchQuery}`)
    }

    return(
        <Container>
            <SearchBox
                shape={shape}
                value={searchQuery}
                onChange={onChange}
                onSubmit={onSubmit}
            />
        </Container>
    )
};

const Container = styled.div`
  flex: 1;
`;

export default SearchBoxContainer;
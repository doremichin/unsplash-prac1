import React from 'react';
import styled from 'styled-components'
import {IconLogo} from "../../../../icons";
import SearchBox from "../SearchBox";
import Nav from "./Nav";
import SearchBoxContainer from "../../../search/containers/SearchBoxContainer";

const Header = () => {
    return(
        <Container>
            <Logo>
                <IconLogo/>
            </Logo>
            <SearchBoxContainer shape={'round'}/>
            <Nav/>
        </Container>
    )
};

const Container = styled.div`
  padding: 0 20px;
  height: 62px;
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  margin-right: 18px;
`;


export default Header;
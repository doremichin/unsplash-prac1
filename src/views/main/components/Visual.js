import React from 'react';
import styled from 'styled-components'
import SearchBoxContainer from "../../search/containers/SearchBoxContainer";

const Visual = () => {
    return(
        <Container>
            <Content>
                <SearchBoxContainer shape={'square'}/>
            </Content>
        </Container>
    )
};

const Container = styled.div`
  height: 560px;
  background: #1188ff70;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  max-width: 500px;
  width: 100%;
`;
export default Visual;
import React from 'react';
import styled from 'styled-components';

const MainPhotoListOneColumn = ({ data = [], renderItem = () => {} }) => (
  <Container>
    <Row>
      {
        data.map((item, index) => (
          <Col key={index}>
            <ItemWrapper key={item.id || index}>
              {renderItem(item)}
            </ItemWrapper>
          </Col>
        ))
        }
    </Row>
  </Container>
);

const Container = styled.div`
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -10px;
`;
const Col = styled.div`
  width: 100%;
  padding: 0 10px;
`;
const ItemWrapper = styled.div`
  margin-bottom: 20px;
`;
export default MainPhotoListOneColumn;

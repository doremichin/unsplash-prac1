import React from 'react';
import styled from 'styled-components';

const MainPhotoListTwoColumn = ({ data = [], renderItem = () => {} }) => {
  const photoGroups = [[], []];
  const photoGroupHeight = [0, 0];

  for (let i = 0; i < data.length; i++) {
    const minHeightIndex = photoGroupHeight.indexOf(Math.min(...photoGroupHeight));
    photoGroups[minHeightIndex].push(data[i]);
    photoGroupHeight[minHeightIndex] += (data[i].height / data[i].width);
  }

  return (
    <Container>
      <Row>
        {
          photoGroups.map((group, groupIndex) => (
            <Col key={groupIndex}>
              {
                group.map((item, index) => (
                  <ItemWrapper key={item.id || index}>
                    {renderItem(item)}
                  </ItemWrapper>
                ))
              }
            </Col>
          ))
        }
      </Row>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 10px;
`;

const Row = styled.div`
  display: flex;
  margin: 0 -10px;
`;
const Col = styled.div`
  width: 50%;
  padding: 0 10px;
`;
const ItemWrapper = styled.div`
  margin-bottom: 20px;
`;
export default MainPhotoListTwoColumn;

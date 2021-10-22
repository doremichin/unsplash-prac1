import React from 'react';
import styled from 'styled-components';

import PhotoItem from '../Item/PhotoItem';

const MainPhotoList = ({ data = [] }) => {
  // 사진이 배치 될 때 다음 사진은 높이가 가장 낮은 그룹의 하단에 배치 되어야 한다
  // 매번 사진이 나열 될 때마다 그룹의 총 높이를 알고 있어야한다.
  // 가장 작은 높이값의 인덱스 번호를 알아야한다
  const photoGroups = [[], [], []];
  const photoGroupHeight = [0, 0, 0];

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
            <Col>
              {
                group.map((item, index) => (
                  <ItemWrapper>
                    <PhotoItem item={item} />
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

`;

const Row = styled.div`
  display: flex;
  margin: 0 -10px;
`;
const Col = styled.div`
  width: 33.33%;
  padding: 0 10px;
`;
const ItemWrapper = styled.div`
  margin-bottom: 20px;
`;
export default MainPhotoList;

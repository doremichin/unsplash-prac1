import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

function MainPhotoList({ data = [], renderItem = () => {} }) {
  function organizedPhotos() {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    let photoGroups = [[], [], []];
    let photoGroupHeight = [0, 0, 0];
    let gridWidth;

    if (isDesktop) {
      photoGroups = [[], [], []];
      photoGroupHeight = [0, 0, 0];
      gridWidth = '33.33%';
    }
    if (isTablet) {
      photoGroups = [[], []];
      photoGroupHeight = [0, 0];
      gridWidth = '50%';
    }
    if (isMobile) {
      photoGroups = [[]];
      photoGroupHeight = [0];
      gridWidth = '100%';
    }
    for (let i = 0; i < data.length; i++) {
      const minHeightIndex = photoGroupHeight.indexOf(Math.min(...photoGroupHeight));
      photoGroups[minHeightIndex].push(data[i]);
      photoGroupHeight[minHeightIndex] += (data[i].height / data[i].width);
    }

    return {
      photoGroups,
      gridWidth,
    };
  }
  const { photoGroups, gridWidth } = organizedPhotos();

  return (
    <Container>
      <Row>
        {
          photoGroups.map((group, groupIndex) => (
            <Col key={groupIndex} width={gridWidth}>
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
}

const Container = styled.div`
  
`;

const Row = styled.div`
  display: flex;
  margin: 0 -10px;
`;
const Col = styled.div`
  width: ${(props) => props.width || '33.33%'};
  padding: 0 10px;
`;
const ItemWrapper = styled.div`
  margin-bottom: 20px;
`;
export default MainPhotoList;

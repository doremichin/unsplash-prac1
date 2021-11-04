import React from 'react';
import styled from 'styled-components';

const PhotoPopupItem = ({ data }) => {
  const handleOnClick = (e) => {
    e.stopPropagation();
  };
  return (
    <Container onClick={handleOnClick}>
      <Area>{data.id}</Area>
      <Area>{data.id}</Area>
      <Area>{data.id}</Area>
      <Area>{data.id}</Area>
      <Area>{data.id}</Area>
      <Area>{data.id}</Area>
      <Area>{data.id}</Area>
      <Area>{data.id}</Area>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 20px;
  left: 100px;
  right: 100px;
  background-color: #fff;
`;
const Area = styled.div`
  height: 200px;
  background-color: #fff;
`;
export default PhotoPopupItem;

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
  margin-top: 15px;
  width: 85%;
  overflow: auto;
  background-color: #fff;
`;
const Area = styled.div`
  height: 200px;
  background-color: #fff;
`;
export default PhotoPopupItem;

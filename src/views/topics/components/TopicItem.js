import React from 'react';
import styled from 'styled-components';

const TopicItem = ({ item }) => {
  const a = 1;
  return (
    <Container>
      <Thumb>
        <img src={item.cover_photo.urls.regular} alt={item.cover_photo.alt_description} />
      </Thumb>
      <Desc>
        <h3>{item.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: item.description }} />
      </Desc>
    </Container>
  );
};

const Container = styled.div`
  img{
    height: 130px;
    width: 100%;
    object-fit: cover;
  }
`;
const Thumb = styled.div`
  
`;
const Desc = styled.div`
  padding: 20px;
  a{
    color: #18f;
  }
`;

export default TopicItem;

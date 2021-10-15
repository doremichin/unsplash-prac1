import React from 'react';
import styled from 'styled-components';

const TopicItem = ({ item }) => (
  <Container>
    <Thumb>
      <img src={item?.cover_photo?.urls?.regular} alt={item?.cover_photo?.urls?.alt_description} />
    </Thumb>
    <Desc>
      <h3>{item.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: item.description }} />
    </Desc>
  </Container>
);

const Container = styled.div`
  img{
    height: 130px;
    width: 100%;
    object-fit: cover;
  }
  padding: 20px;

`;
const Thumb = styled.div`

`;
const Desc = styled.div`
  a{
    color: #18f;
  }
`;

export default TopicItem;

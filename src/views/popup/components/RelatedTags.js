import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RelatedTags = ({ tags }) => (
  <Container>
    <Tags>
      {
          tags.map((item) => (
            <TagItem>{item.title}</TagItem>
          ))
        }
    </Tags>
  </Container>
);

const Container = styled.div`

`;
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const TagItem = styled(Link)`
  background: #eee;
  padding:  5px 7px;
  margin-right: 8px;
  border-radius: 3px;
  font-size: 14px;
  color: #767676;
  text-transform: capitalize;
  transition: 0.3s;
  margin-bottom: 8px;
  &:hover{
    background: #e1e1e1;
    color: #111;
  }
`;
export default RelatedTags;

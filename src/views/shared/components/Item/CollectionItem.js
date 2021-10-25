import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CollectionItem = ({ item }) => {
  const tags = [];

  for (let i = 0; i < 3; i++) {
    tags.push(item.tags[i]);
  }
  const changeRoute = (item) => {
    if (item.type === 'search') return `/search/photos/${item.title}`;
    return `/${item.title}`;
  };

  return (
    <Container>
      <Thumb href={item.links.html}>
        <CoverImage>
          <img src={item.preview_photos[0].urls.small} alt="" />
        </CoverImage>
        <SubImage>
          <img src={item.preview_photos[1].urls.small} alt="" />
          <img src={item.preview_photos[2].urls.small} alt="" />
        </SubImage>
      </Thumb>
      <Desc>
        <DescTitle>
          {item.title}
        </DescTitle>
        <CurateInfo>
          <span>{item.total_photos} photos · </span>
          <span>Curated by <a href={item.user.links.html}>{item.user.name}</a></span>
        </CurateInfo>
        <Tag>
          {
            tags.map((item) => <TagItem to={changeRoute(item)}>{item.title}</TagItem>)
          }
        </Tag>
      </Desc>
    </Container>
  );
};

const Container = styled.div`

`;
const Thumb = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  height: 290px;
  background: #eee;
  border-radius: 6px;
  overflow: hidden;
  transition: 0.3s;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
  }
`;
const CoverImage = styled.div`
  width: 70%;
  border-right: 2px solid #fff;
  img{
    width: 100%;
    height: 290px;
    object-fit: cover;
  }
`;
const SubImage = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    width: 100%;
    height: 150px;
    object-fit: cover;
    :first-child{
      border-bottom: 2px solid #fff;
    }
  }
`;
const Desc = styled.div`
  padding: 20px 0 30px;
`;
const DescTitle = styled.h3`
  margin-bottom: 5px;
`;
const CurateInfo = styled.div`
  font-size: 15px;
  color: #767676;
  margin-bottom: 15px;
  a{
    font-size: 15px;
    color: #767676;
    transition: 0.4s;
    &:hover{
      color: #111;
      text-decoration: underline;
    }
  }
`;
const Tag = styled.div`
  
`;
const TagItem = styled(Link)`
  background: #eee;
  padding:  5px 7px;
  margin-right: 8px;
  border-radius: 3px;
  color: #767676;
  text-transform: capitalize;
  transition: 0.3s;
  &:hover{
    background: #e1e1e1;
    color: #111;
  }
`;
export default CollectionItem;

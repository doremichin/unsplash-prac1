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

        <Inner>
          <CoverImage>
            <Image>
              {
                item.preview_photos[0].urls.small
                && <img src={item.preview_photos[0].urls.small} alt="" />
              }
            </Image>
          </CoverImage>
          <SubImage>
            <Top>
              <Image>
                {
                  item.preview_photos[1].urls.small
                  && <img src={item.preview_photos[1].urls.small} alt="" />
                }
              </Image>
            </Top>
            <Bottom>
              <Image>
                {
                  item.preview_photos[2].urls.small
                  && <img src={item.preview_photos[2].urls.small} alt="" />
                }
              </Image>
            </Bottom>
          </SubImage>
        </Inner>

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
  display: block;
  padding-bottom: 70%;
  border-radius: 6px;
  overflow: hidden;
  transition: opacity 0.3s;
  cursor: pointer;
  position: relative;
  &:hover{
    opacity: 0.8;
  }
`;
const Inner = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  background: #eee;
`;
const CoverImage = styled.div`
  width: 70%;
  height: 100%;
  border-right: 2px solid #fff;
`;
const SubImage = styled.div`
  width: 30%;
  height: 100%;
`;
const Top = styled.div`
  height: 50%;
  border-bottom: 1px solid #fff;
`;
const Bottom = styled.div`
  height: 50%;
  border-top: 1px solid #fff;
`;
const Image = styled.div`
  background: #eee;
  width: 100%;
  height: 100%;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Desc = styled.div`
  padding: 20px 0 30px;
`;
const DescTitle = styled.h3`
  font-size: 18px;
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
  font-size: 14px;

  &:hover{
    background: #e1e1e1;
    color: #111;
  }
`;
export default CollectionItem;

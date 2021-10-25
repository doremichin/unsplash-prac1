import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import StatusButton from '../../shared/components/Button/StatusButton';
import { IconImage } from '../../../icons';

const TopicItem = ({ item }) => {
  const handlePhotosCount = () => {
    const count = item.total_photos;
    if (count >= 1000) {
      return (`${(Math.floor(count / 100)) / 10}k`);
    }
    return count;
  };
  return (
    <Container to={`/topics/${item.slug}`}>
      <StatusButton item={item} position="absolute" top="20px" left="15px" />
      <Thumb>
        <img src={item.cover_photo.urls.regular} alt={item.cover_photo.alt_description} />
      </Thumb>
      <Desc>
        <Title>
          <div>
            <h3>{item.title}</h3>
            <p>
              by&nbsp;
              <a href={item.owners[0].portfolio_url}>
                {item.owners[0].name}
              </a>
            </p>
          </div>
          <Owners>
            <img src={item.owners[0].profile_image.large} alt="" />
          </Owners>
        </Title>
        <Info dangerouslySetInnerHTML={{ __html: item.description }} />
        <Contribution>
          <IconImage />
          <p>
            {handlePhotosCount()}
            {' '}
            contribution
          </p>
        </Contribution>
      </Desc>
    </Container>
  );
};

const Container = styled(Link)`
  display: block;
  border: 1px solid #eee;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
  transition: 0.2s;
  cursor: pointer;
  &:hover{
    border: 1px solid #d1d1d1;
  }
`;
const Thumb = styled.div`
  position: relative;
  img {
    height: 130px;
    width: 100%;
    object-fit: cover;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;
const Desc = styled.div`
  height: 230px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a{
    color: #767676;
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3{
    font-weight: 900;
  }
  p{
    color: #767676;
  }
  a{
    transition: 0.3s;
    &:hover{
      text-decoration: underline;
      color: #111;
    }
  }
`;
const Owners = styled.div`
  width: 64px;
  height: 64px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid #eee;
`;
const Info = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const Contribution = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  svg{
    fill: #d1d1d1;
    width: 18px;
    margin-right: 10px;
  }

`;

export default TopicItem;

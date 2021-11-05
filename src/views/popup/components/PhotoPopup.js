import React from 'react';
import styled, { css } from 'styled-components';

import { WhiteButton } from '../../shared/components/Button/Button.Styled';
import {
  IconChevronDown, IconDotMenu, IconHeart, IconInfo, IconPlus, IconShare,
} from '../../../icons';
import RelatedPhotos from './RelatedPhotos';
import RelatedCollections from './RelatedCollections';
import RelatedTags from './RelatedTags';

const PhotoPopup = ({ detail = {}, related = [] }) => {
  const handleOnClick = (e) => {
    e.stopPropagation();
  };
  const ableToHire = () => {
    if (detail.user.for_hire) return <p>available for hire</p>;
    return <p>@{detail.user.username}</p>;
  };

  const checkOrientation = () => {
    if (detail.height / detail.width > 1) return 'portrait';
    if (detail.height / detail.width === 1) return 'square';
    return 'landscape';
  };

  return (
    <Container onClick={handleOnClick}>
      <Title>
        <UserTag>
          <Image>
            <img src={detail.user.profile_image.small} alt={detail.user.name} />
          </Image>
          <Name>
            <h2>{detail.user.name}</h2>
            {ableToHire()}
          </Name>
        </UserTag>
        <ButtonBox>
          <Button>
            <IconHeart />
          </Button>
          <Button>
            <IconPlus />
          </Button>
          <DownloadButton left>
            <span>Download</span>
          </DownloadButton>
          <DownloadButton right>
            <IconChevronDown />
          </DownloadButton>
        </ButtonBox>
      </Title>

      <MainPhoto className={checkOrientation()}>
        <img src={detail.urls.regular} alt="" />
      </MainPhoto>

      <Info>
        <FeatureList>
          <Feature>
            <h4>Views</h4>
            <span>{detail.views.toLocaleString()}</span>
          </Feature>
          <Feature>
            <h4>Downloads</h4>
            <span>{detail.downloads.toLocaleString()}</span>
          </Feature>
          {
            Object.keys(detail.topic_submissions).length > 0
            && (
              <Feature>
                <h4>Featured in</h4>
                {
                  Object.keys(detail.topic_submissions).map((item) => <span>{item}</span>)
                }
              </Feature>
            )
           }
        </FeatureList>
        <ButtonBox>
          <Button>
            <IconShare />
            <span>Share</span>
          </Button>
          <Button>
            <IconInfo />
            <span>Info</span>
          </Button>
          <Button>
            <IconDotMenu />
          </Button>
        </ButtonBox>
      </Info>

      <RelatedPhotos data={related} />

      <RelatedCollections collection={detail.related_collections.results} />

      <RelatedTags tags={detail.tags} />
    </Container>
  );
};

const Container = styled.div`
  margin: 15px auto 0;
  width: 85vw;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 4px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const UserTag = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.div`
  border: 1px solid #eee;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
`;
const Name = styled.div`
  h2{
    color: #111;
    font-size: 15px;
  }
  p{
    font-size: 11px;
    color: #767676;
  }
`;
const ButtonBox = styled.div`
  display: flex;
`;
const Button = styled(WhiteButton)`
  height: 32px;
  padding: 0 10px;
  margin-left: 10px;
  fill: #767676;
  transition: 0.3s;
  svg{
    width: 16px;
  }
  &:hover{
    fill: #111;
    border-color: #111;
    h4,span{
      color: #111;
    }
  }
  span{
    font-weight: 600;
    color: #767676;
    margin-left: 5px;
  }
`;
const DownloadButton = styled(WhiteButton)`
  height: 32px;
  font-weight: 600;
  transition: 0.3s;
  fill: #767676;
  color: #767676;
  ${({ left }) => left && css`
    padding: 0 10px;
    margin-left: 10px;
    border-radius: 3px 0 0 3px;
    position: relative;
    left: 1px;
    &:hover{
      z-index: 10;
    }
  `}
  ${({ right }) => right && css`
    padding: 0 5px;
    border-radius: 0 3px 3px 0;
    position: relative;
    svg{
      width: 25px;
    }
  `}
  &:hover{
    fill: #111;
    border-color: #111;
    color: #111;
  }
`;

const MainPhoto = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  &.portrait{
    max-height: 90vh;
    img{
      object-fit: contain;
    }
  }
  &.landscape, &.square{
    img{
      width: 100%;
    }
  }
`;

const Info = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const FeatureList = styled.div`
  display: flex;
  align-items: center;
`;
const Feature = styled.div`
  width: 160px;
  white-space: nowrap;
  h4{
    font-weight: 500;
    font-size: 14px;
    color: #767676;
    margin-bottom: 5px;
  }
  span{
    font-size: 15px;
    color: #111;
    font-weight: 600;
    margin-right: 8px;
  }
`;

export default PhotoPopup;

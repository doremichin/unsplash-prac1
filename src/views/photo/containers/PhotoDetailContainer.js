import React from 'react';
import styled, { css } from 'styled-components';

import UserTag from '../../shared/components/Item/UserTag';
import {
  IconChevronDown,
  IconDotMenu,
  IconHeart,
  IconInfo,
  IconPlus,
  IconShare,
} from '../../../icons';
import { WhiteButton } from '../../shared/components/Button/Button.Styled';
import DetailMainPhoto from '../components/DetailMainPhoto';

const PhotoDetailContainer = ({ detail }) => {
  const keys = Object.keys(detail.topic_submissions);
  return (
    <Container>
      <Title>
        <UserTag item={detail} />
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

      <DetailMainPhoto imageUrl={detail?.urls?.full} />

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
            keys.length > 0
              ? (
                <Feature>
                  <h4>Featured in</h4>
                  Editorial,&nbsp;
                  {
                    keys.map((item, index) => <span key={index}>{item}</span>)
                  }
                </Feature>
              ) : (
                <Feature>
                  <h4>Featured in</h4>
                  Editorial
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
    </Container>
  );
};

const Container = styled.div`

`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
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
  ${(props) => (props.zoomIn ? css`
    cursor: zoom-out;
  ` : css`
    cursor: zoom-in;
  `)}
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  &.portrait{
    ${(props) => (props.zoomIn ? css`
      max-height: none;
      margin: 0 -20px 20px;
      img{
        width: 100%;
        object-fit: fill ;
      }
    ` : css`
      max-height : 90vh;
      img{
        object-fit : contain;
      }
    `)}
  }
  &.landscape, &.square{
    ${(props) => (props.zoomIn ? css`
      margin: 0 -20px 20px;
      img{
        width: 100%;
        max-width: none;
      }
    ` : css`
      img{
        width: 100%;
        max-width: 1500px;
      }
    `)}
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
    text-transform: capitalize;
  }
`;
export default PhotoDetailContainer;

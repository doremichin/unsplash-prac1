import React from 'react';
import styled, { css } from 'styled-components';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';

import UserTag from '../../shared/components/Item/UserTag';
import {
  IconChevronDown,
  IconDotMenu,
  IconHeart,
  IconInfo,
  IconPlus,
  IconShare,
} from '../../../icons';
import DetailMainPhoto from './DetailMainPhoto';
import { WhiteButton } from '../../shared/components/Button/Button.Styled';

const PhotoDetail = ({ detail }) => {
  const keys = Object.keys(detail.topic_submissions);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <Container className={cn({ isMobile })}>
      <Title>
        <UserTag item={detail} />
        <ButtonBox>
          <Left>
            <Button>
              <IconHeart />
            </Button>
            <Button>
              <IconPlus />
            </Button>
          </Left>
          <Right>
            <DownloadButton left>
              <span>Download</span>
            </DownloadButton>
            <DownloadButton right>
              <IconChevronDown />
            </DownloadButton>
          </Right>
        </ButtonBox>
      </Title>

      <DetailMainPhoto imageUrl={detail?.urls?.regular} />

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
        <ButtonBoxBottom>
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
        </ButtonBoxBottom>
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
  .isMobile & {
    flex-direction: column;
    align-items: flex-start;
    
  }
`;

const ButtonBox = styled.div`
  display: flex;
  .isMobile &{
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
  }
  
`;
const ButtonBoxBottom = styled.div`
  display: flex;
  max-width: 100%;
`;
const Left = styled.div`
  display: flex;
`;
const Right = styled.div`
  display: flex;
  margin-right: 10px;
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
    font-weight: 500;
    color: #767676;
    margin-left: 5px;
  }
`;
const DownloadButton = styled(WhiteButton)`
  height: 32px;
  font-weight: 500;
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

const Info = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const FeatureList = styled.div`
  display: flex;
  align-items: center;
  .isMobile &{
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Feature = styled.div`
  margin-right: 40px;
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
  .isMobile &{
    margin-bottom: 20px;
    span{
      margin-right: 0;
    }
  }
`;

export default PhotoDetail;

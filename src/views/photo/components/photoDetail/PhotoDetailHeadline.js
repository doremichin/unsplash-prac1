import styled, { css } from 'styled-components';
import React from 'react';

import UserTag from '../../../shared/components/Item/UserTag';
import { IconChevronDown, IconHeart, IconPlus } from '../../../../icons';
import { WhiteButton } from '../../../shared/components/Button/Button.Styled';

const PhotoDetailHeadline = ({ detail }) => (
  <Headline>
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
  </Headline>
);

const Headline = styled.div`
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
export default PhotoDetailHeadline;

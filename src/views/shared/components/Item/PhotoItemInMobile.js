import React from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';

import UserTag from './UserTag';
import { WhiteButton } from '../Button/Button.Styled';
import { IconChevronDown, IconHeart, IconPlus } from '../../../../icons';

const PhotoItemInMobile = ({ item = {} }) => {
  const history = useHistory();
  const onClickItem = () => {
    history.push(`/photos/${item.id}`);
  };

  return (
    <Container onClick={onClickItem} className="PhotoItemInDesktop">
      <UserTag item={item} isMobile />
      <Image>
        <img src={item.urls.regular} alt="" />
      </Image>
      <Bottom>
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
      </Bottom>

    </Container>
  );
};

const Container = styled.div`
  position: relative;
  cursor: pointer;

`;
const Image = styled.div`
  cursor:zoom-in;
`;
const Bottom = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
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
export default React.memo(PhotoItemInMobile);

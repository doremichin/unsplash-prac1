import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

import { Action } from '../../../../redux/popup/slice';
import UserTag from './UserTag';
import { WhiteButton } from '../Button/Button.Styled';
import { IconArrowDown, IconHeart, IconPlus } from '../../../../icons';

const PhotoItemInDesktop = ({ item = {} }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const openPopup = () => {
    if (isMobile) {
      history.push(`/photos/${item.id}`);
    } else {
      dispatch(Action.Creators.togglePopup(true));
      window.history.pushState('', '', `/photos/${item.id}`);
    }
  };

  return (
    <Container onClick={openPopup} className="PhotoItem">
      <Image>
        <img src={item.urls.regular} alt="" />
      </Image>
      <Cover>
        <CoverTop>
          <Button>
            <IconHeart />
          </Button>
          <Button>
            <IconPlus />
          </Button>
        </CoverTop>
        <CoverBottom>
          <UserTag item={item} color="white" />
          <Button>
            <IconArrowDown />
          </Button>
        </CoverBottom>
      </Cover>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  cursor: pointer;
`;
const Image = styled.div`
  
`;
const Cover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  padding: 15px;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #00000040;
  transition: 0.3s;
  opacity: 0;
  .PhotoItemInDesktop &:hover{
    opacity: 1;
  }
`;
const CoverTop = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CoverBottom = styled.div`
  display: flex;
  justify-content: space-between;
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
export default React.memo(PhotoItemInDesktop);

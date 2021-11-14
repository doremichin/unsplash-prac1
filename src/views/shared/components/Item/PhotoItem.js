import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { Action } from '../../../../redux/popup/slice';
import UserTag from './UserTag';
import { WhiteButton } from '../Button/Button.Styled';
import { IconArrowDown, IconHeart, IconPlus } from '../../../../icons';

const PhotoItem = ({ item = {} }) => {
  const dispatch = useDispatch();

  const openPopup = () => {
    dispatch(Action.Creators.togglePopup(true));
    window.history.pushState('', '', `/photos/${item.id}`);
  };

  return (
    <Container onClick={openPopup} className="PhotoItem">
      <img src={item.urls.regular} alt="" />
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
  .PhotoItem &:hover{
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
export default React.memo(PhotoItem);

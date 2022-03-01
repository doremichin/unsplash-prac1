import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import { DefaultButton } from '../Button/Button.Styled';
import { IconFollow } from '../../../../icons';

function UsersItem({ item }) {
  return (
    <Container>
      <Profile>
        <UserImage href={item.links.html}>
          <img src={item.profile_image.medium} alt="" />
        </UserImage>
        <UserName href={item.links.html}>
          <h1>{item.name}</h1>
          <p>
            @
            {item.username}
          </p>
        </UserName>
        <Buttons>
          <FollowButton><IconFollow /></FollowButton>
          <HireButton className={cn({ show: item.for_hire })}>Hire</HireButton>
        </Buttons>
      </Profile>
      <Photos href={item.links.html}>
        {
          item.photos.map((data) => (
            <Photo>
              <img src={data.urls.thumb} alt="" />
            </Photo>
          ))
        }
      </Photos>
      <ProfileButton href={item.links.html}>
        View profile
      </ProfileButton>
    </Container>
  );
}

const Container = styled.div`
  padding: 15px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  transition: 0.2s;
  &:hover{
    border: 1px solid #111;
  }
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserImage = styled.a`
  margin-right: 15px;
  img{
    height: 64px;
    width: 64px;
    object-fit: cover;
    border-radius: 50%;
  }
`;
const UserName = styled.a`
  flex: 1;
  h1{
    font-size: 20px;
    margin-bottom: 5px;
  }
  p{
    color: #767676;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const FollowButton = styled(DefaultButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 32px;
  border: 1px solid #d1d1d1;
  transition: 0.2s;
  svg{
    width: 20px;
    fill: #767676;
  }
  &:hover{
    border: 1px solid #111;
    svg{
      fill: #111;
    }
  }
`;
const HireButton = styled(DefaultButton)`
  display: none;
  width: 52px;
  height: 32px;
  background: #007fff;
  font-size: 15px;
  color: #fff;
  margin-left: 8px;
  transition: 0.2s;
  &.show{
    display: inline-block;
  }
  &:hover{
    background: #006aff;
  }
`;
const Photos = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 15px 0;
`;
const Photo = styled.div`
  width: 33.3%;
  height: 90px;
  &:nth-child(2){
    margin: 0 10px;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ProfileButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 6px 0;
  border: 1px solid #d1d1d1;
  font-size: 14px;
  letter-spacing: 0.3px;
  font-weight: 500;
  color: #767676;
  transition: 0.2s;
  &:hover{
    border: 1px solid #111;
    color: #111;
  }
`;
export default UsersItem;

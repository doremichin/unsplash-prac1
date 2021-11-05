import React from 'react';
import styled from 'styled-components';

import { IconCheckCircle } from '../../../../icons';

const UserTag = ({ item = {}, color = '' }) => {
  const ableToHire = () => {
    if (item.user.for_hire) return <p className="hire">Available for hire <IconCheckCircle /></p>;
    return <p>@{item.user.username}</p>;
  };
  return (
    <Container>
      <Image>
        <img src={item.user.profile_image.small} alt={item.user.name} />
      </Image>
      <Name className={color}>
        <h2>{item.user.name}</h2>
        {ableToHire()}
      </Name>
    </Container>
  );
};

const Container = styled.div`
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
    display: flex;
    align-items: center;
    &.hire{
      color: #007fff;
      fill: #007fff;
      svg{
        margin-left: 4px;
        width: 15px;
        height: 15px;
      }
      &:hover{
        color: #006aff;
        fill: #006aff;
      }
    }
  }
  &.white{
    h2,p{
      color: #eee;
      fill: #eee;
    }
    &:hover{
      h2,p{
        color: #fff;
        fill: #fff;
      }
    }
  }
`;
export default UserTag;

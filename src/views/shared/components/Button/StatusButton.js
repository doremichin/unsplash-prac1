import React from 'react';
import styled from 'styled-components';

const StatusButton = ({ item, position }) => (
  <Status className={item?.status === 'open' ? 'open' : 'close'} position={position}>
    <span>
      {item?.status}
    </span>
  </Status>
);

const Status = styled.div`
  position: ${(props) => (props.position ? props.position : 'absolute')};
  z-index: 100;
  top: 20px;
  left: 15px;
  padding: 3px 8px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  color: #111;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 14px;
  background: #777;
  &.open{
    background: #c2ebd3;
    &::before{
      background: #3cb46e;
    }
  }
  &::before{
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 5px;
    background: red;
  }
`;
export default StatusButton;

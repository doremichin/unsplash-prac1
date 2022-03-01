import React from 'react';
import styled from 'styled-components';

function StatusButton({
  item, position, top, left,
}) {
  return (
    <Status
      className={item?.status === 'open' ? 'open' : 'close'}
      position={position}
      top={top}
      left={left}
    >
      <span>
        {item?.status}
      </span>
    </Status>
  );
}

const Status = styled.div`
  position: ${(props) => props.position || 'static'};
  z-index: 100;
  top: ${(props) => props.top || 0};
  left: ${(props) => props.left || 0};
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

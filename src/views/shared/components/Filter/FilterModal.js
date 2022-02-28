import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import cn from 'classnames';

import ColorFilterContent from './ColorFilter/ColorFilterContent';
import OrientationFilterContent from './OrientationFilter/OrientationFilterContent';
import SortFilterContent from './SortFilter/SortFilterContent';
import { DefaultButton } from '../Button/Button.Styled';
import { IconCancel } from '../../../../icons';

function FilterModal({ isView, onClickCancel, onClickClear }) {
  const { search } = useLocation();
  const queryString = qs.parse(search, { ignoreQueryPrefix: true });
  useEffect(() => {
    if (isView) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isView]);

  return (
    <Container className={cn({ isView })}>
      <Top>
        <Title>
          Filters
        </Title>
        <CancelButton onClick={onClickCancel}>
          <IconCancel />
        </CancelButton>
      </Top>
      <SortFilter>
        <SortTitle>
          Sort by&nbsp;
          <span>
            {
              queryString.order_by || 'Relevance'
            }
          </span>
        </SortTitle>
        <SortFilterContent isMobile />
      </SortFilter>
      <ColorFilter>
        <ColorTitle>
          Color
        </ColorTitle>
        <ColorFilterContent isMobile />
      </ColorFilter>
      <OrientationFilter>
        <OrientationTitle>
          Orientation
        </OrientationTitle>
        <OrientationFilterContent isMobile />
      </OrientationFilter>
      <Bottom>
        <ClearButton onClick={onClickClear}>
          Clear
        </ClearButton>
        <ApplyButton onClick={onClickCancel}>
          Apply
        </ApplyButton>
      </Bottom>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #fff;
  display: none;
  &.isView{
    display: block;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 12px;
`;
const CancelButton = styled.div`
  fill: #767676;
  svg{
    width: 24px;
  }
`;
const Title = styled.div`
  font-weight: 600;
`;

const SortFilter = styled.div`
  border-top: 1px solid rgba(209,209,209);
  padding: 16px 12px;

`;
const SortTitle = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;
const ColorFilter = styled.div`
  border-top: 1px solid rgba(209,209,209);
  padding: 16px 12px;

`;
const ColorTitle = styled.div`
  color: #767676;
  font-size: 14px;
  margin-bottom: 10px;
`;
const OrientationFilter = styled.div`
  border-top: 1px solid rgba(209,209,209);
  padding: 16px 12px;

`;
const OrientationTitle = styled.div`
  
`;
const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  border-top: 1px solid rgba(209,209,209);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const ClearButton = styled(DefaultButton)`
  flex: 1;
  margin-right: 8px;
  height: 100%;
  border: 1px solid rgba(209,209,209);
  color: #767676;
  font-size: 15px;
`;
const ApplyButton = styled(DefaultButton)`
  flex: 1;
  margin-left: 8px;
  height: 100%;
  background-color: #111;
  color: #fff;
  font-size: 15px;
`;
export default FilterModal;

import React, { useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { IconFilter } from '../../../../icons';
import FilterModal from './FilterModal';

const FilterInMobile = () => {
  const history = useHistory();
  const { query } = useParams();
  const [isView, setIsView] = useState(false);
  const { search } = useLocation();

  const onClickCancel = () => {
    setIsView(!isView);
  };
  const onClickClear = () => {
    history.push(`/search/photos/${query}`);
  };
  return (
    <>
      <Container onClick={onClickCancel}>
        <FilterButton className={cn({ search })}>
          <IconFilter />
        </FilterButton>
      </Container>
      <FilterModal isView={isView} onClickCancel={onClickCancel} onClickClear={onClickClear} />
    </>

  );
};

const Container = styled.div`

`;
const FilterButton = styled.div`
  position: relative;
  cursor: pointer;
  svg{
    width: 18px;
  }
  &.search::after{
    position: absolute;
    top: 3px;
    right: 1px;
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 1px solid #fff;
    background-color: #e25c3d;
  }
`;
export default FilterInMobile;

import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Link, useHistory, useLocation, useParams,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';

import {
  IconCollections, IconImage, IconUsers, IconFilter,
} from '../../../icons';
import { setNumberThousand } from '../../../lib/utils';
import OrientationFilter from '../../shared/components/Filter/OrientationFilter';
import ColorFilter from '../../shared/components/Filter/ColorFilter';
import SortFilter from '../../shared/components/Filter/SortFilter';
import Contain from '../../shared/components/common/Contain';

const SearchLnbContainer = () => {
  const { category, query } = useParams();
  const { photos, collections, users } = useSelector((state) => state.search);
  const history = useHistory();
  const { search } = useLocation();
  const menu = [
    {
      name: 'photos',
      icon: <IconImage />,
      total: photos.total,
    },
    {
      name: 'collections',
      icon: <IconCollections />,
      total: collections.total,
    },
    {
      name: 'users',
      icon: <IconUsers />,
      total: users.total,
    },
  ];
  const [orientationToggle, setOrientationToggle] = useState(false);
  const [colorToggle, setColorToggle] = useState(false);
  const [sortToggle, setSortToggle] = useState(false);

  const clickOrientation = () => {
    setOrientationToggle((p) => !p);
    setColorToggle(false);
    setSortToggle(false);
  };
  const clickColor = () => {
    setColorToggle((p) => !p);
    setOrientationToggle(false);
    setSortToggle(false);
  };
  const clickSort = () => {
    setSortToggle((p) => !p);
    setOrientationToggle(false);
    setColorToggle(false);
  };
  const clickClear = () => {
    setOrientationToggle(false);
    setColorToggle(false);
    setSortToggle(false);
    history.push(`/search/photos/${query}`);
  };
  const clickOut = () => {
    setOrientationToggle(false);
    setColorToggle(false);
    setSortToggle(false);
  };

  const isTablet = useMediaQuery({ maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Container>
      <Nav>
        {
          menu.map(({ name, icon, total }) => (
            <NavItem key={name} to={`/search/${name}/${query}`} className={cn({ active: category === name, isMobile })}>
              <span>{icon}</span>
              {name}&nbsp;
              <span>{setNumberThousand(total)}k</span>
            </NavItem>
          ))
        }
      </Nav>
      {
        category === 'photos'
        && (
          <Contain onClickOut={clickOut}>
            <Filter className={cn({ isTablet })}>
              {
                search !== ''
                && <Clear onClick={clickClear}>Clear</Clear>
              }
              <OrientationFilter clickOrientation={clickOrientation} orientationToggle={orientationToggle} />
              <ColorFilter clickColor={clickColor} colorToggle={colorToggle} />
              <SortFilter clickSort={clickSort} sortToggle={sortToggle} />
            </Filter>
          </Contain>
        )
      }
      {
        isTablet
        && (
          <FilterButton className={cn({ search })}>
            <IconFilter />
          </FilterButton>
        )
      }
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d1d1d1;
  padding: 0 10px;
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
`;
const NavItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  padding: 10px 0;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 15px;
  color: #767676;
  border-bottom: 2px solid transparent;
  transition: 0.3s;
  &.isMobile span{
    display: none;
  }
  svg{
    width: 18px;
    margin-right: 6px;
    fill: #d1d1d1;
    transition: 0.3s;
  }
  &.active {
    color: #111;
    border-bottom: 2px solid #111;
    svg {
      fill: #111;
    }
  }
  &:hover{
    color: #111;
    svg{
      fill: #111;
    }
  }
`;
const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.isTablet{
    display: none;
  }
`;
const Clear = styled.div`
  cursor: pointer;
  color: #767676;
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
export default SearchLnbContainer;

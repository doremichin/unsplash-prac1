import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Link, useHistory, useLocation, useParams,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';

import {
  IconCollections, IconImage, IconUsers,
} from '../../../icons';
import { setNumberThousand } from '../../../lib/utils';
import OrientationFilter from '../../shared/components/Filter/OrientationFilter/OrientationFilter';
import ColorFilter from '../../shared/components/Filter/ColorFilter/ColorFilter';
import SortFilter from '../../shared/components/Filter/SortFilter/SortFilter';
import Contain from '../../shared/components/common/Contain';
import FilterInMobile from '../../shared/components/Filter/FilterInMobile';

const SearchLnbContainer = () => {
  const { category, query } = useParams();
  const { search } = useLocation();
  const { photos, collections, users } = useSelector((state) => state.search);
  const history = useHistory();
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
            <Filters className={cn({ isTablet })}>
              {
                search !== ''
                && <Clear onClick={clickClear}>Clear</Clear>
              }
              <FilterButton onClick={clickOrientation}>
                <OrientationFilter orientationToggle={orientationToggle} />
              </FilterButton>
              <FilterButton onClick={clickColor}>
                <ColorFilter colorToggle={colorToggle} />
              </FilterButton>
              <FilterButton onClick={clickSort}>
                <SortFilter sortToggle={sortToggle} />
              </FilterButton>
            </Filters>
          </Contain>
        )
      }
      {
        isTablet
        && (
          <FilterInMobile />
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
const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.isTablet{
    display: none;
  }
`;
const FilterButton = styled.div`
  margin-left: 20px;
  position: relative;
  cursor: pointer;
`;
const Clear = styled.div`
  cursor: pointer;
  color: #767676;
`;

export default SearchLnbContainer;

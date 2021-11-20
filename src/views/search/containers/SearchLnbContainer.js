import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import qs from 'qs';

import { IconCollections, IconImage, IconUsers } from '../../../icons';
import { setNumberThousand } from '../../../lib/utils';
import OrientationFilter from '../../shared/components/Filter/OrientationFilter';
import ColorFilter from '../../shared/components/Filter/ColorFilter';
import SortFilter from '../../shared/components/Filter/SortFilter';

const SearchLnbContainer = () => {
  const { category, query } = useParams();
  const { photos, collections, users } = useSelector((state) => state.search);
  const { search } = useLocation();
  const queryString = qs.parse(search, { ignoreQueryPrefix: true });
  console.log(queryString);

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

  return (
    <Container>
      <Nav>
        {
          menu.map(({ name, icon, total }) => (
            <NavItem key={name} to={`/search/${name}/${query}`} className={cn({ active: category === name })}>
              {icon}
              {name} {setNumberThousand(total)}k
            </NavItem>
          ))
        }
      </Nav>
      {
        category === 'photos'
        && (
          <Filter>
            <OrientationFilter clickOrientation={clickOrientation} orientationToggle={orientationToggle} />
            <ColorFilter clickColor={clickColor} colorToggle={colorToggle} />
            <SortFilter clickSort={clickSort} sortToggle={sortToggle} />
          </Filter>
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
`;

export default SearchLnbContainer;

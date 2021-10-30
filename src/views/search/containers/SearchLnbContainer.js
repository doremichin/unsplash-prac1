import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import { IconCollections, IconImage, IconUsers } from '../../../icons';
import { setNumberThousand } from '../../../lib/utils';

const SearchLnbContainer = () => {
  const { category, query } = useParams();
  const { photos, collections, users } = useSelector((state) => state.search);

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
  return (
    <Container>
      <Nav>
        {
          menu.map(({ name, icon, total }) => (
            <NavItem to={`/search/${name}/${query}`} className={cn({ active: category === name })}>
              {icon}
              {name} {setNumberThousand(total)}k
            </NavItem>
          ))
        }
      </Nav>
      <Filter />
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
  
`;

export default SearchLnbContainer;

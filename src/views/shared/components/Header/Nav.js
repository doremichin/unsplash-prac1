import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { DefaultButton, WhiteButton } from '../Button/Button.Styled';
import { IconHamburgerMenu } from '../../../../icons';

function Nav() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Container>
      {
        !isMobile
            && (
              <>
                <NavItem to="/topics">Brands</NavItem>
                <NavItem to="/topics">Explore</NavItem>
                <NavItem to="/topics">Blog</NavItem>
                <Line />
                <NavItem to="/topics">Log in</NavItem>
                <SubmitButton>Submit a photo</SubmitButton>
              </>
            )
      }
      <Button><IconHamburgerMenu /></Button>
    </Container>
  );
}

const Container = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
`;
const NavItem = styled(Link)`
    margin-right: 20px;
    color: #767676;
    font-size: 15px;
    font-weight: 500;
    transition: 0.2s;
    &:hover{
        color: #111;
    }
`;
const SubmitButton = styled(WhiteButton)`
    margin-right: 20px;
    padding: 8px 10px;
    border-radius: 4px;
    color: #767676;
    font-size: 15px;
    font-weight: 500;
    transition: 0.2s;
    &:hover{
        border-color: #111;
        color: #111;
    }
`;
const Button = styled(DefaultButton)`
    fill: #767676;
    transition: 0.2s;
    &:hover{
        fill: #111;
    }
`;
const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &::before{
    content: '';
    width: 1px;
    height: 32px;
      margin-right: 20px;
    background: #d1d1d1;
  }
`;
export default Nav;

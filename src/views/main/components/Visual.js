import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SearchBoxContainer from '../../search/containers/SearchBoxContainer';

const Visual = ({ data = {} }) => {
  const a = 1;
  return (
    <Container urls={data.urls.regular}>
      <Content>
        <ContentTitle>
          <h1>Unsplash</h1>
          <p>
            The internet’s source of <Link to="/license">freely-usable images.</Link><br />
            Powered by creators everywhere.
          </p>
        </ContentTitle>
        <SearchBoxContainer shape="square" />
      </Content>
      <PhotoInfo>
        Photo <span>by</span> <a href={data.links.html}>{data.user.name}</a>
      </PhotoInfo>
    </Container>
  );
};

const Container = styled.div`
  height: 560px;
  background: #fff url("${(props) => props.urls}") no-repeat center / cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 80px;
  margin-bottom: 50px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
const Content = styled.div`
  max-width: 850px;
  width: 100%;
  position: relative;
`;
const ContentTitle = styled.div`
  margin-bottom: 20px;
  h1 {
    font-size: 46px;
    color: #fff;
    margin-bottom: 10px;
  }
  p {
    font-weight: 600;
    line-height: 1.6;
    font-size: 18px;
    color: #fff;
    a {
      color: #d1d1d1;
      text-decoration: underline;
      transition: 0.3s;
      &:hover {
        color: #fff;
      }
    }
  }
`;
const PhotoInfo = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 20px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.6px;
  span {
    font-size: 13px;
    color: #fffc;
  }
  a {
    color: #fffc;
    transition: 0.3s;
    &:hover {
      color: #fff;
    }
  }
`;
export default Visual;

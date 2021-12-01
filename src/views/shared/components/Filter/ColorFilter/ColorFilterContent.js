import React from 'react';
import styled from 'styled-components';
import qs from 'qs';
import { Link, useLocation, useParams } from 'react-router-dom';
import cn from 'classnames';

const ColorFilterContent = ({ isMobile }) => {
  const { query } = useParams();
  const { search } = useLocation();
  const queryString = qs.parse(search, { ignoreQueryPrefix: true });
  const toneButtons = [
    { color: 'white', queryColor: 'white' },
    { color: '#4d4d4d', queryColor: 'black' },
    { color: '#fcdc00', queryColor: 'yellow' },
    { color: '#fe9200', queryColor: 'orange' },
    { color: '#f44e3b', queryColor: 'red' },
    { color: '#7b64ff', queryColor: 'purple' },
    { color: '#ab149e', queryColor: 'magenta' },
    { color: '#a4dd00', queryColor: 'green' },
    { color: '#68ccca', queryColor: 'teal' },
    { color: '#009ce0', queryColor: 'blue' },
  ];
  return (
    <Container className={cn({ isMobile })}>
      <ColorButton to={`/search/photos/${query}?${qs.stringify({ ...queryString, color: undefined })}`}>Any Color</ColorButton>
      <ColorButton to={`/search/photos/${query}?${qs.stringify({ ...queryString, color: 'black_and_white' })}`}>Black and white</ColorButton>
      <ColorBox>
        <Title>Tones</Title>
        {
          toneButtons.map((item, index) => (
            <GridInColorBox key={index}>
              <ButtonWrapper>
                <ToneButton color={item.color} to={`/search/photos/${query}?${qs.stringify({ ...queryString, color: item.queryColor })}`} />
              </ButtonWrapper>
            </GridInColorBox>
          ))
        }
      </ColorBox>
    </Container>
  );
};

const Container = styled.div`

`;
const ColorButton = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #767676;
  margin-bottom: 10px;
  width: 160px;
  padding: 10px 30px;
  transition: 0.3s;
  :not(.isMobile) &:hover{
    background-color: #efefef;
    color: #000;
  }

`;
const ColorBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 20px;
  .isMobile &{
    padding: 0 30px;
    max-width: 320px;
  }
`;
const Title = styled.div`
  width: 100%;
  .isMobile &{
    font-size: 14px;
    margin-bottom: 10px;
  }
`;
const GridInColorBox = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  transition: 0.2s;
  .isMobile &{
    justify-content: flex-start;
  }
`;
const ButtonWrapper = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #eee;
  }
  .isMobile &{
    width: 40px;
    height: 40px;
  }
`;
const ToneButton = styled(Link)`
  box-sizing: content-box;
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${(props) => props.color || '#18f'};
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  .isMobile &{
    width: 32px;
    height: 32px;
  }

`;

export default ColorFilterContent;

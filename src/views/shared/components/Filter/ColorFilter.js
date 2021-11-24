import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import qs from 'qs';
import { Link, useLocation, useParams } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';

const ColorFilter = ({ clickColor, colorToggle }) => {
  const { query } = useParams();
  const { search } = useLocation();
  const queryString = qs.parse(search, { ignoreQueryPrefix: true });

  return (
    <Color onClick={clickColor}>
      <ColorName>
        {
          queryString.color && queryString.color !== 'black_and_white'
          && <ColorTag className={queryString.color} />
        }
        {queryString.color || 'Any color'}
        <span className="icon">
          <AiFillCaretDown />
        </span>
      </ColorName>
      <ColorMenu className={cn({ colorToggle })}>
        <ColorButton to={`/search/photos/${query}?${qs.stringify({ ...queryString, color: undefined })}`}>Any Color</ColorButton>
        <ColorButton to={`/search/photos/${query}?${qs.stringify({ ...queryString, color: 'black_and_white' })}`}>Black and white</ColorButton>
        <Tones>
          <p className="tones">Tones</p>
          <div className="gridBox">
            <ToneButton color="white" to={`/search/photos/${query}?${qs.stringify({ ...queryString, color: 'white' })}`} />
          </div>
          <div className="gridBox">
            <ToneButton color="#4d4d4d" to={`/search/photos/${query}?${qs.stringify({ ...queryString, color: 'black' })}`} />
          </div>
          <div className="gridBox">
            <ToneButton color="#fcdc00" to={`/search/photos/${query}?${qs.stringify({ ...queryString, color: 'yellow' })}`} />
          </div>
          <div className="gridBox">
            <ToneButton color="#fe9200" to={`/search/photos/${query}?${qs.stringify({ ...queryString, color: 'orange' })}`} />
          </div>
          <div className="gridBox">
            <ToneButton color="#f44e3b" to={`/search/photos/${query}?${qs.stringify({ ...queryString, color: 'red' })}`} />
          </div>
          <div className="gridBox">
            <ToneButton color="#7b64ff" to={`/search/photos/${query}?${qs.stringify({ ...queryString, color: 'purple' })}`} />
          </div>
          <div className="gridBox">
            <ToneButton color="#ab149e" to={`/search/photos/${query}?${qs.stringify({ ...queryString, color: 'magenta' })}`} />
          </div>
          <div className="gridBox">
            <ToneButton color="#a4dd00" to={`/search/photos/${query}?${qs.stringify({ ...queryString, color: 'green' })}`} />
          </div>
          <div className="gridBox">
            <ToneButton color="#68ccca" to={`/search/photos/${query}?${qs.stringify({ ...queryString, color: 'teal' })}`} />
          </div>
          <div className="gridBox">
            <ToneButton color="#009ce0" to={`/search/photos/${query}?${qs.stringify({ ...queryString, color: 'blue' })}`} />
          </div>
        </Tones>
      </ColorMenu>
    </Color>
  );
};

const Color = styled.div`
  margin-left: 20px;
  position: relative;
  cursor: pointer;

`;
const ColorMenu = styled.div`
  position: absolute;
  z-index: 100;
  top: 30px;
  right: 0;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  font-size: 14px;
  color: #767676;
  display: none;
  &.colorToggle{
    display: block;
  }
`;
const ColorTag = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #f5f5f5;
  margin-right: 5px;
  &.white {
    background-color: #fff;
  }
  &.black {
    background: #4d4d4d;
  }
  &.yellow {
    background: #fcdc00;
  }
  &.orange {
    background: #fe9200;
  }
  &.red {
    background: #f44e3b;
  }
  &.purple {
    background: #7b64ff;
  }
  &.magenta {
    background: #ab149e;
  }
  &.green {
    background: #a4dd00;
  }
  &.teal {
    background: #68ccca;
  }
  &.blue {
    background: #009ce0;
  }
`;
const ColorName = styled.div`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  color: #767676;
  fill: #767676;
  transition: 0.3s;
  &:hover{
    fill: #111;
    color: #111;
  }
  .icon{
    display: flex;
    align-items: center;
    font-size: 12px;
  }
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
  &:hover{
    background-color: #efefef;
    color: #000;
  }
`;
const Tones = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 20px;
  .tones{
    width: 100%;
  }
  .gridBox{
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    transition: 0.2s;
    &:hover{
      background-color: #eee;
    }
  }
`;
const ToneButton = styled(Link)`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${(props) => props.color || '#18f'};
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  
`;

export default ColorFilter;

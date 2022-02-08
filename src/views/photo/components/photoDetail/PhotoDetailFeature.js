import styled from 'styled-components';
import React from 'react';

import { IconDotMenu, IconInfo, IconShare } from '../../../../icons';
import { WhiteButton } from '../../../shared/components/Button/Button.Styled';

const PhotoDetailFeature = ({ detail }) => {
  const keys = Object.keys(detail.topic_submissions);

  return (
    <Info>
      <FeatureList>
        <Feature>
          <h4>Views</h4>
          <span>{detail.views.toLocaleString()}</span>
        </Feature>
        <Feature>
          <h4>Downloads</h4>
          <span>{detail.downloads.toLocaleString()}</span>
        </Feature>
        {
            keys.length > 0
              ? (
                <Feature>
                  <h4>Featured in</h4>
                  Editorial,&nbsp;
                  {
                    keys.map((item, index) => <span key={index}>{item}</span>)
                  }
                </Feature>
              ) : (
                <Feature>
                  <h4>Featured in</h4>
                  Editorial
                </Feature>
              )
          }
      </FeatureList>
      <ButtonBox>
        <Button>
          <IconShare />
          <span>Share</span>
        </Button>
        <Button>
          <IconInfo />
          <span>Info</span>
        </Button>
        <Button>
          <IconDotMenu />
        </Button>
      </ButtonBox>
    </Info>
  );
};

const ButtonBox = styled.div`
  display: flex;
  max-width: 100%;
`;

const Button = styled(WhiteButton)`
  height: 32px;
  padding: 0 10px;
  margin-left: 10px;
  fill: #767676;
  transition: 0.3s;
  svg{
    width: 16px;
  }
  &:hover{
    fill: #111;
    border-color: #111;
    h4,span{
      color: #111;
    }
  }
  span{
    font-weight: 500;
    color: #767676;
    margin-left: 5px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const FeatureList = styled.div`
  display: flex;
  align-items: center;
  .isMobile &{
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Feature = styled.div`
  margin-right: 40px;
  white-space: nowrap;
  h4{
    font-weight: 500;
    font-size: 14px;
    color: #767676;
    margin-bottom: 5px;
  }
  span{
    font-size: 15px;
    color: #111;
    font-weight: 600;
    margin-right: 8px;
    text-transform: capitalize;
  }
  .isMobile &{
    margin-bottom: 20px;
    span{
      margin-right: 0;
    }
  }
`;

export default PhotoDetailFeature;

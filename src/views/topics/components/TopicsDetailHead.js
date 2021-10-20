import React from 'react';
import styled from 'styled-components';

import { DefaultButton } from '../../shared/components/Button/Button.Styled';
import {
  IconContributions, IconCurator, IconStatus, IconTopContributors,
} from '../../../icons';
import StatusButton from '../../shared/components/Button/StatusButton';

const TopicsDetailHead = ({ data }) => {
  const handlePhotosCount = () => {
    const count = data.total_photos;
    if (count >= 1000) {
      return (`${(Math.floor(count / 100)) / 10}k`);
    }
    return count;
  };
  return (
    <Container>
      <Title>
        <h1>{data.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: data.description }} />
      </Title>
      <Info>
        <StatusBox>
          <li>
            <StatusTitle>
              <IconStatus />
              Status
            </StatusTitle>
            <StatusButton position="static" item={data} />
          </li>
          <li>
            <StatusTitle>
              <IconCurator />
              Curator
            </StatusTitle>
            <a href={data.owners[0]?.portfolio_url} className="curatorImg">
              <img src={data.owners[0]?.profile_image.small} alt={data.owners[0]?.username} />
            </a>
          </li>
          <li>
            <StatusTitle>
              <IconContributions />
              Contributions
            </StatusTitle>
            {handlePhotosCount()}
          </li>
          <li>
            <StatusTitle>
              <IconTopContributors />
              Top contributors
            </StatusTitle>
            <TopContributors>
              {
                (data.top_contributors).map((item) => (
                  <a href={item.portfolio_url}>
                    <img src={item.profile_image.small} alt="" />
                  </a>
                ))
              }
            </TopContributors>
          </li>
        </StatusBox>
        <SubmitButton>
          Submit to&nbsp;
          <strong>
            {data.title}
          </strong>
        </SubmitButton>
      </Info>
    </Container>
  );
};
const Container = styled.div`
  padding: 60px 10px;
  color: #111;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  max-width: 50%;
  h1{
    font-size: 46px;
    font-weight: 900;
    margin-bottom: 10px;
  }
  p{
    font-size: 18px;
  }
  a{
    text-decoration: underline;
    color: #717171;
  }
`;
const Info = styled.div`
  
`;
const StatusBox = styled.ul`
  width: 420px;
  height: 230px;
  border: 1px solid #d1d1d1;
  border-radius: 3px;
  padding: 10px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  li{
    border-bottom: 1px solid #d1d1d1;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 800;
    svg{
      width: 18px;
      fill: #d1d1d1;
      margin-right: 10px;
    }
    &:last-child{
      border-bottom: none;
    }
    .curatorImg{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
`;
const StatusTitle = styled.div`
  display: flex;
  align-items: center;
`;
const SubmitButton = styled(DefaultButton)`
  background: #000;
  color: #fff;
  width: 100%;
  height: 44px;
  font-size: 15px;
`;
const TopContributors = styled.div`
  a{
    img{
      width: 18px;
      border-radius: 50%;
    }
    margin-left: 8px;
  }
`;
export default TopicsDetailHead;

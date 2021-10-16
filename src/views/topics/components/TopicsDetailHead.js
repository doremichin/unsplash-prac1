import React from 'react';
import styled from 'styled-components';

import { DefaultButton } from '../../shared/components/Button/Button.Styled';
import {
  IconContributions, IconCurator, IconStatus, IconTopContributors,
} from '../../../icons';
import StatusButton from '../../shared/components/Button/StatusButton';

const TopicsDetailHead = ({ data }) => (
  <Container>
    <Title>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
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
        </li>
        <li>
          <StatusTitle>
            <IconContributions />
            Contributions
          </StatusTitle>
        </li>
        <li>
          <StatusTitle>
            <IconTopContributors />
            Top contributors
          </StatusTitle>
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
`;
const Info = styled.div`
  
`;
const StatusBox = styled.ul`
  width: 420px;
  height: 230px;
  border: 1px solid #d1d1d1;
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
    font-size: 15px;
    font-weight: 500;
    svg{
      width: 18px;
      fill: #d1d1d1;
      margin-right: 10px;
    }
    &:last-child{
      border-bottom: none;
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

export default TopicsDetailHead;

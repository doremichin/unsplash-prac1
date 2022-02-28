import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';

import { DefaultButton } from '../../shared/components/Button/Button.Styled';
import {
  IconCurator, IconImage, IconStatus, IconUsers,
} from '../../../icons';
import StatusButton from '../../shared/components/Button/StatusButton';
import { setNumberThousand } from '../../../lib/utils';

function TopicsDetailHead({ data }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Container className={cn({ isMobile })}>
      <Title>
        <h1>{data.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: data.description }} />
      </Title>
      <Info>
        <StatusBox>
          <li>
            <StatusTitle>
              <IconStatus />
              <span>Status</span>
            </StatusTitle>
            <StatusButton position="static" item={data} />
          </li>
          <li>
            <StatusTitle>
              <IconCurator />
              <span>Curator</span>
            </StatusTitle>
            <a href={data.owners[0]?.portfolio_url} className="curatorImg">
              <img src={data.owners[0]?.profile_image.small} alt={data.owners[0]?.username} />
            </a>
          </li>
          <li>
            <StatusTitle>
              <IconImage />
              <span>Contributions</span>
            </StatusTitle>
            {setNumberThousand(data.total_photos)}
            k
          </li>
          <li>
            <StatusTitle>
              <IconUsers />
              <span>Top contributors</span>
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
}

const Container = styled.div`
  padding: 60px 10px;
  color: #111;
  display: flex;
  justify-content: space-between;
  &.isMobile {
    flex-direction: column;
  }
`;
const Title = styled.div`
  width: 66%;
  h1{
    font-size: 46px;
    font-weight: 900;
    margin-bottom: 10px;
  }
  p{
    font-size: 18px;
    margin-right: 20%;
    line-height: 1.6;
  }
  a{
    text-decoration: underline;
    color: #717171;
  }
  .isMobile &{
    width: 100%;
    margin-bottom: 30px;
    h1{
      font-size: 32px;
    }
    p{
      font-size: 16px;
      margin-right: 0;
    }
  }
`;
const Info = styled.div`
  min-width: 315px;
  width: 33%;
  .isMobile &{
    width: 100%;
  }
`;
const StatusBox = styled.ul`
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
    font-weight: 500;
    font-size: 14px;
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
  .isMobile &{
    border: none;
    padding: 0 10px;
    height: 190px;
  }
`;
const StatusTitle = styled.div`
  display: flex;
  align-items: center;
  svg{
    width: 18px;
    fill: #d1d1d1;
    margin-right: 10px;
  }
  span{
    position: relative;
    top: 2px;
  }
`;
const SubmitButton = styled(DefaultButton)`
  background: #000;
  color: #fff;
  width: 100%;
  height: 44px;
  font-size: 15px;
  strong{
    color: #fff;
  }
`;
const TopContributors = styled.div`
  a{
    img{
      width: 18px;
      border-radius: 50%;
    }
    margin-left: 7px;
  }
`;
export default TopicsDetailHead;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainWrapper = styled.div`
  padding: 0 1rem 0.5rem;
`;

export const TopWrapper = styled.div`
  display: flex;
  min-height: 50vh;

  @media (max-width: 1020px) {
    flex-direction: column;
  }
`;

export const PhotoWrapper = styled.div`
  width: 45%;

  @media (max-width: 1020px) {
    width: 100%;
    order: 1;
  }
`;

export const MainInfoWrapper = styled.div`
  width: 55%;
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 1020px) {
    margin-left: 0;
    margin-top: 0.5rem;
    width: 100%;
  }
`;

export const LinksWrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h4`
  margin: 0.7rem 0;
`;

export const UnderTitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 13px;

  @media (max-width: 1020px) {
    justify-content: space-between;
  }
`;

export const UnderTitle = styled.div`
  flex: 240px 0 1;

  :first-of-type {
    font-size: 14px;
  }

  @media (max-width: 1020px) {
    flex: auto 1 1;
    min-width: 125px;
  }
`;

export const Producer = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  color: rgb(117, 117, 117);

  :hover {
    color: rgb(26, 26, 26);
    text-decoration: underline;
  }
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  margin: 0.7rem 0;
  font-size: 14px;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export const ProductInfo = styled.ul`
  flex: 1.2;
  margin: 0;
  padding: 0;

  @media (max-width: 560px) {
    order: 1;
  }
`;

export const Info = styled.li`
  list-style: none;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 0.3rem 0;

  :first-of-type {
    padding-top: 0.2rem;
    border-top: 1px solid #bfbfbf;
  }

  @media (max-width: 560px) {
    display: flex;
    justify-content: center;
    width: 100%;

    :first-of-type {
      padding-top: 0.7rem;
      margin: 0;
    }
  }
`;

export const InfoDescription = styled.span`
  padding-left: 0.2rem;
  font-weight: 500;
`;

export const ProductPrice = styled.div`
  flex: 1;
  border: 1px solid #bfbfbf;
  border-radius: 8px;
  padding: 1rem 0.2rem;

  @media (max-width: 560px) {
    border: none;
    border-top: 1px solid #bfbfbf;
    border-radius: 0;
    padding-bottom: 0.1rem;
    padding-top: 0.5rem;
  }
`;

export const BottomWrapper = styled.div`
  min-height: 35vh;
`;

export const BottomSpecTitle = styled.h3`
  font-size: 26px;
  line-height: 32px;
  margin: 16px 0 24px 0;
  color: rgb(0, 0, 0);
`;

export const BottomSpecList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const BottomSpecItem = styled.li`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  padding: 8px;
  margin: 0px;
  border-top: 1px solid rgb(238, 238, 238);
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  :nth-child(2n + 1) {
    background: rgb(249, 249, 249);
  }

  :last-of-type {
    border-bottom: 1px solid rgb(238, 238, 238);
  }

  @media (max-width: 420px) {
    padding: 8px 0;
  }
`;

export const ItemName = styled.div`
  font-weight: 600;
  margin-left: 0%;
  width: 33.3333%;

  @media (min-width: 480px) {
    width: 41.6667%;
    margin-left: 0%;
    padding-left: 8px;
    padding-right: 8px;
  }

  @media (min-width: 768px) {
    width: 25%;
    margin-left: 16.66%;
    padding-left: 12px;
    padding-right: 12px;
  }

  @media (min-width: 992px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

export const ItemContent = styled.div`
  font-size: 14px;
  line-height: 20px;
  width: 66.6666%;
  margin: auto 0;

  @media (max-width: 405px) {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 480px) {
    padding-left: 8px;
    padding-right: 8px;
    width: 58.3333%;
  }

  @media (min-width: 768px) {
    padding-left: 12px;
    padding-right: 12px;
    width: 41.6667%;
  }

  @media (min-width: 992px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

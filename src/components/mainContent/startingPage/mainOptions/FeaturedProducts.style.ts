import styled, { css } from 'styled-components';

import { Icon } from 'office-ui-fabric-react/lib/Icon';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 0 1rem;
  max-width: 1366px;
  margin: 0 auto;

  @media (max-width: 990px) {
    align-items: center;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid rgb(240, 240, 240);
  position: relative;
  align-items: center;

  @media (max-width: 990px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 750px) {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const RowExamples = styled.div`
  flex: 2.5;
  display: flex;
  justify-content: space-around;

  @media (max-width: 990px) {
    padding-top: 0.5rem;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const Examples = styled.div`
  max-width: 200px;
  flex: 1;
  position: relative;

  @media (min-width: 1030px) {
    max-width: 400px;

    :first-of-type {
      margin-left: 0.3rem;
    }
  }
`;

export const ExamplesImg = styled.img`
  width: 100%;
`;

export const ExapmlesDetails = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  font-weight: 400;
  font-size: 18px;
  background: rgba(209, 70, 17, 0.7);
  z-index: -1;
  opacity: 0;
  transition: all 0.3s;
  color: #fff;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 0.2rem 30%;

  & :first-child {
    text-decoration: underline;
    font-weight: 500;
  }

  ${Examples}:hover & {
    z-index: 1;
    opacity: 1;
  }

  & p {
    font-size: 20px;
    margin: 0;
  }
`;

const MoreButton = css`
  position: absolute;
  font-weight: 400;
  background-color: #2d2c2c;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  height: 2.5rem;
  user-select: none;
`;

export const ExamplesMoreButton = styled.div`
  ${MoreButton};
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;
  width: 7rem;
`;

export const MoreButtonContainer = styled.div`
  ${MoreButton};
  right: 0;
  bottom: 0;
  width: 6rem;
  text-transform: capitalize;
  transition: all 0.2s;
  cursor: pointer;

  :hover {
    background-color: #d14611;
  }

  :active {
    color: #970816;
    background-color: #2d2c2c;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const ButtonIcon = styled(Icon)`
  margin-left: 0.3rem;
  padding-top: 3px;
  font-size: 14px;
`;

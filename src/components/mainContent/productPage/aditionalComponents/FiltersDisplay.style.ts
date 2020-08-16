import styled from 'styled-components';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export const Wrapper = styled.div`
  grid-column: 1 / -1;
  min-height: 35px;
  text-transform: capitalize;
  padding: 0.45rem 0.5rem;
  color: #000;
  font-size: 14px;
  display: flex;
`;

export const LeftWrapper = styled.div`
  padding-top: 0.3rem;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ActiveInfoCloseBtn = styled(Icon)`
  flex: 0 0 1.2rem;
  background-color: transparent;
  transition: background-color 0.2s;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: center;
`;

export const PriceFilterActiveInfo = styled.div`
  margin: 0.4rem 0.5rem 0 0.5rem;
  width: 5.7rem;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 666px;
  display: flex;
  font-size: 13px;
  position: relative;
  cursor: pointer;

  :hover ${ActiveInfoCloseBtn} {
    background-color: rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 342px) {
    margin-top: 0.7rem;
  }
`;

export const PriceTextDescription = styled.div`
  position: absolute;
  top: -1rem;
`;

export const ActiveInfoText = styled.div`
  flex: 1;
  text-align: center;
  padding-left: 0.6rem;
`;

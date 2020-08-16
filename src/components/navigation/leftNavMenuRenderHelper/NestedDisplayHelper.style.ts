import styled, { css } from 'styled-components';

import { Icon } from 'office-ui-fabric-react/lib/Icon';
import * as I from '../../../@types/style.types';

export const NavUnderTitle = styled.ul`
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const UnderItems = styled.li`
  height: 42px;
  display: flex;
  position: relative;

  :hover {
    background-color: ${(props) => props.theme.leftNavBgHover};
  }

  :active {
    background-color: ${(props) => props.theme.leftNavBgActive};
  }
`;

export const ItemsCheckbox = styled.div`
  width: 50px;
`;

export const ItemsLink = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 42px;
  padding-left: 8px;
  text-transform: capitalize;
`;

export const CheckboxWrapper = styled.div`
  height: 42px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperInput = styled.div<I.ActiveBoolean>`
  line-height: 1;
  width: 18px;
  height: 18px;
  position: relative;

  ${({ active }) =>
    active &&
    css`
      ::before {
        content: '';
        position: absolute;
        top: 1px;
        right: 1px;
        bottom: 1px;
        left: 1px;
        opacity: 1;
        border-radius: 50%;
        background: rgb(0, 176, 240);
      }
    `}
`;

export const InputCircle = styled(Icon)`
  font-size: 18px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 18px;
  height: 18px;
  text-align: center;
  vertical-align: middle;
  color: rgb(200, 200, 200);
`;

export const InputCheckmark = styled(Icon)<I.InputCheckmark>`
  font-size: 16px;
  position: absolute;
  left: 0.5px;
  top: 0px;
  width: 18px;
  height: 18px;
  text-align: center;
  vertical-align: middle;
  opacity: 0;
  color: rgb(200, 200, 200);

  :hover {
    opacity: 1;
  }

  ${({ hovered }) =>
    hovered &&
    css`
      opacity: 1;
    `}

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      color: rgb(255, 255, 255);
    `}
`;

export const PriceFilterWrapper = styled.div`
  height: 25px;
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-left: 2rem;
  font-size: 16px;
`;

export const PriceFilterInputsWrapper = styled.div`
  height: 30px;
  margin: 0 0.6rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
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
  margin-left: 3rem;
  width: 4rem;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 666px;
  display: flex;
  font-size: 13px;

  :hover ${ActiveInfoCloseBtn} {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export const ActiveInfoText = styled.div`
  flex: 1;
  text-align: center;
`;

export const PriceFilterInput = styled.div<I.PriceFilterInput>`
  width: 45%;
  height: 30px;
  display: inline-flex;
  max-width: 100%;
  height: 32px;
  margin-top: 0.3rem;
  border: 1px solid #4d4d4d;
  border-radius: 666px;
  overflow: hidden;
  background: #fff;

  ${(props) =>
    props.redBorder &&
    css`
      border: 1px solid rgb(180, 3, 28);
    `}
`;

export const PriceInput = styled.input`
  width: 90%;
  border: none;
  text-align: center;
  margin-left: 0.5rem;
  padding-bottom: 0.05rem;

  :focus {
    outline: none;
  }
`;

export const PriceCurrency = styled.span`
  display: flex;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 13px;
  line-height: 16px;
  width: 10%;
  margin-right: 0.2rem;
  color: rgba(0, 0, 0, 0.5);
`;

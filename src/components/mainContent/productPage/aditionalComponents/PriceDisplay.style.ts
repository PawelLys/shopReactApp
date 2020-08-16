import styled, { css } from 'styled-components';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import * as I from '../../../../@types/style.types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopWrapper = styled.div`
  font-weight: 500;
`;

export const DiscoutSave = styled.div`
  text-align: right;
  font-size: 14px;
  line-height: 20px;
  color: rgb(26, 26, 26);
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

export const OldPrice = styled.div`
  font-size: 18px;
  line-height: 24px;
  margin-right: 8px;
  color: rgb(148, 148, 148);
  text-decoration: line-through;
`;

export const NewPrice = styled.div`
  text-align: end;
  font-size: 32px;
  line-height: 38px;
  font-weight: 600;
`;

export const BottomWrapper = styled.div`
  padding: 14px 16px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  user-select: none;

  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const BottomCounterWrapper = styled.div`
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  margin-right: 12px;
  position: relative;
`;

export const BottomCounter = styled.div<I.BottomCounter>`
  width: 56px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #bfbfbf;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${(props) =>
    props.resetBottomRadius &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
`;
//user-select: text;
export const CounterIcon = styled(Icon)`
  position: absolute;
  right: 20%;
  font-size: 10px;
  cursor: pointer;
`;

export const CounterChooserWrapper = styled.div`
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  background-color: rgb(255, 255, 255);
  box-shadow: none;
  margin-top: -1px;
  max-height: 350px;
  position: absolute;
  top: 100%;
  width: 56px;
  z-index: 999;
  border: 1px;
  border-style: solid;
  border-color: rgb(238, 238, 238) rgb(204, 204, 204) rgb(204, 204, 204);
  border-image: initial;
  overflow: hidden;
`;

export const CounterChooser = styled.div`
  max-height: 348px;
  overflow-y: auto;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;

export const ChooserElement = styled.div<I.ChooserElement>`
  background-color: rgb(255, 255, 255);
  color: rgb(26, 26, 26);
  font-weight: 400;
  cursor: pointer;
  display: flex;
  min-height: 30px;
  line-height: 16px;
  align-items: center;
  padding: 8px 16px;
  justify-content: center;

  ${(props) =>
    props.choosenValue &&
    css`
      font-weight: 700;
    `}

  :hover {
    background-color: rgb(225, 225, 225);
  }
`;

export const CounterAsInput = styled.input`
  display: block;
  width: 56px;
  height: 40px;
  text-align: center;
  border-radius: 20px;
  color: rgb(26, 26, 26);
  padding: 0px 12px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(204, 204, 204);
  border-image: initial;
  background: padding-box rgb(255, 255, 255);

  text-shadow: none;
  text-rendering: auto;
  text-shadow: none;
  text-align: center;
  cursor: text;

  :focus {
    outline: none;
  }
`;

export const CounterWarning = styled.p`
  position: absolute;
  bottom: -17px;
  left: 5px;
`;

export const BottomBtnWrapper = styled.div`
  flex: 1;
`;

export const BottomBtn = styled.button`
  white-space: nowrap;
  width: 100%;
  height: 40px;
  color: rgb(255, 255, 255);
  padding: 0px 8px;
  background: rgb(19, 172, 0);
  border-radius: 20px;
  border: 1px solid rgb(0, 82, 0);
  cursor: pointer;

  :focus {
    outline: none;
  }

  :hover {
    transition: 0.2s;
    background: rgb(0, 82, 0);
  }
`;

export const BtnDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
`;

export const CartIcon = styled(Icon)`
  padding-top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

export const Description = styled.span`
  margin-left: 4px;
  font-size: 15px;
  line-height: 24px;
`;

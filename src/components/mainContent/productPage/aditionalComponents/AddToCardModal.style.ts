import styled, { css } from 'styled-components';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import * as I from '../../../../@types/style.types';

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.45);
`;

export const ModalContent = styled.div`
  display: flex;
  min-height: 216px;
  max-width: 600px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background: rgb(255, 255, 255);
  min-width: 750px;
  overflow: hidden;

  @media (max-width: 1366px) {
    min-width: 600px;
  }

  @media (max-width: 768px) {
    min-width: auto;
  }

  @media (max-width: 480px) {
    min-height: 56px;
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    padding: 8px;
  }
`;

export const TopContent = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 14px 10px 18px;
  width: 100%;
  border-radius: 4px 4px 0px 0px;
  border-bottom: 1px solid rgb(221, 221, 221);
  background-color: rgb(231, 231, 231);
  min-width: 750px;
  min-height: 48px;

  @media (max-width: 1366px) {
    min-width: 600px;
    padding: 8px 12px 8px 16px;
  }

  @media (max-width: 768px) {
    min-width: auto;
  }

  @media (max-width: 480px) {
    border-radius: 0px;
    padding: 12px 8px;
  }
`;

export const TopCheckMarkIcon = styled(Icon)`
  color: #13ac00;
  font-size: 28px;
  font-weight: 600;
  margin-right: 0.5rem;
  margin-top: 0.2rem;

  @media (max-width: 1366px) {
    font-size: 26px;
  }
`;

export const TopContentText = styled.h4`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  flex: 1;

  @media (max-width: 1366px) {
    font-size: 22px;
  }
`;

export const TopCloseIcon = styled(Icon)`
  font-size: 28px;
  font-weight: 600;
  min-width: 45px;
  min-height: 45px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s background-color;

  :hover {
    background-color: rgb(211, 211, 211);
  }

  @media (max-width: 1366px) {
    font-size: 26px;
    min-width: 40px;
    min-height: 40px;
  }
`;

export const BottomContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem 0;
  padding-bottom: 1rem;
  min-height: 100px;
  max-height: calc(100vh - 112px);

  @media (max-width: 768px) {
    min-height: 200px;
    max-height: calc(100vh - 128px);
    padding: 0.75rem 0.6rem 0;
  }

  @media (max-width: 480px) {
    min-height: 200px;
    max-height: calc(100vh - 56px);
    padding-top: 1.2rem;
  }
`;

export const BottomContentProduct = styled.div`
  display: flex;
`;

export const ProductImgContainer = styled.div`
  margin-right: 0.68rem;
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 116px;

  @media (max-width: 1366px) {
    width: 95px;
  }

  @media (max-width: 768px) {
    width: 72px;
  }
`;

export const ProductImg = styled.img`
  object-fit: contain;
  height: auto;
  width: 100%;
`;

export const ProductDescription = styled.div`
  font-size: 18px;
  line-height: 1.7;
  color: #4d4d4d;

  @media (max-width: 1366px) {
    font-size: 15px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.4;
  }
`;

export const BottomBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 18px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BottomBtn = styled.button<I.ModalBottomBtn>`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  border-radius: 666px;
  background-color: rgb(245, 245, 245);
  font-size: 18px;
  line-height: 16px;
  color: rgb(26, 26, 26);
  margin-bottom: 0px;
  height: 45px;
  padding: 10px 16px;
  outline: none;
  border: 1px solid rgb(225, 225, 225);
  transition: 0.2s background-color;

  @media (max-width: 1366px) {
    font-size: 15px;
    padding: 9px 14px;
    height: 40px;
  }

  @media (max-width: 768px) {
    margin-bottom: 8px;
    width: 100%;
  }

  :focus {
    outline: none;
  }

  :hover {
    background-color: rgb(231, 231, 231);
  }

  ${(props) =>
    props.rightIconDirection &&
    css`
      flex-direction: row-reverse;
      background-color: rgb(19, 172, 0);
      color: #fff;

      :hover {
        background-color: rgb(14, 122, 0);
      }
    `}
`;

export const BtnNexIcon = styled(Icon)`
  font-size: 16px;
  margin: 0px 8px;

  @media (max-width: 1366px) {
    font-size: 14px;
    margin: 0px 6px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    margin: 0px 4px;
  }
`;

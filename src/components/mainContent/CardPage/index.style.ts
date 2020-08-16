import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import * as I from '../../../@types/style.types';

export const CardWrapper = styled.div`
  padding: 0 0.5rem;
  min-height: 52vh;
  max-width: 1366px;
  margin: 0 auto;

  @media (min-width: 480px) {
    padding: 0 1rem;
  }
`;

// Empty Card
export const EmptyCardInfoContainer = styled.div`
  border-top: 1px solid rgb(238, 238, 238);
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-flow: column nowrap;
`;

export const EmptyCardInfoText = styled.h2`
  font-size: 26px;
  line-height: 32px;
  color: rgb(26, 26, 26);
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;

export const EmptyCardBelowText = styled.p`
  margin: 0;
  font-size: 17px;
  line-height: 24px;
  color: rgb(117, 117, 117);
  margin-top: 8px;
  display: flex;
  justify-content: center;
`;

const CardBtn = styled(Link)`
  background-color: rgb(0, 130, 250);
  font-size: 16px;
  color: rgb(255, 255, 255);
  display: inline-block;
  min-height: 40px;
  border-radius: 666px;
  padding: 8px 16px;
  border-style: none;
  text-decoration: none;

  @media (min-width: 768px) {
    height: 40px;
    width: 364px;
    font-size: 15px;
    line-height: 20px;
    margin: 24px auto 32px;
  }
`;

export const EmptyCardReturnBtn = styled(CardBtn as any)`
  background-color: rgb(0, 130, 250);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 12px;
  width: auto;

  :hover {
    background-color: rgb(0, 112, 204);
    color: rgb(255, 255, 255);
    text-decoration: none;
  }
`;

//Products in card

export const ProductCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const UtilitesContainer = styled.div`
  grid-column: 1/-1;

  @media (min-width: 480px) {
    display: flex;
    border-bottom: 1px solid rgb(221, 221, 221);
  }

  @media (min-width: 768px) {
    grid-column: 1/3;
    border-bottom: none;
  }
`;

export const CardTitle = styled.h2`
  color: rgb(0, 0, 0);
  font-size: 22px;
  line-height: 28px;
  font-weight: bold;
  margin: 0px 0px 16px;
  width: 100%;
`;

export const CardTitleAmount = styled.span`
  color: rgb(117, 117, 117);
  font-size: 22px;
  line-height: 28px;
  font-weight: bold;
  margin-left: 0.3rem;
`;

export const CardOptions = styled.div<I.HideBorderBottom>`
  height: 48px;
  padding: 0px 16px;
  border-top: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;

  @media (min-width: 480px) {
    border-top: none;
    border-bottom: none;
  }

  ${(props) =>
    props.hideBorderBottom &&
    css`
      border-bottom: none;
    `}
`;

export const CardOption = styled.div`
  line-height: 12px;
  height: 40px;
  color: rgb(77, 77, 77);
  width: auto;
  cursor: pointer;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  background-color: transparent;
  font-size: 14px;
  width: 100%;
  color: rgb(26, 26, 26);
  justify-content: center;
  user-select: none;

  :hover {
    color: rgb(26, 26, 26);
    background: rgb(245, 245, 245);
    border-radius: 666px;
  }
`;

export const CardOptionIcon = styled(Icon)`
  margin-right: 4px;
`;

export const CardOptionText = styled.span`
  white-space: nowrap;
  padding: 14px 0px;
`;

export const PromotialCodeWrapper = styled.div<I.DisplayBoolean>`
  grid-column: 1/-1;
  min-height: 48px;
  padding: 0px 16px;
  border-top: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);
  padding: 4px 8px;

  @media (min-width: 480px) {
    border-top: none;
  }

  @media (min-width: 768px) {
    grid-column: 1/3;
    border-top: 1px solid rgb(221, 221, 221);
    border-bottom: none;
  }

  ${(props) =>
    props.shouldDisplay
      ? css`
          display: flex;
          flex-direction: column;
        `
      : css`
          display: none;
        `}
`;

export const PromotialCodeWrapperTitle = styled.div`
  font-size: 16px;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PromotialCodeWrapperClose = styled(Icon)`
  font-size: 16px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    color: rgb(26, 26, 26);
    background: rgb(245, 245, 245);
    border-radius: 666px;
  }
`;

export const PromotialCodeInputWrapper = styled.div`
  min-height: 40px;
`;

export const PromotialCodeInput = styled.input`
  font-size: 14px;
  line-height: 20px;
  padding-left: 20px;
  border-radius: 20px;
  min-width: 50px;
  margin-right: -32px;
  padding-right: 40px;
  text-align: left;
  display: inline-block;
  font-size: 13px;
  line-height: 16px;
  height: 32px;
  text-align: center;
  color: rgb(26, 26, 26);
  padding: 0px 12px;
  border: 1px solid rgb(204, 204, 204);
  background: padding-box rgb(255, 255, 255);

  :focus {
    outline: none;
  }
`;

export const ProductContainer = styled.ul`
  grid-column: 1/-1;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
    grid-column: 1/3;
  }
`;

export const ProductItem = styled.li`
  list-style-type: none;
  display: flex;
  box-sizing: border-box;
  padding: 12px 0px;
  border-bottom: 1px solid rgb(221, 221, 221);

  @media (min-width: 768px) {
    border-left: 1px solid rgb(221, 221, 221);
    border-right: 1px solid rgb(221, 221, 221);
    padding: 12px 16px 12px 12px;

    :last-of-type {
      border: 1px solid rgb(221, 221, 221);
      border-top: none;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    :first-of-type {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border: 1px solid rgb(221, 221, 221);
    }
  }
`;

export const ProductItemPhotoContainer = styled(Link)`
  flex: 0 0 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductItemPhoto = styled.img`
  object-fit: contain;
  width: 100%;
`;

export const ProductItemInfo = styled.div`
  margin-left: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: wrap;
`;

export const ProductIteminfoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 0.2rem;

  @media (min-width: 1200px) {
    width: auto;
  }
`;

export const ProductItemInfoTitle = styled(Link)`
  font-size: 14px;
  margin-bottom: 4px;

  :hover {
    text-decoration: underline;
  }
`;

export const ProductItemInfoIconWrapper = styled.div<I.DisplayBoolean>`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 0.3rem;
  position: relative;

  :hover {
    color: rgb(26, 26, 26);
    background: rgb(245, 245, 245);
    border-radius: 666px;
  }

  ${(props) =>
    props.shouldDisplay &&
    css`
      color: rgb(26, 26, 26);
      background: rgb(245, 245, 245);
      border-radius: 666px;
    `}

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const ProductItemInfoIcon = styled(Icon)`
  font-size: 15px;
  user-select: none;
`;

export const ProductItemInfoModal = styled.div`
  display: flex;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.32) 0px 2px 6px;
  position: absolute;
  top: 30px;
  right: 0;
  flex-direction: column;
  z-index: 4;
  width: max-content;
  border-radius: 8px;
  padding: 4px 0px;
  overflow: hidden;
`;

export const InfoModalBtn = styled.button`
  padding: 0px 16px;
  display: flex;
  align-items: center;
  background-color: transparent;
  font-size: 14px;
  line-height: 20px;
  width: 100%;
  color: rgb(26, 26, 26);
  border: none;
  user-select: none;

  :hover {
    background-color: rgb(245, 245, 245);
    color: rgb(0, 0, 0);
  }

  :focus {
    outline: none;
  }
`;

export const InfoModalBtnIcon = styled(Icon)`
  margin-right: 0.4rem;
`;

export const InfoModalBtnText = styled.div`
  white-space: nowrap;
  padding: 14px 0px;
`;

export const ProductPriceText = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
`;

export const ProductDeleteIcon = styled(CardOptionIcon)`
  display: none;
  margin-left: 0.3rem;
  margin-right: 0;
  padding: 0.3rem 0.4rem;
  cursor: pointer;

  :hover {
    color: rgb(26, 26, 26);
    background: rgb(240, 240, 240);
    border-radius: 666px;
  }

  @media (min-width: 1200px) {
    display: initial;
  }
`;

// Payment Section

export const PaymentsBtnContainer = styled.div`
  grid-column: 1/-1;
  color: rgb(26, 26, 26);
  font-size: 14px;
  line-height: 20px;
  border-bottom: 1px solid rgb(221, 221, 221);
  background: rgb(245, 245, 245);
  padding: 16px;

  @media (min-width: 768px) {
    grid-column: 3/-1;
    grid-row: 1/10;
    height: fit-content;
    border-radius: 8px;
    border: 1px solid rgb(221, 221, 221);
    margin-left: 1rem;
    position: sticky;
    top: 0;
  }
`;

export const PaymentAmountTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

export const PaymentBtn = styled.button`
  margin-top: 12px;
  width: 100%;
  height: 40px;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 8px 8px 12px;
  background: rgb(19, 172, 0);
  color: rgb(255, 255, 255);
  border-radius: 666px;
  border: none;

  :hover {
    background: rgb(14, 122, 0);
  }

  :focus {
    outline: none;
  }

  :disabled {
    background: rgba(19, 172, 0, 0.6);
  }
`;

export const PaymentBtnIcon = styled(Icon)`
  margin-left: 0.3rem;
  margin-top: 0.1rem;
`;

export const PaymentWarningMessage = styled.p`
  margin: 0;
  margin-top: 0.3rem;
  font-size: 14px;
  color: rgb(240, 128, 128);
  font-weight: 500;
  cursor: pointer;
  width: fit-content;
  text-align: center;
`;

export const PartnersContainer = styled.div`
  grid-column: 1/-1;
  padding-top: 8px;

  @media (min-width: 768px) {
    grid-column: 1/3;
  }
`;

export const PartnersTitle = styled.h3`
  font-size: 18px;
  line-height: 24px;
  color: rgb(0, 0, 0);
  margin-bottom: 0.1rem;
  margin-top: 0.3rem;
  font-weight: 400;
`;

export const PartnersImgContainer = styled.div`
  display: flex;
`;

export const ImgWrapper = styled.div`
  max-width: 36px;
  margin-right: 8px;
  margin-bottom: 8px;
`;

export const PartnersImg = styled.img`
  width: 100%;
`;

export const Break = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 2px;
  background: rgb(238, 238, 238);
`;

export const BreakEnchanter = styled.div`
  width: 50px;
  background: rgb(77, 77, 77);
`;

export const BreakEnchanterNo2 = styled.div`
  width: 50px;
  background: rgb(148, 148, 148);
`;

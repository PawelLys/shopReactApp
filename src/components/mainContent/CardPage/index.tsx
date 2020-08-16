import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCPU, fetchGraphic, ResetCardState, IProduct, ICard } from '../../../actions';
import { StoreState } from '../../../reducers';
import * as Styled from './index.style';
import { DisplayArrayProductsInCard } from './DisplayArrayProductsInCard';
import ScrollPageToTop from '../../ScrollPageToTop';

type IProductRemainingTypes = 'CPU';

export const CardPage = () => {
  const [showPromotionCodeInput, setShowPromotionCodeInput] = useState(false);
  const [promotialCode, setPromotialCode] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const productsInCard = useSelector((store: StoreState) => store.card);
  const products = useSelector((store: StoreState) => store.products);

  const dispatch = useDispatch();

  useEffect(() => {
    if (productsInCard.some((value) => value.type === 'CPU' && products.CPU.length === 0)) dispatch(fetchCPU());

    if (productsInCard.some((value) => value.type === 'graphicCard' && products.graphicCards.length === 0))
      dispatch(fetchGraphic());
  }, []);

  const compareProductsAndReturnPrice = () => {
    let arrOfPrice: number[] = [];

    const compareLogic = (v: IProduct, prod: ICard) => {
      if (v.id === prod.id) {
        if (v.discounted) arrOfPrice = [...arrOfPrice, parseFloat(v.newPrice as string) * prod.amount];
        else arrOfPrice = [...arrOfPrice, parseFloat(v.price) * prod.amount];
      }
    };

    productsInCard.forEach((prod) => {
      if (prod.type === 'graphicCard') products.graphicCards.forEach((v) => compareLogic(v, prod));
      else products[prod.type as IProductRemainingTypes].forEach((v) => compareLogic(v, prod));
    });

    return arrOfPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  };

  ScrollPageToTop();
  if (productsInCard.length === 0)
    return (
      <Styled.CardWrapper>
        <Styled.EmptyCardInfoContainer>
          <Styled.EmptyCardInfoText>Your card is empty</Styled.EmptyCardInfoText>
          <Styled.EmptyCardBelowText>Check our wide section of products.</Styled.EmptyCardBelowText>
          <Styled.EmptyCardReturnBtn to="/">Go to the main page</Styled.EmptyCardReturnBtn>
        </Styled.EmptyCardInfoContainer>
        <Styled.Break>
          <Styled.BreakEnchanter />
          <Styled.BreakEnchanterNo2 />
        </Styled.Break>
      </Styled.CardWrapper>
    );
  else
    return (
      <Styled.CardWrapper>
        <Styled.ProductCardContainer>
          <Styled.UtilitesContainer>
            <Styled.CardTitle>
              Your card
              <Styled.CardTitleAmount>
                ({productsInCard.reduce((acc, val) => acc + val.amount, 0)})
              </Styled.CardTitleAmount>
            </Styled.CardTitle>
            <Styled.CardOptions hideBorderBottom={showPromotionCodeInput}>
              <Styled.CardOption
                style={{ marginRight: '2px' }}
                onClick={() => setShowPromotionCodeInput(!showPromotionCodeInput)}>
                <Styled.CardOptionIcon iconName="Edit" />
                <Styled.CardOptionText>Promotional code</Styled.CardOptionText>
              </Styled.CardOption>
              <Styled.CardOption onClick={() => dispatch(ResetCardState())}>
                <Styled.CardOptionIcon iconName="Delete" />
                <Styled.CardOptionText>Clean card</Styled.CardOptionText>
              </Styled.CardOption>
            </Styled.CardOptions>
          </Styled.UtilitesContainer>
          <Styled.PromotialCodeWrapper shouldDisplay={showPromotionCodeInput}>
            <Styled.PromotialCodeWrapperTitle>
              Enter your promotial code
              <Styled.PromotialCodeWrapperClose iconName="Cancel" onClick={() => setShowPromotionCodeInput(false)} />
            </Styled.PromotialCodeWrapperTitle>
            <Styled.PromotialCodeInputWrapper>
              <Styled.PromotialCodeInput value={promotialCode} onChange={(e) => setPromotialCode(e.target.value)} />
              {promotialCode.length > 0 && (
                <Styled.PaymentWarningMessage
                  onClick={() => setButtonDisabled(false)}
                  style={{ marginBottom: '.4rem' }}>
                  Entered code is incorrect.
                </Styled.PaymentWarningMessage>
              )}
            </Styled.PromotialCodeInputWrapper>
          </Styled.PromotialCodeWrapper>
          <Styled.ProductContainer>
            <DisplayArrayProductsInCard arrOfProd={productsInCard} prodState={products} />
          </Styled.ProductContainer>
          <Styled.PaymentsBtnContainer>
            <Styled.PaymentAmountTextContainer>
              <span>Total</span>
              <span>{Math.round((compareProductsAndReturnPrice() + Number.EPSILON) * 100) / 100}$</span>
            </Styled.PaymentAmountTextContainer>
            <Styled.PaymentBtn disabled={buttonDisabled} onClick={() => setButtonDisabled(true)}>
              Go to the payment
              <Styled.PaymentBtnIcon iconName="ChevronRight" />
            </Styled.PaymentBtn>
            {buttonDisabled && (
              <Styled.PaymentWarningMessage onClick={() => setButtonDisabled(false)}>
                Sorry, payment is currently unavailable.
                <Styled.PaymentBtnIcon iconName="Cancel" />
              </Styled.PaymentWarningMessage>
            )}
          </Styled.PaymentsBtnContainer>
          <Styled.PartnersContainer>
            <Styled.PartnersTitle>We accept</Styled.PartnersTitle>
            <Styled.PartnersImgContainer>
              <Styled.ImgWrapper>
                <Styled.PartnersImg src="https://assets.x-kom.pl/public-hybrid/xkom/c500d59374fe7d7d.png" alt="blik" />
              </Styled.ImgWrapper>
              <Styled.ImgWrapper>
                <Styled.PartnersImg src="https://assets.x-kom.pl/public-hybrid/xkom/e51fb0a6ab97d090.png" alt="visa" />
              </Styled.ImgWrapper>
              <Styled.ImgWrapper>
                <Styled.PartnersImg
                  src="https://assets.x-kom.pl/public-hybrid/xkom/33dfc5a98f0f38a4.png"
                  alt="mastercard"
                />
              </Styled.ImgWrapper>
              <Styled.ImgWrapper>
                <Styled.PartnersImg src="https://assets.x-kom.pl/public-hybrid/xkom/d2cbf1eef4e6de73.png" alt="cash" />
              </Styled.ImgWrapper>
            </Styled.PartnersImgContainer>
          </Styled.PartnersContainer>
        </Styled.ProductCardContainer>
      </Styled.CardWrapper>
    );
};

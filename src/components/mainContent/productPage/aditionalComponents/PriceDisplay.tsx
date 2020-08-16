import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCardAction, IProduct } from '../../../../actions';
import * as Styled from './PriceDisplay.style';
import { AddToCardModal } from './AddToCardModal';
import { CounterDisplay } from './CounterDisplay';

interface IProps {
  product: IProduct;
  type: string;
}

export const PriceDisplay = ({ product, type }: IProps) => {
  const [counter, setCounter] = useState(1);

  const [modalProduct, setModalProduct] = useState({ id: 0, type: '' });

  const dispatch = useDispatch();

  const onCardBtnClick = () => {
    dispatch(setCardAction(product.id, type, counter));
    setModalProduct({ id: product.id, type });
  };

  return (
    <Styled.Wrapper>
      <AddToCardModal modalProduct={modalProduct} closeModal={() => setModalProduct({ id: 0, type: '' })} />
      <Styled.TopWrapper>
        {product.discounted ? (
          <>
            <Styled.PriceWrapper>
              <Styled.OldPrice>{product.price}$</Styled.OldPrice>
              <Styled.NewPrice>{product.newPrice}$</Styled.NewPrice>
            </Styled.PriceWrapper>
          </>
        ) : (
          <Styled.NewPrice>{product.price}</Styled.NewPrice>
        )}
      </Styled.TopWrapper>
      <Styled.BottomWrapper>
        <CounterDisplay counter={counter} setCounter={setCounter}/>
        <Styled.BottomBtnWrapper>
          <Styled.BottomBtn onClick={onCardBtnClick}>
            <Styled.BtnDescription>
              <Styled.CartIcon iconName="ShoppingCart" />
              <Styled.Description>Add to Cart</Styled.Description>
            </Styled.BtnDescription>
          </Styled.BottomBtn>
        </Styled.BottomBtnWrapper>
      </Styled.BottomWrapper>
    </Styled.Wrapper>
  );
};

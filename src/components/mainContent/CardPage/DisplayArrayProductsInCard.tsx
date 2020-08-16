import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCardElement, ICard, IProduct } from '../../../actions';
import { IProductsState } from '../../../reducers/products';
import * as Styled from './index.style';
import HelperDisplayProductCounter from './HelperDisplayProductCounter';
import HelperDisplayProductMoreOptions from './HelperDisplayProductMoreOptions';

interface IProps {
  arrOfProd: ICard[];
  prodState: IProductsState;
}

type IProductTypes = 'CPU';
const EmptyProduct = { name: '', brand: '', id: 0, discounted: false, type: '', price: '', image: '' };

export const DisplayArrayProductsInCard = ({ arrOfProd, prodState }: IProps) => {
  const dispatch = useDispatch();

  return (
    <>
      {arrOfProd.map((value, index) => {
        let product: IProduct;

        if (value.type === 'graphicCard')
          product = prodState.graphicCards.find((prod) => prod.id === value.id) || EmptyProduct;
        else product = prodState[value.type as IProductTypes].find((prod) => prod.id === value.id) || EmptyProduct;

        return (
          <Styled.ProductItem key={index}>
            <Styled.ProductItemPhotoContainer to={`/${value.type}/${value.id}`}>
              <Styled.ProductItemPhoto src={product.image} />
            </Styled.ProductItemPhotoContainer>
            <Styled.ProductItemInfo>
              <Styled.ProductIteminfoTitleWrapper>
                <Styled.ProductItemInfoTitle to={`/${value.type}/${value.id}`}>
                  {product.name}
                </Styled.ProductItemInfoTitle>
                <HelperDisplayProductMoreOptions obj={value} />
              </Styled.ProductIteminfoTitleWrapper>
              <Styled.ProductIteminfoTitleWrapper>
                <HelperDisplayProductCounter product={value} />
                <Styled.ProductPriceText>
                  {product.discounted
                    ? Math.round((parseFloat(product.newPrice as string) * value.amount + Number.EPSILON) * 100) / 100
                    : Math.round((parseFloat(product.price as string) * value.amount + Number.EPSILON) * 100) / 100}
                  $
                </Styled.ProductPriceText>
                <Styled.ProductDeleteIcon
                  iconName="Delete"
                  onClick={() => dispatch(deleteCardElement(value.id, value.type))}
                />
              </Styled.ProductIteminfoTitleWrapper>
            </Styled.ProductItemInfo>
          </Styled.ProductItem>
        );
      })}
    </>
  );
};

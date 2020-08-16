import React from 'react';
import { useDispatch } from 'react-redux';
import { IProductFilters } from '../../../../reducers/productsFilter';
import { producerFilterAction, brandFilterAction, PriceFilterAction, IProductTypes } from '../../../../actions';
import * as Styled from './FiltersDisplay.style';

interface IProps {
  type: IProductTypes;
  filters: IProductFilters;
}

export const FiltersDisplay = ({ type, filters }: IProps) => {
  const dispatch = useDispatch();

  if (
    filters.producer[type].length > 0 ||
    filters.brand[type].length > 0 ||
    filters.price[type].minValue !== 0 ||
    filters.price[type].maxValue !== 99999
  )
    return (
      <Styled.Wrapper>
        <Styled.LeftWrapper>Filters:</Styled.LeftWrapper>
        <Styled.RightWrapper>
          {filters.price[type].minValue !== 0 && (
            <Styled.PriceFilterActiveInfo onClick={() => dispatch(PriceFilterAction(type, 0))}>
              <Styled.PriceTextDescription>From:</Styled.PriceTextDescription>
              <Styled.ActiveInfoText>{filters.price[type].minValue}$</Styled.ActiveInfoText>
              <Styled.ActiveInfoCloseBtn iconName="Cancel" />
            </Styled.PriceFilterActiveInfo>
          )}
          {filters.price[type].maxValue !== 99999 && (
            <Styled.PriceFilterActiveInfo onClick={() => dispatch(PriceFilterAction(type, undefined, 99999))}>
              <Styled.PriceTextDescription>To:</Styled.PriceTextDescription>
              <Styled.ActiveInfoText>{filters.price[type].maxValue}$</Styled.ActiveInfoText>
              <Styled.ActiveInfoCloseBtn iconName="Cancel" />
            </Styled.PriceFilterActiveInfo>
          )}
          {filters.producer[type].length > 0 &&
            filters.producer[type].map((value, index) => {
              return (
                <Styled.PriceFilterActiveInfo key={index} onClick={() => dispatch(producerFilterAction(type, value))}>
                  <Styled.ActiveInfoText>{value}</Styled.ActiveInfoText>
                  <Styled.ActiveInfoCloseBtn iconName="Cancel" />
                </Styled.PriceFilterActiveInfo>
              );
            })}
          {filters.brand[type].length > 0 &&
            filters.brand[type].map((value, index) => {
              return (
                <Styled.PriceFilterActiveInfo key={index} onClick={() => dispatch(brandFilterAction(type, value))}>
                  <Styled.ActiveInfoText>{value}</Styled.ActiveInfoText>
                  <Styled.ActiveInfoCloseBtn iconName="Cancel" />
                </Styled.PriceFilterActiveInfo>
              );
            })}
        </Styled.RightWrapper>
      </Styled.Wrapper>
    );
  else return null;
};

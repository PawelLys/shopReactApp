import React, { useReducer, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { brandFilterAction, IProductTypes } from '../../../actions';
import { StoreState } from '../../../reducers';
import { History } from 'history';
import * as Styled from './NestedDisplayHelper.style';
import { booleanArrayReducer, actionTypeUpdate } from './arrayReducerComponent';

interface IProps {
  subContent: string[];
  type: IProductTypes;
  history: History;
}

export const NestedDisplayHelperSubMenu = ({ subContent, type, history }: IProps) => {
  const [itemsHovered, setItemsHovered] = useReducer(
    booleanArrayReducer,
    subContent.map(() => false)
  );
  const activeItems = useSelector((state: StoreState) => state.filters.brand[type]);

  const dispatch = useDispatch();

  const checkBoxRenderHelper = (index: number, value: string) => {
    return (
      <Styled.ItemsCheckbox>
        <Styled.CheckboxWrapper>
          <Styled.WrapperInput active={activeItems.includes(value)}>
            <Styled.InputCircle iconName="CircleRing" />
            <Styled.InputCheckmark
              iconName="StatusCircleCheckmark"
              active={activeItems.includes(value)}
              hovered={itemsHovered[index]}
            />
          </Styled.WrapperInput>
        </Styled.CheckboxWrapper>
      </Styled.ItemsCheckbox>
    );
  };

  return (
    <Styled.NavUnderTitle>
      {subContent.map((value, index) => {
        return (
          <Styled.UnderItems
            style={{ paddingLeft: '1rem' }}
            key={index}
            onMouseEnter={() => setItemsHovered({ type: actionTypeUpdate, payload: index })}
            onMouseLeave={() => setItemsHovered({ type: actionTypeUpdate, payload: index })}
            onClick={() => dispatch(brandFilterAction(type, `${value}`)) && history.push(`/${type}`)}>
            {checkBoxRenderHelper(index, value)}
            <Styled.ItemsLink>{value}</Styled.ItemsLink>
          </Styled.UnderItems>
        );
      })}
    </Styled.NavUnderTitle>
  );
};

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { setBurgerBtn } from '../../actions';
import { StoreState } from '../../reducers';
import * as Styled from './LeftNav.style';
import { LeftNavMenuDisplay } from './leftNavMenuRenderHelper/DisplayHelper';

export const LeftNav = (): JSX.Element => {
  const burgerBtn = useSelector((state: StoreState) => state.headerBtnStates.burgerBtn);

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  return (
    <Styled.HeaderFixed openBurger={burgerBtn}>
      <Styled.NavBurger onClick={() => dispatch(setBurgerBtn(!burgerBtn))}>
        <Styled.Burger iconName="GlobalNavButton" />
      </Styled.NavBurger>
      <LeftNavMenuDisplay />
    </Styled.HeaderFixed>
  );
};

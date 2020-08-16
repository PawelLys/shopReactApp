import { ActionTypes } from './types';

export interface SetBurgerBtnAction {
  type: ActionTypes.burgerBtn;
  payload: boolean;
}

export interface SetMoreBtnAction {
  type: ActionTypes.topMoreBtn;
  payload: boolean;
}

export const setBurgerBtn = (state: boolean) => {
  return <SetBurgerBtnAction>{
    type: ActionTypes.burgerBtn,
    payload: state,
  };
};

export const setMoreBtn = (state: boolean) => {
  return <SetMoreBtnAction>{
    type: ActionTypes.topMoreBtn,
    payload: state,
  };
};

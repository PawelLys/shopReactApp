import { ActionTypes, SetBurgerBtnAction, SetMoreBtnAction } from '../actions';

interface IHeaderBtnReducerState {
  burgerBtn: boolean;
  topMoreBtn: boolean;
}

const { burgerBtn, topMoreBtn } = ActionTypes;

const INIT_STATE: IHeaderBtnReducerState = {
  burgerBtn: false,
  topMoreBtn: false,
};

export const headerBtnReducer = (state = INIT_STATE, action: SetBurgerBtnAction | SetMoreBtnAction) => {
  switch (action.type) {
    case burgerBtn:
      return { ...state, burgerBtn: action.payload, topMoreBtn: false };
    case topMoreBtn:
      return {...state, topMoreBtn: action.payload, burgerBtn: false};
    default:
      return state;
  }
};

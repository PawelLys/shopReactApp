import { ActionTypes } from './types';
import { Dispatch } from 'redux';
import { StoreState } from '../reducers';

export interface ICard {
  id: number;
  type: string;
  amount: number;
}

export interface ISetCardAction {
  type: ActionTypes.addToCard;
  payload: ICard[];
}

export interface IResetCardState {
  type: ActionTypes.cleanCard;
}

export interface IDeleteCardElement {
  type: ActionTypes.deleteCard;
  payload: ICard[];
}

const checkStateArray = (cardStateArray: ICard[], id: number, type: string, amount: number) => {
  let elementAlreadyExistingInArray = false;

  const checkedArray = cardStateArray.map((value) => {
    if (value.id === id && value.type === type) {
      value.amount += amount;
      elementAlreadyExistingInArray = true;
    }
    return value;
  });

  return elementAlreadyExistingInArray ? checkedArray : [...checkedArray, { id, type, amount }];
};

export const setCardAction = (id: number, type: string, amount: number = 1) => async (
  dispatch: Dispatch,
  getState: () => StoreState
) => {
  dispatch<ISetCardAction>({
    type: ActionTypes.addToCard,
    payload: checkStateArray(getState().card, id, type, amount),
  });
};

export const setCardAmountAction = (id: number, type: string, amount: number) => async (
  dispatch: Dispatch,
  getState: () => StoreState
) => {
  dispatch<ISetCardAction>({
    type: ActionTypes.addToCard,
    payload: getState().card.map((value) => (value.id === id && value.type === type ? { id, type, amount } : value)),
  });
};

export const ResetCardState = () => {
  return <IResetCardState>{
    type: ActionTypes.cleanCard,
  };
};

export const deleteCardElement = (id: number, type: string) => async (
  dispatch: Dispatch,
  getState: () => StoreState
) => {
  dispatch<IDeleteCardElement>({
    type: ActionTypes.deleteCard,
    payload: getState()
      .card.map((value) => (value.id === id && value.type === type ? ({} as ICard) : value))
      .filter((value) => Object.keys(value).length !== 0),
  });
};

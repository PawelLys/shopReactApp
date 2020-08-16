import { ActionTypes, ISetCardAction, ICard, IResetCardState, IDeleteCardElement } from '../actions';

export const cardReducer = (state: ICard[] = [], action: ISetCardAction | IResetCardState | IDeleteCardElement) => {
  switch (action.type) {
    case ActionTypes.addToCard:
      return action.payload;
    case ActionTypes.cleanCard:
      return [];
    case ActionTypes.deleteCard:
      return action.payload;
    default:
      return state;
  }
};

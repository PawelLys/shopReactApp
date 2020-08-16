import { ActionTypes, SetRefToScrollAction } from '../actions';

export const elementsRefReducer = (state: HTMLDivElement | null = null, action: SetRefToScrollAction) => {
  switch (action.type) {
    case ActionTypes.refToScroll:
      return action.payload;
    default:
      return state;
  }
};

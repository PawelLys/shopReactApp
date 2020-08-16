import { IPromotions, ActionTypes, FetchPromotionsAction } from '../actions';

const { fetchPromotions } = ActionTypes;

export const promotionsReducer = (state: IPromotions[] = [], action: FetchPromotionsAction) => {
  switch (action.type) {
    case fetchPromotions:
      return action.payload;
    default:
      return state;
  }
};

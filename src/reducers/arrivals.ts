import { IArrivals, ActionTypes, FetchArrivalsAction } from '../actions';

const { fetchArrivals } = ActionTypes;

export const arrivalsReducer = (state: IArrivals[] = [], action: FetchArrivalsAction) => {
  switch (action.type) {
    case fetchArrivals:
      return action.payload;
    default:
      return state;
  }
};

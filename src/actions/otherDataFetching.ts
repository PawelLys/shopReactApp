import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes, url, IArrivals } from './types';

export interface IPromotions extends IArrivals {
  discount: string;
}

export interface FetchPromotionsAction {
  type: ActionTypes.fetchPromotions;
  payload: IPromotions[];
}

export interface FetchArrivalsAction {
  type: ActionTypes.fetchArrivals;
  payload: IArrivals[];
}

export const fetchPromotions = () => async (dispatch: Dispatch) => {
  const response = await axios.get<IPromotions[]>(url('promotions'));

  dispatch<FetchPromotionsAction>({
    type: ActionTypes.fetchPromotions,
    payload: response.data,
  });
};

export const fetchArrivals = () => async (dispatch: Dispatch) => {
  const response = await axios.get<IArrivals[]>(url('arrivals'));

  dispatch<FetchArrivalsAction>({
    type: ActionTypes.fetchArrivals,
    payload: response.data,
  });
};

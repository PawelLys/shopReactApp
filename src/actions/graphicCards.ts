import { Dispatch } from 'redux';
import axios from 'axios';
import { IProduct, IProductDetails, ActionTypes, url } from './types';

export interface FetchGraphicAction {
  type: ActionTypes.fetchGraphic;
  payload: IProduct[];
}

export interface FetchGraphicCardAction {
  type: ActionTypes.fetchGraphicCardProduct;
  payload: IProductDetails;
}

export const fetchGraphic = () => async (dispatch: Dispatch) => {
  const response = await axios.get<IProduct[]>(url('graphicCards/products'));

  dispatch<FetchGraphicAction>({
    type: ActionTypes.fetchGraphic,
    payload: response.data,
  });
};

export const fetchGraphicCardProduct = (id: number) => async (dispatch: Dispatch) => {
  const response = await axios.get<IProductDetails>(url(`graphicCards/products/${id}`));

  dispatch<FetchGraphicCardAction>({
    type: ActionTypes.fetchGraphicCardProduct,
    payload: response.data,
  });
};

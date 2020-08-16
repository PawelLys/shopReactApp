import axios from 'axios';
import { Dispatch } from 'redux';
import { IProduct, IProductDetails, ActionTypes, url } from './types';

export interface FetchCPUAction {
  type: ActionTypes.fetchCPU;
  payload: IProduct[];
}

export interface FetchCPUProductAction {
  type: ActionTypes.fetchCPUProduct;
  payload: IProductDetails;
}

export const fetchCPU = () => async (dispatch: Dispatch) => {
  const response = await axios.get<IProduct[]>(url('CPU/products'));

  dispatch<FetchCPUAction>({
    type: ActionTypes.fetchCPU,
    payload: response.data,
  });
};

export const fetchCPUProduct = (id: number) => async (dispatch: Dispatch) => {
  const response = await axios.get<IProductDetails>(url(`CPU/products/${id}`));

  dispatch<FetchCPUProductAction>({
    type: ActionTypes.fetchCPUProduct,
    payload: response.data,
  });
};

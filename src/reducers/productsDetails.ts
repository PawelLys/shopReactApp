import { IProductDetails, ActionTypes, ProductsDetailsActions } from '../actions';

const { fetchCPUProduct, fetchGraphicCardProduct } = ActionTypes;

interface IProductDetailsState {
  CPU: IProductDetails[];
  graphicCards: IProductDetails[];
}

const INIT_STATE: IProductDetailsState = {
  CPU: [],
  graphicCards: [],
};

export const productsDetailsReducer = (state = INIT_STATE, action: ProductsDetailsActions) => {
  switch (action.type) {
    case fetchCPUProduct:
      return { ...state, CPU: [...state.CPU, action.payload] };
    case fetchGraphicCardProduct:
      return { ...state, graphicCards: [...state.graphicCards, action.payload] };
    default:
      return state;
  }
};

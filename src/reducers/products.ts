import { IProduct, ActionTypes, ProductsActions, IProductTypes } from '../actions';

const { fetchGraphic, fetchCPU } = ActionTypes;

export interface MenuContent {
  title: string;
  link: IProductTypes;
  menuOptions: string[];
  menuSubOptions?: string[];
}

export interface IProductsState {
  graphicCards: IProduct[];
  CPU: IProduct[];
  readonly menu: MenuContent[];
}

const INIT_STATE: IProductsState = {
  graphicCards: [],
  CPU: [],
  menu: [
    {
      title: 'Graphic Cards',
      link: 'graphicCard',
      menuOptions: ['AMD', 'NVIDIA'],
      menuSubOptions: ['Gigabyte', 'MSI', 'ASRock', 'ASUS', 'EVGA'],
    },
    { title: 'CPU', link: 'CPU', menuOptions: ['AMD', 'Intel'] },
  ],
};

export const productsReducer = (state = INIT_STATE, action: ProductsActions) => {
  switch (action.type) {
    case fetchGraphic:
      return { ...state, graphicCards: action.payload };
    case fetchCPU:
      return { ...state, CPU: action.payload };
    default:
      return state;
  }
};

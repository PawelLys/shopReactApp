import { ActionTypes, FiltersActionTypes } from '../actions';

const { productsProducerFilters, productsBrandFilters, productsCPUPriceFilters, productsgraphicCardPriceFilters } = ActionTypes;

export interface IProductFilters {
  producer: { graphicCard: string[]; CPU: string[] };
  brand: { graphicCard: string[]; CPU: string[] };
  price: { graphicCard: { minValue: number; maxValue: number }; CPU: { minValue: number; maxValue: number } };
}

const INIT_STATE: IProductFilters = {
  producer: { graphicCard: [], CPU: [] },
  brand: { graphicCard: [], CPU: [] },
  price: { graphicCard: { minValue: 0, maxValue: 99999 }, CPU: { minValue: 0, maxValue: 99999 } },
};

export const productsFilterReducer = (state = INIT_STATE, action: FiltersActionTypes) => {
  switch (action.type) {
    case productsProducerFilters:
      return { ...state, producer: Object.assign(state.producer, action.payload) };
    case productsBrandFilters:
      return { ...state, brand: Object.assign(state.brand, action.payload) };
    case productsCPUPriceFilters:
      return { ...state, price: { ...state.price, CPU: action.payload } };
    case productsgraphicCardPriceFilters:
      return { ...state, price: { ...state.price, graphicCard: action.payload } };
    default:
      return state;
  }
};

import { ActionTypes } from './types';
import { Dispatch } from 'redux';
import { StoreState } from '../reducers';

export type FiltersActionTypes = ProducerFilterAction | BrandFilterAction | PriceFilterAction; //  | NameFilterAction;

export type IProductTypes = 'graphicCard' | 'CPU';

interface ProducerFilterAction {
  type: ActionTypes.productsProducerFilters;
  payload: { [key: string]: string[] };
}

interface BrandFilterAction {
  type: ActionTypes.productsBrandFilters;
  payload: { [key: string]: string[] };
}

interface PriceFilterAction {
  type: ActionTypes.productsgraphicCardPriceFilters | ActionTypes.productsCPUPriceFilters;
  payload: { minValue: number; maxValue: number };
}

/*
interface NameFilterAction {
  type: ActionTypes.productsNameFilters;
  payload: string;
}
*/
const mergeArrays = (stateArray: string[], newArrayElement: string): string[] => {
  if (stateArray.includes(newArrayElement)) return stateArray.filter((value) => value !== newArrayElement);
  else return [...stateArray, newArrayElement];
};

export const producerFilterAction = (productType: IProductTypes, producer: string) => async (
  dispatch: Dispatch,
  getState: () => StoreState
) => {
  dispatch<ProducerFilterAction>({
    type: ActionTypes.productsProducerFilters,
    payload: { [productType]: mergeArrays(getState().filters.producer[productType], producer) },
  });
};

export const brandFilterAction = (productType: IProductTypes, brand: string) => async (
  dispatch: Dispatch,
  getState: () => StoreState
) => {
  dispatch<BrandFilterAction>({
    type: ActionTypes.productsBrandFilters,
    payload: { [productType]: mergeArrays(getState().filters.brand[productType], brand) },
  });
};

export const PriceFilterAction = (type: string, min?: number, max?: number) => async (
  dispatch: Dispatch,
  getState: () => StoreState
) => {
  if (type === 'graphicCard') {
    if (min !== undefined && max !== undefined) {
      dispatch<PriceFilterAction>({
        type: ActionTypes.productsgraphicCardPriceFilters,
        payload: { minValue: min, maxValue: max },
      });
    } else if (min || min === 0) {
      dispatch<PriceFilterAction>({
        type: ActionTypes.productsgraphicCardPriceFilters,
        payload: { ...getState().filters.price.graphicCard, minValue: min },
      });
    } else if (max) {
      dispatch<PriceFilterAction>({
        type: ActionTypes.productsgraphicCardPriceFilters,
        payload: { ...getState().filters.price.graphicCard, maxValue: max },
      });
    }
  } else {
    if (min !== undefined && max !== undefined) {
      dispatch<PriceFilterAction>({
        type: ActionTypes.productsCPUPriceFilters,
        payload: { minValue: min, maxValue: max },
      });
    } else if (min || min === 0) {
      dispatch<PriceFilterAction>({
        type: ActionTypes.productsCPUPriceFilters,
        payload: { ...getState().filters.price.CPU, minValue: min },
      });
    } else if (max) {
      dispatch<PriceFilterAction>({
        type: ActionTypes.productsCPUPriceFilters,
        payload: { ...getState().filters.price.CPU, maxValue: max },
      });
    }
  }
};

/*
export const priceFilterAction = (price: number[]): PriceFilterAction => {
  return {
    type: ActionTypes.productsPriceFilters,
    payload: price,
  };
};

export const nameFilterAction = (name: string): NameFilterAction => {
  return {
    type: ActionTypes.productsNameFilters,
    payload: name
  };
};*/

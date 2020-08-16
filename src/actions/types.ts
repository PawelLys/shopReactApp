import { FetchGraphicAction, FetchCPUAction } from './index';
import { FetchCPUProductAction } from './CPU';
import { FetchGraphicCardAction } from './graphicCards';

export enum ActionTypes {
  fetchGraphic,
  fetchCPU,
  fetchGraphicCardProduct,
  fetchCPUProduct,
  fetchPromotions,
  fetchArrivals,
  theme,
  burgerBtn,
  topMoreBtn,
  productsProducerFilters,
  productsBrandFilters,
  productsCPUPriceFilters,
  productsgraphicCardPriceFilters,
  topNavResize,
  topNavResizeMore,
  footerResize,
  refToScroll,
  addToCard,
  cleanCard,
  deleteCard,
}

interface BasicDescription {
  id: number;
  name: string;
  price: string;
  image: string;
  discounted: boolean;
  newPrice?: string;
}

export interface IArrivals extends BasicDescription {
  type: string;
}

export interface IProduct extends BasicDescription {
  brand: string;
  type: string;
}

interface ISpecifications {
  type: string;
  description: string;
}

export interface IProductDetails {
  images: string[];
  specifications: ISpecifications[];
  id: number;
  family: string;
}

export type ProductsActions = FetchCPUAction | FetchGraphicAction;

export type ProductsDetailsActions = FetchCPUProductAction | FetchGraphicCardAction;

export type ITypes = IArrivals | IProduct;

export const url = (product: string) => `https://guarded-scrubland-50458.herokuapp.com/${product}`;

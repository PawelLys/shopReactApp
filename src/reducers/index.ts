import { combineReducers } from 'redux';
import { productsReducer } from './products';
import { productsDetailsReducer } from './productsDetails';
import { promotionsReducer } from './promotions';
import { arrivalsReducer } from './arrivals';
import { productsFilterReducer } from './productsFilter';
import { themeReducer } from './themeReducer';
import { resizeEventReducer } from './resizeEvents';
import { headerBtnReducer } from './headerBtnReducer';
import { elementsRefReducer } from './elementsRef';
import { cardReducer } from './card';

export const reducers = combineReducers({
  products: productsReducer,
  productsDetails: productsDetailsReducer,
  filters: productsFilterReducer,
  promotions: promotionsReducer,
  arrivals: arrivalsReducer,
  theme: themeReducer,
  headerBtnStates: headerBtnReducer,
  resizeEvents: resizeEventReducer,
  ref: elementsRefReducer,
  card: cardReducer,
});

export type StoreState = ReturnType<typeof reducers>;

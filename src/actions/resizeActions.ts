import { ActionTypes } from './types';

interface SetChange {
  payload: boolean;
}

export interface SetChangeNav extends SetChange {
  type: ActionTypes.topNavResize;
}

export interface SetChangeNavMore extends SetChange {
  type: ActionTypes.topNavResizeMore;
}

export interface SetChangeFooter extends SetChange {
  type: ActionTypes.footerResize;
}

export type IResizeOptions = SetChangeNav | SetChangeNavMore | SetChangeFooter;

export const setChangeNav = (state: boolean) => {
  return {
    type: ActionTypes.topNavResize,
    payload: state,
  };
};

export const setChangeNavMore = (state: boolean) => {
  return {
    type: ActionTypes.topNavResizeMore,
    payload: state,
  };
};

export const setChangeFooter = (state: boolean) => {
  return {
    type: ActionTypes.footerResize,
    payload: state,
  };
};

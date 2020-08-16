import { ActionTypes } from './types';

export type availableThemes = 'light' | 'dark';

export interface SetThemeAction {
  type: ActionTypes.theme;
  payload: availableThemes;
}

export const setTheme = (type: availableThemes): SetThemeAction => {
  return {
    type: ActionTypes.theme,
    payload: type,
  };
};

export interface SetRefToScrollAction {
  type: ActionTypes.refToScroll;
  payload: HTMLDivElement;
}

export const setRefToScroll = (type: HTMLDivElement): SetRefToScrollAction => {
  return {
    type: ActionTypes.refToScroll,
    payload: type,
  };
};

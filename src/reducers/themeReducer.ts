import { ActionTypes, SetThemeAction, availableThemes } from '../actions';

const { theme } = ActionTypes;

export const themeReducer = (state: availableThemes = 'light', action: SetThemeAction) => {
  switch (action.type) {
    case theme:
      return action.payload;
    default:
      return state;
  }
};

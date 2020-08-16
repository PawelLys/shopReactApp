import { ActionTypes, IResizeOptions } from '../actions';

interface IHeaderBtnReducerState {
  changeNav: boolean;
  changeNavMore: boolean;
  changeFooter: boolean;
}

const { topNavResize, topNavResizeMore, footerResize } = ActionTypes;

const INIT_STATE: IHeaderBtnReducerState = {
  changeNav: window.innerWidth < 600 ? true : false,
  changeNavMore: window.innerWidth < 400 ? true : false,
  changeFooter: window.innerWidth <= 490 ? true : false,
};

export const resizeEventReducer = (state = INIT_STATE, action: IResizeOptions) => {
  switch (action.type) {
    case topNavResize:
      return { ...state, changeNav: action.payload };
    case topNavResizeMore:
      return { ...state, changeNavMore: action.payload };
    case footerResize:
      return { ...state, changeFooter: action.payload };
    default:
      return state;
  }
};

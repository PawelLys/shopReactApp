export const actionTypeUpdate = 'leftNavActionUpdate';
export const actionTypeReset = 'leftNavActionReset';

export const booleanArrayReducer = (state: boolean[], action: { type: string; payload?: number }) => {
  switch (action.type) {
    case actionTypeUpdate:
      return state.map((value, index) => (action.payload === index ? !value : value));
    case actionTypeReset:
      return state.map(() => false);
    default:
      return state;
  }
};

import * as types from '../../constants/modalConstants';

const initialState = {
  isOpen: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MODAL_ACTIVE:
      return {
        ...state,
        isOpen: true,
      };
    case types.MODAL_HIDDEN:
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

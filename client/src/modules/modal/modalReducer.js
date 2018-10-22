import * as types from '../../constants/modalConstants';

const initialState = {
  title: '',
  content: '',
  active: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MODAL_ACTIVE:
      return {
        ...state,
        title: action.payload.title,
        content: action.payload.content,
        active: true,
      };
    case types.MODAL_HIDDEN:
      return { ...state, active: false };
    default:
      return state;
  }
};

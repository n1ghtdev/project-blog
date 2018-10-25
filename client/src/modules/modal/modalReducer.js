import * as types from '../../constants/modalConstants';

const initialState = {
  title: '',
  content: '',
  type: '',
  isOpen: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MODAL_ACTIVE:
      return {
        ...state,
        title: action.payload.title,
        content: action.payload.content,
        type: action.payload.type,
        isOpen: true,
      };
    case types.MODAL_HIDDEN:
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

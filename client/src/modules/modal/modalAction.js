import * as types from '../../constants/modalConstants';

export const showModal = (payload) => ({
  type: types.MODAL_ACTIVE,
  payload,
});

export const hideModal = () => ({
  type: types.MODAL_HIDDEN,
});

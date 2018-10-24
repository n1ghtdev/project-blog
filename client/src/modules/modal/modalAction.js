import * as types from '../../constants/modalConstants';

export const showModal = () => ({
  type: types.MODAL_ACTIVE,
});

export const hideModal = () => ({
  type: types.MODAL_HIDDEN,
});

import produce from 'immer';

const INITIAL_STATE = {
  cart: [],
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/REQUEST_ADD_PRODUCT':
      return produce(state, draft => {
        draft.cart = action.payload.product;
      });
    default:
      return state;
  }
}

import produce from 'immer';

const INITIAL_STATE = {
  products: [],
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@login/REQUEST_PRODUCTS_SUCESS':
      return produce(state, draft => {
        draft.products = action.payload.data;
      });

    default:
      return state;
  }
}

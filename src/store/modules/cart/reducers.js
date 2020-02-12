import produce from 'immer';

const INITIAL_STATE = {
  cart: [],
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/REQUEST_ADD_PRODUCT':
      return produce(state, draft => {
        const productIndex = draft.cart.findIndex(
          p => p.id === action.payload.product
        );

        console.tron.log(productIndex);
        if (productIndex >= -1) {
          console.tron.log('entroi aqui');
          // draft.cart[productIndex].amount += 1;
        } else {
          draft.cart = action.payload.product;
        }
      });
    default:
      return state;
  }
}

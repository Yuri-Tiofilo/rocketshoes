export function requestAddProduct(product) {
  return {
    type: '@cart/REQUEST_ADD_PRODUCT',
    payload: { product },
  };
}

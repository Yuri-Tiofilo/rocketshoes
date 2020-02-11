export function requestProducts() {
  return {
    type: '@login/REQUEST_PRODUCTS',
  };
}
export function requestProductsSucess(data) {
  return {
    type: '@login/REQUEST_PRODUCTS_SUCESS',
    payload: { data },
  };
}

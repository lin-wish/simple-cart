export default {
  ADD_PRODUCT: (state, product) => {
    state.cartProducts.push(product);
  },
  REMOVE_PRODUCT: (state, index) => {
    state.cartProducts.splice(index, 1);
  },
  CURRENT_PRODUCT: (state, product) => {
    state.currentProduct = product;
  },
  SHOW_MODAL: (state) => {
    state.showModal = !state.showModal;
  },
  SHOW_POPUP_CART: (state) => {
    state.showPopupCart = !state.showPopupCart;
  },
};

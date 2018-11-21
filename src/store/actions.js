export default {
  addProduct: (context, product) => {
    context.commit('ADD_PRODUCT', product);
  },
  removeProduct: (context, index) => {
    context.commit('REMOVE_PRODUCT', index);
  },
  currentProduct: (context, product) => {
    context.commit('CURRENT_PRODUCT', product);
  },
  showOrHiddenModal: (context) => {
    context.commit('SHOW_MODAL');
  },
  showOrHiddenPopupCart: (context) => {
    context.commit('SHOW_POPUP_CART');
  },
};

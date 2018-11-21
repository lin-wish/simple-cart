export default {
  getNotebooks: state => state.notebooks,
  getSmartphones: state => state.smartphones,
  getAllProducts: state => state.notebooks.concat(state.smartphones),
  getProductsInCart: state => state.cartProducts,
  getCurrentProduct: state => state.currentProduct,
  getShowModal: state => state.showModal,
  getPopupCart: state => state.showPopupCart,
};

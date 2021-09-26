import { createAction } from "redux-act";

const getProducts = createAction("GETPRODUCTS");

const setProducts = createAction("SETPRODUCTS");

const getCart = createAction("GETCART");

const setCart = createAction("SETCART");

const setSortOrder = createAction("SETSORTORDER");

const setDelivery = createAction("SETDELIVERY");

const setStock = createAction("SETSTOCK");

const setRating = createAction("SETRATING");

const clearFilter = createAction("CLEARFILTER");

export {
  setProducts,
  setCart,
  setSortOrder,
  setDelivery,
  setStock,
  setRating,
  clearFilter,
};

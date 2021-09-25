import { createAction } from "redux-act";

const getProducts = createAction("GETPRODUCTS");

const setProducts = createAction("SETPRODUCTS");

const getCart = createAction("GETCART");

const setCart = createAction("SETCART");

export { setProducts, setCart };

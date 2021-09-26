import { createReducer } from "redux-act";

import {
  setSortOrder,
  setDelivery,
  setStock,
  setRating,
  setSearchTerm,
  clearFilter,
} from "../actions";

const init = {
  order: "lowToHigh",
  delivery: false,
  stock: false,
  rating: 0,
  searchTerm: "",
};

export default createReducer(
  {
    [setSortOrder]: (state, payload) => ({ ...state, order: payload }),
    [setDelivery]: (state, payload) => ({
      ...state,
      delivery: !state.delivery,
    }),
    [setStock]: (state, payload) => ({ ...state, stock: !state.stock }),
    [setRating]: (state, payload) => ({ ...state, rating: payload }),
    [setSearchTerm]: (state, payload) => ({ ...state, searchTerm: payload }),
    [clearFilter]: (state, payload) => init,
  },
  init
);

import { createReducer } from "redux-act";

import { setCart } from "../actions";

export default createReducer(
  {
    [setCart]: (state, payload) => payload,
  },
  []
);

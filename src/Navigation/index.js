import React from "react";
import { Route } from "react-router-dom";

import Home from "../screens/Home";
import Cart from "../screens/Cart";

export default function index() {
  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/cart" component={Cart} />
    </>
  );
}

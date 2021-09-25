import React from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/Nav";

import Routes from "./Navigation";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes />
    </BrowserRouter>
  );
}

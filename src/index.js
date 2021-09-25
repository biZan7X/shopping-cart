import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./store";

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>,
  document.getElementById("root")
);

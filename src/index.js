import React from "react";
import { render } from "react-dom";
import store from "./js/store/index";
import { Provider } from "react-redux";
import App from "./js/components/App";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

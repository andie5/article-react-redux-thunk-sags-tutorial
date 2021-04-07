import React from "react";
import { render } from "react-dom";
import store from "./js/store/index";
import { Provider } from "react-redux";
import App from "./js/components/App";
// // store.getState();
// // store.subscribe(() => console.log("Look ma, Redux!!"));
// // store.dispatch(addArticle({ title: "React Redux Tutorial for Beginners", id: 1 }));
// import { addArticle } from "./js/actions/index";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

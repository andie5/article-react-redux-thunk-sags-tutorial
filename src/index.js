import React from "react";
import ReactDOM from "react-dom";
import index from "./js/index";
// import store from "./js/store/index";

// store.getState();
// store.subscribe(() => console.log("Look ma, Redux!!"));
// store.dispatch(add)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

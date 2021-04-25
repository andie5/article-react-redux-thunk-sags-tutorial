import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
import thunk from "redux-thunk";
import {
  configureStore,
  getDefaultMiddleware,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducer = combineReducers({
  root: rootReducer,
});

const middleware = [...getDefaultMiddleware(), forbiddenWordsMiddleware];

// const store = configureStore({
//   reducer: { rootReducer },
//   middleware: applyMiddleware([...middleware]),
//   enhancers: storeEnhancers,
// });
const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

export default store;

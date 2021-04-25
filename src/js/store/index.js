import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
import thunk from "redux-thunk";
// import createSagaMiddleware from "redux-saga";
// import apiSaga from "../sagas/api-saga";
// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// const initialiseSagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const combinedReducer = combineReducers({
//   root: rootReducer,
// });

// const middleware = [
//   ...getDefaultMiddleware(),
//   forbiddenWordsMiddleware,
//   // initialiseSagaMiddleware,
// ];

// const store = configureStore({
//   reducer: combinedReducer,
//   middleware: applyMiddleware([...middleware, initialiseSagaMiddleware]),
//   enhancers: storeEnhancers,
// });
const store = createStore(
  // combinedReducer,
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

// initialiseSagaMiddleware.run(apiSaga);

export default store;

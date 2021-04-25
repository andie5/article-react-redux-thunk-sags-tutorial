import {
  ADD_ARTICLE,
  DATA_LOADED,
  API_ERRORED,
} from "../constants/action-types";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
  remoteArticles: [],
  error: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: state.articles.concat(action.payload) };
    case DATA_LOADED:
      return {
        ...state,
        remoteArticles: state.remoteArticles.concat(action.payload),
      };
    case API_ERRORED:
      const errorMsg = "API error";
      return { ...state, error: errorMsg };
    default:
      return state;
  }
}

export default rootReducer;

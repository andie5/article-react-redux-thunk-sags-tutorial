import {
  ADD_ARTICLE,
  DATA_LOADED,
  API_ERRORED,
} from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: [],
  error: "",
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
    });
  }
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload),
    });
  }
  if (action.type === API_ERRORED) {
    const errorMsg = "API error";
    return Object.assign({}, state, {
      error: errorMsg,
    });
  }
  return state;
}

export default rootReducer;

import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";

export function addArticle(payload) {
  const id = Math.random();
  return {
    type: ADD_ARTICLE,
    payload: {
      ...payload,
      id,
    },
  };
}

export function getData() {
  return function (dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        return dispatch({ type: DATA_LOADED, payload: json });
      });
  };
}

import {
  ADD_ARTICLE,
  DATA_LOADED,
  DATA_REQUESTED,
} from "../constants/action-types";

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

export function getData(url) {
  return { type: DATA_REQUESTED, payload: { url } };
}

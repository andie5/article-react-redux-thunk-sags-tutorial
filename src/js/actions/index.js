import { ADD_ARTICLE } from "../constants/action-types";

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

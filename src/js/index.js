import store from "../js/store/index";
import { addArticle } from "../js/actions/index";
console.log("store: ", store);

window.store = store;
window.addArticle = addArticle;

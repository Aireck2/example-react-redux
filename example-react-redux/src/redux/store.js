import { createStore } from "redux";
import mainReducer from "./reducers";
const store = createStore(mainReducer);

store.dispatch({
  type: "ADD_SMTHNG",
  text: "Read the docs"
});

export default store;

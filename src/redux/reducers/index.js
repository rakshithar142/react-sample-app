import { combineReducers } from "redux";
import userData from "./userReducer";
import productsData from "./productReducer";

export default combineReducers({
  user: userData,
  products: productsData
});

import { combineReducers } from "redux";
import users from "./users";
import cart from "./cart";
import products from "./products";

export default combineReducers({
  users,
  cart,
  products,
});

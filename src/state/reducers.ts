import { combineReducers } from "redux";
import salesReducer from "./sales/salesReducer";
import shoppingCartReducer from "./shoppingCart/shoppingCartReducer";
// import shoppingCartReducer from "./shoppingCart/shoppingCartReducer";

export default combineReducers({
  sales: salesReducer,
  shoppingCart: shoppingCartReducer,
});

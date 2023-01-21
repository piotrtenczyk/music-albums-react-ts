import { combineReducers } from "redux";
import itunesAlbumsReducer from "./itunesAlbums/itunesAlbumsReducer";
import salesReducer from "./sales/salesReducer";
import shoppingCartReducer from "./shoppingCart/shoppingCartReducer";

export default combineReducers({
  shoppingCart: shoppingCartReducer,
  itunesAlbums: itunesAlbumsReducer,
  sales: salesReducer,
});

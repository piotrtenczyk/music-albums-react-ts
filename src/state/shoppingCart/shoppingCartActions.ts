import { ShoppingCartItem } from "./shoppingCartReducer";

export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";

export type ShoppingCartAction = {
  type: typeof ADD_ITEM_TO_CART;
  item: ShoppingCartItem;
};

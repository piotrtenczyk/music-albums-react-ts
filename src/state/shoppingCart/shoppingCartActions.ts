import { ShoppingCartItem } from "./shoppingCartReducer";

export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const REMOVE_ALBUM_FROM_CART = "REMOVE_ALBUM_FROM_CART";

export type ShoppingCartAction =
  | {
      type: typeof ADD_ITEM_TO_CART;
      item: ShoppingCartItem;
    }
  | {
      type: typeof REMOVE_ALBUM_FROM_CART;
      id: string;
    };

import { AlbumDescriptionProps } from "../../common/musicAlbum/AlbumDescription";
import { AppDispatch, RootState } from "../store";
import shoppingCartReducer from "./shoppingCartReducer";

export const ADD_ALBUM_TO_CART = "ADD_ALBUM_TO_CART";
export const REMOVE_ALBUM_FROM_CART = "REMOVE_ALBUM_FROM_CART";

export type ShoppingCartAction =
  | {
      type: typeof ADD_ALBUM_TO_CART;
      id: string;
      albumDescription: AlbumDescriptionProps;
      discountPercent: number;
    }
  | {
      type: typeof REMOVE_ALBUM_FROM_CART;
      id: string;
    };

export const SHOPPING_CART_LOCAL_STORAGE_KEY = "shoppingCart";

export const dispatchShoppingAction = (action: ShoppingCartAction) => {
  const addAlbumToCartThunk = async (
    dispatch: AppDispatch,
    getState: () => RootState
  ) => {
    const stateAfterAddingAlbum = shoppingCartReducer(
      getState().shoppingCart,
      action
    );

    window.localStorage.setItem(
      SHOPPING_CART_LOCAL_STORAGE_KEY,
      JSON.stringify(stateAfterAddingAlbum)
    );
    dispatch(action);
  };

  return addAlbumToCartThunk;
};

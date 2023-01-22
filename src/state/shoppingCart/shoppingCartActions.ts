import { AlbumDescriptionProps } from "../../common/musicAlbum/AlbumDescription";

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

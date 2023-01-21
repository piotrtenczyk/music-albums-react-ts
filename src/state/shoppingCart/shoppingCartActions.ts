import { AlbumDescriptionProps } from "../../common/musicAlbum/AlbumDescription";

export const ADD_ALBUM_TO_CART = "ADD_ALBUM_TO_CART";

export type ShoppingCartAction = {
  type: typeof ADD_ALBUM_TO_CART;
  albumDescription: AlbumDescriptionProps;
  saleValue: number;
};

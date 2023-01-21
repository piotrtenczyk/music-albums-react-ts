import { AlbumDescriptionProps } from "../../common/musicAlbum/AlbumDescription";
import { ADD_ALBUM_TO_CART, ShoppingCartAction } from "./shoppingCartActions";

export interface AlbumShoppingCartItem {
  title: string;
  artist: string;
  price: number;
  quantity: number;
}

interface ShoppingCartState {
  numberOfItems: number;
  items: AlbumShoppingCartItem[];
  totalPrice: number;
}

const initialState: ShoppingCartState = {
  numberOfItems: 0,
  items: [],
  totalPrice: 0,
};

const albumsAreEqual = (
  album1: AlbumDescriptionProps,
  album2: AlbumDescriptionProps
) => {
  return album1.title === album2.title && album1.artist === album2.artist;
};

const shoppingCartReducer = (
  state: ShoppingCartState = initialState,
  action: ShoppingCartAction
) => {
  switch (action.type) {
    case ADD_ALBUM_TO_CART: {
      const newAlbum = { ...action.albumDescription, quantity: 1 };

      const albumsMatchinNewAlbumFromAction = state.items.filter((item) =>
        albumsAreEqual(item, newAlbum)
      );

      const addedAlbymExistsInCart = albumsMatchinNewAlbumFromAction.length > 0;

      let newItems = [];

      if (addedAlbymExistsInCart) {
        newItems = state.items.map((item) => {
          if (albumsAreEqual(item, newAlbum)) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        newItems = [...state.items, newAlbum];
      }

      const totalPrice = newItems.reduce(
        (accumulator: number, currentItem) =>
          accumulator + currentItem.price * currentItem.quantity,
        0
      );

      return {
        ...state,
        items: newItems,
        numberOfItems: state.numberOfItems + 1,
        totalPrice,
      };
    }

    default: {
      return state;
    }
  }
};

export default shoppingCartReducer;

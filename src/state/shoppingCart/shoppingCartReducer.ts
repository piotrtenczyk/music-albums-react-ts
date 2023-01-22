import { AlbumDescriptionProps } from "../../common/musicAlbum/AlbumDescription";
import { ADD_ALBUM_TO_CART, ShoppingCartAction } from "./shoppingCartActions";

export interface AlbumShoppingCartItem {
  id: string;
  title: string;
  artist: string;
  quantity: number;
  salePercentDiscount: number;
  price: number;
  priceAfterDiscount: number;
}

interface ShoppingCartState {
  numberOfItems: number;
  items: AlbumShoppingCartItem[];
  totalPrice: number;
  totalPriceAfterDiscount: number;
}

const initialState: ShoppingCartState = {
  numberOfItems: 0,
  items: [],
  totalPrice: 0,
  totalPriceAfterDiscount: 0,
};

const albumsAreEqual = (
  album1: AlbumDescriptionProps,
  album2: AlbumDescriptionProps
) => {
  return album1.title === album2.title && album1.artist === album2.artist;
};

const normalizePrice = (price: number) => {
  return Number(price.toFixed(2));
};

const shoppingCartReducer = (
  state: ShoppingCartState = initialState,
  action: ShoppingCartAction
) => {
  switch (action.type) {
    case ADD_ALBUM_TO_CART: {
      const discountValue = action.saleValue
        ? (action.saleValue * action.albumDescription.price) / 100
        : 0;

      const priceAfterDiscount = action.albumDescription.price - discountValue;

      const newAlbum = {
        ...action.albumDescription,
        id: action.id,
        quantity: 1,
        salePercentDiscount: action.saleValue,
        priceAfterDiscount: normalizePrice(priceAfterDiscount),
      };

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

      const totalPriceAfterDiscount = newItems.reduce(
        (accumulator: number, currentItem) =>
          accumulator + currentItem.priceAfterDiscount * currentItem.quantity,
        0
      );

      return {
        ...state,
        items: newItems,
        numberOfItems: state.numberOfItems + 1,
        totalPrice: normalizePrice(totalPrice),
        totalPriceAfterDiscount: normalizePrice(totalPriceAfterDiscount),
      };
    }

    default: {
      return state;
    }
  }
};

export default shoppingCartReducer;

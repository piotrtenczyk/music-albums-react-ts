import {
  ADD_ALBUM_TO_CART,
  REMOVE_ALBUM_FROM_CART,
  ShoppingCartAction,
  SHOPPING_CART_LOCAL_STORAGE_KEY,
} from "./shoppingCartActions";
import { applyDiscount, calculateTotalPrice } from "./shoppingUtils";

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

const getInitialState = () => {
  const localStorageState = localStorage.getItem(
    SHOPPING_CART_LOCAL_STORAGE_KEY
  );
  return localStorageState ? JSON.parse(localStorageState) : initialState;
};

const shoppingCartReducer = (
  state: ShoppingCartState = getInitialState(),
  action: ShoppingCartAction
): ShoppingCartState => {
  switch (action.type) {
    case REMOVE_ALBUM_FROM_CART: {
      const newItems = [...state.items];
      const idexOfItemToRemove = newItems.findIndex((item) => {
        return item.id === action.id;
      });

      newItems.splice(idexOfItemToRemove, 1);

      const totalPrice = calculateTotalPrice(newItems);

      return {
        ...state,
        items: newItems,
        numberOfItems: newItems.length,
        totalPrice: totalPrice.beforeDiscounts,
        totalPriceAfterDiscount: totalPrice.afterDiscounts,
      };
    }

    case ADD_ALBUM_TO_CART: {
      const newAlbum = {
        ...action.albumDescription,
        id: action.id,
        quantity: 1,
        salePercentDiscount: action.discountPercent,
        priceAfterDiscount: applyDiscount(
          action.albumDescription.price,
          action.discountPercent
        ),
      };

      const albumsMatchinNewAlbumFromAction = state.items.filter(
        (item) => item.id === newAlbum.id
      );

      const addedAlbymExistsInCart = albumsMatchinNewAlbumFromAction.length > 0;

      let newItems = [];

      if (addedAlbymExistsInCart) {
        newItems = state.items.map((item) => {
          if (item.id === newAlbum.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        newItems = [...state.items, newAlbum];
      }

      const totalPrice = calculateTotalPrice(newItems);

      return {
        ...state,
        items: newItems,
        numberOfItems: state.numberOfItems + 1,
        totalPrice: totalPrice.beforeDiscounts,
        totalPriceAfterDiscount: totalPrice.afterDiscounts,
      };
    }

    default: {
      return state;
    }
  }
};

export default shoppingCartReducer;

import { AlbumDescriptionProps } from "../../common/musicAlbum/AlbumDescription";
import { ADD_ALBUM_TO_CART, ShoppingCartAction } from "./shoppingCartActions";

interface ShoppingCartState {
  numberOfItems: number;
  items: AlbumDescriptionProps[];
  totalPrice: number;
}

const initialState: ShoppingCartState = {
  numberOfItems: 0,
  items: [],
  totalPrice: 0,
};

const shoppingCartReducer = (
  state: ShoppingCartState = initialState,
  action: ShoppingCartAction
) => {
  switch (action.type) {
    case ADD_ALBUM_TO_CART: {
      const newItems = [...state.items, action.albumDescription];

      const totalPrice = newItems.reduce(
        (accumulator: number, currentValue) => accumulator + currentValue.price,
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

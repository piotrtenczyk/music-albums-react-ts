import { AlbumDescriptionProps } from "../../common/musicAlbum/AlbumDescription";
import { ADD_ALBUM_TO_CART, ShoppingCartAction } from "./shoppingCartActions";

interface ShoppingCartState {
  numberOfItems: number;
  items: AlbumDescriptionProps[];
}

const initialState: ShoppingCartState = {
  numberOfItems: 0,
  items: [],
};

const shoppingCartReducer = (
  state: ShoppingCartState = initialState,
  action: ShoppingCartAction
) => {
  switch (action.type) {
    case ADD_ALBUM_TO_CART: {
      const newItems = [...state.items, action.albumDescription];

      return {
        ...state,
        items: newItems,
        numberOfItems: state.numberOfItems + 1,
      };
    }

    default: {
      return state;
    }
  }
};

export default shoppingCartReducer;

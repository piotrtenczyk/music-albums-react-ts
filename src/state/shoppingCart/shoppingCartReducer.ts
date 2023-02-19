import { ADD_ITEM_TO_CART, ShoppingCartAction } from "./shoppingCartActions";

export interface ShoppingCartItem {
  name: string;
  price: number;
}

interface ShoppingCartState {
  numberOfItems: number;
  items: ShoppingCartItem[];
}

const defaultState: ShoppingCartState = {
  numberOfItems: 0,
  items: [],
};

const shoppingCartReducer = (
  state: ShoppingCartState = defaultState,
  action: ShoppingCartAction
): ShoppingCartState => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const newNumberOfItems = state.numberOfItems + 1;
      const newItems = [...state.items, action.item];
      const newState = {
        ...state,
        numberOfItems: newNumberOfItems,
        items: newItems,
      };
      return newState;
    default:
      return state;
  }
};

export default shoppingCartReducer;

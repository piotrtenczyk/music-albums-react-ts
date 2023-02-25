import { act } from "react-dom/test-utils";
import { ADD_ITEM_TO_CART, ShoppingCartAction } from "./shoppingCartActions";

export interface ShoppingCartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
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
      const itemMatchingIdFromAction = state.items.find(
        (item) => item.id === action.item.id
      );
      const quantityForNewItem = itemMatchingIdFromAction
        ? itemMatchingIdFromAction.quantity + 1
        : 1;

      let newItems: ShoppingCartItem[] = [];
      if (quantityForNewItem > 1) {
        newItems = state.items.map((oldItem) => {
          return oldItem.id === action.item.id
            ? { ...oldItem, quantity: quantityForNewItem }
            : oldItem;
        });
      } else {
        const newItem = {
          ...action.item,
          quantity: 1,
        };
        newItems = [...state.items, newItem];
      }

      return {
        ...state,
        items: newItems,
        numberOfItems: state.numberOfItems + 1,
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;

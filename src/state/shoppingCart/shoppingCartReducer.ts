import {
  ADD_ITEM_TO_CART,
  REMOVE_ALBUM_FROM_CART,
  ShoppingCartAction,
} from "./shoppingCartActions";

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

const getQuantityForItem = (
  items: ShoppingCartItem[],
  newItemId: string
): number => {
  const itemMatchingIdFromAction = items.find((item) => item.id === newItemId);
  const quantityForNewItem = itemMatchingIdFromAction
    ? itemMatchingIdFromAction.quantity + 1
    : 1;

  return quantityForNewItem;
};

const shoppingCartReducer = (
  state: ShoppingCartState = defaultState,
  action: ShoppingCartAction
): ShoppingCartState => {
  switch (action.type) {
    case REMOVE_ALBUM_FROM_CART:
      const itemsToLeave = state.items.filter((item) => item.id !== action.id);
      const sumOfQuantitiesToLeave = itemsToLeave.reduce(
        (accumulator, item) => accumulator + item.quantity,
        0
      );

      return {
        ...state,
        items: itemsToLeave,
        numberOfItems: sumOfQuantitiesToLeave,
      };

    case ADD_ITEM_TO_CART:
      const quantityForNewItem = getQuantityForItem(
        state.items,
        action.item.id
      );

      let newItems: ShoppingCartItem[];
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

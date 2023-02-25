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
      const newNumberOfItems = state.numberOfItems + 1;

      const newItems = [...state.items]; // na razie jest to nowa tablica na starych itemach

      const indexOfAlbumWithIdFromActionInState = state.items.findIndex(
        (itemInOldState) => itemInOldState.id === action.item.id
      );

      const albumWithIdFromActionExistsInState =
        indexOfAlbumWithIdFromActionInState !== -1;

      if (albumWithIdFromActionExistsInState) {
        const existingItem = state.items[indexOfAlbumWithIdFromActionInState];
        const nowyQuantity = existingItem.quantity + 1;

        newItems.splice(indexOfAlbumWithIdFromActionInState, 1); // usuwamy stary item
        const newItemWithQuantity = {
          ...action.item,
          quantity: nowyQuantity,
        };
        newItems.push(newItemWithQuantity); // dodajemy nowy item
      } else {
        const newItemWithQuantity = {
          ...action.item,
          quantity: 1,
        };
        newItems.push(newItemWithQuantity);
      }

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

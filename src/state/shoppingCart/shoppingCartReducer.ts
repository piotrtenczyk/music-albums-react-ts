import { ADD_ALBUM_TO_CART, ShoppingCartAction } from "./shoppingCartActions";

interface ShoppingCartState {
  numberOfItems: number;
  allItems: [];
}

const shoppingCartReducer = (
  state: ShoppingCartState,
  action: ShoppingCartAction
): ShoppingCartState => {
  switch (action.type) {
    case ADD_ALBUM_TO_CART:
      const newNumberOfItems = state.numberOfItems + 1;
      const newState = { ...state, numberOfItems: newNumberOfItems };
      return newState;
    default:
      throw new Error("Action dind't  match any known actions");
  }
};

export default shoppingCartReducer;

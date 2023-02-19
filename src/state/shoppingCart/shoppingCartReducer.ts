import { ADD_ALBUM_TO_CART, ShoppingCartAction } from "./shoppingCartActions";

interface ShoppingCartState {
  numberOfItems: number;
}

const shoppingCartReducer = (
  state: ShoppingCartState,
  action: ShoppingCartAction
) => {
  switch (action.type) {
    case ADD_ALBUM_TO_CART:
      const nowaIloscItemow = staraIlosc + 1;
      return {};
    //   return { ...state };
    default:
      throw new Error("Action dind't  match any known actions");
  }
};

export default shoppingCartReducer;

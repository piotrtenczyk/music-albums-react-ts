interface ShoppingCartState {
  numberOfItems: number;
}

const initialState: ShoppingCartState = {
  numberOfItems: 0,
};

const shoppingCartReducer = () => {
  return initialState;
};

export default shoppingCartReducer;

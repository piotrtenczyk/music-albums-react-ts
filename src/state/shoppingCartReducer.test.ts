import { ADD_ITEM_TO_CART } from "./shoppingCart/shoppingCartActions";
import shoppingCartReducer from "./shoppingCart/shoppingCartReducer";

describe("shoppingCartReducer.ts", () => {
  it(`return appropiate state after ${ADD_ITEM_TO_CART} action`, () => {
    const currentState = {
      numberOfItems: 0,
      items: [],
    };

    const newItem = {
      id: "5673",
      name: "Teddy Bear",
      price: 123,
      quantity: 1,
    };

    const addItemAction = {
      type: ADD_ITEM_TO_CART as typeof ADD_ITEM_TO_CART,
      item: newItem,
    };

    const newState = shoppingCartReducer(currentState, addItemAction);

    //oczekiwany stan po teście
    const expectedState = {
      numberOfItems: 1,
      items: [newItem],
    };

    expect(newState).toEqual(expectedState);
  });
});

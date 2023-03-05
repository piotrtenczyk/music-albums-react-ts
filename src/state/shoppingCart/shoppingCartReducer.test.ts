import { ADD_ITEM_TO_CART } from "./shoppingCartActions";
import shoppingCartReducer from "./shoppingCartReducer";

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

  it(`return appropiate state after ${ADD_ITEM_TO_CART} action, when item with same id exists in state`, () => {
    const item1 = {
      id: "5673",
      name: "Teddy Bear",
      price: 123,
      quantity: 1,
    };

    const currentState = {
      numberOfItems: 1,
      items: [item1],
    };

    const addItemAction = {
      type: ADD_ITEM_TO_CART as typeof ADD_ITEM_TO_CART,
      item: item1,
    };

    const newState = shoppingCartReducer(currentState, addItemAction);

    //oczekiwany stan po teście
    const expectedState = {
      numberOfItems: 2,
      items: [{ ...item1, quantity: 2 }],
    };

    expect(newState).toEqual(expectedState);
  });

  it(`return appropiate state after ${ADD_ITEM_TO_CART} action, when item with another id exists in state`, () => {
    const teddyBear = {
      id: "5673",
      name: "Teddy Bear",
      price: 123,
      quantity: 1,
    };

    const currentState = {
      numberOfItems: 1,
      items: [teddyBear],
    };

    const coalaBear = {
      id: "xxx",
      name: "Coala Bear",
      price: 99.99,
      quantity: 1,
    };

    const addItemAction = {
      type: ADD_ITEM_TO_CART as typeof ADD_ITEM_TO_CART,
      item: coalaBear,
    };

    const newState = shoppingCartReducer(currentState, addItemAction);

    //oczekiwany stan po teście
    const expectedState = {
      numberOfItems: 2,
      items: [teddyBear, coalaBear],
    };

    expect(newState).toEqual(expectedState);
  });
});

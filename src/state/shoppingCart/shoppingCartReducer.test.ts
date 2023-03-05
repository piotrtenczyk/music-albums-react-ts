import { ADD_ITEM_TO_CART } from "./shoppingCartActions";
import shoppingCartReducer from "./shoppingCartReducer";

describe("shoppingCartReducer.ts", () => {
  describe(`${ADD_ITEM_TO_CART} test`, () => {
    const teddyBear = {
      id: "5673",
      name: "Teddy Bear",
      price: 123,
      quantity: 1,
    };

    const coalaBear = {
      id: "xxx",
      name: "Coala Bear",
      price: 99.99,
      quantity: 1,
    };

    const stateWithEmptyItems = {
      numberOfItems: 0,
      items: [],
    };

    const stateWithTeddyBear = {
      ...stateWithEmptyItems,
      numberOfItems: 1,
      items: [teddyBear],
    };

    it(`return appropiate state after ${ADD_ITEM_TO_CART} action`, () => {
      const addItemAction = {
        type: ADD_ITEM_TO_CART as typeof ADD_ITEM_TO_CART,
        item: teddyBear,
      };

      const newState = shoppingCartReducer(stateWithEmptyItems, addItemAction);

      //oczekiwany stan po teście
      const expectedState = {
        numberOfItems: 1,
        items: [teddyBear],
      };

      expect(newState).toEqual(expectedState);
    });

    it(`return appropiate state after ${ADD_ITEM_TO_CART} action, when item with same id exists in state`, () => {
      const addItemAction = {
        type: ADD_ITEM_TO_CART as typeof ADD_ITEM_TO_CART,
        item: teddyBear,
      };

      const newState = shoppingCartReducer(stateWithTeddyBear, addItemAction);

      const expectedState = {
        numberOfItems: 2,
        items: [{ ...teddyBear, quantity: 2 }],
      };

      expect(newState).toEqual(expectedState);
    });

    it(`return appropiate state after ${ADD_ITEM_TO_CART} action, when item with another id exists in state`, () => {
      const addItemAction = {
        type: ADD_ITEM_TO_CART as typeof ADD_ITEM_TO_CART,
        item: coalaBear,
      };

      const newState = shoppingCartReducer(stateWithTeddyBear, addItemAction);

      const expectedState = {
        numberOfItems: 2,
        items: [teddyBear, coalaBear],
      };

      expect(newState).toEqual(expectedState);
    });
  });
});

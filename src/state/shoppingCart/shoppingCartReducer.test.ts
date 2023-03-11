import {
  ADD_ITEM_TO_CART,
  REMOVE_ALBUM_FROM_CART,
} from "./shoppingCartActions";
import shoppingCartReducer from "./shoppingCartReducer";

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

describe("shoppingCartReducer.ts", () => {
  describe(`${ADD_ITEM_TO_CART} test`, () => {
    it(`return appropiate state after ${ADD_ITEM_TO_CART} action`, () => {
      const addItemAction = {
        type: ADD_ITEM_TO_CART as typeof ADD_ITEM_TO_CART,
        item: teddyBear,
      };

      const newState = shoppingCartReducer(stateWithEmptyItems, addItemAction);
      expect(newState).toEqual(stateWithTeddyBear);
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

  describe(`${REMOVE_ALBUM_FROM_CART} test`, () => {
    it(`return appropiate state after ${REMOVE_ALBUM_FROM_CART} action`, () => {
      const removeTeddyBearAction = {
        type: REMOVE_ALBUM_FROM_CART as typeof REMOVE_ALBUM_FROM_CART,
        id: teddyBear.id,
      };
      const newState = shoppingCartReducer(
        stateWithTeddyBear,
        removeTeddyBearAction
      );

      expect(newState).toEqual(stateWithEmptyItems);
    });

    it(`return appropiate state after ${REMOVE_ALBUM_FROM_CART} action when there are two items with the same id`, () => {
      const stateWithTwoTeddyBears = {
        numberOfItems: 2,
        items: [{ ...teddyBear, quantity: 2 }],
      };

      const removeTeddyBearAction = {
        type: REMOVE_ALBUM_FROM_CART as typeof REMOVE_ALBUM_FROM_CART,
        id: teddyBear.id,
      };

      const newState = shoppingCartReducer(
        stateWithTwoTeddyBears,
        removeTeddyBearAction
      );

      expect(newState).toEqual(stateWithEmptyItems);
    });

    it(`return appropiate state after ${REMOVE_ALBUM_FROM_CART} action when there are two items with different id`, () => {
      const stateWithTwoDifferentBears = {
        numberOfItems: 2,
        items: [teddyBear, coalaBear],
      };

      const removeKolaBearAction = {
        type: REMOVE_ALBUM_FROM_CART as typeof REMOVE_ALBUM_FROM_CART,
        id: coalaBear.id,
      };

      const newState = shoppingCartReducer(
        stateWithTwoDifferentBears,
        removeKolaBearAction
      );

      expect(newState).toEqual(stateWithTeddyBear);
    });
  });
});

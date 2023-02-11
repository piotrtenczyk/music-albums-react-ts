import { normalizePrice } from "../shoppingUtils";

describe("shoppingUtils.ts", () => {
  it("normalizePrice rounds up properly", () => {
    const returnedPrice = normalizePrice(10.999999);
    expect(returnedPrice).toEqual(11);
  });

  it("normalizePrice rounds down propely", () => {
    const returnedPrice = normalizePrice(10.9911);
    expect(returnedPrice).toEqual(10.99);
  });
});

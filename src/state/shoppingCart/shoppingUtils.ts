import { AlbumShoppingCartItem } from "./shoppingCartReducer";

export const normalizePrice = (price: number): number => {
  return Number(price.toFixed(2));
};

interface TotalPrice {
  beforeDiscounts: number;
  afterDiscounts: number;
}

export const calculateTotalPrice = (
  items: AlbumShoppingCartItem[]
): TotalPrice => {
  const totalPrice = items.reduce(
    (accumulator: number, currentItem) =>
      accumulator + currentItem.price * currentItem.quantity,
    0
  );

  const totalPriceAfterDiscount = items.reduce(
    (accumulator: number, currentItem) =>
      accumulator + currentItem.priceAfterDiscount * currentItem.quantity,
    0
  );

  return {
    beforeDiscounts: normalizePrice(totalPrice),
    afterDiscounts: normalizePrice(totalPriceAfterDiscount),
  };
};

export const applyDiscount = (
  basePrice: number,
  discountPercentage: number | undefined
): number => {
  const discountValue = discountPercentage
    ? (discountPercentage * basePrice) / 100
    : 0;

  return normalizePrice(basePrice - discountValue);
};

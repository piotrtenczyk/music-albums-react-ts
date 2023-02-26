export interface SalesRawData {
  amountInPercent: number;
  itemsUnderSale?: string[];
  rule?: {
    type: string;
    value: number;
  };
}

export const GREATER_THEN = "GREATER_THEN";

export const salesInformation: SalesRawData[] = [
  {
    amountInPercent: 16,
    itemsUnderSale: ["111", "222", "666", "777"],
  },
  {
    amountInPercent: 10,
    rule: {
      type: GREATER_THEN,
      value: 10,
    },
  },
];

const findItemValueRangeBasedRule = (salesInformation: SalesRawData[]) => {
  return salesInformation.find(
    (salesRule) => salesRule.rule && salesRule.rule.value
  );
};

const getDiscountPercentForRangeRule = (
  salesInformation: SalesRawData[],
  itemValue: number
): number | undefined => {
  const itemValueRangeBasedRule = findItemValueRangeBasedRule(salesInformation);

  const itemValueIsFulfilingRule =
    itemValueRangeBasedRule?.rule?.type === GREATER_THEN &&
    itemValue > itemValueRangeBasedRule?.rule?.value;

  return itemValueIsFulfilingRule
    ? itemValueRangeBasedRule.amountInPercent
    : undefined;
};

interface SalesItem {
  id: string;
  value: number;
}

export const getDiscountForItem = (
  salesItem: SalesItem,
  salesInformation: SalesRawData[] | null
): number | undefined => {
  if (salesInformation === null) return undefined;
  const itemIdBasedDiscount = getDiscountPercentForItemId(
    salesInformation,
    salesItem.id
  );
  if (itemIdBasedDiscount) return itemIdBasedDiscount; // id based discounts should take priority over other types of discounts

  const itemValueRangeBasedDiscount = getDiscountPercentForRangeRule(
    salesInformation,
    salesItem.value
  );

  return itemValueRangeBasedDiscount;
};

const findItemIdBasedRule = (salesInformation: SalesRawData[]) => {
  return salesInformation.find((salesRule) => salesRule.itemsUnderSale);
};

export const getDiscountPercentForItemId = (
  salesInformation: SalesRawData[] | null,
  itemId: string
): number | undefined => {
  if (salesInformation === null) return undefined;

  const salesRule = findItemIdBasedRule(salesInformation);
  const ruleMatchesItemId: boolean = !!salesRule?.itemsUnderSale?.find(
    (item) => item === itemId
  );

  return salesRule && ruleMatchesItemId ? salesRule.amountInPercent : undefined;
};

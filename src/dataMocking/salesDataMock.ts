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

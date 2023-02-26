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

interface SalesItem {
  id: string;
  value: number;
}

const getDiscountForItem = (
  salesItem: SalesItem,
  salesInformation: SalesRawData[]
): number | undefined => {
  // Funkcja musi sama wybrac, ktora zasade wyprzedazową uwzgledic
  // Pierwszenstwo powinna miec zasada oparta na ID
  // Jak to zrobic?
  return undefined;
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

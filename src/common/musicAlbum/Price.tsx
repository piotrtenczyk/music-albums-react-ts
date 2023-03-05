interface PriceProps {
  value: number;
  percentDiscount?: number;
}

const priceWrapperStyle = {
  margin: "8px",
};

interface PriceStyleConfig {
  strikeThrough?: boolean;
  highlighted?: boolean;
}

const getPriceStyle = (config: PriceStyleConfig) => {
  return {
    padding: "0 5px",
    textDecoration: config.strikeThrough ? "line-through" : undefined,
    backgroundColor: config.highlighted ? "yellow" : "inherit",
    color: config.highlighted ? "black" : "inherit",
  };
};

const getPriceAfterDiscount = (
  basePrice: number,
  percentDiscount: number | undefined
) => {
  const priceAfterDiscount = percentDiscount
    ? basePrice - (basePrice * percentDiscount) / 100
    : null;

  return priceAfterDiscount?.toFixed(2);
};

const Price: React.FC<PriceProps> = ({ value, percentDiscount }) => {
  const valueAfterDiscount = getPriceAfterDiscount(value, percentDiscount);

  const basePriceStyle = getPriceStyle({ strikeThrough: !!valueAfterDiscount });
  const discountedPriceStyle = getPriceStyle({
    highlighted: !!valueAfterDiscount,
  });

  return (
    <span style={priceWrapperStyle}>
      <span style={basePriceStyle}>{value}</span>
      <span style={discountedPriceStyle}>{valueAfterDiscount}</span>
    </span>
  );
};

export default Price;

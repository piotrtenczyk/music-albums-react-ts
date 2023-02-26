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

const Price: React.FC<PriceProps> = ({ value, percentDiscount }) => {
  const valueAfterDiscount = percentDiscount
    ? value - (value * percentDiscount) / 100
    : null;

  const valueAfterDiscountNormalized = valueAfterDiscount?.toFixed(2);

  const basePriceStyle = getPriceStyle({ strikeThrough: !!valueAfterDiscount });
  const discountedPriceStyle = getPriceStyle({
    highlighted: !!valueAfterDiscount,
  });

  return (
    <span style={priceWrapperStyle}>
      <span style={basePriceStyle}>{value}</span>
      <span style={discountedPriceStyle}>{valueAfterDiscountNormalized}</span>
    </span>
  );
};

export default Price;

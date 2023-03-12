import { Link } from "react-router-dom";

const getlinkStyle = (isTransparent: boolean | undefined) => {
  return {
    textDecoration: "none",
    color: "white",
    opacity: isTransparent ? "0.5" : "1",
    fontSize: "36px",
  };
};

const getNumberOfItemsStyle = (backgroundColor: string | undefined) => {
  return {
    position: "absolute" as "absolute",
    top: "17px",
    left: "18px",
    textAlign: "center" as "center",
    background: backgroundColor ? backgroundColor : "yellow",
    borderRadius: "28%",
    border: "2px solid grey",
    height: "28px",
    padding: "0 3px",
    fontSize: "25px",
    color: "black",
  };
};

interface ShoppingCartIconProps {
  numberOfItems: number;
  numberBackgroundColor?: string;
  transparent?: boolean;
}

const ShoppingCartIcon: React.FC<ShoppingCartIconProps> = ({
  numberOfItems,
  numberBackgroundColor,
  transparent,
}) => {
  const numberIcon =
    numberOfItems > 0 ? (
      <span style={getNumberOfItemsStyle(numberBackgroundColor)}>
        {numberOfItems}
      </span>
    ) : null;
  return (
    <div style={{ position: "relative", padding: "5px" }}>
      <Link to="/shopping-cart" style={getlinkStyle(transparent)}>
        🛒
        {numberIcon}
      </Link>
    </div>
  );
};

export default ShoppingCartIcon;

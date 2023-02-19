import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "white",
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
}

const ShoppingCartIcon: React.FC<ShoppingCartIconProps> = ({
  numberOfItems,
  numberBackgroundColor,
}) => {
  const numberIcon =
    numberOfItems > 0 ? (
      <span style={getNumberOfItemsStyle(numberBackgroundColor)}>
        {numberOfItems}
      </span>
    ) : null;

  return (
    <div style={{ position: "relative" }}>
      <Link to="/shopping-cart" style={linkStyle}>
        🛒
        {numberIcon}
      </Link>
    </div>
  );
};

export default ShoppingCartIcon;

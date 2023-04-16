import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

const getNumberOfItemsStyle = () => {
  return {
    position: "absolute" as "absolute",
    top: "17px",
    left: "18px",
    textAlign: "center" as "center",
    background: "yellow",
    borderRadius: "28%",
    border: "2px solid grey",
    height: "28px",
    padding: "0 3px",
    fontSize: "25px",
    color: "black",
  };
};

interface ShoppingCartIconProps {
  value: number;
}

const ShoppingCartIcon: React.FC<ShoppingCartIconProps> = ({ value }) => {
  const number =
    value > 0 ? (
      <span data-testid="number-icon" style={getNumberOfItemsStyle()}>
        {value}
      </span>
    ) : null;

  return (
    <div data-testid="shopping-cart-icon" style={{ position: "relative" }}>
      <Link to="/shopping-cart" style={linkStyle}>
        🛒
        {number}
      </Link>
    </div>
  );
};

export default ShoppingCartIcon;

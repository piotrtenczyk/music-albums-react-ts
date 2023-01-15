import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../state/store";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

const numberOfItemsStyle = {
  position: "absolute" as "absolute",
  top: "17px",
  left: "18px",
  background: "yellow",
  borderRadius: "50%",
  border: "2px solid grey",
  width: "28px",
  height: "28px",
  fontSize: "25px",
  color: "black",
};

const ShoppingCartIcon = () => {
  const numberOfItems = useSelector(
    (state: RootState) => state.shoppingCart.numberOfItems
  );

  const numberIcon =
    numberOfItems > 0 ? (
      <span style={numberOfItemsStyle}>{numberOfItems}</span>
    ) : null;

  return (
    <div style={{ position: "relative" }}>
      <Link to="/shopping-cart" style={linkStyle}>
        🛒
      </Link>
      {numberIcon}
    </div>
  );
};

export default ShoppingCartIcon;

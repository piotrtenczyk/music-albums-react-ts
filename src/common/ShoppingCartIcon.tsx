import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

const numberOfItemsStyle = {
  position: "absolute" as "absolute",
  top: "15px",
  left: "18px",
  background: "yellow",
  borderRadius: "50%",

  width: "30px",
  height: "30px",
  fontSize: "27px",
  color: "black",
};

const ShoppingCartIcon = () => {
  return (
    <div style={{ position: "relative" }}>
      <Link to="/shopping-cart" style={linkStyle}>
        🛒
      </Link>
      <span style={numberOfItemsStyle}>5</span>
    </div>
  );
};

export default ShoppingCartIcon;

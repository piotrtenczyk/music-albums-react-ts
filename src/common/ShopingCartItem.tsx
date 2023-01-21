import { AlbumShoppingCartItem } from "../state/shoppingCart/shoppingCartReducer";
import AlbumTitle from "./musicAlbum/AlbumTitle";

interface ShoppingCartItemProps {
  description: AlbumShoppingCartItem;
}

const cartItemStyle = {
  border: "2px solid grey",
  borderRadius: "5px",
  margin: "10px",
  padding: "5px",
};

const smallTextStyle = {
  fontSize: "15px",
  padding: "0 20px",
};

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ description }) => {
  const discountMessage = description.salePercentDiscount ? (
    <span style={smallTextStyle}>
      after discount {description.priceAfterDiscount}
    </span>
  ) : null;

  return (
    <div style={cartItemStyle}>
      <AlbumTitle>{description.title}</AlbumTitle>
      <span style={smallTextStyle}>{description.price}</span>
      <span style={smallTextStyle}> (x{description.quantity})</span>
      {discountMessage}
    </div>
  );
};

export default ShoppingCartItem;

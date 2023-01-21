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

const quantityStyle = {
  fontSize: "15px",
  padding: "0 20px",
};

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ description }) => {
  return (
    <div style={cartItemStyle}>
      <AlbumTitle>{description.title}</AlbumTitle>
      <span>{description.price}</span>
      <span style={quantityStyle}> x {description.quantity}</span>
    </div>
  );
};

export default ShoppingCartItem;

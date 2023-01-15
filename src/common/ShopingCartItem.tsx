import { AlbumDescriptionProps } from "./musicAlbum/AlbumDescription";
import AlbumTitle from "./musicAlbum/AlbumTitle";

interface ShoppingCartItemProps {
  description: AlbumDescriptionProps;
}

const cartItemStyle = {
  border: "2px solid grey",
  borderRadius: "5px",
  margin: "10px",
  padding: "5px",
};

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ description }) => {
  return (
    <div style={cartItemStyle}>
      <AlbumTitle>{description.title}</AlbumTitle>
      <span>{description.price}</span>
    </div>
  );
};

export default ShoppingCartItem;

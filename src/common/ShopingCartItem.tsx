import {
  dispatchShoppingAction,
  REMOVE_ALBUM_FROM_CART,
} from "../state/shoppingCart/shoppingCartActions";
import { AlbumShoppingCartItem } from "../state/shoppingCart/shoppingCartReducer";
import { useAppDispatch } from "../state/stateHooks";
import AlbumTitle from "./musicAlbum/AlbumTitle";

interface ShoppingCartItemProps {
  id: string;
  description: AlbumShoppingCartItem;
}

const cartItemStyle = {
  display: "flex",
  alignItems: "center",
  border: "2px solid grey",
  borderRadius: "5px",
  margin: "10px",
  padding: "5px",
};

const smallTextStyle = {
  fontSize: "15px",
  padding: "0 20px",
};

const removeButtonStyle = {
  padding: "10px",
  cursor: "pointer",
  userSelect: "none" as "none",
};

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({
  id,
  description,
}) => {
  const discountMessage = description.salePercentDiscount ? (
    <span style={smallTextStyle}>
      after discount {description.priceAfterDiscount}
    </span>
  ) : null;

  const dispatch = useAppDispatch();

  const removeItem: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    dispatch(dispatchShoppingAction({ type: REMOVE_ALBUM_FROM_CART, id }));
  };

  return (
    <div style={cartItemStyle}>
      <AlbumTitle>{description.title}</AlbumTitle>
      <span style={smallTextStyle}>{description.price}</span>
      <span style={smallTextStyle}> (x{description.quantity})</span>
      {discountMessage}
      <span onClick={removeItem} style={removeButtonStyle}>
        🗑
      </span>
    </div>
  );
};

export default ShoppingCartItem;

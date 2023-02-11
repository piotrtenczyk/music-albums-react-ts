import { useDispatch } from "react-redux";
import { ADD_ALBUM_TO_CART } from "../../state/shoppingCart/shoppingCartActions";
import { useAppSelector } from "../../state/stateHooks";
import { RootState } from "../../state/store";
import AddToCartButton from "../AddToCartButton";
import ShoppingCartIcon from "../ShoppingCartIcon";
import AlbumDescription, { AlbumDescriptionProps } from "./AlbumDescription";
import AlbumImage from "./AlbumImage";
import AlbumNumber from "./AlbumNumber";

const albumStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  margin: "30px",
  fontSize: "12px",
  background: "#353a45",
  padding: "10px 20px 10px 10px",
};

const cartIconWrapperStyle = {
  display: "inline-block",
  fontSize: "30px",
  margin: "0 33px 0 0",
  opacity: "0.5",
};

export interface AlbumProps {
  id: string;
  number: number;
  coverImageUrl: string | undefined;
  description: AlbumDescriptionProps;
  discountPercent?: number;
}

const Album = ({
  id,
  number,
  coverImageUrl,
  description,
  discountPercent,
}: AlbumProps) => {
  const dispatch = useDispatch();

  const correspondingShoppingCartItem = useAppSelector((state: RootState) =>
    state.shoppingCart.items.find((item) => item.id === id)
  );

  const quantityInShoppingCart = correspondingShoppingCartItem?.quantity || 0;

  const addItemToCart = () => {
    dispatch({
      type: ADD_ALBUM_TO_CART,
      id,
      albumDescription: description,
      discountPercent,
    });
  };

  const cartIndicator =
    quantityInShoppingCart > 0 ? (
      <span style={cartIconWrapperStyle}>
        <ShoppingCartIcon
          numberOfItems={quantityInShoppingCart}
          numberBackgroundColor="#93938c"
        />
      </span>
    ) : null;

  return (
    <div style={albumStyle}>
      <AlbumNumber value={number} />
      <AlbumImage imageUrl={coverImageUrl} discountPercent={discountPercent} />
      <AlbumDescription
        title={description.title}
        artist={description.artist}
        price={description.price}
      />
      {cartIndicator}
      <AddToCartButton onClick={addItemToCart} />
    </div>
  );
};

export default Album;

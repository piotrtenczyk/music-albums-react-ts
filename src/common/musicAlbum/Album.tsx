import { ADD_ITEM_TO_CART } from "../../state/shoppingCart/shoppingCartActions";
import { useAppDispatch, useAppSelector } from "../../state/stateHooks";
import AddToCartButton from "../AddToCartButton";
import ShoppingCartIcon from "../ShoppingCartIcon";
import AlbumDescription, { AlbumDescriptionProps } from "./AlbumDescription";
import AlbumImage from "./AlbumImage";
import AlbumNumber from "./AlbumNumber";

const albumStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "30px 20px 30px 20px",
  fontSize: "12px",
  background: "#353a45",
  padding: "10px",
};

export interface AlbumProps {
  id: string;
  number: number;
  coverImageUrl: string | undefined;
  description: AlbumDescriptionProps;
  discountValue?: number;
}

const Album = ({
  id,
  number,
  coverImageUrl,
  description,
  discountValue,
}: AlbumProps) => {
  const dispatch = useAppDispatch();

  const quantityOfThisAlbumInShoppingCart = useAppSelector(
    (state) => state.shoppingCart.items.find((i) => i.id === id)?.quantity ?? 0
  );

  const addAlbumToCart = () => {
    const cartItem = {
      name: description.title,
      price: description.price,
      id: id, // mozna by tez zapisac syntaxem id (warto to wiedziec)
    };
    dispatch({ type: ADD_ITEM_TO_CART, item: cartItem });
  };

  return (
    <div data-testid="album" style={albumStyle}>
      <AlbumNumber value={number} />
      <AlbumImage imageUrl={coverImageUrl} salesStickerValue={discountValue} />
      <AlbumDescription
        title={description.title}
        artist={description.artist}
        price={description.price}
        percentDiscount={discountValue}
        releaseDate={description.releaseDate}
      />
      <ShoppingCartIcon
        numberOfItems={quantityOfThisAlbumInShoppingCart}
        transparent
      />
      <AddToCartButton onClick={addAlbumToCart} />
    </div>
  );
};

export default Album;

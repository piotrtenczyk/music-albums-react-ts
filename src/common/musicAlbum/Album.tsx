import { useDispatch } from "react-redux";
import { ADD_ALBUM_TO_CART } from "../../state/shoppingCart/shoppingCartActions";
import AddToCartButton from "../AddToCartButton";
import AlbumDescription, { AlbumDescriptionProps } from "./AlbumDescription";
import AlbumImage from "./AlbumImage";
import AlbumNumber from "./AlbumNumber";

const albumStyle = {
  display: "flex",
  alignItems: "center",
  // justifyContent: "space-between",
  margin: "30px",
  fontSize: "12px",
  background: "#353a45",
  padding: "10px",
};

export interface AlbumProps {
  number: number;
  coverImageUrl: string;
  description: AlbumDescriptionProps;
  saleValue?: number;
}

const Album = ({
  number,
  coverImageUrl,
  description,
  saleValue,
}: AlbumProps) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch({
      type: ADD_ALBUM_TO_CART,
      albumDescription: description,
      saleValue,
    });
  };

  return (
    <div style={albumStyle}>
      <AlbumNumber value={number} />
      <AlbumImage imageUrl={coverImageUrl} saleValue={saleValue} />
      <AlbumDescription
        title={description.title}
        artist={description.artist}
        price={description.price}
      />
      <AddToCartButton onClick={addItemToCart} />
    </div>
  );
};

export default Album;

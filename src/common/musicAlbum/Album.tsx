import AddToCartButton from "../AddToCartButton";
import AlbumDescription, { AlbumDescriptionProps } from "./AlbumDescription";
import AlbumImage from "./AlbumImage";
import AlbumNumber from "./AlbumNumber";

const albumStyle = {
  display: "flex",
  alignItems: "center",
  margin: "30px 20px 30px 20px",
  fontSize: "12px",
  background: "#353a45",
  padding: "10px",
};

export interface AlbumProps {
  number: number;
  coverImageUrl: string | undefined;
  description: AlbumDescriptionProps;
}

const doNothingForNow = () => {
  console.log("nothing yet");
};

const Album = ({ number, coverImageUrl, description }: AlbumProps) => {
  return (
    <div style={albumStyle}>
      <AlbumNumber value={number} />
      <AlbumImage imageUrl={coverImageUrl} />
      <AlbumDescription
        title={description.title}
        artist={description.artist}
        price={description.price}
      />
      <AddToCartButton onClick={doNothingForNow} />
    </div>
  );
};

export default Album;

import AlbumDescription, { AlbumDescriptionProps } from "./AlbumDescription";
import AlbumImage from "./AlbumImage";
import AlbumNumber from "./AlbumNumber";

const albumStyle = {
  display: "flex",
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
}

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
    </div>
  );
};

export default Album;

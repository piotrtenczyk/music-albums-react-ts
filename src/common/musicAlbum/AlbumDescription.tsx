import AlbumDescriptionEntry from "./AlbumDescriptionEntry";
import Price from "./Price";

const albumDescriptionStyles = {
  margin: "8px",
};

export interface AlbumDescriptionProps {
  title: string;
  artist: string;
  price: number;
  percentDiscount?: number;
}

const AlbumDescription = ({
  title,
  artist,
  price,
  percentDiscount,
}: AlbumDescriptionProps) => {
  return (
    <div style={albumDescriptionStyles}>
      <AlbumDescriptionEntry isTitle value={title} />
      <AlbumDescriptionEntry value={artist} />
      <Price value={price} percentDiscount={percentDiscount} />
    </div>
  );
};

export default AlbumDescription;

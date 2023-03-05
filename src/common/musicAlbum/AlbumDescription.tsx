import { daysAgo } from "../dates";
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
  releaseDate?: string;
}

const AlbumDescription = ({
  title,
  artist,
  price,
  percentDiscount,
  releaseDate,
}: AlbumDescriptionProps) => {
  const daysAgoValue: number | null = releaseDate
    ? daysAgo(new Date(releaseDate))
    : null;

  const daysAgoMessage = daysAgoValue ? `${daysAgoValue} days ago` : null;

  const releaseDateEntry = daysAgoMessage ? (
    <AlbumDescriptionEntry value={daysAgoMessage} />
  ) : null;

  return (
    <div style={albumDescriptionStyles}>
      <AlbumDescriptionEntry isTitle value={title} />
      <AlbumDescriptionEntry value={artist} />
      {releaseDateEntry}
      <Price value={price} percentDiscount={percentDiscount} />
    </div>
  );
};

export default AlbumDescription;

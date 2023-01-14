import AlbumDescriptionEntry from "./AlbumDescriptionEntry";

const albumDescriptionStyles = {
  margin: "8px",
};

export interface AlbumDescriptionProps {
  title: string;
  artist: string;
  price?: number;
}

const AlbumDescription = ({ title, artist, price }: AlbumDescriptionProps) => {
  const priceToDisplay = price || "N/A";

  return (
    <div style={albumDescriptionStyles}>
      <AlbumDescriptionEntry value={title} />
      <AlbumDescriptionEntry value={artist} />
      <AlbumDescriptionEntry value={priceToDisplay} />
    </div>
  );
};

export default AlbumDescription;

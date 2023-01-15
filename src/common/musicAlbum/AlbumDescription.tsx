import AlbumDescriptionEntry from "./AlbumDescriptionEntry";

const albumDescriptionStyles = {
  margin: "8px",
};

export interface AlbumDescriptionProps {
  title: string;
  artist: string;
  price: number;
}

const AlbumDescription = ({ title, artist, price }: AlbumDescriptionProps) => {
  return (
    <div style={albumDescriptionStyles}>
      <AlbumDescriptionEntry isTitle value={title} />
      <AlbumDescriptionEntry value={artist} />
      <AlbumDescriptionEntry value={price} />
    </div>
  );
};

export default AlbumDescription;

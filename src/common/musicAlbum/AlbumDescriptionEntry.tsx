import AlbumTitle from "./AlbumTitle";

const descriptionEntryStyle = {
  margin: "10px",
};

const getStyle = (isAlbum: boolean | undefined) => {
  return {
    ...descriptionEntryStyle,
    fontWeight: "200",
    fontSize: "14px",
    width: "330px",
  };
};

interface AlbumDescriptionEntryProps {
  value: string | number;
  isTitle?: boolean;
}

const AlbumDescriptionEntry = ({
  value,
  isTitle,
}: AlbumDescriptionEntryProps) => {
  const toRender = isTitle ? (
    <AlbumTitle>{value}</AlbumTitle>
  ) : (
    <div style={getStyle(isTitle)}>{value}</div>
  );

  return toRender;
};

export default AlbumDescriptionEntry;

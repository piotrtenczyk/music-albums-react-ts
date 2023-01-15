const descriptionEntryStyle = {
  margin: "10px",
};

const getStyle = (isAlbum: boolean | undefined) => {
  return {
    ...descriptionEntryStyle,
    color: isAlbum ? "#d8ed5c9c" : "inherit",
    fontWeight: isAlbum ? "bold" : "200",
    fontSize: isAlbum ? "18px" : "14px",
    fontFamily: isAlbum ? "'Courier New', monospace" : "inherit",
    width: "350px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap" as "nowrap",
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
  return <div style={getStyle(isTitle)}>{value}</div>;
};

export default AlbumDescriptionEntry;

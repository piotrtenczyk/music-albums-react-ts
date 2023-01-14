const descriptionEntryStyle = {
  margin: "10px",
};

interface AlbumDescriptionEntryProps {
  value: string | number;
}

const AlbumDescriptionEntry = ({ value }: AlbumDescriptionEntryProps) => {
  return <div style={descriptionEntryStyle}>{value}</div>;
};

export default AlbumDescriptionEntry;

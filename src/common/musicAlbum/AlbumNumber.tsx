const numberStyle = {
  display: "flex",
  alignItems: "center",
  padding: "5px",
  margin: "5px",
  fontSize: "30px",
  fontFamily: "'Brush Script MT', cursive",
  color: "#ed5c91",
};

export interface AlbumNumberProps {
  value: number;
}

const AlbumNumber = ({ value }: AlbumNumberProps) => {
  return <div style={numberStyle}>{value}</div>;
};

export default AlbumNumber;

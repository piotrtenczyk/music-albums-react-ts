const getStyle = () => {
  return {
    color: "#d8ed5c9c",
    fontWeight: "bold",
    fontSize: "18px",
    fontFamily: "'Courier New', monospace",
    width: "330px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap" as "nowrap",
  };
};

interface Props {
  children: React.ReactNode;
}

const AlbumTitle: React.FC<Props> = ({ children }) => {
  return <div style={getStyle()}>{children}</div>;
};

export default AlbumTitle;

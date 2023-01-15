interface AlbumImageProps {
  imageUrl: string;
}

const getCoverImageStyle = (imageUrl: string | undefined) => {
  return {
    width: "100px",
    minWidth: "100px",
    height: "100px",
    background: "blue",
    backgroundImage: imageUrl === undefined ? "none" : `url("${imageUrl}")`,
    backgroundSize: "contain",
    borderRadius: "50%",
    margin: "10px",
  };
};

const AlbumImage = ({ imageUrl }: AlbumImageProps) => {
  return <div style={getCoverImageStyle(imageUrl)}></div>;
};

export default AlbumImage;

import SaleSticker from "../SaleSticker";

interface AlbumImageProps {
  imageUrl: string;
  discountPercent?: number;
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

const saleStickerWrapperStyle = {
  position: "absolute" as "absolute",
  top: "0px",
  left: "0px",
};

const AlbumImage = ({ imageUrl, discountPercent }: AlbumImageProps) => {
  return (
    <div style={{ position: "relative" }}>
      <div style={getCoverImageStyle(imageUrl)}></div>
      <div style={saleStickerWrapperStyle}>
        <SaleSticker show={!!discountPercent} value={discountPercent} />
      </div>
    </div>
  );
};

export default AlbumImage;

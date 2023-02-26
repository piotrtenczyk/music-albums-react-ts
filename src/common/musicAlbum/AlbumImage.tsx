import SaleSticker from "../SaleSticker";

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

const salesStickerWrapperStyle = {
  position: "absolute" as "absolute",
  left: "0px",
  top: "0px",
};

interface AlbumImageProps {
  imageUrl: string | undefined;
  salesStickerValue?: number;
}

const AlbumImage = ({ imageUrl, salesStickerValue }: AlbumImageProps) => {
  return (
    <div style={{ position: "relative" }}>
      <div style={getCoverImageStyle(imageUrl)}></div>
      <div style={salesStickerWrapperStyle}>
        <SaleSticker value={salesStickerValue} show={!!salesStickerValue} />
      </div>
    </div>
  );
};

export default AlbumImage;

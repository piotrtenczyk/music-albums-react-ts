const stickerStyle = {
  color: "black",
  background: "yellow",
  fontWeight: "800",
  fontFamily: "'Courier New', monospace",
  border: "2px solid black",
  padding: "3px",
};

interface SaleStickerProps {
  show: boolean;
  value?: number;
}

const SaleSticker: React.FC<SaleStickerProps> = ({ show, value }) => {
  if (!show) return null;
  return <div style={stickerStyle}>{value}% Off!</div>;
};

export default SaleSticker;

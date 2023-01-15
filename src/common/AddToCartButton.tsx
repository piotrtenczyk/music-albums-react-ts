const buttonStyle = {
  background: "rgb(237, 92, 145)",
  height: "40px",
  cursor: "pointer",
};

interface AddToCartButtonProps {
  onClick: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick }) => {
  return (
    <button style={buttonStyle} onClick={onClick}>
      Add
    </button>
  );
};

export default AddToCartButton;

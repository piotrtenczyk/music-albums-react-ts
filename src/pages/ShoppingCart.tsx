import ShoppingCartItems from "../common/ShoppingCartItems";

const ShoppingCart: React.FC<{}> = () => {
  return (
    <div>
      <div>your shopping cart</div>
      <ShoppingCartItems items={[]} />
    </div>
  );
};

export default ShoppingCart;

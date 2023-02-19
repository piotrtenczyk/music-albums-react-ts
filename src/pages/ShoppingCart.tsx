import ShoppingCartItem from "../common/ShoppingCartItem";
import { useAppSelector } from "../state/stateHooks";

const ShoppingCart: React.FC = () => {
  const shoppingCartItems = useAppSelector((state) => state.shoppingCart.items);

  const shoppingCartItemsComponents = shoppingCartItems.map((item, index) => {
    return <ShoppingCartItem key={index} description={item} id={"?"} />;
  });

  return <div>{shoppingCartItemsComponents}</div>;
};
export default ShoppingCart;

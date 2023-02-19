import { useAppSelector } from "../state/stateHooks";

const ShoppingCart: React.FC = () => {
  const shoppingCartItems = useAppSelector((state) => state.shoppingCart.items);

  return <>zsdzsds</>;
};
export default ShoppingCart;

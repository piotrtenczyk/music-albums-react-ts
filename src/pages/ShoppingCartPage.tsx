import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import PageTitle from "../common/PageTitle";
import ShoppingCartItem from "../common/ShopingCartItem";

const ShoppingCartPage = () => {
  const shoppingCart = useSelector((state: RootState) => state.shoppingCart);

  const cartItems = shoppingCart.items.map((item, index) => {
    return <ShoppingCartItem key={index} description={item} />;
  });

  return (
    <>
      <PageTitle title="Shopping Cart" />
      You have {shoppingCart.numberOfItems} albums in your cart <br />
      <br />
      {cartItems}
      <br />
      Total cost is: <b>{shoppingCart.totalPrice}</b>
    </>
  );
};

export default ShoppingCartPage;

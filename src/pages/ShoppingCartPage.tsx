import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import PageTitle from "../common/PageTitle";

const ShoppingCartPage = () => {
  const shoppingCart = useSelector((state: RootState) => state.shoppingCart);

  const cartItems = shoppingCart.items.map((item, index) => {
    return <div key={index}>{item.title}</div>;
  });

  return (
    <>
      <PageTitle title="Shopping Cart" />
      You have {shoppingCart.numberOfItems} albums in your cart
      <br />
      <br />
      <br />
      {cartItems}
    </>
  );
};

export default ShoppingCartPage;

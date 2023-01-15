import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import PageTitle from "./PageTitle";

const ShoppingCart = () => {
  const numberOfItems = useSelector(
    (state: RootState) => state.shoppingCartReducer.numberOfItems
  );

  return (
    <>
      <PageTitle title="Shopping Cart" />
      TODO: make your items appear here
      <br />
      <br />
      <br />
      numberOfItems is : {numberOfItems}
    </>
  );
};

export default ShoppingCart;

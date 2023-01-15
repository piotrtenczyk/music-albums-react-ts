import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import PageTitle from "./PageTitle";

const ShoppingCart = () => {
  const messageFromExampleReducer = useSelector(
    (state: RootState) => state.exampleReducer.message
  );

  return (
    <>
      <PageTitle title="Shopping Cart" />
      TODO: make your items appear here
      <br />
      Message from example reducer is : {messageFromExampleReducer}
    </>
  );
};

export default ShoppingCart;

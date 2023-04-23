import PageTitle from "../common/PageTitle";
import ShoppingCartItems from "../common/ShoppingCartItems";
import { useAppSelector } from "../state/store";

const ShoppingCart: React.FC<{}> = () => {
  const stateItems = useAppSelector((state) => state.items);

  //   tablice obiektow:  {
  //     title: string;
  //     price: number;
  //   }
  //   mamy przeksztalcic na
  //   tablice obiektow {
  //     id: string;
  //     label: string;
  //     price: number;
  //   }

  const shoppingCartItems = stateItems.map((item, index) => {
    return { id: index.toString(), price: item.price, label: item.title };
  });

  return (
    <div>
      <PageTitle title="Your Shopping Cart" />
      <ShoppingCartItems items={shoppingCartItems} />
    </div>
  );
};

export default ShoppingCart;

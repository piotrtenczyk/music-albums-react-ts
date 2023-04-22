interface ShoppingCartItem {
  id: string;
  label: string;
  price: number;
}

interface ShoppingCartItemsProps {
  items: ShoppingCartItem[];
}

const ShoppingCartItems = (props: ShoppingCartItemsProps) => {
  const itemsComponent = props.items.map((item) => (
    <div key={item.id}>
      {item.label} {item.price}
    </div>
  ));
  return <div>{itemsComponent}</div>;
};

export default ShoppingCartItems;

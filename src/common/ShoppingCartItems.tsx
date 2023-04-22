import AlbumTitle from "./musicAlbum/AlbumTitle";

interface ShoppingCartItem {
  id: string;
  label: string;
  price: number;
}

interface ShoppingCartItemsProps {
  items: ShoppingCartItem[];
}

const itemStyle = {
  display: "flex",
};

const ShoppingCartItems = (props: ShoppingCartItemsProps) => {
  const itemsComponent = props.items.map((item) => (
    <div key={item.id} style={itemStyle}>
      <AlbumTitle>{item.label}</AlbumTitle> {item.price}
    </div>
  ));
  return <div>{itemsComponent}</div>;
};

export default ShoppingCartItems;

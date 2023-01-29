import { render, RenderResult } from "@testing-library/react";
import Album from "../Album";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { AlbumShoppingCartItem } from "../../../state/shoppingCart/shoppingCartReducer";
import { BrowserRouter } from "react-router-dom";

const mockStore = configureStore();

const imageDescription = {
  title: "Męka przez testy",
  artist: "DJ ZDFRONPol11",
  price: 7,
};

interface RenderOptions {
  shoppingCartItems: AlbumShoppingCartItem[];
  renderedAlbumId: string;
}

const renderAlbumWithFakeStore = (options: RenderOptions): RenderResult => {
  const initialState = {
    shoppingCart: {
      items: options.shoppingCartItems,
    },
  };

  const fakeStore = mockStore(initialState);
  return render(
    <Provider store={fakeStore}>
      <Album
        id={options.renderedAlbumId}
        number={1}
        coverImageUrl="test-image-url"
        description={imageDescription}
      />
    </Provider>,
    {
      wrapper: BrowserRouter,
    }
  );
};

describe("Album.tsx", () => {
  it("matches snapshot", () => {
    const { container } = renderAlbumWithFakeStore({
      shoppingCartItems: [],
      renderedAlbumId: "1",
    });
    expect(container).toMatchSnapshot();
  });

  it("shopping cart indicator is rendered when shopping cart contains album with same ID", () => {
    const shoppingCartItem = {
      id: "444",
      title: "This was hard?",
      artist: "Eveyrone together",
      quantity: 99,
      salePercentDiscount: 50,
      price: 100,
      priceAfterDiscount: 50,
    };

    const { queryByTestId } = renderAlbumWithFakeStore({
      shoppingCartItems: [shoppingCartItem],
      renderedAlbumId: "444",
    });

    const shoppongCartIcon = queryByTestId("shopping-cart-icon");
    expect(shoppongCartIcon).toBeInTheDocument();
  });
});

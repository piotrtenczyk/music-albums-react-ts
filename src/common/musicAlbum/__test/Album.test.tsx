import { render, RenderResult } from "@testing-library/react";
import Album from "../Album";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { AlbumShoppingCartItem } from "../../../state/shoppingCart/shoppingCartReducer";

const mockStore = configureStore();

const imageDescription = {
  title: "Męka przez testy",
  artist: "DJ ZDFRONPol11",
  price: 7,
};

const renderAlbumWithFakeStore = (
  items: AlbumShoppingCartItem[]
): RenderResult => {
  const initialState = {
    shoppingCart: {
      items,
    },
  };

  const fakeStore = mockStore(initialState);
  return render(
    <Provider store={fakeStore}>
      <Album
        id="1"
        number={1}
        coverImageUrl="test-image-url"
        description={imageDescription}
      />
    </Provider>
  );
};

describe("Album.tsx", () => {
  it("matches snapshot", () => {
    const { container } = renderAlbumWithFakeStore([]);
    expect(container).toMatchSnapshot();
  });

  it("shopping cart indicator is rendered when shopping cart contains album with same ID", () => {
    // PYT 1:  Jak mozemy ustawic sytuacje gdzie jest juz jeden pasujacy album w state?
    // a) w state mamy obieket z id 444
    // b) jak mozemy rowniez renderowac album z id 444?

    const objectWithId = {
      id: "444",
      title: "This was hard?",
      artist: "Eveyrone together",
      quantity: 99,
      salePercentDiscount: 50,
      price: 100,
      priceAfterDiscount: 50,
    };

    const { container } = renderAlbumWithFakeStore([objectWithId]);
    expect(true).toEqual(true); // PYT: 2 musimy wykombinowac jakis lepszy matcher :/
  });
});

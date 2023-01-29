import { render, RenderResult } from "@testing-library/react";
import Album from "../Album";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureStore();

const imageDescription = {
  title: "Męka przez testy",
  artist: "DJ ZDFRONPol11",
  price: 7,
};

const renderAlbumWithFakeStore = (): RenderResult => {
  const initialState = {
    shoppingCart: {
      items: [],
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
    const { container } = renderAlbumWithFakeStore();

    expect(container).toMatchSnapshot();
  });

  it("shopping cart indicator is rendered when shopping cart contains album with same ID", () => {
    // PYT 1:  Jak mozemy ustawic sytuacje gdzie jest juz jeden pasujacy album w state?
    const { container } = renderAlbumWithFakeStore();

    expect(true).toEqual(true); // PYT: 2 musimy wykombinowac jakis lepszy matcher :/
  });
});

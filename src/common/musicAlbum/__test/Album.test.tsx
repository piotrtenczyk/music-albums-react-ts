import { render } from "@testing-library/react";
import Album from "../Album";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureStore();

const initialState = {
  shoppingCart: {
    items: [],
  },
};

describe("Album.tsx", () => {
  it("matches snapshot", () => {
    const fakeStore = mockStore(initialState);

    const imageDescription = {
      title: "Męka przez testy",
      artist: "DJ ZDFRONPol11",
      price: 7,
    };

    const { container } = render(
      <Provider store={fakeStore}>
        <Album
          id="1"
          number={1}
          coverImageUrl="test-image-url"
          description={imageDescription}
        />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});

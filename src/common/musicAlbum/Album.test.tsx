import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../state/store";
import Album from "./Album";

describe("Album.tsx", () => {
  it("matches snapshot", () => {
    const testAlbumDescription = {
      title: "Placz Kotku",
      artist: "Behemot",
      price: 666,
    };

    const { container } = render(
      <Provider store={store}>
        <Album
          id={"konkursowe123"}
          number={666}
          coverImageUrl={"https://m.media-amazon.com/images/I/614ub5HQC2L.jpg"}
          description={testAlbumDescription}
        />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    expect(container).toMatchSnapshot();
  });

  // Zadanie: jak mozemy przetestowac interakcje, kiedy klikniemy na "add" button?
});

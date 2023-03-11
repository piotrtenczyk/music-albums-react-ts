import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import rootReducer from "../state/reducers";
import ItunesAlbumList from "./ItunesAlbumList/ItunesAlbumList";

const storeWithoutLogger = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

describe("ItunesAlbumList.tsx", () => {
  it("Matches snapshot when api data is still loading", () => {
    const { container } = render(
      <Provider store={storeWithoutLogger}>
        <ItunesAlbumList />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("loaded appropriate albums when api data has been loaded", () => {
    const { container } = render(
      <Provider store={storeWithoutLogger}>
        <ItunesAlbumList />
      </Provider>
    );

    // wait for response to arrive
    // Exercise:  How can we wait for render result to contain albums instead of the loader? How to do this?
    //          Q: Which library can provide this functionality RTL or Jest?

    // loader is no longer present
    // appropriate albums were loaded
    // expect ?
  });
});

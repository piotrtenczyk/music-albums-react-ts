import { configureStore } from "@reduxjs/toolkit";
import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Provider } from "react-redux";
import rootReducer from "../state/reducers";
import ItunesAlbumList, {
  ItunesTopAlbumsResponseData,
} from "./ItunesAlbumList/ItunesAlbumList";
import { act } from "react-dom/test-utils";

const storeWithoutLogger = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

const itsMyLifeAlbum = {
  id: {
    attributes: {
      "im:id": "123",
    },
  },
  "im:name": {
    label: "Its my life",
  },
  "im:artist": {
    label: "DJ BOBO",
  },
  "im:price": {
    label: "$1.99",
    attributes: {
      amount: "1.99",
    },
  },
};

const thrillerAlbum = {
  id: {
    attributes: {
      "im:id": "222",
    },
  },
  "im:name": {
    label: "Thriller",
  },
  "im:artist": {
    label: "Michael Jackson",
  },
  "im:price": {
    label: "$11.99",
    attributes: {
      amount: "11.99",
    },
  },
};

const functionReturningJson = () => {
  const data: ItunesTopAlbumsResponseData = {
    feed: {
      entry: [itsMyLifeAlbum, thrillerAlbum],
    },
  };

  return data;
};

const mockedFetch = () => {
  const response = { json: functionReturningJson };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, 1);
  });
};

// TODO: figure out why : global.fetch = jest.fn(mockedFetch) as jest.Mock;   doesn't work.
global.fetch = mockedFetch as jest.Mock;

describe("ItunesAlbumList.tsx", () => {
  it("Matches snapshot when api data is still loading", () => {
    const { container } = render(
      <Provider store={storeWithoutLogger}>
        <ItunesAlbumList />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("loaded appropriate albums when api data has been loaded", async () => {
    const { getByTestId } = render(
      <Provider store={storeWithoutLogger}>
        <ItunesAlbumList />
      </Provider>
    );

    await waitFor(
      () => {
        // Important Note: document.querySelector must be used while waiting for element in waitFor,
        // however getBy* methods can be used in waitForElementToBeRemoved
        const loaderElement = document.querySelector(".loader");
        return expect(loaderElement).not.toBeInTheDocument();
      },
      {
        timeout: 10000,
      }
    );

    /**
     *  below could also be used to wait for loader to be removed
     *   await waitForElementToBeRemoved(getByTestId("loader"), {
     *      timeout: 10000,
     *   });
     */

    // Zadanie1: czy mozemy znalezc i zastosowac lepszy selector? np: getByTestId  (zgodnie z dokumentacja RTL) ?
    const albumElements = document.querySelectorAll("div[data-testid='album']");

    expect(albumElements).toHaveLength(2);
  });
});

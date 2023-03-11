import { configureStore } from "@reduxjs/toolkit";
import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Provider } from "react-redux";
import rootReducer from "../state/reducers";
import ItunesAlbumList from "./ItunesAlbumList/ItunesAlbumList";

const storeWithoutLogger = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

jest.setTimeout(10000);

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
    const { debug, getByTestId } = render(
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

    // Zadanie2: Prawdziwe api iTunes nie zawsze zwróci nam dokładnie 58 albumów
    // Q! Jak moglibysmy w prostych słowach opisać, jak mozna by wstrzyknac stala liczbe wynikow
    // (i jednoczesnie uniknac kontaktu z serverem, co zajmuje az 2000 millisekund)
    expect(albumElements).toHaveLength(58);
  });
});

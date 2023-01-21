import {
  AlbumPresentationData,
  getAlbumsFromItunesAlbumData,
  ItunesAlbumDataEntry,
} from "../../pages/ItunesAlbumList/itunesDataTransformer";
import { AppDispatch, RootState } from "../store";

export const SET_ITUNES_ALBUMS_RAW_DATA = "SET_ITUNES_ALBUMS_RAW_DATA";
export const SET_ITUNES_ALBUMS_PRESENTATION_DATA =
  "SET_ITUNES_ALBUMS_PRESENTATION_DATA";

export const SET_ITUNES_ALBUMS_DATA_REQUESTED =
  "SET_ITUNES_ALBUMS_DATA_REQUESTED";

export type ItunesAlbumsActions =
  | {
      type: typeof SET_ITUNES_ALBUMS_RAW_DATA;
      data: ItunesAlbumDataEntry[];
    }
  | {
      type: typeof SET_ITUNES_ALBUMS_PRESENTATION_DATA;
      data: AlbumPresentationData[];
    }
  | {
      type: typeof SET_ITUNES_ALBUMS_DATA_REQUESTED;
    };

interface ItunesTopAlbumsResponseData {
  feed: {
    entry: ItunesAlbumDataEntry[];
  };
}

const addDelay = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(null);
    }, 1000)
  );
};

export const fetchAlbumsThunk = async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  dispatch({ type: SET_ITUNES_ALBUMS_DATA_REQUESTED });

  const fetchResponse = await fetch(
    "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
  );

  await addDelay();

  const fetchedData =
    (await fetchResponse.json()) as ItunesTopAlbumsResponseData;

  dispatch({ type: SET_ITUNES_ALBUMS_RAW_DATA, data: fetchedData.feed.entry });
  dispatch({
    type: SET_ITUNES_ALBUMS_PRESENTATION_DATA,
    data: getAlbumsFromItunesAlbumData(fetchedData.feed.entry),
  });

  // TODO: handle fetch error
};

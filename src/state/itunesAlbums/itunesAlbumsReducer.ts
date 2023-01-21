import {
  AlbumPresentationData,
  ItunesAlbumDataEntry,
} from "../../pages/ItunesAlbumList/itunesDataTransformer";
import {
  ItunesAlbumsActions,
  SET_ITUNES_ALBUMS_DATA_REQUESTED,
  SET_ITUNES_ALBUMS_PRESENTATION_DATA,
  SET_ITUNES_ALBUMS_RAW_DATA,
} from "./itunesAlbumsActions";

interface ItunesAlbumsState {
  rawData: {
    data: ItunesAlbumDataEntry[];
    loading: boolean;
  };
  presentationData: {
    data: AlbumPresentationData[];
    loading: boolean;
  };
}

const initialState: ItunesAlbumsState = {
  rawData: {
    data: [],
    loading: false,
  },
  presentationData: {
    data: [],
    loading: false,
  },
};

const itunesAlbumsReducer = (
  state: ItunesAlbumsState = initialState,
  action: ItunesAlbumsActions
) => {
  switch (action.type) {
    case SET_ITUNES_ALBUMS_RAW_DATA: {
      return {
        ...state,
        rawData: {
          data: action.data,
          loading: false,
        },
      };
    }

    case SET_ITUNES_ALBUMS_PRESENTATION_DATA: {
      return {
        ...state,
        presentationData: {
          data: action.data,
          loading: false,
        },
      };
    }

    case SET_ITUNES_ALBUMS_DATA_REQUESTED: {
      return {
        ...state,
        rawData: {
          ...state.rawData,
          loading: true,
        },
        presentationData: {
          ...state.presentationData,
          loading: true,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default itunesAlbumsReducer;

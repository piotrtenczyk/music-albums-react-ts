import { SalesRawData } from "../../dataMocking/salesDataMock";
import {
  SalesActions,
  SET_SALES_DATA,
  SET_SALES_DATA_REQUESTED,
} from "./salesActions";

interface SalesState {
  data: SalesRawData[] | null;
  loading: boolean;
}

const initialState: SalesState = {
  loading: false,
  data: null,
};

const salesReducer = (
  state: SalesState = initialState,
  action: SalesActions
) => {
  switch (action.type) {
    case SET_SALES_DATA_REQUESTED: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_SALES_DATA: {
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default salesReducer;

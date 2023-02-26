import fakeFetch from "../../dataMocking/fakeFetch";
import {
  salesInformation,
  SalesRawData,
} from "../../dataMocking/salesDataMock";
import { AppDispatch, RootState } from "../store";

export const SET_SALES_DATA_REQUESTED = "SET_SALES_DATA_REQUESTED";
export const SET_SALES_DATA = "SET_SALES_DATA";

export type SalesActions =
  | {
      type: typeof SET_SALES_DATA_REQUESTED;
    }
  | {
      type: typeof SET_SALES_DATA;
      data: SalesRawData[];
    };

export const fetchSalesIfNotPresent = async (
  dispach: AppDispatch,
  getState: () => RootState
) => {
  if (getState().sales.data === null) {
    dispach({ type: SET_SALES_DATA_REQUESTED });
    const fetchResult = await fakeFetch(salesInformation, "salesInformation");
    dispach({ type: SET_SALES_DATA, data: fetchResult });
  }
};

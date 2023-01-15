import { combineReducers } from "redux";

interface ExampleReducerState {
  message: string;
}

const exampleReducerInitialState: ExampleReducerState = {
  message: "Hello I'm your reducer ",
};

const exampleReducer = (): ExampleReducerState => {
  return exampleReducerInitialState;
};

export default combineReducers({
  exampleReducer,
});

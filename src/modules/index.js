import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import panelReducer from "./panelReducer";
import keplerReducer from "./keplerReducer";

const initialState = {};

const reducers = combineReducers({
  keplerGl: keplerReducer,
  panel: panelReducer,
});

export default createStore(
  reducers,
  initialState,
  applyMiddleware(taskMiddleware)
);

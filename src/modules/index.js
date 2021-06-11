import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly" // 리덕스 개발자 도구

// 리듀서
import panelReducer from "./panelReducer";
import keplerReducer from "./keplerReducer";
import menuReducer from "./menuReducer";

// 초기 상태
const initialState = {};

const reducers = combineReducers({
  keplerGl: keplerReducer,
  panel: panelReducer,
  menu: menuReducer,
});

export default createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(taskMiddleware))
);

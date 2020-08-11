import { combineReducers } from "redux";
import musicReducers from "./music.reducer";

const rootReducer = combineReducers({
  musicReducers,
});

export default rootReducer;

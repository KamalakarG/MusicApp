import { all } from "redux-saga/effects";
import { getMusicListSaga } from "../actions/music.actions";

export default function* rootSaga() {
  yield all([getMusicListSaga()]);
}

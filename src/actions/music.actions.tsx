import { call, put, takeLatest } from "redux-saga/effects";
import MusicActionTypes from "../action-types/music.action.types";
import { getMusicList } from "../apis/music.list.api";

export function getMusicListCall() {
  return {
    type: MusicActionTypes.GET_MUSIC_LIST,
  };
}

export function getMusicListSuccess(json: any) {
  return {
    type: MusicActionTypes.GET_MUSIC_LIST_SUCCESS,
    data: json,
  };
}

export function getMusicListFailure(error: any) {
  return {
    type: MusicActionTypes.GET_MUSIC_LIST_FAILURE,
    errorMessage: error,
  };
}

export function* getMusicListWorker() {
  try {
    const response = yield call(getMusicList);
    yield put(getMusicListSuccess(response));
  } catch (error) {
    yield put(getMusicListFailure(error));
  }
}

export function* getMusicListSaga() {
  yield takeLatest(MusicActionTypes.GET_MUSIC_LIST, getMusicListWorker);
}

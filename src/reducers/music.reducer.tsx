import MusicActionTypes from "../action-types/music.action.types";
import { prepareMusicLists } from "../models/music.list.model";

const initialState = {
  showSpinner: false,
  musicData: [],
  musicError: "",
};

const musicReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case MusicActionTypes.GET_MUSIC_LIST:
      return {
        ...state,
        showSpinner: true,
      };
    case MusicActionTypes.GET_MUSIC_LIST_SUCCESS:
      let temp = prepareMusicLists(action.data);
      return {
        ...state,
        showSpinner: false,
        musicData: temp,
      };
    case MusicActionTypes.GET_MUSIC_LIST_FAILURE:
      return {
        ...state,
        showSpinner: false,
        musicError: action.error,
      };
    default:
      return state;
  }
};

export default musicReducers;

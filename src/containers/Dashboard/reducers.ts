import { VideoState, VideoActionTypes } from "./types";
import { Reducer } from "redux";

const initialState: VideoState = {
  loading: false,
  video:null,
  errors: {
    video:undefined
  }
};


type A<T = string, U = any> = { type: T; payload: U };

const reducer: Reducer<VideoState, A> = (
  state: VideoState = initialState,
  action: A
) => {
  switch (action.type) {
    case VideoActionTypes.VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
        errors: { ...state.errors, video: undefined }
      };
    case VideoActionTypes.VIDEO_SUCCESS:
      return {...state,loading:false,video:action.payload};
    case VideoActionTypes.VIDEO_ERROR:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, video: action.payload }
      };

    default:
      return state;
  }
};

export { initialState as videoInitialState, reducer as videoReducer };

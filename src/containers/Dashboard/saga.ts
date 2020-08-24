import { Action } from "redux";
import { put,call, takeLatest, all, fork } from "redux-saga/effects";
import { videoError, videoSuccess } from "./actions";
import * as Api from "../../services/Api";
import { unknownError } from "../../utils/api-helper";
import { VideoActionTypes } from "./types";

type SagaAction<T> = Action & { payload: T };

function* video() {
  try {
    const res = yield call(Api.videosRequest);
    if (res.error) {
      yield put(videoError(res.error));
    } else {
      yield put(videoSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(videoError(err));
    } else {
      yield put(videoError(unknownError("An unknown error occurred")));
    }
  }
}

function* watchFetchRequest() {
    yield takeLatest(VideoActionTypes.VIDEO_REQUEST, video);
  }

  export function* videoSaga() {
    yield all([fork(watchFetchRequest)]);
  }

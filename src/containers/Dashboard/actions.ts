import { action } from "typesafe-actions";
import { VideoActionTypes, Video } from "./types";

export const videoRequest = () =>
action(VideoActionTypes.VIDEO_REQUEST);
export const videoSuccess = (res: Video) =>
action(VideoActionTypes.VIDEO_SUCCESS, res);
export const videoError = (message: Error) =>
action(VideoActionTypes.VIDEO_ERROR, message);

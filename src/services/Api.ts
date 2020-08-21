import config from "../config/app";
import * as API from "../utils/api-helper";

const isProd: boolean = config.isProd;

const API_ENDPOINT = isProd
  ? config.production.api_endpoint
  : config.staging.api_endpoint;

export const test = () => {};

export const videosRequest = () => {
  const url = `${API_ENDPOINT}/dev/videos`;
  return API.get(url);
};

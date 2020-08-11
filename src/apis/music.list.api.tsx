import axios from "axios";
import { baseUrl, baseUrlExtension } from "../constants";

export const getMusicList = () => {
  let urlStr = baseUrl + baseUrlExtension;
  return axios({
    method: "GET",
    url: urlStr,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("error", error);
      return Promise.reject(error);
    });
};

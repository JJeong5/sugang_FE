import axios from "axios";

export default function apiAxios(url, method, callback, CallbackERROR) {
  axios({
    url: "/api" + url,
    method: method,
    baseURL:
      "http://k8s-stage-game2049-bb9247bafa-1048721089.ap-northeast-2.elb.amazonaws.com:8080",
    withCredentials: true,
  })
    .then(function (response) {
      callback(response);
    })
    .catch(function (response) {
      CallbackERROR(response);
    });
}

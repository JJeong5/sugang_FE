import axios from "axios";

export default function apiAxios(url, method, callback, CallbackERROR){
    axios(
        {
            url: '/api' + url,
            method: method,
            baseURL: 'http://localhost:8080',
            withCredentials: true,
        }
    ).then(function (response){
        callback(response);
    }).catch(function (response){
        CallbackERROR(response);
    });
}
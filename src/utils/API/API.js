import axios from 'axios';
import * as urlsApi from 'static/endpoints';
const API = axios.create({
  baseURL: urlsApi.basePath,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `basic ${localStorage.getItem('Authorization')}`,
  },
});
API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (401 === error.response.status) {
      localStorage.removeItem('token');
      localStorage.removeItem('id');
    } else {
      return Promise.reject(error);
    }
  }
);
export default API;

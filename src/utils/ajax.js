import axios from 'axios';
import { showLoading, hideLoading } from './loading';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
const service = axios.create({
  headers: {},
  isShowLoading: true
});
service.interceptors.request.use(
  (config) => {
    if (config.isShowLoading) {
      showLoading();
    }
    return config;
  },
  ({ config }) => {
    if (config.isShowLoading) {
      hideLoading();
    }
    return 'error';
  }
);

service.interceptors.response.use(
  (response) => {
    const { config, status, data } = response;
    if (config.isShowLoading) {
      hideLoading();
    }
    if (status === 200) {
      return data;
    }
    return { status };
  },
  ({ config }) => {
    if (config.isShowLoading) hideLoading();
    return 'error';
  }
);

export default service;

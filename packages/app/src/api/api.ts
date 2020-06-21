import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';
import { getApiBaseUrl } from '../config';
import { toastEffect } from '../components';
import { getToken } from '../utils';

const BASE_API_URL = getApiBaseUrl() || 'http://localhost:3033/';

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 60 * 1000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
});

axiosInstance.interceptors.request.use(config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  response => response,
  (response: AxiosError) => {
    console.log(response);
    toastEffect({
      position: 'top',
      title: 'Service Error',
      description: response.message,
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
    return Promise.reject(response);
  },
);

export interface ApiResponse {
  code: string;
  status: string;
  message: string;
  data: any;
}

// export interface ApiReturn {
//   0: Pick<ApiResponse, 'data'>;
//   1: Omit<ApiResponse, 'data'>;
//   2: Omit<AxiosResponse, 'data'>;
// }

export type ApiReturn = [
  Pick<ApiResponse, 'data'>,
  Omit<ApiResponse, 'data'>,
  Omit<AxiosResponse, 'data'>,
];

export const request = (options: AxiosRequestConfig) => {
  return axiosInstance.request<ApiResponse>(options).then(
    (response): ApiReturn => {
      const { data, ...axiosRest } = response;
      const { data: apiData, ...apiRest } = data;
      return [apiData, apiRest, axiosRest];
    },
  );
};

// const abc = request({
//   method: 'get',
//   url: `/auth/user`,
// });

// abc.then(a => {
//   const [c, d, e] = a;
//   //  d.message
//   // e.statusText
// });

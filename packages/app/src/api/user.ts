import { request } from './api';

export const getUser = () => {
  return request({
    method: 'get',
    url: `/user`,
  });
};

import { request } from './api';

export const isAuth = () => {
  return localStorage.getItem('token') !== null;
};

export const login = (username?: string, password?: string) => {
  return request({
    method: 'post',
    url: `/authorization-server/oauth/token?scope=read&grant_type=password`,
    data: { admin: username, password },
    headers: {
      Authorization: `Basic YWN0aXZlX2xpbmtfcG9ydGFsOkBDdGl2ZTEyMw==`,
    },
  });
};

export const logout = () => {
  return request({
    method: 'post',
    url: `/authorization-server/oauth/logout`,
  });
};

export const getAuthUser = () => {
  return request({
    method: 'get',
    url: `/authorization-server/oauth/user`,
  });
};

export const getAuthOrg = () => {
  return request({
    method: 'get',
    url: `/auth/org`,
  });
};

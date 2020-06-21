const getConfigFromEnv = (variable: string) => () =>
  process.env.NODE_ENV === 'production'
    ? (window as any).__env__[variable]
    : process.env[`${variable}`];

export const getSiteUrl = getConfigFromEnv('ALK_PORTAL_WEB_UI_SITE_URL');
export const getApiBaseUrl = getConfigFromEnv('ALK_PORTAL_WEB_UI_API_BASE_URL');
export const getApiTokenKey = getConfigFromEnv(
  'ALK_PORTAL_WEB_UI_API_TOKEN_KEY',
);

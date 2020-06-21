function getUrlParams(url) {
  if (!url || url.length === 0) {
    return {};
  }
  const hashes = url.slice(url.indexOf('?') + 1).split('&');
  return hashes.reduce((params, hash) => {
    const split = hash.indexOf('=');
    if (split < 0) {
      return {};
    }

    const key = hash.slice(0, split);
    const val = hash.slice(split + 1);

    return Object.assign(params, {
      [key]: decodeURIComponent(val),
    });
  }, {});
}

module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-anonymous-consents, authorization',
  );
  // res.header(
  //   "Access-Control-Allow-Methods",
  //   "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  // );
  res.header('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Content-Type', 'application/json');

  const params = getUrlParams(req.originalUrl);

  if (params) {
    req.query._page = params.pageNo || 1;
    req.query._limit = params.pageSize || 10;
    if (params.sortField) {
      req.query._sort = params.sortField;
      if (params.sortOrder && params.sortOrder === 'ascend') {
        req.query._order = 'asc';
      }
      if (params.sortOrder && params.sortOrder === 'descend') {
        req.query._order = 'desc';
      }
    }

    if (params.componentIds) {
      const group = params.componentIds.split(',')[0];
      const originUrl = req.originalUrl.split('?').shift() + '-group/' + group;
      req.url = originUrl;
      req.originalUrl = originUrl;
    }

    if (params.query) {
      const path = params.query.replace(':relevance:', '').replace(/:/g, '-');
      const originUrl = req.originalUrl.split('?').shift() + '/' + path;
      req.url = originUrl;
      req.originalUrl = originUrl;
    }
  }

  next();
};

require('dotenv').config();

const isArray = require('lodash/isArray');
const floor = require('lodash/floor');
const jsonServer = require('./server/');

const jsonUrlRewrite = require('./routes.json');
const datasets = require('./datasets/db.js');

// middlewares
const post2get = require('./middlewares/post2get');
const header = require('./middlewares/header');
const server = jsonServer.create();
const jsonDefault = jsonServer.defaults();
const jsonRouter = jsonServer.router(datasets(), { _isFake: true });
const port = `${process.env.API_SERVER_PORT || 3033}`;

const jwtToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2l0ZVBvaW50IFJ' +
  'lYWRlciJ9.sS4aPcmnYfm3PQlTtH14az9CGjWkjnsDyG_1ats4yYg';

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

function responseJson({ res, req, name, data, message, delayTime = 1000 }) {
  setTimeout(function () {
    const resName = name || res.locals.__name__ || 'data';
    const resData = data || res.locals.data || {};
    const resMessage = message || 'json-server mock data';

    const pagination = {};
    if (isArray(resData)) {
      const params = getUrlParams(req.originalUrl);
      pagination.pageNo = parseInt(params.pageNo, 10) || 1;
      pagination.pageSize = parseInt(params.pageSize, 10) || 20;
      pagination.totalCount = res.getHeader('X-Total-Count').value() || 0;
      pagination.totalPage = floor(pagination.totalCount / pagination.pageSize);
    }

    res.status(200).json({
      code: 200,
      data: {
        [resName]: resData,
        ...pagination,
      },
      message: resMessage,
    });
  }, delayTime);
}

// server.use((req, res, next) => {
//   if (isAuthorized(req)) {
//       console.log('(JSON-SERVER) Access granted');
//       next();
//   } else {
//       console.log('(JSON-SERVER) Access denied, invalid JWT');
//       res.sendStatus(401);
//   }
// });

server.use(jsonServer.bodyParser);
server.use(post2get);
server.use(header);
server.get('/authorization-server/oauth/token', function (req, res) {
  console.log('Access /authorization-server/oauth/token');
  try {
    const username = req.body.admin;
    const password = req.body.password;

    if (username === 'admin' && password === '1') {
      console.log('username and password passed!');
      setTimeout(function () {
        res.status(200).json({
          code: 200,
          data: {
            token: jwtToken,
          },
          message: 'json-server mock data',
        });
      }, 1000);
    } else {
      setTimeout(function () {
        res.status(422).send('(JSON-SERVER) Invalid username and password');
      }, 1000);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('(JSON-SERVER) Internal error');
  }
});
server.get('/authorization-server/oauth/user', function (req, res) {
  console.log('Access /authorization-server/oauth/user');
  try {
    responseJson({
      req,
      res,
      name: 'user',
      data: {
        username: 'admin',
        email: 'admin@gmail.com',
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('(JSON-SERVER) Internal error');
  }
});
server.get('/authorization-server/oauth/logout', function (req, res) {
  console.log('Access /authorization-server/oauth/logout');
  try {
    responseJson({
      req,
      res,
      name: 'user',
      data: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('(JSON-SERVER) Internal error');
  }
});
server.use(jsonServer.rewriter(jsonUrlRewrite));
server.use(jsonDefault);
server.use(jsonRouter);

jsonRouter.render = (req, res) => {
  responseJson({ req, res });
};

server.listen(port, () => {
  console.log('started mockserver!');
});

// function isAuthorized(req) {
//   let bearer = req.get('Authorization');
//   if (bearer === 'Bearer ' + jwtToken) {
//       return true;
//   }

//   return false;
// }

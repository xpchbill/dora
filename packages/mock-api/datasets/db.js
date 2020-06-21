var modules = require('./modules');

module.exports = function () {
  return {
    ...modules,
    success: {},
    error: {},
  };
};

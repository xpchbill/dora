const users = require('./users');
const activities = require('./activities');

module.exports = {
  ...users,
  ...activities,
};

const users = require('./users/users.service.js');
const watchlists = require('./watchlists/watchlists.service.js');
const ratedmovies = require('./ratedmovies/ratedmovies.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(watchlists);
  app.configure(ratedmovies);
};

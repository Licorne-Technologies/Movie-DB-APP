// Initializes the `watchlists` service on path `/watchlists`
const { Watchlists } = require('./watchlists.class');
const createModel = require('../../models/watchlists.model');
const hooks = require('./watchlists.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/watchlists', new Watchlists(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('watchlists');

  service.hooks(hooks);
};

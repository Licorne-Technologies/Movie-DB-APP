// Initializes the `ratedmovies` service on path `/ratedmovies`
const { Ratedmovies } = require('./ratedmovies.class');
const createModel = require('../../models/ratedmovies.model');
const hooks = require('./ratedmovies.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/ratedmovies', new Ratedmovies(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ratedmovies');

  service.hooks(hooks);
};

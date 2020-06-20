const assert = require('assert');
const app = require('../../src/app');

describe('\'ratedmovies\' service', () => {
  it('registered the service', () => {
    const service = app.service('ratedmovies');

    assert.ok(service, 'Registered the service');
  });
});

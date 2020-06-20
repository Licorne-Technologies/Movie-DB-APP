const assert = require('assert');
const app = require('../../src/app');

describe('\'watchlists\' service', () => {
  it('registered the service', () => {
    const service = app.service('watchlists');

    assert.ok(service, 'Registered the service');
  });
});

'use strict';

var expect = require('chai').expect;

describe('models/index', function() {
  it('returns the User model', function() {
    var models = require('../../../models');
    expect(models.User).to.be.ok;
  });
});

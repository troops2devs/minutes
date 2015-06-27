'use strict';

var expect = require('chai').expect;

describe('models/user', function () {
  beforeEach(function () {
    this.User = require('../../models').User;
  });

  describe('create', function () {
    it('creates a user', function () {
      return this.User.create({ username: 'mr_t' }).then(function (user) {
        expect(user.username).to.equal('mr_t');
      });
    });
  });
});

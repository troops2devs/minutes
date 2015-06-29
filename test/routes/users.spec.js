'use strict';
var app = require('../../app');
var Bluebird = require('bluebird');
var request = require('supertest');
var expect = require('chai').expect;

describe('User Routes', function() {
  beforeEach(function () {
    this.models = require('../../models');

    return Bluebird.all([
      this.models.User.destroy({ truncate: true })
    ]);
  });

  it('GET /users', function(done) {
    request(app)
      .get('/api/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('GET /users/:id', function(done) {
    request(app)
      .get('/api/users/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('POST /users', function(done) {
    request(app)
      .post('/api/users')
      .send({
        name: 'Mr.T',
        username: 'mr_t'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) {
          console.log(err);
          return done(err);
        }
        expect(res.body.name).to.eql('Mr.T');
        expect(res.body.username).to.eql('mr_t');
        done();
      });
  });

  it('PUT /users/1', function(done) {
    request(app)
      .put('/api/users/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('DELETE /users/1', function(done) {
    request(app)
      .delete('/api/users/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

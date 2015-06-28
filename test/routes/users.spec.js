'use strict';
var app = require('../../app');
var expect = require('chai').expect;
var request = require('supertest');

describe('User Routes', function() {

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
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201, done);
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

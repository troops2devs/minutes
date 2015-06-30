'use strict';
var app = require('../../app');
var Bluebird = require('bluebird');
var request = require('supertest');
var expect = require('chai').expect;
var jwt = require('jsonwebtoken');
var secret = require('../../config/config').secret;

describe('User Routes', function() {
  beforeEach(function () {
    this.token = jwt.sign({}, secret, {
      expiresInMinutes: 1440 // expires in 24 hours
    });
    this.models = require('../../models');

    return Bluebird.all([
      this.models.User.destroy({ truncate: true })
    ]);
  });

  it('GET /users', function(done) {
    var self = this;
    this.models.User.bulkCreate([
      { username: 'mr_k', name: 'Mr. K', salt: 'abc', password: '123abc' },
      { username: 'barney', name: 'Barney', salt: 'abc', password: '123abc' },
      { username: 'jim', name: 'Jim', salt: 'abc', password: '123abc' }
    ]).then(function() {
      request(app)
        .get('/api/users')
        .set('Accept', 'application/json')
        .set('x-access-token', self.token)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            console.log(err);
            return done(err);
          }
          expect(res.body.length).to.eql(3);
          done();
        });
    });
  });

  it('GET /users/:id', function(done) {
    var self = this;
    this.models.User.create({username: 'mr_x', name: 'Mr. X', salt: 'abc', password: '123'}).then(function(user) {
      request(app)
        .get('/api/users/'+user.id)
        .set('Accept', 'application/json')
        .set('x-access-token', self.token)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            console.log(err);
            return done(err);
          }
          expect(res.body.name).to.eql('Mr. X');
          expect(res.body.username).to.eql('mr_x');
          done();
        });
      });
  });

  it('POST /users', function(done) {
    var self = this;
    request(app)
      .post('/api/users')
      .send({
        name: 'Mr.T',
        username: 'mr_t',
        password: 'abc123'
      })
      .set('Accept', 'application/json')
      .set('x-access-token', self.token)
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

  it('PUT /users/:id', function(done) {
    var self = this;
    this.models.User.create({username: 'mr_x', name: 'Mr. X', salt: 'abc', password: '123'}).then(function(user) {
      request(app)
        .put('/api/users/'+user.id)
        .send({username: 'gerald', name: 'Gerald'})
        .set('Accept', 'application/json')
        .set('x-access-token', self.token)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            console.log(err);
            return done(err);
          }
          expect(res.body.name).to.eql('Gerald');
          expect(res.body.username).to.eql('gerald');
          done();
        });
    });
  });

  it('DELETE /users/1', function(done) {
    var self = this;
    this.models.User.create({username: 'mr_x', name: 'Mr. X', salt: 'abc', password: '123'}).then(function(user) {
      request(app)
        .delete('/api/users/'+user.id)
        .set('Accept', 'application/json')
        .set('x-access-token', self.token)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            console.log(err);
            return done(err);
          }
          expect(res.body.length).to.eql(0);
          done();
        });
    });
  });
});

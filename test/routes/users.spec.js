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
    this.models.User.bulkCreate([
      { username: 'mr_k', name: 'Mr. K' },
      { username: 'barney', name: 'Barney' },
      { username: 'jim', name: 'Jim' }
    ]).then(function() {
      request(app)
        .get('/api/users')
        .set('Accept', 'application/json')
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
    this.models.User.create({username: 'mr_x', name: 'Mr. X'}).then(function(user) {
      request(app)
        .get('/api/users/'+user.id)
        .set('Accept', 'application/json')
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

  it('PUT /users/:id', function(done) {
    this.models.User.create({username: 'mr_x', name: 'Mr. X'}).then(function(user) {
      request(app)
        .put('/api/users/'+user.id)
        .send({username: 'gerald', name: 'Gerald'})
        .set('Accept', 'application/json')
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
    this.models.User.create({username: 'mr_x', name: 'Mr. X'}).then(function(user) {
      request(app)
        .delete('/api/users/'+user.id)
        .set('Accept', 'application/json')
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

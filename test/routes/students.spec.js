'use strict';
var app = require('../../app');
var Bluebird = require('bluebird');
var request = require('supertest');
var expect = require('chai').expect;

describe('Student Routes', function() {
  beforeEach(function () {
    this.models = require('../../models');

    return Bluebird.all([
      this.models.Student.destroy({ truncate: true, cascade: true })
    ]);

  });

  it('GET /students', function(done) {
    this.models.Student.bulkCreate([
      { name: 'johnny', timeReq: 90 },
      { name: 'rufus', timeReq: 90 },
      { name: 'bobby', timeReq: 90 }
    ]).then(function() {
      request(app)
        .get('/api/students')
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

  it('GET /students/:id', function(done) {
    this.models.Student.create({
      name: 'bobby',
      timeReq: 90
    }).then(function(user) {
      request(app)
        .get('/api/students/'+user.id)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            console.log(err);
            return done(err);
          }
          expect(res.body.name).to.eql('bobby');
          done();
        });
      });
  });

  it('POST /students', function(done) {
    request(app)
      .post('/api/students')
      .send({
        name: 'bobby',
        timeReq: 90
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) {
          console.log(err);
          return done(err);
        }
        expect(res.body.name).to.eql('bobby');
        done();
      });
  });

  it('PUT /students/:id', function(done) {
    this.models.Student.create({
      name: 'bobby',
      timeReq: 90
    }).then(function(user) {
      request(app)
        .put('/api/students/'+user.id)
        .send({name: 'Gerald'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            console.log(err);
            return done(err);
          }
          expect(res.body.name).to.eql('Gerald');
          done();
        });
    });
  });

  it('DELETE /students/1', function(done) {
    this.models.Student.create({
      name: 'bobby',
      timeReq: 90
    }).then(function(user) {
      request(app)
        .delete('/api/students/'+user.id)
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

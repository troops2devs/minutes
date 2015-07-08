'use strict';

var sinon = require('sinon');
var rewire = require('rewire');
var sinon = require('sinon');
var expect = require('chai').expect;
var usersController = rewire('../../../controllers/users.controller');

describe('usersController', function() {
  describe('#getUsers', function() {
    var userServiceMock = {};
    before(function(){
      usersController.__set__({
          'userService': userServiceMock
      });
    });

    it ('should return all users',function() {
      var res = { status: sinon.spy(), json: sinon.spy()};
      var users = [{id: 'user1'}, {id: 'user2'}];
      var nextStub = sinon.stub();

      userServiceMock.getUsers = sinon.stub().callsArgWith(0, users);

      usersController.getUsers({}, res, nextStub);

      expect(res.json.calledWith(users)).to.be.true;
    });
  });

  describe('#getUser', function() {
    var userServiceMock = {};
    before(function(){
      usersController.__set__({
          'userService': userServiceMock
      });
    });

    it ('should return the user specified',function() {
      var res = { status: sinon.spy(), json: sinon.spy()};
      var user = {id: 1, name: 'user1'};
      var nextStub = sinon.stub();

      userServiceMock.getUser = sinon.stub().callsArgWith(1, user);

      usersController.getUser({params: {id: 1}}, res, nextStub);

      expect(res.json.calledWith(user)).to.be.true;
    });
  });

  describe('#saveUser', function() {
    var userServiceMock = {};
    before(function(){
      usersController.__set__({
          'userService': userServiceMock
      });
    });

    it ('should return the user specified',function() {
      var res = { status: sinon.spy(), json: sinon.spy()};
      var user = {id: 1, name: 'user1'};
      var nextStub = sinon.stub();

      userServiceMock.saveUser = sinon.stub().callsArgWith(1, user);

      usersController.saveUser(
        {
          params: {
            body: { name: 'user1'}
          }
        }, res, nextStub);

      expect(res.json.calledWith(user)).to.be.true;
    });
  });

  describe('#updateUser', function() {
    var userServiceMock = {};
    before(function(){
      usersController.__set__({
          'userService': userServiceMock
      });
    });

    it ('should return the user specified',function() {
      var res = { status: sinon.spy(), json: sinon.spy()};
      var user = {id: 1, name: 'user1'};
      var nextStub = sinon.stub();

      userServiceMock.updateUser = sinon.stub().callsArgWith(1, user);

      usersController.updateUser(
        {
          params: {
            body: { name: 'user1Change'}
          }
        }, res, nextStub);

      expect(res.json.calledWith(user)).to.be.true;
    });
  });

  describe('#deleteUser', function() {
    var userServiceMock = {};
    before(function(){
      usersController.__set__({
          'userService': userServiceMock
      });
    });

    it ('should return the user specified',function() {
      var res = { status: sinon.spy(), json: sinon.spy()};
      var user = {id: 1, name: 'user1'};
      var nextStub = sinon.stub();

      userServiceMock.deleteUser = sinon.stub().callsArgWith(1, user);

      usersController.deleteUser({params: {id: 1}}, res, nextStub);

      expect(res.json.calledWith(user)).to.be.true;
    });
  });
});

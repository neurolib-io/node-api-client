/*
 This file is auto-generated, do not edit
*/

'use strict'
var chai = require('chai').assert;
var neurolib = require('./../index.js');
var rqs = neurolib.requests;

var env = require('./set-environment.js');

describe('AddUserProperty', function(){
  this.timeout(150000);

  before(function(done){

    env.setEnvironment()
    .then(()=> {
      done();
     });
  });

  it ('does not fail with valid name and type', (done) => {
    let req, req2, resp;
    req = new rqs.AddUserProperty('number','int');
    env.client.send(req,((err,res) => {
      if(err) {
        chai.fail();
      }
      else {
        req = new rqs.AddUserProperty('str','string');
        env.client.send(req,((err,res) => {
          if(err) {
            chai.fail();
          }
          else {
            done();
          }
        }));
      }
    }));
  });

  it ('fails with invalid type', (done) => {
    let req, req2, resp;
    req = new rqs.AddUserProperty('prop','integer');
    env.client.send(req,((err,res) => {
      if(err) {
        chai.equal(err.name, 'ResponseError');
        chai.equal(err.statusCode, 400);
        done();
      }
      else {
        chai.fail();
      }
    }));
  });

  it ('really stores property to the system', (done) => {
    let req, req2, resp;
    req = new rqs.AddUserProperty('number2','int');
    env.client.send(req,((err,res) => {
      if(err) {
        chai.fail();
      }
      else {
        env.client.send(req,((err,res) => {
          if(err) {
            chai.equal(err.name, 'ResponseError');
            chai.equal(err.statusCode, 409);
            done();
          }
          else {
            chai.fail();
          }
        }));
      }
    }));
  });
});

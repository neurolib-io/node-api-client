/*
 This file is auto-generated, do not edit
*/

'use strict'
var chai = require('chai').assert;
var neurolib = require('./../index.js');
var rqs = neurolib.requests;

var env = require('./set-environment.js');

describe('DeleteGroup', function(){
  this.timeout(150000);

  before(function(done){

    env.setEnvironment()
    .then(()=> {
      setTimeout(done, 20000);
     });
  });

  it ('does not fail with existing entity id', (done) => {
    let req, req2, resp;
    req = new rqs.DeleteGroup('entity_id');
    env.client.send(req,((err,res) => {
      if(err) {
        chai.fail();
      }
      else {
        env.client.send(req,((err,res) => {
          if(err) {
            chai.equal(err.name, 'ResponseError');
            chai.equal(err.statusCode, 404);
            done();
          }
          else {
            chai.fail();
          }
        }));
      }
    }));
  });

  it ('fails with invalid entity id', (done) => {
    let req, req2, resp;
    req = new rqs.DeleteGroup('***not_valid$$$');
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

  it ('fails with non-existing entity', (done) => {
    let req, req2, resp;
    req = new rqs.DeleteGroup('valid_id');
    env.client.send(req,((err,res) => {
      if(err) {
        chai.equal(err.name, 'ResponseError');
        chai.equal(err.statusCode, 404);
        done();
      }
      else {
        chai.fail();
      }
    }));
  });
});

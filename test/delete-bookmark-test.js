/*
 This file is auto-generated, do not edit
*/

'use strict'
var chai = require('chai').assert;
var neurolib = require('./../index.js');
var rqs = neurolib.requests;

var env = require('./set-environment.js');

describe('DeleteBookmark', function(){
  this.timeout(150000);

  before(function(done){

    env.setEnvironment()
    .then(env.setInteractions)
    .then(()=> {
      done();
     });
  });

  it ('does not fail with existing entity id', (done) => {
    let req, req2, resp;
    req = new rqs.DeleteBookmark('user','item',{'timestamp': 0});
    env.client.send(req)
    .then((res) => {
      req = new rqs.DeleteBookmark('user','item');
      env.client.send(req)
      .then((res) => {
        chai.fail();
        done();
      })
      .catch(neurolib.errors.ResponseError,(err) => {
        chai.equal(err.statusCode, 404);
        done();
      });
    });
  });
});

/*
 This file is auto-generated, do not edit
*/

'use strict'
var chai = require('chai').assert;
var neurolib = require('./../index.js');
var rqs = neurolib.requests;

var env = require('./set-environment.js');

describe('GetUserPropertyInfo', function(){
  this.timeout(150000);

  before(function(done){

    env.setEnvironment()
    .then(()=> {
      done();
     });
  });

  it ('does not fail with existing properties', (done) => {
    let req, req2, resp;
    req = new rqs.GetUserPropertyInfo('int_property');
    env.client.send(req)
    .then((res) => {
      chai.deepEqual('int', res['type']);
      req = new rqs.GetUserPropertyInfo('str_property');
      env.client.send(req)
      .then((res) => {
        chai.deepEqual('string', res['type']);
        done();
      });
    });
  });
});

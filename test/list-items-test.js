/*
 This file is auto-generated, do not edit
*/

'use strict'
var chai = require('chai').assert;
var neurolib = require('./../index.js');
var rqs = neurolib.requests;

var env = require('./set-environment.js');

describe('ListItems', function(){
  this.timeout(150000);

  before(function(done){

    env.setEnvironment()
    .then(()=> {
      setTimeout(done, 20000);
     });
  });

  it ('lists entities', (done) => {
    let req, req2, resp;
    req = new rqs.ListItems();
    env.client.send(req)
    .then((res) => {
      chai.deepEqual(['entity_id'], res);
      done();
    });
  });

  it ('return properties', (done) => {
    let req, req2, resp;
    req = new rqs.ListItems();
    env.client.send(req)
    .then((res) => {
      chai.equal(res.length, 1);
      done();
    });
  });
});

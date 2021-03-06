/*
 This file is auto-generated, do not edit
*/

'use strict'
var chai = require('chai').assert;
var neurolib = require('./../index.js');
var rqs = neurolib.requests;

var env = require('./set-environment.js');

describe('SearchItems', function(){
  this.timeout(150000);

  before(function(done){

    env.setEnvironment()
    .then(env.setRecommEntities)
    .then(()=> {
      done();
     });
  });

  it ('finds "hello"', (done) => {
    let req, req2, resp;
    req = new rqs.SearchItems('entity_id','hell',9);
    env.client.send(req)
    .then((res) => {
      chai.equal(res['recomms'].length, 1);
      done();
    });
  });

  it ('does not find random string', (done) => {
    let req, req2, resp;
    req = new rqs.SearchItems('entity_id','sdhskldf',9);
    env.client.send(req)
    .then((res) => {
      chai.equal(res['recomms'].length, 0);
      done();
    });
  });

  it ('returnProperties', (done) => {
    let req, req2, resp;
    req = new rqs.SearchItems('entity_id','hell',9,{'returnProperties': true});
    env.client.send(req)
    .then((res) => {
      chai.equal(res['recomms'].length, 1);
      done();
    });
  });
});

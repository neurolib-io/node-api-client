/*
 This file is auto-generated, do not edit
*/

'use strict'
var chai = require('chai').assert;
var neurolib = require('./../index.js');
var rqs = neurolib.requests;

var env = require('./set-environment.js');

describe('RecommendUsersToUser', function(){
  this.timeout(150000);

  before(function(done){

    env.setEnvironment()
    .then(env.setRecommEntities)
    .then(()=> {
      done();
     });
  });

  it ('recommends', (done) => {
    let req, req2, resp;
    req = new rqs.RecommendUsersToUser('entity_id',9);
    env.client.send(req,((err,res) => {
      if(err) {
        chai.fail();
      }
      else {
        done();
      }
    }));
  });

  it ('recommends to previously nonexisting entity with cascadeCreate', (done) => {
    let req, req2, resp;
    req = new rqs.RecommendUsersToUser('nonexisting',9,{'cascadeCreate': true});
    env.client.send(req,((err,res) => {
      if(err) {
        chai.fail();
      }
      else {
        done();
      }
    }));
  });

  it ('recommends with expert settings', (done) => {
    let req, req2, resp;
    req = new rqs.RecommendUsersToUser('nonexisting2',9,{'cascadeCreate': true,'expertSettings': {}});
    env.client.send(req,((err,res) => {
      if(err) {
        chai.fail();
      }
      else {
        done();
      }
    }));
  });
});

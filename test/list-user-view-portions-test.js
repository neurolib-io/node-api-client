/*
 This file is auto-generated, do not edit
*/

'use strict'
var chai = require('chai').assert;
var neurolib = require('./../index.js');
var rqs = neurolib.requests;

var env = require('./set-environment.js');

describe('ListUserViewPortions', function(){
  this.timeout(150000);

  before(function(done){

    env.setEnvironment()
    .then(env.setInteractions)
    .then(()=> {
      setTimeout(done, 20000);
     });
  });

  it ('lists user interactions', (done) => {
    let req, req2, resp;
    req = new rqs.ListUserViewPortions('user');
    env.client.send(req)
    .then((res) => {
      chai.equal(res.length, 1);
      chai.deepEqual('item', res[0]['itemId']);
      chai.deepEqual('user', res[0]['userId']);
      done();
    });
  });
});

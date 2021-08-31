/*
 This file is auto-generated, do not edit
*/

'use strict'
var chai = require('chai').assert;
var neurolib = require('./../index.js');
var rqs = neurolib.requests;

var env = require('./set-environment.js');

describe('ListSeries', function(){
  this.timeout(150000);

  before(function(done){

    env.setEnvironment()
    .then(()=> {
      setTimeout(done, 20000);
     });
  });

  it ('lists entities', (done) => {
    let req, req2, resp;
    req = new rqs.ListSeries();
    env.client.send(req,((err,res) => {
      if(err) {
        chai.fail();
      }
      else {
        chai.deepEqual(['entity_id'], res);
        done();
      }
    }));
  });
});

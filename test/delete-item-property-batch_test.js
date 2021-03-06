/*
 This file is auto-generated, do not edit
*/

'use strict'
var chai = require('chai').assert;
var neurolib = require('./../index.js');
var rqs = neurolib.requests;

var env = require('./set-environment.js');

describe('DeleteItemProperty', function(){
  this.timeout(150000);

  before(function(done){

    env.setEnvironment()
    .then(()=> {
      done();
     });
  });
  it ('works in batch', (done) => {
    let requests = [
      new rqs.DeleteItemProperty('int_property'),
      new rqs.DeleteItemProperty('int_property'),
      new rqs.DeleteItemProperty('***not_valid$$$'),
      new rqs.DeleteItemProperty('not_existing')
      ];

    env.client.send(new rqs.Batch(requests))
    .then((responses) => {
        chai.equal(responses[0].code, 200);
        chai.equal(responses[1].code, 404);
        chai.equal(responses[2].code, 400);
        chai.equal(responses[3].code, 404);
      done();
    });
  });
});

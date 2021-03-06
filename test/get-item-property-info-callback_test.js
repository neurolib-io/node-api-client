/*
 This file is auto-generated, do not edit
*/

'use strict'
var chai = require('chai').assert;
var neurolib = require('./../index.js');
var rqs = neurolib.requests;

var env = require('./set-environment.js');

describe('GetItemPropertyInfo', function(){
  this.timeout(150000);

  before(function(done){

    env.setEnvironment()
    .then(()=> {
      done();
     });
  });

  it ('does not fail with existing properties', (done) => {
    let req, req2, resp;
    req = new rqs.GetItemPropertyInfo('int_property');
    env.client.send(req,((err,res) => {
      if(err) {
        chai.fail();
      }
      else {
        chai.deepEqual('int', res['type']);
        req = new rqs.GetItemPropertyInfo('str_property');
        env.client.send(req,((err,res) => {
          if(err) {
            chai.fail();
          }
          else {
            chai.deepEqual('string', res['type']);
            done();
          }
        }));
      }
    }));
  });
});

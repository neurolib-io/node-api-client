/*
 This file is auto-generated, do not edit
*/

'use strict'
var chai = require('chai').assert;
var neurolib = require('./../index.js');
var rqs = neurolib.requests;

var env = require('./set-environment.js');

describe('DeleteCartAddition', function(){
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
    req = new rqs.DeleteCartAddition('user','item',{'timestamp': 0});
    env.client.send(req,((err,res) => {
      if(err) {
        chai.fail();
      }
      else {
        req = new rqs.DeleteCartAddition('user','item');
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
});

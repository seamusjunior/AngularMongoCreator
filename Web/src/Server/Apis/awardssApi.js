var _ = require('lodash');
var Awards = require('../models/awardssModel.js');
var mongoose = require('mongoose');
var router = express.Router();



  var create = function (req, res) {

    function save(err) {
      if (err) {
        res.json({
          info: 'error during awards create',
          error: err
        });
      }
      res.json({
        info: 'awards created successfully',
        data: newawards
      });
    };

    var newawards = new Awards(req.body);
    newcontact.UserId = tokenHelper.getUserIdFromToken(req);
    newawards.save(save);
  };





  var readAllForCurrentUser = function (req, res) {
    function get(err, awardss) {
      if (err) {
        res.json({
          info: 'error during find contacts by user',
          error: err
        });
      }
      res.json({
        info: 'awardss For User found successfully',
        data: awardss
      });
    };
    var id = tokenHelper.getUserIdFromToken(req);
    Awards.find({
      UserId: id
    }, get);
  };

  var read = function (req, res) {
    function get(err, awardss) {
      if (err) {
        res.json({
          info: 'error during find awardss',
          error: err
        });
      }
      res.json({
        info: 'awardss found successfully',
        data: awardss
      });
    };
    Awards.find({}, get);
  };



  var update = function (req, res) {

    function find(err, awards) {
      if (err) {
        res.json({
          info: 'error during find awards',
          error: err
        });
      }
      if (awards) {
        _.merge(awards, req.body);
        awards.save(function (err) {
          if (err) {
            res.json({
              info: 'error during update awards',
              error: err
            });
          }
          res.json({
            info: 'awards updated successfully'
          });
        });
      } else {
        res.json({
          info: 'awards not found'
        });
      }
    };

    Awards.findById(req.params.id, find);
  };

  var del = function (req, res) {
    Awards.findByIdAndRemove(req.params.id, function (err) {
      if (err) {
        res.json({
          info: 'error during remove awards'
        });
      }
      res.json({
        info: 'awards removed successfully'
      });
    });
  };

  router.post('/api/awardss', create);
  router.get('/api/awardss', read);
  router.get('/api/readAllForCurrentUser', readAllForCurrentUser);
  router.put('/api/awardss/:id', update);
  router.delete('/api/awardss/:id', del);

module.exports = router;



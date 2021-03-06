     

     var _ = require('lodash');
     var Organisation= require('../models/organisationsModel.js');
     var mongoose = require('mongoose');

     module.exports = function (app) {

       var create = function (req, res) {

         function save(err) {
           if (err) {
             res.json({
               info: 'error during organisation create',
               error: err
             });
           }
           res.json({
             info: 'organisation created successfully',
             data: neworganisation
           });
         };

         var neworganisation = new Organisation(req.body);
         neworganisation.save(save);
       };

       var read = function (req, res) {

         function get(err, organisations) {
           if (err) {
             res.json({
               info: 'error during find organisations',
               error: err
             });
           }
           res.json({
             info: 'organisations found successfully',
             data: organisations
           });
         };

         Organisation.find(get);
       };

       var update = function (req, res) {

         function find(err, organisation) {
           if (err) {
             res.json({
               info: 'error during find organisation',
               error: err
             });
           }
           if (organisation) {
             _.merge(organisation, req.body);
             organisation.save(function (err) {
               if (err) {
                 res.json({
                   info: 'error during update organisation',
                   error: err
                 });
               }
               res.json({
                 info: 'organisation updated successfully'
               });
             });
           } else {
             res.json({
               info: 'organisation not found'
             });
           }
         };

         Organisation.findById(req.params.id, find);
       };

       var del = function (req, res) {
         Organisation.findByIdAndRemove(req.params.id, function (err) {
           if (err) {
             res.json({
               info: 'error during remove organisation'
             });
           }
           res.json({
             info: 'organisation removed successfully'
           });
         });
       };

       app.post('/organisations', create);
       app.get('/organisations', read);
       app.put('/organisations/:id', update);
       app.delete('/organisations/:id', del);

     };

















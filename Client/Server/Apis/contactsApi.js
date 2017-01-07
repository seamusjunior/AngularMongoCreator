     var _ = require('lodash');
     var Contact = require('../models/contactsModel.js');
     var mongoose = require('mongoose');

     module.exports = function (app) {

       var create = function (req, res) {

         var save = function (err) {
           if (err) {
             res.json({
               info: 'error during contact create',
               error: err
             });
           }
           res.json({
             info: 'contact created successfully',
             data: newContact
           });
         };

         var newContact = new Contact(req.body);
         newContact.save(save);
       };

       var read = function (req, res) {

         function get(err, contacts) {
           if (err) {
             res.json({
               info: 'error during find contacts',
               error: err
             });
           }
           res.json({
             info: 'contacts found successfully',
             data: contacts
           });
         };

         Contact.find(get);
       };

       var update = function (req, res) {

         function find(err, contact) {
           if (err) {
             res.json({
               info: 'error during find contact',
               error: err
             });
           }
           if (contact) {
             _.merge(contact, req.body);
             contact.save(function (err) {
               if (err) {
                 res.json({
                   info: 'error during update contact',
                   error: err
                 });
               }
               res.json({
                 info: 'contact updated successfully'
               });
             });
           } else {
             res.json({
               info: 'contact not found'
             });
           }
         };

         Contact.findById(req.params.id, find);
       };

       var del = function (req, res) {
         Contact.findByIdAndRemove(req.params.id, function (err) {
           if (err) {
             res.json({
               info: 'error during remove contact'
             });
           }
           res.json({
             info: 'contact removed successfully'
           });
         });
       };

       app.post('/contacts', create);
       app.get('/contacts', read);
       app.put('/contacts/:id', update);
       app.delete('/contacts/:id', del);

     };
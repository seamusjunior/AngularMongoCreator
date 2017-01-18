







 
 


/*jshint node:true*/
'use strict';

var express = require('express');
var router = express.Router();
var app = express();
var cors = require('cors');
var errorHandler = require('./routes/utils/errorHandler')();
var logger = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 7208;
var routes;

var environment = process.env.NODE_ENV;

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());
app.use(errorHandler.init);

//Mongoose 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contacts');

   

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);


app.use('/api/contacts', require('./Apis/contactsApi'));
app.use('/api/awardss', require('./Apis/awardssApi'));
app.use('/api/hourRecords', require('./Apis/hourRecordsApi'));
app.use('/api/opportunitys', require('./Apis/opportunitysApi'));
app.use('/api/organisations', require('./Apis/organisationsApi'));
app.use('/api/organisationAddresss', require('./Apis/organisationAddresssApi'));
 


app.use(express.static('./'));
app.use(express.static('./.tmp/'));
app.use('/*', express.static('./src/client/index.html'));

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
                '\n__dirname = ' + __dirname +
                '\nprocess.cwd = ' + process.cwd());
});







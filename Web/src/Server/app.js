







 


/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var cors = require('cors');
var errorHandler = require('./routes/utils/errorHandler')();
var logger = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 7208;
var routes;
var jwt = require('express-jwt');

var jwtCheck = jwt({
  secret: 'FWl8tP1lALdQy2tU-pIL5jjjgdE9I8MqiIoRvpNYvAraJl7RKuocBbBfGyUHneVr',
  audience: 'UY5BHrujRwp7y1TZQl1Bif88aeeVRkrU'
});
var environment = process.env.NODE_ENV;

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());

app.use(errorHandler.init);

//Mongoose 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contacts');


var contacts = require('./Apis/contactsApi.js')(app);
var awardss = require('./Apis/awardssApi.js')(app);
var hourRecords = require('./Apis/hourRecordsApi.js')(app);
var opportunitys = require('./Apis/opportunitysApi.js')(app);
var organisations = require('./Apis/organisationsApi.js')(app);
var organisationAddresss = require('./Apis/organisationAddresssApi.js')(app);
   


console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);
 app.use(express.static('./src/client/'));
        app.use(express.static('./'));
        app.use(express.static('./tmp'));
        app.use('/*', express.static('./src/client/index.html'));
app.use('/api', jwtCheck);


app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
                '\n__dirname = ' + __dirname +
                '\nprocess.cwd = ' + process.cwd());
});







var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var organisationsSchema = new Schema({

    Id : Number, Name : String, Active : String, Tel : String, 
CreatedOn: { type: Date, default: Date.now }} 
);
  



module.exports =  mongoose.model('Organisation', organisationsSchema);

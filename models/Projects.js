var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'Users'},
    name: {type:String, required:true, unique:true},
    items:
      [{
          name: {type:String, unique:true, required:true},
          info: {type:String, required:true},
          link: {type:String, required:true}
      }]
  });

module.exports = mongoose.model('Projects', TodoSchema);

/*
  This defines the User Schema/Model
*/

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// Init schema
var UserSchema = new Schema({
  email:    { type: String},
  name:     { type: String },
  displayName:{ type: String },
  profile:  { type: Object },
  barracks: { type: Schema.Types.ObjectId, ref: 'Barracks' },
  fireteam: { type: Schema.Types.ObjectId, ref: 'Fireteam' }
}, { collection : 'User' });

/*
   Statics
*/
UserSchema.statics = {
  // Loads a user record
  load: function (email, callback) {
    console.log("loading a user record");
    this.findOne({email: email}, function(err, user) { 
      callback(err, user); 
    });
  },
  // Saves a user record
  save: function (profile, callback) {
    callback("Error: not implemented", null);
  },
  // Finds a user record
  find: function (email, callback) {
    this.findOne({email: profile.email}), function(err, user) {
      callback(err, user);
    }
  },
  // Finds a user record
  findID: function (id, callback) {
    this.find({_id: id}), function(err, user) {
      if (err || !user) {
        console.log('Ohh no theres no user with an ID of %s', id);
      }
      callback(err, user[0]);
    }
  }
}



// Set the model after we define some methods
mongoose.model('User', UserSchema);

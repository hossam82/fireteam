// This defines our basic server structure
// We load some modules here, and do some routing.
function start(app) {
  // Load our personal modules
  var mongoose  = require('mongoose');

  var mongoUri = 	process.env.MONGOLAB_URI || 
  								process.env.MONGOHQ_URL ||
  								'mongodb://localhost/test';
  
  // Connect our db
  mongoose.connect(mongoUri);
  
  // Bootstrap routes
  require('./config/routes')(app);
  
  app.listen(3000, '127.0.0.1');
    
  console.log('Listening on port 3000');
}
exports.start = start;
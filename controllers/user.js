const mongoose = require('mongoose');
var User = mongoose.model('User')

mongoose.connect('mongodb://localhost/test')

var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function (callback) {
	  // yay!
 	var silence = new Kitten({ name: 'Silence' })
	console.log(silence.name) // 'Silence'
});
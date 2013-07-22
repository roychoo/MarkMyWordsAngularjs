var express = require('express');
var mongoose = require('mongoose');
var mongoUri = 'mongodb://roychoo:a1b2cfgh1@ds037358.mongolab.com:37358/markmynotes';
var app = express();

app.get('/', function(req, res){
 	mongoose.connect(mongoUri);
	mongoose.connection.on("open", function() {
		var data = 'inputType **Markdown** here.

#asd'
		mongoose.connection.db.collection('quests', function(err, collection) {
			collection.insert({'goal1': data,
			           'level': 5,
			           'experience': 14000,
			           'reward': {'title': 'Noble',
				              'gold': 22050}},
		                  function(err,result) {});
		});
	});

   res.send('Hello World');
});

app.listen(3000);
console.log('Listening on port 3000');


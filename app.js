var express = require('express');
var mongoose = require('mongoose');
var mongoUri = 'mongodb://roychoo:a1b2cfgh1@ds037358.mongolab.com:37358/markmynotes';
var app = express();
var tagSchema = mongoose.Schema({
    _id: String,
    path: String,
    personid: String
});
var Tag = mongoose.model('Tag', tagSchema, 'tags');
app.use(express.bodyParser());
app.use("/app", express.static(__dirname + '/app'));
app.get('/test', function(req, res) {
    mongoose.connect(mongoUri);
    mongoose.connection.on("open", function() {
        var data = req.body;
        console.log(req.body);

        Tag.find({
            personid: "1"
        }).sort({
            path: 1
        }).execFind(function(err, results) {
            console.log(results);
            //var tags = JSON.parse(results);
            var output = [];
            console.log(results.length);
            for (var i = 0; i < results.length; i++) {
                console.log(results[i]._id + " IDDDDDDDDDDDDDDDDD");
                var chain = [];
                if (results[i].path !== null) {
                    var chain = results[i].path.split(",");
                }
                var currentNode = output;
                for (var j = 0; j < chain.length; j++) {


                    var wantedNode = chain[j];

                    var lastNode = currentNode;
                    for (var k = 0; k < currentNode.length; k++) {

                        console.log("==============current node=====");
                        console.log(currentNode[k]);
                        if (currentNode[k]._id == wantedNode) {
                            console.log("==============equality node=====");
                            console.log(currentNode[k]);
                            currentNode = currentNode[k].children;
                            break;
                        }
                    }
                    // If we couldn't find an item in this list of children
                    // that has the right name, create one:
                    if (lastNode == currentNode) {

                        var newNode = currentNode[k] = {
                            _id: wantedNode,
                            children: []
                        };
                        currentNode = newNode.children;
                        console.log("==============creatibng node=====");
                        console.log(newNode);
                    }

                }

            }
            console.log("====================================");
            console.log("output: %j", output);
        });
    });

    res.send('Hello World');
});

app.listen(3000);
console.log('Listening on port 3000');

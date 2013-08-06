var express = require('express');
var mongoose = require('mongoose');
var mongoUri = 'mongodb://roychoo:a1b2cfgh1@ds037358.mongolab.com:37358/markmynotes';
var app = express();
var tagSchema = mongoose.Schema({
    _id: String,
    path: String,
    tag: String,
    personid: String
});
var Tag = mongoose.model('Tag', tagSchema, 'tags');
var singleLevelTag = [];
app.use(express.bodyParser());
app.use("/", express.static(__dirname + '/app'));
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
            console.log('====================== results =============');
            console.log(results);
            console.log('================= results end ==================');
            //var tags = JSON.parse(results);
            console.log("====================================");

            function notEmptyString(element, index, array) {
                return (element != "");
            }

            function getPath(tag) {
                if (tag.path !== null) {
                    var paths = tag.path.split(',').filter(notEmptyString);
                    var pathName;
                    for (var i = 0, l = paths.length; i < l; i++) {
                        var v = paths[i];
                        for (var j = 0; j < results.length; j++) {
                            if (paths[i] === results[j]._id) {
                                if (pathName === undefined) {
                                    pathName = results[j].tag;
                                } else {
                                    pathName += ' -> ' + results[j].tag;
                                }
                                break;
                            }
                        }


                    }
                } else {
                    pathName = "";
                }
                item = {
                    tag: tag.tag,
                    path: pathName
                };
                singleLevelTag.push(item);
                return pathName;
            }

            var output = [];
            var input = results;
            console.log(results[0]._id + ' tag');
            for (var i = 0; i < input.length; i++) {
                console.log('tag ' + input[i].path);
                if (input[i].path !== null) {
                    var chain = input[i].path.split(",").filter(notEmptyString);
                    var currentNode = output;
                    for (var j = 0; j < chain.length; j++) {
                        for (var k = 0; k < currentNode.length; k++) {
                            if (chain[j] === currentNode[k]._id && chain.length == j + 1) {
                                var n1 = {
                                    _id: input[i]._id,
                                    tag: input[i].tag,
                                    children: [],
                                    path: getPath(input[i])
                                }
                                currentNode[k].children.push(n1);
                            } else if (chain[j] === currentNode[k]._id) {
                                currentNode = currentNode[k].children;
                                break;
                            }
                        }
                    }
                } else {
                    var nn = {
                        _id: input[i]._id,
                        tag: input[i].tag,
                        children: [],
			path: getPath(input[i])
                    }
                    output.push(nn);
                }
            }
            console.log("output: %j", output);
            console.log("tag: %j", singleLevelTag);
        });
    });

    res.send('Hello World');
});

app.listen(3000);
console.log('Listening on port 3000');

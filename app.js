var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('dist'));
app.use(express.static('app'));
app.use(express.static('node_modules'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.get('/', function(req, res) {
//     res.send("<h1>This is test</h1>");
// });

app.listen(3000);
console.log("Server listening on port 3000");

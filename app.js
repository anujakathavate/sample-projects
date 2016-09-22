var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var nodemailer = require('nodemailer');

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


app.post('/sendmail', function(req, res) {
	//TODO: Need to update admin's Name, User id and password.
	var userName = ""; 
	var userId =  "";
	var password = "";
	var message = req.body;
	var mailFlag = false;
	
	// create reusable transporter object using the default SMTP transport 
	//var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
	var transporter = nodemailer.createTransport('smtps://' + userId + ':' + password + '@smtp.gmail.com');
	 
	// setup e-mail data with unicode symbols 
	var mailOptions = {
	    from: userName + ' <' + userId + '>', // sender address 
	    to: userId, // list of receivers 
	    subject: message.name + " "+ message.emailId, // Subject line 
	    text: message.description,// plaintext body 
	    //html: '<b>Hello world 🐴</b>' // html body 
	};
	 
	// send mail with defined transport object 
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	    	mailFlag = false;
	        return console.log(error);
	    }
	    mailFlag = true;
	});
	
	return mailFlag;
});


app.listen(80);
console.log("Server listening on port 80");

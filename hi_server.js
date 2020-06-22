// CONSTANTS		///////////////////////////////
const express = require('express');
const app = express();
const port = 8080;
const DEBUG = true;


// VARIABLES		///////////////////////////////
var bodyParser = require('body-parser');
var logic = require('./game_logic');


// Init     	    ///////////////////////////////
// backend server
app.set('port', (port));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));

// front-end client
app.use(express.static('html'));


// Body			    ///////////////////////////////
// Handle GET requests
app.get('/template', async (req, res) => {
	var temp = req.query.someparam;
	var reply

	try {
		if (!temp) {
            
		} else {
            
		}

		res.json(reply.rows);
	} catch(e) {
		console.error('ERROR: ' + e);
	}
})

// Handle POST requests
app.post('/template', async (req, res) => {
	var temp = req.body.something;

	if (!temp) {
		console.log(temp);
		res.json({error: 'error'});
	} else {
        
	}
})

app.post('/join', async (req, res) => {
	var table = req.body.table;

	if (!temp) {
		console.log(temp);
		res.json({error: 'error'});
	} else {
        
	}
})

// Handle PUT requests
// Handle DELETE requests


// Begin listening for requests
app.listen(app.get('port'), () => {
	console.log('Port '+port+' running');
})
// CONSTANTS		///////////////////////////////
const express = require('express');
const app = express();
const port = 8080;
const DEBUG = true;


// VARIABLES		///////////////////////////////
var bodyParser = require('body-parser');


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
app.get('/api', async (req, res) => {
	var ws = req.query.Workshop;
	console.log(ws);

	try {
		var reply

		if (!ws) {
            
		} else {
            
		}

		res.json(reply.rows);
	} catch(e) {
		console.error('ERROR: ' + e);
	}
})

app.post('/api', async (req, res) => {
	var att = req.body.attendee;
	var ws = req.body.Workshop;

	if (!att) {
		console.log(att);
		res.json({error: 'Attendee parameter not given'});
	} else if (!ws) {
        
	} else {
        
	}
})

app.listen(app.get('port'), () => {
	console.log('Port '+port+' running');
})
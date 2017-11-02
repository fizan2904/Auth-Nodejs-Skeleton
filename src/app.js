import express from 'express';
import mongoose from 'mongoose';
import models from './Models';
import bodyParser from 'body-parser';
import session from 'express-session';
import compression from 'compression';
import cookieParser from 'cookie-parser';

const app = express();

/*

For docker usage, use mongo as the connector url
For local usage, use your mongodb url in place of mongo

*/

const MONGO_URI = 'mongodb://mongo/intern';
const MongoStore = require('connect-mongo')(session);

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useMongoClient: true });
mongoose.connection
	.on('error', () => {
		console.log('Error esatblishing connection');
	})
	.once('open', () => {
		console.log('Success establishing connection');
	});

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.text({ type : 'text/html' }));
app.use(cookieParser());
app.use(session({
 	resave: true,
 	saveUninitialized: true,
  	secret: 'aaabbbccc',
  	store: new MongoStore({
    	url: MONGO_URI,
    	autoReconnect: true
  	})
}));

import Routes from './Routes';

app.use('/user', Routes.user);

app.get('/test', (req, res) => {
	res.status(200).send({'message': 'Everything\'s OK'});
});

app.listen((process.env.PORT || 3000), () => {
	console.log('Server started at port 3000');
});
const express = require('express');
const app = express();
const port = 8800;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();

try {
	mongoose.connect(process.env.MONGO_URL).then(() => {
		console.log('Connected to Mongo DB');
	});
} catch (error) {
	console.log(error);
}

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.get('/', (req, res) => {
	res.send('Welcome to the homepage');
});

app.get('/users', (req, res) => {
	res.send('Welcome to the homepage');
});

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);

app.listen(port, () => {
	console.log('The Server is Running');
});

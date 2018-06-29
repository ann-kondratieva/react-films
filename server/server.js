/*global process */

import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';

import { DB_URL } from './config/db';
import films from './routes/films';
import auth from './routes/auth';
import user from './routes/user';

const app = express();
const router = express.Router();

const API_PORT = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());

mongoose.connect(DB_URL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.use('/api', router);
app.use('/api/films', films);
app.use('/api/auth', auth);
app.use('/api/user', user);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
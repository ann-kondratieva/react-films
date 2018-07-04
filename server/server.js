/*global process __dirname path*/

import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

import { DB_URL } from './config/db';
import films from './modules/Films/routes/films';
import auth from './modules/Auth/routes/auth';
import user from './modules/Auth/routes/user';

const app = express();
const router = express.Router();

const API_PORT = process.env.PORT || 3001;

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
router.use('/films', films);
router.use('/auth', auth);
router.use('/user', user);

app.use(express.static(path.join(__dirname, '/../client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

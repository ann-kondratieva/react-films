import express from 'express';

import { jwtAuthenticate } from '../../Auth/middlewares/authenticate';
import getFilms from '../controllers/getFilms';

const router = express.Router();

router.get('/', jwtAuthenticate, getFilms);

export default router;
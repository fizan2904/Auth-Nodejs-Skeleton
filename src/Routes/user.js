'use strict';

import express from 'express';
import mongoose from 'mongoose';
import Control from './../Controllers';

const router = express.Router();

router
	.post('/signup', (req, res) => {
		Control.user.register(req, res);
	})

	.post('/signin', (req, res) => {
		Control.user.signin(req, res);
	})

	.get('/signout', (req, res) => {
		Control.user.signout(req, res);
	});

export default router;
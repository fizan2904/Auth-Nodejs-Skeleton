import express from 'express';
import mongoose from 'mongoose';
import shajs from 'sha.js';

import Errors from './errors';

const User = mongoose.model('user');

async function register(req, res){
	try{
		let user = await User.findOne({username:req.body.username}).exec();
		if(user == null){
			let newUser = new User({
				username: req.body.username,
				password: shajs('sha256').update(req.body.password).digest('hex')
			});
			await newUser.save()
			res.status(200).send({'message': newUser});
		}else{
			return Errors('UsernameAlreadyExists', req, res);
		}
	}catch(e){
		return Errors('ServerError', req, res);
	}
}

async function signin(req, res){
	try{
		if(req.session.user == null || req.session.user == undefined){
			let user = await User.findOne({username: req.body.username}).exec();
			if(user != null && user.password == shajs('sha256').update(req.body.password).digest('hex')){
				req.session.user = {
					username: user.username,
					_id: user._id
				}
				res.status(200).cookie('_id', user._id, {expire: 360000 + Date.now()}).send({'message': req.session.user});
			}else{
				return Errors('WrongCredentials', req, res);
			}
		}else{
			return Errors('AlreadySignedin', req, res);
		}
	}catch(e){
		return Errors('ServerError', req, res);
	}
}

async function signout(req, res){
	try{
		if(req.session.user == undefined || req.session.user == null){
			return Errors('SigninToContinue', req, res);
		}else{
			delete req.session.user;
			res.clearCookie('_id');
			res.status(200).send({'message': 'Signout Successful'});
		}
	}catch(e){
		return Errors('ServerError');
	}
}

export default {
	signin,
	signout,
	register
}
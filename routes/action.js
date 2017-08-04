'use strict';

const _ = require('lodash');
const winston = require('winston');
const appRoot = require('app-root-path');
const constants = require(appRoot + '/constants');
//const sign = require('../middlewares/_signin-checker');



module.exports = (app) => {
	let router = require('express').Router();

	router.get(['/','/setting/company'], (req, res, next) => {
		res.render('index', {user: req.user});
	});


	//----
	router.get(['/...', '/...'], (req, res) => {
		res.render('index', {user: req.user});
	});

	return router;
};


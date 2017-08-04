'use strict';

const _ = require('lodash');
//const passport = require('passport');
const winston = require('winston');
const appRoot = require('app-root-path');
const constants = require(appRoot + '/constants');
//const sign = require('../../middlewares/signin-checker');
const jm = require('./utils/json-msg-util');
const settingService = require('./services/setting-service');
const multer = require('multer');

let _delay = (req, res, next) => {
	setTimeout(next, 1000);
}

module.exports = (app) => {
	let router = require('express').Router();

	router.get(['/company','/company/:id'], async (req, res, next) => {
		try{
			//let id = req.body.id;
			//if(!id) return res.json(jm.badRequest());
			//let result = await userService.getProfileBasic(req.user.id);

			let cid = req.params.id;
			let data = cid?{id:cid}:null;
			let result = await settingService.getCompany(data);
			console.log(req);
			return res.json(jm.success(result));
		}
		catch(err){
			next(err);
		}
	});

	// catch 404 and forward to error handler
	router.use((req, res, next) => {
		res.status(404).json(jm.notFound());
	});

	// general error handler ....
	router.use((err, req, res, next) => {
		winston.error('[API ERROR](' + req.originalUrl + ') ' + err);
		res.status(500).json(jm.error(req.app.get('env') === 'dev' ? err : 'Error'));
	});

	return router;
};


'use strict';

const _ = require('lodash');
const winston = require('winston');
const appRoot = require('app-root-path');
const moment = require('moment');
const crypto = require('crypto');
const constants = require(appRoot + '/constants');
const db = require('../../../services/db-service');
const mailSender = require('../utils/mail-sender-util');
const fs = require('fs');

//const models = require('../../../models');


let _sendSignUpMail = (email, name, token) => {
	let text = fs.readFileSync(appRoot + '/views/template/mail-signup.html', 'utf8').toString();
	text = text.replace('{user}', name).replace('{url}', 'http://127.0.0.1:3001/activate/' + token);
	mailSender.send(email, '[NBase2]帳號開通驗證', text);
}

let service = {};
service.getCompany = async (data) => {

	let result = {};
	if(data) {
		let sql = 'select * from test1 where a1=?';
		result = await db.find(sql, [data.id]);
	}
	else {
		let sql = 'select * from test1';
		result = await db.find(sql);
	}

	return result;
}


module.exports = service;

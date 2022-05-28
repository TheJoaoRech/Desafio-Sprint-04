const { Router } = require('express');
const employee = require('./employeeRouter');
const product = require('./ProductRouter');

module.exports = (server) => {
	server.use((req, res, next) => {
		employee(server, new Router());
		product(server, new Router());
		next();
	});
};